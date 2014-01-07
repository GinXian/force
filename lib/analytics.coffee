#
# Simple wrapper around mixpanel to simplify common analytics actions.
# This should also provide a central place to put analytics logic when/if other
# services like Google Analytics are integrated.
#

_          = require 'underscore'
sd         = require('sharify').data
createHash = require('crypto').createHash

_.mixin(require 'underscore.string')

module.exports = (options) =>
  { @mixpanel, @ga, @location } = options
  @location ?= window?.location
  @ga? 'create', sd.GOOGLE_ANALYTICS_ID, 'artsy.net'
  @mixpanel?.init sd.MIXPANEL_ID

module.exports.trackPageview = =>
  @ga? 'send', 'pageview'

# This basically just sets some defaults loosely based on the
# Analytics wrapper class from Gravity
categories =
  impression: 'Impressions'
  hover:      'UI Interactions'
  click:      'UI Interactions'
  funnel:     'Funnel Progressions'
  segment:    'UI A/B Test Segments'
  error:      'UI Errors'
  multi:      'Multi-object Events'
  other:      'Other Events'

module.exports.track =
  _.reduce(Object.keys(categories), (memo, kind) ->
    memo[kind] = (description, options={}) ->

      # Send mixpanel event
      unless typeof mixpanel is 'undefined'
        options.category  = categories[kind] || categories.other

        _.defaults options,
          page: window?.location.pathname
          noninteraction: true

        mixpanel.track? description, options

      # Send google analytics event
      ga? 'send', 'event', options.category, description, options.label
    memo
  , {})

module.exports.modelNameAndIdToLabel = (modelName, id) ->
  throw new Error('Requires modelName and id') unless modelName? and id?
  "#{_.capitalize(modelName)}:#{id}"

module.exports.modelToLabel = (model) ->
  throw new Error('Requires a backbone model') unless typeof model == 'object' and model?.constructor.name? and model?.get?('id')?
  "#{_.capitalize(model.constructor.name)}:#{model.get('id')}"

# Special multi-event
#
# GA imposes a 500 byte limit on event labels
# For multis, each id is hashed to 8 characters + event id, leaving room for 55 ids
# Going with 50 to be conservative and account for the model name
maxTrackableMultiIds = 50

module.exports.encodeMulti = (ids) ->
  ids = _.compact(ids)
  (_.map ids, (id) -> createHash('md5').update(id).digest('hex').substr(0, 8)).join("-")

module.exports.trackMulti = (description, data) =>
  # Send google analytics event
  @ga? 'send', 'event', categories['multi'], description, data

module.exports.multi = (description, modelName, ids) ->
  return unless ids?.length > 0

  # chunk ids by maxTrackableMultiIds
  chunkedIds = _.groupBy(ids, (a, b) => return Math.floor(b / maxTrackableMultiIds))

  for chunk, index in _.toArray(chunkedIds)
    # Fire log events at 1/2 second intervals
    ((encodedIds) =>
      _.delay( =>
        @trackMulti description, @modelNameAndIdToLabel(modelName, encodedIds)
      , (500 * index) + 1)
    )(@encodeMulti(chunk))

module.exports.trackImpression = (modelName, ids) -> @multi('Impression', modelName, ids)

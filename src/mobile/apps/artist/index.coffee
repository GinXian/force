#
# The artist page
#

express = require 'express'
routes = require './routes'
maybeNewArtistPage = require '../../../desktop/apps/artist/maybe_new_artist_page'

app = module.exports = express()
app.set 'views', __dirname + '/templates'
app.set 'view engine', 'jade'
app.get '/artist/:id', maybeNewArtistPage, routes.index
app.get '/artist/:id/biography', routes.biography
app.get '/artist/:id/auction-results', maybeNewArtistPage, routes.auctionResults
app.get '/artist/:id/*', (req, res, next) ->
  res.redirect 301, "/artist/#{req.params.id}"

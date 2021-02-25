import React from "react"
import { mount } from "enzyme"
import { GenesStep } from "./GenesStep"

describe("GenesStep", () => {
  it("renders suggested genes to start", () => {
    const props = { router: {} }
    const wrapper = mount(<GenesStep {...props} />)
    expect(wrapper.find("GeneSearchResultsComponent")).toHaveLength(0)
    expect(wrapper.find("SuggestedGenesComponent")).toHaveLength(1)
  })

  it("renders search results with query", () => {
    const props = { router: {} }
    const wrapper = mount(<GenesStep {...props} />)

    const onInput = wrapper.find("input").prop("onInput")
    const event: any = { target: { value: "photo" } }
    onInput(event)
    wrapper.update()

    expect(wrapper.find("GeneSearchResultsComponent")).toHaveLength(1)
    expect(wrapper.find("SuggestedGenesComponent")).toHaveLength(0)
  })
})

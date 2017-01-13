import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Engagementvids from '../js/engagementvids'

describe("engagementvids", () => {
  let video_sectionComponent = {}

  beforeEach(() =>{
    video_sectionComponent = TestUtils.renderIntoDocument(<Engagementvids />)
  })
  it("Should have a video", () => {
    const video_sectionElement = TestUtils.findRenderedDOMComponentWithClass(
      video_sectionComponent,
      "engagementvids"
    )
    expect(video_sectionElement).toBeDefined()
  })
})

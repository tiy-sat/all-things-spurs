import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Accordion from '../js/accordion'

describe("accordion", () => {
  let textboxComponent = {}

  beforeEach(() =>{
    textboxComponent = TestUtils.renderIntoDocument(<Accordion />)
  })
  it("Should have a text area", () => {
    const textboxElement = TestUtils.findRenderedDOMComponentWithClass(
      textboxComponent,
      "title"
    )
    expect(textboxElement).tobedefined(" San Antonio vs. Charlotte: Spurs to 102-85 victory over Hornets ")
  })
})

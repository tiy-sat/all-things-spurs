import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Accordion from '../js/accordion'

describe("textbox", () => {
  let textboxComponent = {}

  beforeEach(() =>{
    textboxComponent = TestUtils.renderIntoDocument(<Accordion />)
  })
  it("Should have a text area", () => {
    const textboxElement = TestUtils.findRenderedDOMComponentWithClass(
      textboxComponent,
      "textbox"
    )
    expect(textboxElement).toBeDefined()
  })
})

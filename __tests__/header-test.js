import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../js/header'

describe("Header", () => {
  let headerComponent = {}

  beforeEach(()=>{
    headerComponent = TestUtils.renderIntoDocument(<Header />)
  })

  it("Should have the components for header", () => {
    const headerElement = TestUtils.findRenderedDOMComponentWithClass(
      headerComponent,
      "header"
    )

    expect(headerElement).toBeDefined()
  })

  it("Should have the first image in header", () => {
    const spur1Element = TestUtils.findRenderedDOMComponentWithClass(
      headerComponent,
      "spur1"
    )

    expect(spur1Element).toBeDefined()
  })

  it("Should have the logo image in header", () => {
    const logoElement = TestUtils.findRenderedDOMComponentWithClass(
      headerComponent,
      "logo"
    )

    expect(logoElement).toBeDefined()
  })
})

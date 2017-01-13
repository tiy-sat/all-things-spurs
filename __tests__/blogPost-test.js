import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Form from '../js/form'

describe("blogpost", () => {
  let blogPostFormComponent = {}

  beforeEach(() =>{
    blogPostFormComponent = TestUtils.renderIntoDocument(<Form />)
  })
  it("Should have an input area", () => {
    const blogPostFormElement = TestUtils.findRenderedDOMComponentWithClass(
      blogPostFormComponent,
      "blogPostForm"
    )
    expect(blogPostFormElement).toBeDefined()
  })
})

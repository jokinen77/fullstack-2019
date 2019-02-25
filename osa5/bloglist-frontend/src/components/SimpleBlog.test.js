import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, fireEvent } from 'react-testing-library'
import { prettyDOM } from 'dom-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
    const blog = {
        title: 'test1',
        author: 'jee',
        likes: '5'
    }

    const component = render(
        <SimpleBlog blog={blog} />
    ).container

    console.log(prettyDOM(component))
    const head = component.querySelector('.blog-head')
    const likes = component.querySelector('.blog-likes')
    expect(head).toHaveTextContent('test1')
    expect(head).toHaveTextContent('jee')
    expect(likes).toHaveTextContent('5')
})

test('event handler called', () => {
    const blog = {
        title: 'test1',
        author: 'jee',
        likes: '5'
    }

    const mockHandler = jest.fn()

    const component = render(
        <SimpleBlog blog={blog} onClick={mockHandler} />
    ).container

    console.log(prettyDOM(component))
    const button = component.querySelector('.like-button')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import App from './App'

let view
const mockHandler = jest.fn()
const note = {
  content: 'Soy una nota',
  important: true
}

describe('<App />', () => {
  beforeEach(() => {
    view = render(<App note={note} toggle={mockHandler} />)
  })

  test('renders content', () => {
    // view.getByText('Soy una nota')
    // view.getByText('Important')
    expect(view.container).toHaveTextContent(note.content)

    // const h1 = view.container.querySelector('h1')
    // console.log(prettyDOM(h1))
  })

  test('Call an event', () => {
    const button = view.getByText('Enviar')
    fireEvent.click(button)

    // expect(mockHandler.mock.calls).toHaveLength(2)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  test('Styles', () => {
    //Nota: me funciona pero solo cuando tengo estilos en linea
    const h1 = view.getByText('Hola mundo testing')
    expect(h1).toHaveStyle({ color: 'green' })
  })
})

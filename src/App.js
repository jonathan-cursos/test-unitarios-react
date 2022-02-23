import logo from './logo.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App({ note, toggle }) {
  const [value, setValue] = useLocalStorage('key', 'Jona')
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title' style={{ color: 'green' }}>
          Hola mundo testing
        </h1>
        <p>{note.content}</p>
        <p>{note.important ? 'Important' : 'Not important'}</p>
        <button type='button' onClick={toggle}>
          Enviar
        </button>
      </header>
    </div>
  )
}

export default App

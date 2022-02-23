import useLocalStorage from './useLocalStorage'
import { renderHook, act } from '@testing-library/react-hooks'

let useLocalStorageResult

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  }
})
//Mock para localStorage
//Para modificar el valor del objeto global de localStorage
//Es como si estuvieramos haciendo window.localStorage, pero en un mock

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    useLocalStorageResult = renderHook(() => useLocalStorage('test', 'test'))
  })

  test('Render correctly', () => {
    // console.log(useLocalStorageResult.result.current)
    expect(useLocalStorageResult.result.current).toBeDefined()
    expect(useLocalStorageResult.result.current[0]).toEqual('test')
    expect(useLocalStorageResult.result.current[1]).toBeInstanceOf(Function)
  })

  test('Should call localStorage', () => {
    const setValue = useLocalStorageResult.result.current[1]
    act(() => {
      setValue('anotherTest')
    })

    // console.log(localStorage.getItem)
    expect(localStorage.getItem).toHaveBeenCalled() //getItem se llama cuando se monta el componente
    expect(localStorage.setItem).toHaveBeenCalled() //setItem se llama cuando se monta el componente
  })
})

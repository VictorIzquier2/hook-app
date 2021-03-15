import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
  
  test('Debe de retornar valores por defecto', () => {
 
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');

  });

  test('Debe de tener el counter en 100', () => {

    const {result} = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);

  })

  test('Debe de incrementar el counter en 1', () => {

    // Igualar el contador a 100
    const { result } = renderHook(() => useCounter(100));
    
    // Comprobar que increment incrementa el valor a 101
    const { increment } = result.current;
    act(() => { increment() });
    const  { counter } = result.current;
    expect(counter).toBe(101);

  })

  test('Debe de disminuir el counter en 1', () => {

    // Igualar el contador a 100
    const { result } = renderHook(() => useCounter(100));
    
    // Comprobar que decrement decrementa el valor a 101
    const { decrement } = result.current;
    act(() => { decrement() });
    const  { counter } = result.current;
    expect(counter).toBe(99);

  })

  test('Debe de disminuir el counter en 1', () => {

    // Igualar el contador a 100
    const { result } = renderHook(() => useCounter(100));
    
    // Comprobar que reset resetea a 0
    const { reset } = result.current;
    act(() => { reset() });
    const  { counter } = result.current;
    expect(counter).toBe(0);

  })
})
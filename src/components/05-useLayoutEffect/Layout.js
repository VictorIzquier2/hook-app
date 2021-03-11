import React, {useLayoutEffect, useRef} from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
  
  const {counter, increment} = useCounter(1);  
  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
  const {quote} = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {

    console.log(pTag.current.getBoundingClientRect())

  }, [quote])

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr/>
  
      {data &&
      <blockquote className='blockquote text-end'>
        <p 
          className='mb-4'
          ref={pTag}
        >{quote}</p>
      </blockquote>      
      }
  
      <button
        className='btn btn-primary'
        onClick={increment}
      >Siguiente quote</button>
    </div>
  )
}

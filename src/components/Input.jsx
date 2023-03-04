import { useState } from 'react'

export const Input = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
        <input type={show ? 'text' : 'password'} name='password' id='password' />
        <button onClick={() => {setShow(!show)}}>👀</button>
    </div>
  )
}
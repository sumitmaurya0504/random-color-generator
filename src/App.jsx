import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='h-screen w-screen bg-black text-white flex flex-col gap-20 p-15 '>
        <div className=' flex flex-col justify-center gap-5 '>
          <div className='flex justify-center gap-5'>
            <button className='border-amber-50 border-2 p-2 rounded-xl'>Create RGB Color</button>
          <button className='border-amber-50 border-2 p-2 rounded-xl'>Create HEX Color</button>
          </div>
          <button className='border-amber-50 border-2 p-2 rounded-xl self-center'>Generate Random Color</button>
        </div>
        <div>
          <h1 className='text-center text-5xl'>Color Type</h1>
        </div>
        <div>
          <h1 className='text-center text-9xl pb-15'>Color Code</h1>
        </div>
      </div>

  )
}

export default App

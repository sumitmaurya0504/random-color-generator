import { useState } from 'react'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRgbColor() {

  }

  function handleCreateHexColor(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'] 
    let hexColor = '#'

    for(let i = 0; i < 6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  return (
    <div
    style={{ backgroundColor: color }}
     className='h-screen w-screen bg-black text-white flex flex-col gap-20 p-15 '>
      <div className=' flex flex-col justify-center gap-5 '>
        <div className='flex justify-center gap-5'>
          <button className='border-amber-50 border-2 p-2 rounded-xl'
            onClick={() => setTypeOfColor('rgb')}
          >Create RGB Color</button>
          <button className='border-amber-50 border-2 p-2 rounded-xl'
            onClick={() => setTypeOfColor('hex')}
          >Create HEX Color</button>
        </div>
        <button className='border-amber-50 border-2 p-2 rounded-xl self-center'
          onClick={typeOfColor === 'rgb' ? handleCreateRgbColor : handleCreateHexColor}
        >Generate Random Color</button>
      </div>
      <div>
        <h1 className='text-center text-5xl'>Color Type</h1>
      </div>
      <div>
        <h1 className='text-center text-9xl pb-15'>{color}</h1>
      </div>
    </div>

  )
}

export default App

import { useState } from 'react'

function Output(props) {
    const [volume, setvolume] = useState(0)

    return (
        <div className='shell'>
      <div className = "Output">
        {props.type === "sphere" ? 
        <a href='./sphere-ascii.stl' download className='downloadLink'>Click Here to Download</a>
        :
        <a href='./cube-ascii.stl' download className='downloadLink'>Click Here to Download</a>
        }
      </div>
      </div>
    )
  }
  
  export default Output
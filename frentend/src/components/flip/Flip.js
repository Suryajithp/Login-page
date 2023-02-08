import React from 'react'
import './Flip.css'
const
  Flip = () => {
    return (
      // <div className='w-full overflow-hidden'>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src='https://images.unsplash.com/photo-1592921870583-aeafb0639ffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' className='h-60 w-auto rounded-md mx-auto my-auto shadow-lg shadow-gray-700' alt='gthre'></img>
            </div>
            <div className='flip-card-back'>
              <img src='https://images.unsplash.com/photo-1592921870583-aeafb0639ffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' className='mx-auto w-full rounded-lg shadow-md shadow-gray-700' alt='gthre'></img>
              <h3>Airpod $200</h3>
              <h3 className='text-lg font-bold'>Buy Now</h3>
            </div>
          </div>
        </div>
      // </div>

    )
  }

export default Flip

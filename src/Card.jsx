import React, { useState } from 'react'
import './Card.css'

const rateArr = [
  1,2,3,4,5
]

function Card() {

  const [isThankYouPage, setIsThankYouPage] = useState(false)
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if(!isActive){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  //how to store a variable parmamnent in app even if we reload a page it will not change.
  return (
    <div className='page'>
      {!isThankYouPage && <div className='container'>
        <div className='rating'>
          <div className="circle">
            <img src='../images/icon-star.svg' />
          </div>
        </div>
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
        <div className='rating'>
          {
            rateArr.map( (number) => {
              return(
                <div 
style={{
  backgroundColor: isActive ? '#FF8500' : 'gb(53, 49, 49)'
}}
className='circle' 
onClick={handleClick}
>
{number}
</div>
              )
            })
          }
         </div>
        <div>
          <button
            onClick={() => setIsThankYouPage(true)}
          >
            submit
          </button>
          
        </div>
      </div> }

      {isThankYouPage && 
        <div className='thankyouSection'>
          <img src="../images/illustration-thank-you.svg" alt="" />
          <div className='ratingSection'>
            <p>You selected 4 out of 5</p>
          </div>
          <p className='thankyouWords'>Thank you</p>
          <p className='para'>
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to 
            get in touch!
          </p>
        </div>}

    
      
    </div>

    
    
  )
}




export default Card
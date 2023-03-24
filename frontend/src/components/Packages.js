import React from 'react'
const Packages = () => {
  return (
    <>
    <div>
        <h1 className='PackHeading'>Popular Packages</h1>  
        <h3 className='PackHeading'>Here are some popular packages you might  want to consider.</h3>

        <div className="MainCard">
            <div className="card1">
                <img src="" alt="DestinationImage"  />
                <h4>Kathmandu Nepal Package price: 15,000</h4>
                <a href="/Packages">See more</a>
                <button id="Btn1"  className="R">Book Packages</button>

            </div>
            <div className="card2">
                <img src="" alt="DestinationImage" />
                <h4>Pokhara Nepal Package price: 25000</h4>
                <a href="/Packages">See more</a>
                <button id="Btn1"  className="R">Book Packages</button>

            </div>
            <div className="card3">
                <img src="" alt="DestinationImage" />
                <h4>Mt. Everest Base Camp Package Price: 50,000</h4>
                <a href="/Packages">See more</a>
                <button id="Btn1" className="R">Book Packages</button>

            </div>
        </div>

    </div>
    </>
  )
}

export default Packages

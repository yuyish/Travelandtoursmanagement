import React from 'react'
const Packages = () => {
  return (
    <>
        <div className="PackageContent">
        <h1 className='head'>Our</h1>
        <h1 className='PackHeading'>Popular Packages</h1>  
        <h3 className='PackHeading'>Here are some popular packages you might  want to consider.</h3>

        <div className="MainCard">
            <div className="card1">
                <div className='img1'>
                </div>
                <h4>Kathmandu Nepal 
                    <br /> Package price: 15,000</h4>
                <a id="seemore" href="/Packages">See more</a>
                <button id="Btn1"  className="R">Book Packages</button>

            </div>
            <div className="card2">
              <div className='img2'>
              {/* <img src="../public/Images/kathmandu.jpg" alt="DestinationImage"  /> */}
              </div>
        
                <h4>Pokhara Nepal <br /> Package price: 25000</h4>
                <a id="seemore"  href="/Packages">See more</a>
                <button id="Btn1"  className="R">Book Packages</button>

            </div>
            <div className="card3">
              <div className='img3'>

              </div>
              
                <h4>Mt. Everest Base Camp <br />Package  Price: 50,000</h4>
                <a id="seemore" href="/Packages">See more</a>
                <button id="Btn1" className="R">Book Packages</button>

            </div>
        </div>

    </div>
              {/*  */}    </>
  )
}

export default Packages

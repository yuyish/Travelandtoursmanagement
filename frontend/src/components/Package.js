import React from 'react'
import Kathmandu from '../assets/Images/Kathmandu.jpg'
import Pokhara from '../assets/Images/Pokhara.jpg'
import Chitwan from '../assets/Images/Chitwan.png'
const Package = () => {
  return (
   <>
   <div>

   <div className="ImagePackage">
        <div className="package">
        <h1>Our Services</h1>
        <h5>Home/Services/Packages</h5>
        </div>
    </div>

    <div className="packageMainContent">
        <h1 id='topic'>Our Popular Tour Packages</h1>
        <div className="pack">
          <div className='packageCont'>
                <img src={Kathmandu} alt='Loading' className='imag' />
            <div className="Packagedetail">
              <div id='Packname'>
                <h3>Annapurna Base Camp <br/>Trek 14 Days Tours</h3>
                <h3>$950</h3>
              </div>
              <div id="packageinfo">
                <h6>location</h6>
                <h6>14 Days</h6>
                <h6>5 Members</h6>
              </div>
              <div id="para">
                <p>The goal is to provide a seamless and enjoyable travel experience for clients, whether it be for business or leisure purposes.
                </p>
              </div >
              <div id="buttonsPackage">
                <button className='ButtonBn'>Book</button>
                <button className='ButtonBn'>Enquiry</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pack">
          <div className='packageCont'>
                <img src={Pokhara} alt='Loading' className='imag' />
            <div className="Packagedetail">
              <div id='Packname'>
                <h3>Pokhara Holiday Tour</h3>
                <h3>$250</h3>
              </div>
              <div id="packageinfo">
                <h6>location</h6>
                <h6>14 Days</h6>
                <h6>5 Members</h6>
              </div>
              <div id="para">
                <p>The goal is to provide a seamless and enjoyable travel experience for clients, whether it be for business or leisure purposes.
                </p>
              </div >
              <div id="buttonsPackage">
                <button className='ButtonBn'>Book</button>
                <button className='ButtonBn'>Enquiry</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pack">
          <div className='packageCont'>
                <img src={Chitwan} alt='Loading' className='imag' />
            <div className="Packagedetail">
              <div id='Packname'>
                <h3>Chitwan Tour</h3>
                <h3>$150</h3>
              </div>
              <div id="packageinfo">
                <h6>location</h6>
                <h6>10 Days</h6>
                <h6>5 Members</h6>
              </div>
              <div id="para">
                <p>The goal is to provide a seamless and enjoyable travel experience for clients, whether it be for business or leisure purposes.
                </p>
              </div >
              <div id="buttonsPackage">
                <button className='ButtonBn'>Book</button>
                <button className='ButtonBn'>Enquiry</button>
              </div>
            </div>
          </div>
        </div>
    </div>

    
   </div>


   </>
  )
}

export default Package

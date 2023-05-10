import React from 'react'

const Footer = () => {
  return (
    <div ClassName="footer-dark">
        <footer>
            <div ClassName="container">
                <div ClassName="row">
                    <div ClassName="col-sm-6 col-md-3 item">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Popular Tour Packages</a></li>
                            <li><a href="#">Transportation Services </a></li>
                            <li><a href="#">Offline Road Map </a></li>
                        </ul>
                    </div>
                    <div ClassName="col-sm-6 col-md-3 item">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div ClassName="col-md-6 item text">
                        <h4>Bagpact</h4>
                    <p> Welcome to our tours and travels website, where we aim to make your travel dreams a reality! We are a team of passionate travel enthusiasts who love nothing more than exploring new destinations and creating unforgettable experiences for our clients. 
                        At our website, you'll find a wide range of travel packages and tour options to suit every taste and budget. Whether you're looking for a relaxing beach getaway, an adventurous trek through the mountains, or a cultural tour of historic cities, we've got you covered.
                        </p>
                    </div>
                    <div ClassName="col item social"><a href="#"><i ClassName="icon ion-social-facebook"> </i> </a><a href="#"><i ClassName="icon ion-social-twitter"></i></a><a href="#"><i ClassName="icon ion-social-snapchat"></i></a><a href="#"><i ClassName="icon ion-social-instagram"></i></a></div>
                </div>
                <p ClassName="copyright">Bagpact © 2018</p>
            </div>
        </footer>
    </div>

  )
}

export default Footer
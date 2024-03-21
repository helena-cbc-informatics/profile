import React, { useEffect } from 'react';
import M from 'materialize-css';
import logo from '../images/logo/logo_white_and_blue.png'
import Footer from '../components/Footer'


const Contacts = () => {
  useEffect(() => {
  }, []);

  const contacts = (
  <div>
      <div class="container">
        <h2 class="main_blue_color" >Let me hear from you!</h2>
        <p>If you want to share an opinion or contact me for a project, please use the following:</p>

        <div class="row">
            <div class="card-panel z-depth-1">
              <div class="row valign-wrapper">
                <div class="col s5">
                    <img class="responsive-img" src={logo} alt="logo" />
                </div>
                <div class="col s5 main_blue_color">
                    <p>Informatics and Multimedia Engineer - ISEL</p>
                    <p>+351 911 191 211</p>
                    <p>helena.cbc.informatics@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
  </div>
<Footer />
    </div>
  );
  return contacts;

};

export default Contacts;
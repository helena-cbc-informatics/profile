import React, { useEffect } from 'react';
import M from 'materialize-css';
import Footer from '../components/Footer'
import logo from '../images/logo/logo_white_and_blue.png'
import profile from '../images/helena_carona_presentation_colors_half.jpg'
import insta from '../images/icons/instagram.png'
import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png'

const Home = () => {
  useEffect(() => {
  }, []);

  const home = (
    <div>
        <div class="div_25"></div>
        <div class="image-container center">
            <img class="responsive-img" src={logo} alt="logo" />
        </div>
        <div class="div_50"></div>


        <div class="row valign-wrapper">
            <div class="col s6 center">
                <img class="responsive-img" width="80%" src={profile} alt="profile" />
                <div class="div_50"></div>
            </div>
            <div class="col s6">
                <div class="container main_blue_color center">
                    <h2 id="presentation">Dedicated freelancer based in Portugal providing software and web development services for small and medium business.</h2>
                    <p>Check the <a href="#services">services</a> that already exists.</p>
                </div>
            </div>
        </div>


        <div id="services" class="row valign-wrapper">
            <div class="col s4 main_blue_background">
                <div class="container center white_color">
                    <div class="div_70">
                        <h4>Web development</h4>
                    </div>
                </div>
            </div>
            <div class="col s4 main_blue_background">
                <div class="container center white_color">
                    <div class="div_70">
                        <h4>Online Website</h4>
                    </div>
                </div>
            </div>
            <div class="col s4 main_blue_background">
                <div class="container center white_color">
                    <div class="div_70">
                        <h4>Software Development</h4>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col s4">
                <div class="container center main_blue_color">
                    <p>A better way to have a totally personalised Website filling out the all the requirements you and your project needs.
                    <br/>Using codding languages and hosting in a specific server.</p>
                </div>
            </div>
            <div class="col s4">
                <div class="container center main_blue_color">
                   <p>A easier and fastest way of developing a Website that fulfils your needs.<br/>It is used Wix or Wordpress.</p>
                </div>
            </div>
            <div class="col s4">
                <div class="container center main_blue_color">
                    <p>According to the requirements of your project, it is possible to develop a software that guarantees your needs.<br/>Using Java and/or other codding languages.</p>
                </div>
            </div>
        </div>


        <div class="div_50"></div>

        <Footer />
    </div>

  );
  return home;
};

export default Home;
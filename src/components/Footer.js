import React, { useEffect } from 'react';
import M from 'materialize-css';
import insta from '../images/icons/instagram.png'
import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png'


const Footer = () => {
  useEffect(() => {
  }, []);

  const footer = (
    <div class="main_blue_background center white_color">
        <br/>
        <p>Follow for more</p>
        <a class="padding_icons_10" target="_blank" href="https://www.instagram.com/helena.cbc.informatics"><img class="responsive-img" width="40px" src={insta} alt="instagram"></img></a>
        <a class="padding_icons_10" target="_blank" href="https://github.com/hcbcarona"><img class="responsive-img" width="40px" src={github} alt="github"></img></a>
        <a class="padding_icons_10" target="_blank" href="www.linkedin.com/in/helenacarona"><img class="responsive-img" width="40px" src={linkedin} alt="linkedin"></img></a>
        <br/><br/>
    </div>
  );

  return footer;
};

export default Footer;
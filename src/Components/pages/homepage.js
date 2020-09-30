import React from 'react';
import "../../Assets/css/homepage.css"
import mainimage from "../../Assets/Images/Home/main.jpg"
import {ThemeProvider} from 'styled-components';


function Homepage() {
  return (
  	<html>
  	<body>
  	<main style={{zIndex:"10"}} className="homepage-main">
 <div className="col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
 <div style={{textAlign:"center"}}>
 <img src={mainimage} className="homepage-photo center-block"/>
 </div>
 </div>
 <div className="col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
 <div className="homepage-bio" style={{color:"#000000"}}>
Hi. My name is Mayur. I am a 23 years old Mechancial Design Engineer. Currently I am working for Honeywell UOP.
I graduated from Panjab University with Bachelors in Mechancial Engineering. In the past I've been a video editor, a graphic
designer, a theatre actor and an esports journalist. These days I am more interested in everything revolving around tech. I like to
code, read books and play videogames in my free time. I plan to work in tech one day. This website is the first step towards it. Please feel
free to hit me up on any of the platforms
<span className="home-bg-scrn-footer"> given on the right. </span>
<span className="home-small-scrn-header"> given above. </span>
Also, feel free to copy whatever part of the website you want to.
</div>
</div>
</main>



</body>
</html>

  );
}

export default Homepage;

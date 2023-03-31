import React from 'react';
class Home extends React.Component {
render() {
    return(
      <div>
          <header>
          <h2> Photography by Amreen </h2>
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav> 
          </header>    
      
              <center>
                 
                  <h3>We are a team of professional photographers who specialize in capturing the beauty of the world through our lenses.</h3>
                  <a href="#gallery">View Our Work</a></center>
          
              <div class="gallery" id="gallery">
                  <h2>My Work</h2>
                  <br></br>
                  <div class="gallery-container">
                      <img class="a"src="hdd (1).jpg" alt="Example Image" width={400} height={400}></img>
                      <img class="b"src="hdd (2).jpg" alt="Example Image"width={400} height={500}></img><h3>Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio.</h3>
                      <img class="c"src="hdd (3).jpg" alt="Example Image"width={400} height={400}></img><h3>Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio.</h3>
                      <img class="d"src="hdd (4).jpg" alt="Example Image"width={400} height={400}></img><h3>Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio.</h3>
                      <img class="e"src="hdd (5).jpg" alt="Example Image"width={400} height={400}></img>
                      <img class="f"src="hdd (6).jpg" alt="Example Image"width={400} height={400}></img>
                   <footer><form>
                    <form></form>
                   <div class="contact-info">
                   <h3>Contact Us</h3>
                   <p>MUMBAI<br></br>
                      LONAVLA, INDAI<br></br>
                      Phone: (123) 456-7890<br></br>
                      Email: @photodrop.com</p>
                  </div></form>
                  </footer> 
               </div>
              </div>
         </div>
  )
}
}
export default Home;
import React from 'react';
import './landing.css'
import img from "./../img/logo.jpg";

const Landing = () => (
  <div className="container">
    <div>
      <h1 id='h1-landing' align="center">Cinema Indo XXI</h1>
      <div>
      <img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd6Sgp6S1pteKJ5qlUY34qGTbeZw0m5x7nAJp7Bq6gvGNZzAmC&usqp=CAU" alt="img" height="auto" width="650" />
      </div><br/>
      <h3 id='h3-landing'>Selamat Datang ! 
      <p>
        </p>Ini adalah sebuah website untuk para pecinta film. terdapat banyak film terupdate dan terbaru dalam website ini.
        <p>
          </p>
          Selalu ikuti dan pantau website ini untuk menyaksikan film film terbaru dari kami. </h3>
      </div>
    </div>
);

export default Landing;
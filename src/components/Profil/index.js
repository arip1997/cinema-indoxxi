import React from 'react';
import './profile.css';
import img from "./../img/logo.jpg";

import img1 from "./../img/instagram-png-instagram-png-logo-1455.png";
import img2 from "./../img/fb1.png";
import img3 from "./../img/wa.png";
import img4 from "./../img/gmail.png";
import img5 from "./../img/github.png";
import img6 from "./../img/polinema.png";

import { withAuthorization } from '../Session';

const ProfilPage = () => (
<div id='profile-page'>
  <div>
        <h2 align="center">PROFIL</h2>
        <div>
          <img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxiAS0YG6GgG1xuaJcjD2lqtji8Baw6SJTGjH1Way5t3pNypX1&usqp=CAU" alt="img" height="120" width="150" />
        </div><br/>
            <div className="row">
              </div>
              <div className="col-md-8 kertas-biodata">
                <div className="biodata" align="center">
                    <div className="card">
                          <tr>
                            <th scope="row"></th>
                            <th>Nama </th>
                            <td>: </td>
                            <td> Arif Rahmat Santoso</td>
                          </tr>
                          
                          <tr>
                            <th scope="row"></th>
                            <th>Alamat </th>
                            <td>: </td>
                            <td> Surabaya, Jawa Timur</td>
                          </tr>
                                       <br></br>


                          <table border="0" cellpadding="4">
        <tr>
            <td><a href="https://instagram.com/_arip123"><img id="img" src={img1} alt="img" width="30" height="30px"/></a></td>
            <td><a href="https://facebook.com/boinder"><img id="img" src={img2} alt="img" width="30" height="30px"/></a></td>
            <td><a href="https://wa.me/6285831927680?text=Assalamualaikum%20Arif"><img id="img" src={img3} alt="img" width="30" height="30px"/></a></td>
            <td><a href="https://github.com/arip1997"><img id="img" src={img5} alt="img" width="30" height="30px"/></a></td>
            <td><a href="https://mail.google.com/ariefr.santoso@gmail.com"><img id="img" src={img4} alt="img" width="30" height="30px"/></a></td>
            
        </tr>
        
    </table>
                    </div>
                </div>
              </div>
            </div>       
        <footer id='footer'>
        <address>  
          Link Github 
        </address>
        </footer> 
      </div>

      
  );

  const condition = authUser => !!authUser;

  export default withAuthorization(condition)(ProfilPage);
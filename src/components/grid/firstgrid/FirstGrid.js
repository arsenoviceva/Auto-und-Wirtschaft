import React from "react";
import { Outlet, Link } from "react-router-dom";

import './firstgrid.scss'
 

const FirstGrid = () => {
    return (
        
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <img src="https://advertising.symple.ch/www/images/84529c2e9eb33d357352ca9fdae9737e.gif"  alt="" title="" border="0" width="100%"  />
                
                    <div className="row"> 

                        <div class="col-8">
                            <div className="card">
                                <img src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"/>
                                <div class="card-body">  
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt bei uns</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div className="card">
                                <img className="card-img" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"/>
                                <div class="card-body">   
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt bei uns</p>
                                </div>
                            </div>
                        </div>
                    </div>

  
                    <div className="row">
            
                        <div class='col-4'>
                            <div class="card" >
                                <img className="card-img" src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"/>
                                <div class="card-body">
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-4'>
                            <div class="card" >
                                <img className="card-img" src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"/>
                                <div class="card-body">
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-4'>
                            <div class="card" >
                                <img className="card-img" src="https://autoundwirtschaft.at/VideoImages-370x246/43-auto-bild-driving-day-2019.png"/>
                                <div class="card-body">
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row"> 

                        <div class="col-6">
                            <div class="card" >
                                <img className="card-img" src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"/>
                                <div class="card-body">
                                    <div className="titleopasity">
                                        <span class="card-title1 ">NEWS</span>
                                        <span class="card-title2 ">SHORT TITLE</span>
                                    </div>
                                    <p class="card-text">Neu Porsche Macan EV Prototype Drive</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card" >
                                <img className="card-img" src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"/>
                                <div class="card-body">
                                    <div className="titleopasity">
                                    <span class="card-title1 ">NEWS</span>
                                    <span class="card-title2 ">SHORT TITLE</span>
                                </div>
                                <p class="card-text">Neu Porsche Macan EV Prototype Drive</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="colImg"src="https://advertising.symple.ch/www/images/84529c2e9eb33d357352ca9fdae9737e.gif"  alt="" title="" border="0" width="100%"  />
                     <br/><br/><br/>
                 </div>
                <div class="col-3">
                    <h4 className="h4title" > Current issue</h4>
                    <hr/>
                    <img className="colImg" src="https://advertising.symple.ch/www/images/a964cfcd3dacd8eb2ab31723f9b5f8a9.jpg" />
                    <h4 className="colTitle"> AUTO & Wirtschaft</h4>
                    <h4 className="colTitleRed"> 09/2023 </h4>
                    <img className="colImg2" src="https://autoundwirtschaft.at/MagazineImages-141x200/250-auto-wirtschaft-09-2023.png" />
                    <h4 className="colTitle2"> Most read</h4>
                    <hr/>
                    <ol> 
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.    </li>   
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
                    </ol>
                </div>
                <div className="ending">
                    <h3> A&W Wisseen </h3>
                    <Link to="/categoryList " style={{textDecoration: 'none', color: '#b51722', fontWeight: '500'}}> VIEW MORE {'>>'} </Link>    
                </div>
                <hr/> 
                
                
            </div>

        </div>
    
    )
}

export default FirstGrid;
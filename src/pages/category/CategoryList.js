import './categorylist.scss'
import FirstGrid from '../../components/grid/firstgrid/FirstGrid';
import ThirdGrid from '../../components/grid/thirdgrid/ThirdGrid';
 
const CategoryList = () => {
    return (
        <div className='container'> 
            <nav class="breadcrumb">
                <a href="/" style={{opacity: '50%', color: 'black', textDecoration:'none'}}>Home</a>
                <span class="separator">{'>>'}</span>
                <a href="/news" style={{opacity: '50%', color: 'black', textDecoration:'none'}}>News</a>
                <span class="separator">{'>>'}</span>
                <a href="/categoryList" style={{  color: '#b51722', textDecoration:'none'}}>Category name</a>
            </nav>
 
            <div class="row">
                <div class="col-sm-9">               
               <h1 style={{fontWeight: '700'}}> Category name</h1>

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

                
                     <br/><br/><br/>
                 </div>
                <div class="col-3">
                    <h4 className="h4title" > Current issue</h4>
                    <hr/>
                    <img className="colImg2" src="https://ch.awverlag.com/MedienweltImages-270x379/21_medienwelt-auto-wirtschaft-irega.jpg" />
                    <h4 className="colTitle"> AUTO & Wirtschaft</h4>
                    <h4 className="colTitleRed"> 09/2023 </h4>
                    <img className="colImg" src="https://advertising.symple.ch/www/images/a964cfcd3dacd8eb2ab31723f9b5f8a9.jpg" />
                    <h4 className="colTitle2"> Most read</h4>
                    <hr/>
                    <ol> 
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.    </li>   
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>

                    </ol>
                </div>

            </div>

 
    
 
               
              <ThirdGrid/>
          



        </div>
      
        
        )
}

export default CategoryList;
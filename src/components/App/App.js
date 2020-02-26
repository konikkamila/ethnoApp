import React from 'react';
import './App.scss';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import Header from '../Header';
import MapSection from '../../MapSection';


function App() {
  let map = am4core.create("chartdiv", am4maps.MapChart);
  //  map.geodata = am4geodata_worldLow;
  //  map.projection = new am4maps.projections.Miller();

  return (
       <>
    <Header/>
          <body>
             <div className="container">
                 <MapSection/>
                 
                

            <div className="menu">
              menu boczne
            </div>
          </div>

        </body>

          </>

  )}
    
    export default App;

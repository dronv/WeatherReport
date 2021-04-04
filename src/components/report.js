import React from 'react';
export default function Report(props){
const {feellike,
    img_icon,
    location,
    country,
    region,
    sky,
    temperature,
    isday,
    cloudcoverage,
    humidity,
    uvindex,
    winddirection} = props.displayData;
    
    return (    
    <div className= {`${isday}`} >
        <div className="weatherInfo">
            <div className="col">
                <div className="temp col-md-3">
                    <h1>{temperature}<sup>o</sup>C , {sky}  <img className="icon" src={img_icon} alt="weather-img" /></h1> 
                   
                   <div className="location">
                    <h4>{location},{region}</h4>
                    <h2 className="country">{country}</h2>
                   </div>
                
                </div>
            </div>
                <div className="flex-row-container"> 
                    <div className="feelslike">
                    <h3>Feels Like:</h3><h2>{feellike}<sup>o</sup></h2>
                    </div>
                    <div className="humidity">
                    <h3>Humidity:</h3><h1>{humidity}</h1>
                    </div>
                    <div className="cloudcoverage">
                    <h3>Cloud Coverage:</h3><h1>{cloudcoverage}</h1>
                    </div>
                    <div className="uvindex">
                    <h3>UV-Index:</h3><h1>{uvindex}</h1>
                    </div>
                    <div className="winddirection">
                    <h3>Wind Direction:</h3><h1>{winddirection}</h1>
                    </div>
                </div>
                
            
        </div>
    </div>
    )
}
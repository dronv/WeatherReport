import React from 'react';
import Axios from 'axios';
import './App.css';
import Report from './components/report.js';

class App extends React.Component{
  state = {
    coords: {
      latitude: 35,
      longitude: 139
    },
   weather: {}
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
    let newCoords={
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    }
    this.setState({coords:newCoords});
    Axios.get(`http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
console.log(res);
    let weatherData={
      location: res.data.location.name,
      region:res.data.location.region,
      country:res.data.location.country,
      temperature: res.data.current.temperature,
      feellike: res.data.current.feelslike,
      sky:res.data.current.weather_descriptions[0],
      img_icon: res.data.current.weather_icons,
      isday: res.data.current.is_day,
      cloudcoverage:res.data.current.cloudcover,
      humidity:res.data.current.humidity,
      uvindex:res.data.current.uv_index,
      winddirection:res.data.current.wind_dir
    }
    this.setState({weather : weatherData});
   }) 
  }
  )
  
    }
  else{
    console.log("Not Supported");
  }
}

  render(){

return (
  <div>
    <Report displayData={this.state.weather}/>
  </div>
)}
}

export default App;

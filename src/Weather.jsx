import summerIcon from "./assets/summer.jpeg"
import winterIcon from "./assets/snow.jpeg"
import rainIcon from "./assets/rain.jpeg"
import humidityIcon from "./assets/humidity.png"
import airIcon from "./assets/air.jpeg"
import "./Weather.css"
import {useState,useEffect} from "react"
import Search from "./Search"

const Weather =()=>{
    const mapIcon={
        "01d":summerIcon,
        "02d":summerIcon,
        "03d":summerIcon,
        "04d":rainIcon,
        "09d":rainIcon,
        "10d":rainIcon,
        "11d":rainIcon,
        "13d":winterIcon,
        "01n":summerIcon,
        "02n":summerIcon,
        "03n":summerIcon,
        "04n":rainIcon,
        "09n":rainIcon,
        "10n":rainIcon,
        "11n":rainIcon,
        "13n":winterIcon,
    }
const [text,setText]=useState("Chennai");
const [icon,setIcon]=useState(summerIcon);
const [temp,setTemp]=useState(37);
const [city,setCity]=useState("");
const [country,setCountry]=useState("");
const [lat,setLat]=useState(0);
const [long,setLong]=useState(0);
const [humidity,setHumidity]=useState(0);
const [air,setAir]=useState(0);
const [notFound,setNotFound]=useState(false);
const [loading,setLoading]=useState(false);
    function handleValue(obj){
        
    }
    const handleClick=(val)=>{
        generateWeather(val);
    }
    async function generateWeather(val){
        
        console.log("text"+text);
        const apikey="80bfdb58eb3ba38bbad5517925f43fd2";
        const link=`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}&units=Metric`;
        try{
            setLoading(true);
            let res=await fetch(link);
            let data=await res.json();
            let obj=data;
            console.log(data);
            if(data.cod==="404"){
                console.log("city not found");
                setNotFound(true);
                setLoading(false);
                return ;
            }
            //handleValue(data);
            setTemp(obj.main["temp"]);
        setCity(obj.name);
        setCountry(obj.sys["country"]);
        setLat(obj.coord["lat"]);
        setLong(obj.coord["lon"]);
        setHumidity(obj.main["humidity"]);
        setAir(obj.wind["speed"]);
        setIcon(mapIcon[obj.weather[0].icon]);
        setNotFound(false);
            setLoading(false);
        }catch(err){
            console.log(err);
        }
        
    }
    
useEffect(()=>{
   generateWeather("chennai")
   },[]);
    return (
        <>
        <Search props={handleClick}/>
        {!loading&&!notFound&&<div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="weather-image">
            <img src={icon} alt="" />
        </div>
        <div className="temp"><h4 className="f-3">{temp} C</h4></div>
        <div className="city-info w-100 ">
            <h3>{city}</h3>
            <h5 className="textcol">{country}</h5>
            <div className="co-ord d-flex ">
                <div className="lat">
                    <span className="f-2">Latitude</span>
                    <p>{lat}</p>
                </div>
                <div className="long">
                    <span className="f-2 ">Longitude</span>
                    <p>{long}</p>
                </div>
            </div>
        </div>
        <div className="more-weather">
            <div className="humidity mw">
                <span>
                    <img src={humidityIcon} alt="" />
                </span>
                <p className="f-2">{humidity}%</p>
            </div>
            <div className="humidity mw">
                <span>
                    <img src={airIcon} alt="" />
                </span>
                <p className="f-2">{air}km/h</p>
            </div>
        </div>
        </div>}
        {loading&&<div className="not-found">Loading...</div>}
        {!loading&&notFound&&<div className="not-found">City Not Found</div>}
        
        <div className="copyright ">
            <p>Designed by <a href="https://www.linkedin.com/in/madhavan-p-b75b752b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Madhavan</a></p>
        </div>
        </>
    );
}
export default Weather

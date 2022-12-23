import React, {useState} from 'react'
import Form from './Form'
import Card from './Card'
import Loader from './Loader'

const WhaterPanel = ()=> {
  
    // acceder a la api de clima
    let urlWheater = "https://api.openweathermap.org/data/2.5/weather?appid=a087b49470506394f6a1f6bc4d82431a&lang=es"
    
    // se coloca para acceder a la ciudad desde el cliente
    let cityUrl = "&q="
    // acceder a la api de pronostico en los proximos dias
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=a087b49470506394f6a1f6bc4d82431a&lang=es"

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    // spiner - mientras se visualiza el contenido
    const [loading, setLoading] = useState(false)
    //visualizar la informacion 
    const [show, setShow] = useState(false)
    //Variable de estado que se pueda comunicar para recibir el formulario
    const [location, setLocation] = useState("")

    // funcion para llamar a la api, (recogera la locaciones) async -await

    const getLocation  = async(loc)=>{
        // cuando hacemos la llamada se visualiza el spiner = true
        setLoading(true)
        // modificar con la ciudad = true
        setLocation(loc)

        //llamada a la API Weather - completar la url con la ciudad

        urlWheater = urlWheater + cityUrl + loc 

        // se hace la peticion a la api
        await fetch(urlWheater).then((response) =>{
            // si la respuesta es okay devuelve un json, sino un error del response
                if(!response.ok) throw{response}
                return response.json()
            }).then((weatherData) =>{ //procesar la informacion con weaterdata
                console.log(weatherData); 
                setWeather(weatherData) //alojamos el resultado en el array setWeather
            }).catch(error =>{ //en caso de error
                console.log(error); 
                setLoading(false) //no mostrar el spin de loading
                setShow(false) //no mostrar la informacion
            })
                
            
                
        //llamada a la API Weather - completar la url con la ciudad
            forecastUrl = forecastUrl + cityUrl + loc

            // se hace la peticion a la api
            await fetch(forecastUrl).then((response) =>{
            // si la respuesta es okay devuelve un json, sino un error del response
                if(!response.ok) throw{response}
                return response.json()
            }).then((forecastData) =>{ //procesar la informacion con weaterdata
                console.log(forecastData); 
                setForecast(forecastData) //alojamos el resultado en el array setWeather
                setLoading(false) // no visualizar la informacion
                setShow(true) // visualizar la informacion
            }).catch(error =>{ //en caso de error
                console.log(error)
                setLoading(false) //no mostrar el spin de loading
                setShow(false) //no mostrar la informacion
            })
                
            }
            return (
                <React.Fragment>
                    <Form newLocation = {getLocation}/>
                    <Card 
                        loadingData = {loading} 
                        showData = {show}
                        weather = {weather}
                        forecast = {forecast}
                    /> 
                    {/* //pasarle props */}
                </React.Fragment>
            )
        } 

    

export default WhaterPanel;


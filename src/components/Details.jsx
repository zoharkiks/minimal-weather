import React from 'react'
import dateToDay from '../utils/DateToDay'

import DateToDay from '../utils/DateToDay'

const Details = ({cloud,wind,humidity,feelsLike,forecast}) => {
    // console.log(forecast[0]?.date.toLocaleString('en-us', {weekday: 'long'}));
   

    return (
        <div className='px-4 py-16 font-poppins  bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30'>
            <h1 className='text-xl text-white mb-10'>Weather Details</h1>
            <div className="grid grid-cols-4 text-lg text-white ">
                <div className="flex flex-col col-span-2 text-opacity-75 space-y-[1.5rem]">
                    <span>Feels Like</span>
                    <span>Cloudy</span>
                    <span>Humidity</span>
                    <span>Wind</span>
                </div>

                <div className="flex flex-col col-span-2 space-y-[1.5rem]">
                    <span>{feelsLike}°C</span>
                    <span>{cloud}%</span>
                    <span>{humidity}%</span>
                    <span>{wind} km/h</span>
                </div>

         
            </div>

            <h1 className='text-xl text-white my-10'>3 Days Forecast</h1>
            <div className="flex text-white justify-evenly items-center">
            {forecast?.map((forecast,key)=>{
               return( 
                   <div key={key} className="flex flex-col justify-center items-center space-y-4">
                <span>{dateToDay(forecast?.date)}</span>
                <img src={`${forecast?.day?.condition?.icon}`} alt="" />
                <span>{forecast?.day?.avgtemp_c}°C</span>
                </div>
               )
            }
            
            )}

            </div>

        </div>
    )
}

export default Details

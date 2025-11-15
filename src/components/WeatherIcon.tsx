import React from 'react'

type Props = {
    src: string
    childrenClassName?: string
}

export default function WeatherIcon({src, childrenClassName}: Props) {
  return (
    <img
        className={childrenClassName} 
        src={`https://openweathermap.org/img/wn/${src}@2x.png`}
		alt="Weather Icon"
    />
  )
}
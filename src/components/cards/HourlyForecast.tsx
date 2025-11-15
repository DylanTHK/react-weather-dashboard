import React from 'react'
import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';
import WeatherIcon from '../WeatherIcon';

type Props = {}

// Horizontally scrollable
export default function HourlyForecast({}: Props) {
    // calling api for open weather data
    const { data } = useSuspenseQuery({
		queryKey: ['weather'],
		queryFn: () => getWeather({ lat: 10, lon: 20 })
	});

    return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex gap-6">
        {data.hourly.map(hour => (
            <div className="flex flex-col gap-2">
                <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
                <WeatherIcon src={hour.weather[0].icon} childrenClassName="size-8" />
                <p>{Math.round(hour.temp)}°C</p>
            </div>
        ))}
    </Card>
  )
}
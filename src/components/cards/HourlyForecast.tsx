import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';
import WeatherIcon from '../WeatherIcon';
import type { Coords } from '../../types';

type Props = {
    coords: Coords
}

// Horizontally scrollable
export default function HourlyForecast({coords}: Props) {
    // calling api for open weather data
    const { data } = useSuspenseQuery({
		queryKey: ['weather', coords],
		queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
	});

    return (
    <Card 
        title="Hourly Forecast (48 Hours)" 
        childrenClassName="flex gap-6 overflow-x-scroll"
    >
        {data.hourly.map(hour => (
            <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
                <p className="whitespace-nowrap">
                    {new Date(hour.dt * 1000).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                        }
                )}</p>
                
                <p>{Math.round(hour.temp)}°C</p>
            </div>
        ))}
    </Card>
  )
}
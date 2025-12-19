import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './Card'
import { getWeather } from '../../api';
import WeatherIcon from '../WeatherIcon';
import type { Coords } from '../../types';

type Props = {
	coords: Coords
}

export default function DailyForecast({coords}: Props) {
	// calling api for open weather data
	const { data } = useSuspenseQuery({
		queryKey: ['weather', coords],
		queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
	});

	return (
		<Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
				{data?.daily.map(day => (
					<div key={day.dt} className="flex justify-between">
							{/* Short Dates */}
							<p className="w-9">
								{new Date(day.dt * 1000).toLocaleDateString(undefined,{
									weekday: "short"
								})}
							</p>
							{/* Icon for weather */}
							<WeatherIcon src={day.weather[0].icon} childrenClassName="size-8" />
							{/* average, min and max temperatures */}
							<p>{Math.round(day.temp.day)}°C</p>
							<p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
							<p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
					</div>
				))}
		</Card>
  )
}
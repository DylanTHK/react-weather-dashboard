import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";


function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 10, lon: 20 })
  });

  if (isLoading) return <Card title="">Loading...</Card>;
  if (error) return <Card title="">Error loading weather</Card>;
  if (!data) return <Card title="">No data available</Card>;

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App

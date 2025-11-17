import clsx from "clsx"

type Props = {
    src: string
    className?: string
}

export default function WeatherIcon({src, className}: Props) {
  return (
    <img
        className={clsx("size-8", className)} // default size 8 or custom other tags
        src={`https://openweathermap.org/img/wn/${src}@2x.png`}
		alt="Weather Icon"
    />
  )
}
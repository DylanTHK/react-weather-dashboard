import clsx from "clsx"

type Props = {
    src: string
    childrenClassName?: string
}

export default function WeatherIcon({src, childrenClassName}: Props) {
  return (
    <img
        className={clsx("size-8", childrenClassName)} // default size 8 or custom other tags
        src={`https://openweathermap.org/img/wn/${src}@2x.png`}
		alt="Weather Icon"
    />
  )
}
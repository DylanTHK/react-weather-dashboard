import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"


type Props = {}

export default function LocationDropdown({}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          {locations.map(city => (
            <SelectItem key={city} value={city}>
                {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const locations = [
  "Singapore",
  "Tokyo",
  "Seoul",
  "Beijing",
  "Mumbai",
  "London",
  "Paris",
  "Berlin",
  "Rome",
  "Madrid",
  "New York",
  "Los Angeles",
  "Toronto",
  "Mexico City",
  "São Paulo",
  "Buenos Aires",
  "Sydney",
  "Melbourne",
  "Cairo",
  "Dubai"
]
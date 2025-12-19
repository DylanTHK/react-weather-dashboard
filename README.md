# Weather Dashboard

## Project Structure
src/assets (all images and files required)
src/components (React components)
src/schemas (contains all zod schemas used in components)

## Flow
index.html > main.tsx > App.tsx > CurrentWeather.tsx, HourlyForecast.tsx, DailyForecast.tsx, AdditionalInfo.tsx
*.tsx (TypeScript JSX(JavaScript XML) File)

## Local Setup
npm install
add .env.local file with VITE_API_KEY="<open_weather_api_key>"

# Tools & Resources

| Tool | Purpose | Link |
|------|---------|------|
| **Tailwind CSS** | Styling & UI framework | https://tailwindcss.com/docs/installation/using-vite |
| **TanStack Query** | Data fetching & caching | https://tanstack.com/query/latest |
| **OpenWeather API** | Weather data source | https://openweathermap.org/ |
| **Zod** | Schema validation | https://zod.dev/basics |
| **React Leaflet** | Interactive maps | https://react-leaflet.js.org/ |
| **shadcn/ui** | React component library | https://ui.shadcn.com/ |
| **SVG Repo** | SVG assets & icons | https://svgrepo.com/ |
| **Vite SVG Plugin** | Import SVGs as components | https://www.npmjs.com/package/vite-plugin-svgr |

**Notes:**
- OpenWeather: First 1000 API calls free per day
- React Shortcut: `tsrfc` generates React component boilerplate


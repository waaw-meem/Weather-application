# WeatherApp

WeatherApp is a simple single-page application built with Angular that allows users to search for current weather and short-term forecasts for cities around the world. The UI consists of a search component where a user types a location, and a card component that displays temperature, conditions, and other details retrieved from a third‑party API.

## Features

- Search for a city's weather by name
- Display 5‑day / 3‑hour forecast information
- Responsive layout with header and footer components
- Modular architecture using Angular feature modules and shared services

## Architecture Overview

The project follows a standard Angular CLI structure:

```
src/app
├── core/services        # application-wide services (e.g. WeatherApiService)
├── features/weather     # weather-related components and module
│   ├── components      # search and card components
│   └── home            # landing page for weather search
├── layout              # header/footer components
└── shared              # shared module for common imports/exports
```

### Weather API Service

All API calls are made through `WeatherApiService` located in `core/services`. It wraps the HTTP requests and exposes an `searchWeather` method that returns an `Observable`.

```ts
private API_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
private API_KEY = '<your_api_key_here>';
```

> **Note:** This application uses the **OpenWeatherMap** service. You can obtain a free API key by signing up at [https://openweathermap.org/api](https://openweathermap.org/api). The current key in the code is for demo purposes and should be replaced with your own for production use.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository and navigate into the project directory:

   ```bash
   git clone <repo-url> weather-app
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Replace the API key in `src/app/core/services/weather-api.service.ts` with your own OpenWeatherMap key.

### Running the Application

Start a development server with live reload:

```bash
npm start
# or with Angular CLI directly:
ng serve
```

Open your browser and go to `http://localhost:4200/`. The app will automatically reload when you make changes to the source files.

### Building for Production

Compile the application into the `dist/` directory:

```bash
ng build --prod
```

Deploy the contents of `dist/weather-app` to any static hosting service (Firebase, GitHub Pages, Netlify, etc.).

### Testing

Run unit tests with Karma:

```bash
npm test
```

End‑to‑end tests (if configured) can be executed with:

```bash
npm run e2e
```

## Additional Commands

The Angular CLI provides a variety of schematics and tooling. Some useful commands include:

```bash
ng generate component my-component      # scaffold a new component
ng generate service my-service          # scaffold a new service
ng lint                                 # run linter
ng e2e                                  # run end-to-end tests
``` 

Refer to the [Angular CLI documentation](https://angular.dev/cli) for more details.

## API Information

This app contacts the **OpenWeatherMap 5‑day/3‑hour Forecast API**. The service endpoint used is:

```
https://api.openweathermap.org/data/2.5/forecast?q={CITY_NAME}&appid={API_KEY}&units=metric
```

You must supply a valid API key (`appid`) and a query string (`q`). Responses are returned in JSON and include temperature, weather conditions, humidity, wind speed, and forecast entries.

### Example Response

```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1618317040,
      "main": { "temp": 12.34, ... },
      "weather": [{ "description": "clear sky" }],
      ...
    }
    // ... more forecast items
  ],
  "city": { "name": "London", ... }
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

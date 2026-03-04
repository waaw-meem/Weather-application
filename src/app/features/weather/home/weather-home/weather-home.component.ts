import { Component } from '@angular/core';
import { WeatherSearchComponent } from "../../components/weather-search/weather-search.component";
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";

@Component({
  selector: 'app-weather-home',
  imports: [WeatherSearchComponent, WeatherCardComponent],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css'
})
export class WeatherHomeComponent {
  getWeatherData: any
  selectedUnit: 'C' | 'F' = 'C';

  onUnitChange(unit: 'C' | 'F') {
    this.selectedUnit = unit;
  }

  setWeatherData(event: any) {
    console.log("Home Weather", event)
    this.getWeatherData = event
  }
}

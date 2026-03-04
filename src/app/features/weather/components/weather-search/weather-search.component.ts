import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgForm } from '@angular/forms';
import { WeatherApiService } from '../../../../core/services/weather-api.service';

@Component({
  selector: 'app-weather-search',
  imports: [SharedModule],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.css'
})
export class WeatherSearchComponent {

  unit: 'C' | 'F' = 'C';

  cityName?: string

  @Output() weatherData = new EventEmitter<any>()
  @Output() unitChange = new EventEmitter<'C' | 'F'>();

  constructor(private weatherService: WeatherApiService) { }

  toggleUnit() {
    this.unit = this.unit === 'C' ? 'F' : 'C';
    this.unitChange.emit(this.unit);
  }

  onSearch(form: NgForm) {
    this.cityName = form.value.city
    this.weatherService.searchWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData.emit(data)
        console.log('next', this.weatherData)
      },
      error: (err) => {
        console.error('Error:', err)
      }
    })
  }
}

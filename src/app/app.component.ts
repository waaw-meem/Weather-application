import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WeatherModule } from './features/weather/weather.module';
import { WeatherHomeComponent } from "./features/weather/home/weather-home/weather-home.component";

@Component({
  selector: 'app-root',
  imports: [WeatherModule, HeaderComponent, FooterComponent, WeatherHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}

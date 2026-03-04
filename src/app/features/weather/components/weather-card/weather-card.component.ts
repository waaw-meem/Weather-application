import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from "../../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {

  @Input() response: any;
  @Input() unit: 'C' | 'F' = 'C';


  convertTemp(temp: number): number {
    return this.unit === 'F' ? (temp * 9 / 5) + 32 : temp;
  }

  formatTimezone(offsetInSeconds: number): string {
    const sign = offsetInSeconds >= 0 ? '+' : '-';
    const absOffset = Math.abs(offsetInSeconds);

    const hours = Math.floor(absOffset / 3600);
    const minutes = Math.floor((absOffset % 3600) / 60);

    return `UTC ${sign}${this.pad(hours)}:${this.pad(minutes)}`;
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

}
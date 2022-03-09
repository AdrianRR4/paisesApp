import { Component, Input, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  enterData: string = '';
  error: boolean = false;

  @Input() country: Country[] = [];
  constructor(private countryService: CountryServiceService) {}

  ngOnInit(): void {}

  search(data: string) {
    this.enterData = data;
    this.error = false;
    console.log(this.enterData);
    this.countryService.searchCounry(this.enterData).subscribe(
      (response) => {
        console.log(response);

        this.country = response;
      },

      (error) => {
        console.log('Error');
        console.info(error);
        this.error = true;
        this.country = [];
      }
    );
  }

  suggestion(dataEnter: string) {
    this.error = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/countries.interface';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  capital: string = '';
  @Input() country: Country[] = [];
  error: boolean = false;
  // @Input() placeHolder = 'Search client';
  constructor(private countryServiceService: CountryServiceService) {}

  ngOnInit(): void {}

  searchCapital(data: string) {
    this.capital = data;
    this.error = false;
    this.countryServiceService.searchCapital(this.capital).subscribe(
      (resp) => {
        console.log(resp);
        this.country = resp;
      },
      (error) => {
        console.log(error);
        this.error = true;
        this.country = [];
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interface/countries.interface';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css'],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryServiceService
  ) {}
  country!: Country;
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCodeCountry(id)),
        tap(console.log)
      )
      .subscribe((resp) => (this.country = resp));
    /** 
    this.activateRoute.params.subscribe(({ id }) => {
      console.log('id', id);

      this.countryService.getCodeCountry(id).subscribe((resp) => {
        console.log(resp);
      });
    });
     */
  }
}

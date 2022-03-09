import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
  styles: [
    `
      button {
        margin: 5px;
      }
    `,
  ],
})
export class ByRegionComponent implements OnInit {
  regionActive: string = '';
  region: string[] = [
    'Eu',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  countryRegion: Country[] = [];

  constructor(private regionService: CountryServiceService) {}

  ngOnInit(): void {}

  getClaseCSS(region: string) {
    return region == this.regionActive
      ? 'btn  btn-primary'
      : 'btn btn-outline-primary';
  }
  ActivateRegio(region: string) {
    if (region === this.regionActive) {
      return;
    }
    {
    }

    this.regionActive = region;
    console.log(this.regionActive);
    this.countryRegion = [];

    this.regionService.getRegion(region).subscribe((resp) => {
      console.log(resp);
      this.countryRegion = resp;
    });
  }
}

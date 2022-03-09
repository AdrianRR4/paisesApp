import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css'],
})
export class CountriesTableComponent implements OnInit {
  constructor() {}

  @Input() country: Country[] = [];

  ngOnInit(): void {}
}

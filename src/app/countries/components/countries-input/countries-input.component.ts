import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.css'],
})
export class CountriesInputComponent implements OnInit {
  enterData: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder = 'Search capital...';
  debouncer: Subject<string> = new Subject();

  constructor() {}
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((resp) => {
      this.onDebounce.emit(resp);
    });
  }
  search() {
    this.onEnter.emit(this.enterData);
  }
  pressKey() {
    this.debouncer.next(this.enterData);

    //console.warn(this.enterData);
  }
}

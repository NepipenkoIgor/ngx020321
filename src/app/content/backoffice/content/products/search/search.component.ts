import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  @Input()
  public searchTerm!: string;

  @Output()
  public searchTermChange: EventEmitter<string> = new EventEmitter();

  public search(value: string): void {
    this.searchTermChange.emit(value);
  }
}

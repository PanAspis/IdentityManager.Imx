import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ccc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[];
  @Output() popupChange = new EventEmitter<void>();
  displayedColumns: string[] = ['firstname', 'lastname', 'address', 'email'];

  constructor() { }

  ngOnInit(): void {}

  openPopup(){
    this.popupChange.emit();
  }
}

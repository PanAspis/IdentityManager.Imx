import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomFormService } from '../custom-form.service';

@Component({
  selector: 'ccc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'address', 'email'];
  @Output() popupChange = new EventEmitter<void>();

  constructor(private formDataService: CustomFormService) { }

  ngOnInit(): void {
    this.dataSource = this.formDataService.formDataList;
    console.log("table:",this.dataSource) ;
  }

  openPopup(){
    this.popupChange.emit();

  }
}

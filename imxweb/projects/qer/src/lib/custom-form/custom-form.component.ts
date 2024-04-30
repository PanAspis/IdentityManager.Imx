import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ccc-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  formDataArray: any[] = [];
  submitted: boolean = false;
  showPopup: boolean = false;
  firstName: string = '';
  lastName: string = '';
  formData: any;
  constructor() { }
  ngOnInit(): void {
    this.loadFormData();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formData = form.value;
      this.formDataArray.push(this.formData);
      this.firstName = this.formData.firstname;
      this.lastName = this.formData.lastname;
      this.saveFormData();

      this.submitted = true;
      this.showPopup = false;
      form.reset();
    }
  }

  private saveFormData() {
    sessionStorage.formDataItem = JSON.stringify(this.formDataArray);
  }

  private loadFormData() {
    this.formDataArray = JSON.parse(sessionStorage.formDataItem || '[]');
  }

  handlePopup() {
    this.showPopup = !this.showPopup;
  }
}

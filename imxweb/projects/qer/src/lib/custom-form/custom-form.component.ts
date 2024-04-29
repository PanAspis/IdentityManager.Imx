import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomFormService } from './custom-form.service';

@Component({
  selector: 'ccc-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {
  submitted: boolean = false;
  showPopup: boolean = false;
  firstName: string = '';
  lastName: string = '';
  formData: any;
  constructor(private formDataService: CustomFormService) { }
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formData = form.value;
      this.formDataService.formDataList.push(this.formData);
      this.firstName = this.formData.firstname;
      this.lastName = this.formData.lastname;

      this.submitted = true;
      this.showPopup = false;
      form.reset();
    }
  }
  
  handlePopup(){
    this.showPopup = !this.showPopup;
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.submitted = false;
    this.showPopup = false;
  }
}

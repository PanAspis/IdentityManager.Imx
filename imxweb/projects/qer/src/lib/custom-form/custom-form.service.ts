import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomFormService {
  formDataList: any[] = [];
  constructor() { }
}

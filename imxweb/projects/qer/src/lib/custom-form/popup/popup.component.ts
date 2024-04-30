import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ccc-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}

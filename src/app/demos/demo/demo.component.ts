import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  modalService = inject(NgbModal);

  open(modal: any): void {
    this.modalService.open(modal);
  }
}

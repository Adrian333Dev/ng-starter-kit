import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Position =
  | 'fixed-top'
  | 'fixed-bottom'
  | 'sticky-top'
  | 'sticky-bottom'
  | 'static-top';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() classes: string[] = [];
  @Input() position: Position = 'static-top';

  get classesString(): string {
    return ['navbar', this.position, 'bg-body-secondary', ...this.classes].join(
      ' '
    );
  }
}

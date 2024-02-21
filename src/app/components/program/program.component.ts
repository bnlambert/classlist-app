import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
        <h3>Programs</h3>
    </div>
  `,
  styles: [`
  
  `]
})
export class ProgramComponent {
  title = 'client-angular';
}

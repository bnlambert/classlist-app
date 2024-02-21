import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
        <h4>Student Form</h4>
    </div>
  `,
  styles: [`
  
  `]
})
export class StudentFormComponent {
  title = 'client-angular';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  template: `
    <div>
        <h3>Student</h3>
        <app-student-list></app-student-list>
    </div>
  `,
  styles: [`
  
  `]
})
export class StudentComponent {
  title = 'client-angular';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
        <h4>Student List</h4>
    </div>
  `,
  styles: [`
  
  `]
})
export class StudentListComponent {
  title = 'client-angular';
}

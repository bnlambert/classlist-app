import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/dashboard/welcome.component';
import { StudentComponent } from './components/student/student.component';
import { ProgramComponent } from './components/program/program.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'students',
        component: StudentComponent
    },
    {
        path: 'programs',
        component: ProgramComponent
    }
];

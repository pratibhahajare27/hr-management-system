import { Routes } from '@angular/router';

import { EmployeeList } from './features/employee-list/employee-list';
import { Dashboard } from './features/dashboard/dashboard';
import { LeaveList } from './features/leave-list/leave-list';

export const routes: Routes = [
    { path: "", component: Dashboard },
    { path: "employee", component: EmployeeList },
    { path: "leaves", component: LeaveList }
];

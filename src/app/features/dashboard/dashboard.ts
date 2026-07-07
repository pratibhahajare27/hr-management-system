import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../services/employee';
import { Leave } from '../../services/leave';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private employeeService = inject(Employee);
  private leaveService = inject(Leave);

  totalEmployees = signal<number>(0);
  totalLeaves = signal<number>(0);
  activeChart = signal<'employees' | 'leaves' | null>(null);

  ngOnInit() {
    this.employeeService.getEmplyees().subscribe(data => {

    }
    )
    this.leaveService.getLeaves().subscribe(data => {
      this.totalEmployees.set(data.length);
    })
  }
  showEmpChart() {
    this.activeChart.set('employees');
  }

  showLeaveChart() {
    this.activeChart.set('leaves');
  }

}

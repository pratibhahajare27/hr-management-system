import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private http = inject(HttpClient);
  private api = 'http://localhost:3000/employee';

  getEmplyees() {
    return this.http.get<any[]>(this.api);
  }

  addEmployee(data: any) {
    return this.http.post<any>(this.api, data);
  }

  updateEmplyee(id: number, data: any) {
    return this.http.put<any>(`${this.api}/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-home',
  template: '<app-add-employeee [employeeData]="employee"></app-add-employeee>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];


  constructor(private httpService:HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.httpService.getEmployee().subscribe(response => {
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    } );
  }


  remove(id:number): void {
    this.httpService.removeEmployee(id).subscribe((response: any) => {
      console.log(response);
      this.ngOnInit();
    
    });
  }

  update(employee: Employee){
    this.router.navigateByUrl('/add/' + employee.id);
    this.httpService.updateEmployee(employee.id,employee).subscribe(response => {
     console.log(response);
      this.ngOnInit();
    })

  }
}
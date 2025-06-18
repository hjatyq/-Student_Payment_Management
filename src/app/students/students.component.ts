import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatDivider,
    MatTableModule,
    MatButton,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatInput,
    MatFormFieldModule
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {
  public students: any;
  public dataSource: any;
  public displayedColumns = ["id", "firstName", "lasteName", "payments"]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.students = [];
    for (let i = 1; i < 100; i++) {
      this.students.push(
        {
          id: i,
          firstName: Math.random().toString(20),
          lasteName: Math.random().toString(20),
        }
      )

    }
    this.dataSource = new MatTableDataSource(this.students)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort=this.sort
  }

  filterStudents(event: Event) {
    let value= (event.target as HTMLInputElement).value;
    this.dataSource.filter=value;

  }

  getPayments(student:any) {
    this.router.navigateByUrl("/payments")
  }
}

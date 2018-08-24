import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './../../student.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  students: any;

  constructor(private http: HttpClient, private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }
  
  getStudents() {
      this.studentService.getStudents().subscribe(res => {
        this.students = res;
    });
  }
}
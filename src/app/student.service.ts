import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  result: any;
  constructor(private http: HttpClient) {}

  addStudent(fname, lname) {
    console.log('hit....');  
    const uri = 'http://localhost:4000/students/add';
    const obj = {
      fname: fname,
      lname: lname
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getStudents() {
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(id) {
    const uri = 'http://localhost:4000/students/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudent(name, price, id) {
    const uri = 'http://localhost:4000/students/update/' + id;

    const obj = {
        fname: name,
        lname: name
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteStudent(id) {
    const uri = 'http://localhost:4000/students/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
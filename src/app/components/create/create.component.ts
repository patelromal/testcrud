import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Student';
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private studentservice: StudentService) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ]
   });
  }

  addStudent(fname, lname) {
      this.studentservice.addStudent(fname, lname);
  }
  ngOnInit() {
  }
}
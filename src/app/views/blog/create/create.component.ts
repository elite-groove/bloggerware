import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormParser } from 'src/app/classes/form-parser';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  validateForm: FormGroup;
  value: string;

  constructor(private fb: FormBuilder, private formParser: FormParser, private blogService: BlogService) {}

  ngOnInit(): void {
  }

  onSubmit(form) {
    const formValues = this.formParser.parse(form);
    this.blogService.createPost(formValues).toPromise().then(
      resp => {
        console.log(resp);
      }
    );
    console.log(formValues);
  }

}

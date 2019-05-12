import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormParser } from 'src/app/classes/form-parser';
import { BlogService } from 'src/app/services/blog.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Post } from 'src/app/interfaces/post';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewChecked {
  @ViewChild('successLink') successLink: TemplateRef<any>;
  validateForm: FormGroup;
  value: string;
  public post = {
    created: false,
    id: ''
  };
  chosenFile: string | ArrayBuffer;
  defaultFileList = [];
  fileList1 = [...this.defaultFileList];

  constructor(private fb: FormBuilder, private formParser: FormParser, private blogService: BlogService,
    private notification: NzNotificationService, private notify: UtilityService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  onSubmit(form) {
    const formValues: any = this.formParser.parse(form);
    formValues.avatar = this.chosenFile;
    for(let values in formValues) {
      if(formValues[values] !== undefined){
        return;
      };
    }
    this.blogService.createPost(formValues).toPromise().then(
      (post: Post) => {
        console.log(post);
        this.notify.createNotification('success', 'Exitoso', 'El articulo se creo con exito.');
        this.post.created = true;
        this.post.id = post._id;
        this.successLink.createEmbeddedView({ $implicit: 'value' });
      }
    ).catch(
      err => {
        this.notify.createNotification('error', 'Error', 'Algo salio mal, contacta al administrador si sigue sin funcionar. 510-283-8390');
      }
    );
    console.log(formValues);
  }

  fileChange($event) {
    const reader  = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    reader.onload = () => {
      this.chosenFile = reader.result;
    }
  }

  handleUpload = (item) => {
    this.defaultFileList.push(item.file);
  }

}

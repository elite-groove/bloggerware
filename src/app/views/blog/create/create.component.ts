import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormParser } from 'src/app/classes/form-parser';
import { BlogService } from 'src/app/services/blog.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewChecked {
  @ViewChild('successLink') successLink: TemplateRef<any>;
  // @ViewChild('alertContainer', {read: ViewContainerRef}) alertContainer: ViewContainerRef;
  validateForm: FormGroup;
  value: string;
  public post = {
    created: false,
    id: ''
  };

  constructor(private fb: FormBuilder, private formParser: FormParser, private blogService: BlogService,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    // this.al.createEmbeddedView(this.successLink, { $implicit: 'value' });
  }

  /**
   * 
   * @param {String} type success, info, warning, error
   * @param {String} title 
   * @param {String} content 
   */
  createNotification(type: string, title: string, content: string): void {
    this.notification.create(
      type,
      title,
      content
    );
  }

  onSubmit(form) {
    const formValues = this.formParser.parse(form);
    this.blogService.createPost(formValues).toPromise().then(
      (post: Post) => {
        console.log(post);
        this.createNotification('success', 'Exitoso', 'El articulo se creo con exito.');
        this.post.created = true;
        this.post.id = post._id;
        this.successLink.createEmbeddedView({ $implicit: 'value' });
      }
    ).catch(
      err => {
        this.createNotification('error', 'Error', 'Algo salio mal, contacta al administrador si sigue sin funcionar. 510-283-8390');
      }
    );
    console.log(formValues);
  }

}

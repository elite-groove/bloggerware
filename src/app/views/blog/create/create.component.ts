import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormParser } from 'src/app/classes/form-parser';
import { BlogService } from 'src/app/services/blog.service';
import { NzNotificationService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
import { Post } from 'src/app/interfaces/post';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';
import { BlogImage } from 'src/app/interfaces/blog-image';
import { HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewChecked {
  @ViewChild('successLink') successLink: TemplateRef<any>;
  htmlContent;
  validateForm: FormGroup;
  value: string;
  public post = {
    created: false,
    id: ''
  };
  chosenFile: string | ArrayBuffer;
  defaultFileList = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [];

  constructor(private fb: FormBuilder, private formParser: FormParser, private blogService: BlogService,
    private notification: NzNotificationService, private notify: UtilityService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  onSubmit($event, form) {
    $event.preventDefault();
    const formValues: any = this.formParser.parse(form);
    formValues.content = this.htmlContent;

    // format url for mongoose schema
    formValues.posters = [...this.fileList].map((fileInfo, idx, arr) => {
      return { url: fileInfo.response.url }
    });

    this.blogService.createPost(formValues).subscribe(
      (post: Post) => {
        console.log(post);
        this.notify.createNotification('success', 'Exitoso', 'El articulo se creo con exito.');
        this.post.created = true;
        this.post.id = post._id;
      }
    , err => {
        this.notify.createNotification('error', 'Error', `Algo salio mal, contacta al administrador si sigue sin funcionar. 510-283-8390 \n ${err.message}`);
      }
    );
    console.log(formValues);
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  handleUpload = async (item) => {
    console.log(item);
    item.action = 'POST'
    const fileURI = await this.dataParams(item.file);

    item.onSuccess = (resp, ) => {
      console.log(resp);
      // this.fileList.push(resp);
    }

    item.onProgress({ percent: 50 });
    return this.blogService.uploadBlogPosters(fileURI).subscribe(
      (image: BlogImage) => {
        console.log(image);
        this.defaultFileList.push({
          uid: image.bytes,
          name: image.original_filename,
          status: 'done',
          url: image.url,
          thumbUrl: image.url,
        });
        item.data = image;
        item.file = image;
        this.previewImage = image.url;
        console.log(this.fileList);
        this.fileList = [...this.defaultFileList];
        this.changeDetector.detectChanges();
      }
    );
  }

  customReq = async (item: UploadXHRArgs) => {
    console.log([...this.fileList]);
    // const formData = new FormData();
    const fileURI = await this.dataParams(item.file);
    // tslint:disable-next-line:no-any

    const req = new HttpRequest('POST', item.action!, fileURI, {
      reportProgress: true,
      withCredentials: true
    });

    return this.blogService.uploadBlogPostersRequest(req).subscribe(
      (event: HttpEvent<{}>) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {

          item.onSuccess!(event.body, item.file!, event);
        }
      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

  dataParams = async (file): Promise<any> => {
    // console.log(file instanceof Blob, file);
    const reader = new FileReader();
    reader.readAsDataURL(file);


    return await new Promise((resolve, reject) => {
      reader.onload = function () {
        resolve({ uri: reader.result });
      };
    });

  }

  dataHeaders = () => {
    return {
      'Content-Type': 'multipart/form-data'
    }
  }
}

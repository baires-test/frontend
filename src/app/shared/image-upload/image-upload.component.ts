import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/api.service';
import {UiService} from '../../core/ui.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  file: File;
  imageUploaded = false;
  imagePath = '';
  sending = false;

  info: string;

  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private uiService: UiService,
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      image_name: ['', Validators.required],
      image_data: ['', Validators.required],
      image_filename: ['', Validators.required],
      image_type: ['', Validators.required],
    });
  }

  setInfo(info: string) {
    this.info = info;
  }

  clearInfo() {
    this.info = '';
  }

  submit() {
    this.clearInfo();
    if (this.uploadForm.valid) {

      this.sending = true;
      this.apiService
        .uploadImage(this.uploadForm.value)
        .subscribe(response => {
          this.sending = false;
          if (response.success) {
            this.apiService.getActiveImages();
            this.uiService.closeDialgoBox();
          } else {
            this.setInfo(response.message);
          }

        });
    } else {
      this.setInfo('Invalid form. Please Verify!');
    }
  }

  onFileError(errorMessage: string) {

    this.setInfo(errorMessage);
  }

  async readImageData() {
    const imageData = await this.readFileData(this.file);
    this.uploadForm.controls['image_data'].setValue(imageData);
    this.uploadForm.controls['image_filename'].setValue(this.file.name);
    this.uploadForm.controls['image_type'].setValue(this.file.type);
  }

  readFileData(file: File): Promise<string> {
    return new Promise((resolve, reject) => {

      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = () => {
        reject(fileReader.error);
      };

      fileReader.readAsDataURL(file);

    });
  }



  onAcceptedFiles(files: File[]) {

    this.clearInfo();
    if (files.length > 0) {
      this.file = files[0];
      this.readImageData()
        .catch(error => {
          this.setInfo(error);
        });
    } else {
      this.file = null;
      this.uploadForm.controls['image_data'].setValue(null);
      this.uploadForm.controls['image_filename'].setValue(null);
      this.uploadForm.controls['image_type'].setValue(null);
    }
  }

}

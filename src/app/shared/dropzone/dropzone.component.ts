import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit, AfterViewInit {
  @Input() acceptedFiles = '*';
  @Input() containerId = 'dropzoneContainer';
  @Input() containerDesc = 'Drag and Drop or Click Here to Choose file';
  @Input() maxFiles = 1;

  @Output() onFilesUploading: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() onFileAdded: EventEmitter<File> = new EventEmitter<File>();
  @Output() onFileError: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFileRemoved: EventEmitter<File> = new EventEmitter<File>();
  @Output() onAcceptedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  dropzone: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.dropzone = new Dropzone('#' + this.containerId, {
      init: () => {

      },
      url: (files: File[]) => {

        this.onFilesUploading.emit(files);
      },
      autoProcessQueue: false,
      maxFiles: this.maxFiles,
      maxFilesize: 2,
      uploadMultiple: true,
      acceptedFiles: this.acceptedFiles,
      addRemoveLinks: true,
      thumbnailWidth: 240,
      thumbnailHeight: 240,
    });

    /**
     * If there is a error loading a file we will inmediatly remove it.
     * We emmit the error so the parent component can handle it.
     */
    this.dropzone.on('error', (file, message) => {
      this.dropzone.removeFile(file);
      this.onFileError.emit(message);
    });

    this.dropzone.on('addedfile', (file) => {
      this.onFileAdded.emit(file);
      const acceptedFiles = this.dropzone.getAcceptedFiles();
      this.onAcceptedFiles.emit([file, ...acceptedFiles]);
    });

    this.dropzone.on('removedfile', (file) => {
      this.onFileRemoved.emit(file);
      const acceptedFiles = this.dropzone.getAcceptedFiles();
      this.onAcceptedFiles.emit(acceptedFiles);
    });
  }

}

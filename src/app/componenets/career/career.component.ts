import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent implements OnInit {
  careerForm!: FormGroup;

  uploadedFiles: any[] = [];
  selectedFileName: string = '';

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.careerForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      cv: [],
    });
  }

  onUpload(event: any) {
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onFileSelect(event: any) {
    if (event.files.length > 0) {
      this.selectedFileName = event.files[0].name;
    }
  }

  save() {
    this.careerForm.value.cv = this.selectedFileName;
    console.log(this.careerForm.value);
    this.careerForm.reset();
  }
}

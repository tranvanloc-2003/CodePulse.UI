import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ImageServices } from './services/image.services';
import { Observable } from 'rxjs';
import { BlogImage } from './models/BlogImage';

@Component({
  selector: 'app-image-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './image-selector.html',
  styleUrl: './image-selector.css'
})
export class ImageSelector implements OnInit {
  private file?: File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<BlogImage[]>;

@ViewChild('form', {static: false}) upLoadForm?: NgForm;

  constructor(private imageServices : ImageServices) { }
 
  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }
  onUploadImage(): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      //upload hinh anh tu services
      this.imageServices.uploadImage(this.file, this.fileName, this.title).subscribe({
        next: (data) => {
         this.upLoadForm?.resetForm(); // Reset the form after successful upload
         this.getImages(); // Refresh the image list after upload
        }
      })
    }
  }
  
  ngOnInit(): void {
   this.getImages();
  }
  private getImages(){
 this.images$ = this.imageServices.getImage();
  } 
}

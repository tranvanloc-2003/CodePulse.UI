import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageServices } from './services/image.services';

@Component({
  selector: 'app-image-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './image-selector.html',
  styleUrl: './image-selector.css'
})
export class ImageSelector {
  private file?: File;
  fileName: string = '';
  title: string = '';
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
          console.log('Image uploaded successfully:', data);
         
        }
      })
    }
  }
}

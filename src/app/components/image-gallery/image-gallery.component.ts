// ./src/app/image-gallery/image-gallery.component.ts
import { Component } from '@angular/core';
@Component({
 selector: 'app-image-gallery',
 templateUrl: './image-gallery.component.html',
 styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
 constructor() { }
 public items: any[] = [
   { title: 'Malignant-Melanoma No: 1', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-1.jpg' },
   { title: 'Malignant-Melanoma No: 2', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-101.jpg' },
   { title: 'Malignant-Melanoma No: 3', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-102.jpg' },
   { title: 'Malignant-Melanoma No: 4', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-103.jpg' },
   { title: 'Malignant-Melanoma No: 5', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-104.jpg' },
   { title: 'Malignant-Melanoma No: 6', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-105.jpg' },
   { title: 'Malignant-Melanoma No: 7', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-106.jpg' },
   { title: 'Malignant-Melanoma No: 8', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-107.jpg' },
   { title: 'Malignant-Melanoma No: 9', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-108.jpg' },
   { title: 'Malignant-Melanoma No: 10', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-109.jpg' },
   { title: 'Malignant-Melanoma No: 11', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-110.jpg' },
   { title: 'Malignant-Melanoma No: 12', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-111.jpg' },
   { title: 'Malignant-Melanoma No: 13', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-112.jpg' },
   { title: 'Malignant-Melanoma No: 14', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-113.jpg' },
   { title: 'Malignant-Melanoma No: 15', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-114.jpg' },
   { title: 'Malignant-Melanoma No: 16', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-115.jpg' },
   { title: 'Malignant-Melanoma No: 17', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-116.jpg' },
   { title: 'Malignant-Melanoma No: 18', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-117.jpg' },
   { title: 'Malignant-Melanoma No: 19', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-119.jpg' },
   { title: 'Malignant-Melanoma No: 20', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-120.jpg' },
   { title: 'Malignant-Melanoma No: 21', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-122.jpg' },
   { title: 'Malignant-Melanoma No: 22', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-123.jpg' },
   { title: 'Malignant-Melanoma No: 23', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-124.jpg' },
   { title: 'Malignant-Melanoma No: 24', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-125.jpg' },
   { title: 'Malignant-Melanoma No: 25', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-127.jpg' },
   { title: 'Malignant-Melanoma No: 26', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-11.jpg' },
   { title: 'Malignant-Melanoma No: 27', url: 'https://raw.githubusercontent.com/Navdar/Tech-Challenge-/master/images/malignant-melanoma-12.jpg' }

 ];
 public width = '100%';
 public height = '600px';
}

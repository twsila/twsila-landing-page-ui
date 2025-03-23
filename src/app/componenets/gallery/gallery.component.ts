import { Component, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  images:any[] = [
    {
      itemImageSrc:
        '../../../assets/media/images/gallery/app1.jpg',
      thumbnailImageSrc:
        '../../../assets/media/images/gallery/app1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc:
        '../../../assets/media/images/gallery/app2.jpeg',
      thumbnailImageSrc:
        '../../../assets/media/images/gallery/app2.jpeg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      itemImageSrc:
        '../../../assets/media/images/gallery/app3.jpg',
      thumbnailImageSrc:
        '../../../assets/media/images/gallery/app3.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      itemImageSrc:
        '../../../assets/media/images/gallery/app4.jpeg',
      thumbnailImageSrc:
        '../../../assets/media/images/gallery/app4.jpeg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      itemImageSrc:
        '../../../assets/media/images/gallery/app5.jpeg',
      thumbnailImageSrc:
        '../../../assets/media/images/gallery/app5.jpeg',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
  ];
  
  ngOnInit(): void {}
}

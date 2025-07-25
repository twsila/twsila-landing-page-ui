import { Component, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {

  images: any[] = [
    '../../../assets/media/images/gallery/Twsila-1.png',
    '../../../assets/media/images/gallery/Twsila-2.png',
    '../../../assets/media/images/gallery/Twsila-3.png',
    '../../../assets/media/images/gallery/Twsila-4.png',
    '../../../assets/media/images/gallery/Twsila-5.png',
    '../../../assets/media/images/gallery/Twsila-6.png',
    '../../../assets/media/images/gallery/Twsila-7.png',
  ];

  ngOnInit(): void {}
}

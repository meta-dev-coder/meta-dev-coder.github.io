import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images = [ {
    name: 'download.jpg',
    url: '../../assets/download.jpg'
  },
 {
  name: 'download (1).jpg',
    url: '../../assets/download (1).jpg'
 },
 {
  name: 'download (2).jpg',
    url: '../../assets/download (2).jpg'
 },
 {
  name: 'download (3).jpg',
    url: '../../assets/download (3).jpg'
 },
 {
  name: 'download (4).jpg',
    url: '../../assets/download (4).jpg'
 },
 {
  name: 'download (5).jpg',
    url: '../../assets/download (5).jpg'
 }
 ];

  constructor() { }

  ngOnInit(): void {
  }

  SearchImages() {

  }

}

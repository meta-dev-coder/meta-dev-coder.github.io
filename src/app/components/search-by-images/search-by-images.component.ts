import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-search-by-images',
  templateUrl: './search-by-images.component.html',
  styleUrls: ['./search-by-images.component.scss']
})
export class SearchByImagesComponent implements OnInit {
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
 searchImageList: any = [];
  selectedFile: ImageSnippet | undefined;
  url:any;
  imageLink = '';
  filename = '';
  numberOfImages: any = '3';
  fileReader: any;
  index: number = 1;
  constructor(private apiService: ApiService,
    protected matDialog: MatDialog,) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    this.imageLink = '';

    const file = this.fileReader = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.url = this.selectedFile.src;
      this.filename = this.selectedFile.file.name;
    });

    reader.readAsDataURL(file);
  }

  loadImage() {
    this.url = this.imageLink;
    this.filename = '';
    (<HTMLInputElement>document.getElementById('filereader')).value = "";
  }
  submitButton() {
    if (this.filename === '') {
        this.searchImages();
    } else if (this.imageLink === '') {
      this.getBase64(this.fileReader, (result) => {
        this.getSimilarImages(result);
      });
    }
  }
  searchImages() {
    const data = {
       "url": this.url, "k":  parseInt(this.numberOfImages)
    };
    this.apiService.loadSimilarImages(data, 'postURL').subscribe(result => {
      this.searchImageList = [];
      if (result.images.length > 0) {
      result.images.forEach((img: any) => {
        this.searchImageList.push(img);
      });
    }
    });
  }

  getSimilarImages(imgBase64: any) {
    const data = {
       "base64img": imgBase64, "k":  parseInt(this.numberOfImages)
    };
    this.apiService.loadSimilarImages(data, 'postImage').subscribe(result => {
      this.searchImageList = [];
      if (result.images.length > 0) {
      result.images.forEach((img: any) => {
        debugger;
        this.searchImageList.push(img);
      });
    }
    });
  }

  getBase64(file: Blob, cb: (arg0: any) => void) {
    // convert image to base64
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (reader.result !== null) {
      cb((reader.result as string).replace(/^data:image\/[a-z]+;base64,/, ""));
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  showImages(link: any) {
    this.matDialog.open(ImageCarouselComponent, {
      panelClass: 'zero-padding',
      width: '600px',
      height: '450px',
      data: {
        url: link
      }
    });
  }

}



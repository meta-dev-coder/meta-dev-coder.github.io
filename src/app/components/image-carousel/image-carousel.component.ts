import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  index: number = 0;
  image: any = '';
  slides: any = [];
  names: any = [];
  fileName: any = '';
  constructor( private dialogRef: MatDialogRef<ImageCarouselComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: any}) { }

    ngOnInit(): void {
      debugger;
      if (this.data.url !== undefined) {
        this.image= this.data.url
        this.fileName = this.data.url.split('/').pop().split('?')[0];

      }
     // this.slides = [];
      //this.index = this.data.index;
      //const length = this.data.images.length;
      /* if (this.index !== 0) {
        this.slides.push({'image': this.data.images[this.index].url});
        this.names.push({'text': this.data.images[this.index].name});
        this.index++; */
/*         if (this.index === length) {
          this.index = 0;
        }
        for (let i = 1; i < length; i++) {
          if (this.data.images[this.index].url !== 'No Image') {
            if (this.index === this.data.index) {
              break;
            }
            if (this.index !== this.data.index && this.index < length) {
              this.slides.push({'image': this.data.images[this.index].url});
              this.names.push({'text': this.data.images[this.index].name});
              this.index++;
              if (this.index === length) {
                this.index = 0;
              }
            } else if (this.index === length) {
              this.index = 0;
              this.slides.push({'image': this.data.images[this.index].url});
              this.names.push({'text': this.data.images[this.index].name});
              this.index++;
            }
          } else {
            this.index++;
          }
        }
      } else {
        this.data.images.forEach((element: { url: string | undefined; name: any; }) => {
          if (element.url !== undefined && element.url !== 'No Image') {
            this.slides.push({'image': element.url});
            this.names.push({'text': element.name});
          }
        });
      } */

    }

}

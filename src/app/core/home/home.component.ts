import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/providers/transfer.service';
import { PhotoService } from 'src/app/temp/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  cards: any[] = [];
  events: any[];

  value!: any;

  responsiveOptions!: any[];

  constructor(private transferService: TransferService) {
    this.events = [
      {
        status: 'PLUCKED FRESH FROM FARM',
        image: 'farmer.jpg',
        color: '#F9D923',
        content:
          'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!',
      },
      {
        status: 'PACKED WITH CARE',
        image: 'packer.jpg',
        color: '#F9D923',
        content:
          'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!',
      },
      {
        status: 'DELIVERED WITH SAFTY',
        image: 'delivery.jpg',
        color: '#F9D923',
        content:
          'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!',
      },
      {
        status: 'ENJOY YOUR ORDER',
        image: 'family.jpg',
        color: '#F9D923',
        content:
          'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!',
      },
    ];
  }

  ngOnInit() {
    this.images = this.getData();
    this.cards = this.getCategory();
    // console.log(this.cards);

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  getData() {
    return [
      {
        itemImageSrc: '/assets/temp/yellow.jpg',
        alt: 'Description for Image 1',
        colorClass: 'blue',
      },
      {
        itemImageSrc: '/assets/temp/green.jpg',
        alt: 'Description for Image 2',
        colorClass: 'red',
      },
      {
        itemImageSrc: '/assets/temp/blue.jpg',
        alt: 'Description for Image 3',
        colorClass: 'yellow',
      },
      {
        itemImageSrc: '/assets/temp/red.jpg',
        alt: 'Description for Image 4',
        colorClass: 'green',
      },
    ];
  }

  getCategory() {
    // this.transferService.getCategory().subscribe((res) => {
    //   console.log(res);
    //   this.cards = res;
    // });
    return [
      {
        itemImageSrc: '/assets/temp/Spices.jpg',
        alt: 'Description for Image 1',
        name: 'Herbal',
      },
      {
        itemImageSrc: '/assets/temp/Clothing.jpg',
        alt: 'Description for Image 2',
        name: 'Handmade Clothes',
      },
      {
        itemImageSrc: '/assets/temp/Nuts.jpg',
        alt: 'Description for Image 3',
        name: 'Nuts and Oils',
      },
      {
        itemImageSrc: '/assets/temp/Clothing.jpg',
        alt: 'Description for Image 4',
        name: 'Handmade Clothes',
      },
      {
        itemImageSrc: '/assets/temp/Clothing.jpg',
        alt: 'Description for Image 4',
        name: 'Handmade Clothes',
      },
    ];
  }
}

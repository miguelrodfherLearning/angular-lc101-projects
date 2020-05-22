import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  image2 = 'https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  image3 = 'https://images.pexels.com/photos/1665722/pexels-photo-1665722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

  constructor() { }

  ngOnInit() {
  }

}
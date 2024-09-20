import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
posts:any='';
  constructor(public menu: MenuController,private apiService:CommonService) { }

  ngOnInit() {
    this.getPosts();
  }
  openmenu() {
    //this.menu.enable(true, 'custom');
    console.log('[[[[[[[[');
    
    this.menu.toggle();
  }
  getPosts() {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log('Posts:', this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}

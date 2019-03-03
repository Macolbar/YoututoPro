import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HobbiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hobbie',
  templateUrl: 'hobbie.html',
})
export class HobbiePage {
  /*channelId='';
  maxRes='5';
  googleToken = '';
  search:'ionic 2';
  posts:any=[];*/

  titulo: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private youtube: YoutubeVideoPlayer) {
    this.titulo = navParams.get('titulo');
  /* let url="https://www.googleapis.com/youtube/v3/search?id.snippet&channelId="
    +this.channelId+"&q="+this.search+"&type=video&order=date&maxResults="+this.maxRes
    ;*/
   // this.youtube.openVideo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HobbiePage');
  }

}

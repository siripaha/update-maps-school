import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController,IonSlides } from '@ionic/angular';
import { crudapi } from '../crudapi';


@Component({
  selector: 'app-schoolp1',
  templateUrl: './schoolp1.page.html',
  styleUrls: ['./schoolp1.page.scss'],
})
export class Schoolp1Page implements OnInit {
  myname:String ;
  myimg:String;
  myhigh:String ;
  address:String;
  image01:String;
  image02:String;
  image03:String;
  image04:String;

  @ViewChild('slidesRef') slides: IonSlides;
  public slideOpts = {
    initialSlide: 0,
    speed: 2500,
    autoplay: true,
    loop: true
  };
  constructor(private getcrud:crudapi,
    public navCtrl:NavController , public actroute: ActivatedRoute){ }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('sendid');
    let schoolp1 = JSON.parse(dataRev);
    console.log(schoolp1);

    this.myname = schoolp1['myname'];
    this.myimg= schoolp1['myimg'];
    this.myhigh= schoolp1['myhigh'];
    this.address= schoolp1['address'];
    this.image01= schoolp1['image01'];
    this.image02= schoolp1['image02'];
    this.image03= schoolp1['image03'];
    this.image04= schoolp1['image04'];

  }
  back(){
    this.navCtrl.pop();
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import QuestionsArr from '../../app/QuestionsArray';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the TourismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourism',
  templateUrl: 'tourism.html',
})
export class TourismPage {

  Q1;
  Q2;
  Q3;
  Q4;
  Q5;

  yes = QuestionsArr;
  Score = 40

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }
  Results(){
    if (this.Q1 == "A1"){
      this.Score = this.Score + 2
      console.log(this.Score);
    }
    if (this.Q2 == "A2"){
      this.Score = this.Score + 2
    }
    if (this.Q3 == "A1"){
      this.Score = this.Score + 2
    }
    if (this.Q4 == "A2"){
      this.Score = this.Score + 2
    }
    if (this.Q5 == "A1"){
      this.Score = this.Score + 2
    }
    if (this.Score == 50){
     
      const alert = this.alertCtrl.create({
        title: 'Score',
        subTitle: 'Your score is ' +this.Score + 'and u have passed to the next level!',
        buttons: ['OK']
      });
      alert.present();

      const confirm = this.alertCtrl.create({
        title: 'Won',
        message: 'Well Done you finished the Quiz thank you for playing',
        buttons: [
          {
            text: 'Finished',
            handler: () => {
              console.log('Finished clicked');
              this.navCtrl.push(HomePage)
            }
          }
        ]
      });
      confirm.present();
    
    }
    else{
    
      const alert = this.alertCtrl.create({
        title: 'Score',
        subTitle: 'Your score is ' +this.Score + 'and u have failed to passed to the level!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(TourismPage);
    }

 
  }
}

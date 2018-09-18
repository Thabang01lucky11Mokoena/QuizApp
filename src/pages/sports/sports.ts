import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { HomePage } from '../home/home';
import {MathsPage } from '../maths/maths';


/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {
  Q1;
  Q2;
  Q3;
  Q4;
  Q5;

  Score = 10
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }
  Results(){
    if (this.Q1 == "A2"){
      this.Score = this.Score + 2
      console.log(this.Score);
    }
    if (this.Q2 == "A3"){
      this.Score = this.Score + 2
    }
    if (this.Q3 == "A2"){
      this.Score = this.Score + 2
    }
    if (this.Q4 == "A1"){
      this.Score = this.Score + 2
    }
    if (this.Q5 == "A3"){
      this.Score = this.Score + 2
    }
    if (this.Score == 20){
     // console.log(this.Score);
      //alert(this.Score);
      //alert("Level Passed");
      const alert = this.alertCtrl.create({
        title: 'Score',
        subTitle: 'Your score is ' +this.Score + 'and u have passed to the next level!',
        buttons: ['OK']
      });
      alert.present();


      const confirm = this.alertCtrl.create({
        title: 'Next Level and Category?',
        message: 'Do you agree to proceed to the next Level & Category?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push(HomePage)
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push(MathsPage)
            }
          }
        ]
      });
      confirm.present();
     
      
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Score',
        subTitle: 'Your score is ' +this.Score + 'and u have passed to the next level!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(SportsPage);
    }

    
  }
}

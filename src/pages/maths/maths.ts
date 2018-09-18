import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController  } from 'ionic-angular';
import QuestionsArr from '../../app/QuestionsArray';
import { SportsPage } from '../sports/sports';
import { HomePage } from '../../pages/home/home';
import { AnimalsPage } from '../animals/animals';

/**
 * Generated class for the MathsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maths',
  templateUrl: 'maths.html',
})
export class MathsPage {


  Q1;
  Q2;
  Q3;
  Q4;
  Q5;

  yes = QuestionsArr;
  Score = 20

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathsPage');
  }


 

  Results(){
    if (this.Q1 == "A3"){
      this.Score = this.Score + 2
      console.log(this.Score);
    }
    if (this.Q2 == "A3"){
      this.Score = this.Score + 2
    }
    if (this.Q3 == "A1"){
      this.Score = this.Score + 2
    }
    if (this.Q4 == "A2"){
      this.Score = this.Score + 2
    }
    if (this.Q5 == "A2"){
      this.Score = this.Score + 2
    }
    if (this.Score == 30){
     
      const alert = this.alertCtrl.create({
        title: 'Score',
        subTitle: 'Your score is ' +this.Score + 'and u have passed to the next level!',
        buttons: ['OK']
      });
      alert.present();

      const confirm = this.alertCtrl.create({
        title: 'Next Level & Category?',
        message: 'Do you agree to proceed to the next Level and Category?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push(MathsPage)
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push(AnimalsPage)
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
      this.navCtrl.push(MathsPage);
    }

 
  }
  
}

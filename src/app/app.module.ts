import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { SportsPage } from '../pages/sports/sports';
import { MathsPage} from '../pages/maths/maths';
import { AnimalsPage} from '../pages/animals/animals';
import { TourismPage} from '../pages/tourism/tourism';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage,
    SportsPage,
    MathsPage,
    AnimalsPage,
    TourismPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage,
    SportsPage,
    MathsPage,
    AnimalsPage,
    TourismPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

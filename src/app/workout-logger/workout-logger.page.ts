import { Component, OnInit } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // to import Camera
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonImg, 
  IonButton, 
  IonInput, 
  IonItem, 
  IonLabel 
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-workout-logger',
  templateUrl: './workout-logger.page.html',
  styleUrls: ['./workout-logger.page.scss'],
  standalone: true, 
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // this is to allow web components
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonImg, 
    IonButton, 
    IonInput, 
    IonItem, 
    IonLabel, 
    CommonModule, 
    FormsModule],
})
export class WorkoutLoggerPage implements OnInit {
  workout = { type: '', duration: null, calories: null };
  photo: string = ''; // Store the photo's base64 string

  constructor(private router: Router) {}

  ngOnInit() {}

  logWorkout() {
    // Here you can save the workout data to your local storage, a database, or display it in the app
    console.log('Workout logged:', this.workout);
    // Optionally, navigate to another page after logging
    this.router.navigate(['/dashboard']);
  }

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL, // Receive image as base64 data
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };

  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       this.photo = 'data:image/jpeg;base64,' + imageData;
  //     },
  //     (err) => {
  //       console.log('Camera error:', err);
  //     }
  takePicture() {
    Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl, // For web compatibility
      source: CameraSource.Camera,
    }).then(
      (photo) => {
        this.photo = photo.dataUrl || ''; // Base64 data URL for display
      },
      (err) => {
        console.error('Camera error:', err);
      }
    );
  }
}

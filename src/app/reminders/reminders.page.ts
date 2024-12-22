import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class RemindersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Trigger haptic feedback with a button click
  triggerHapticFeedback() {
    // I can customize the vibration strength here (Light, Medium, Heavy)
    Haptics.impact({ style: ImpactStyle.Medium });
  }
}
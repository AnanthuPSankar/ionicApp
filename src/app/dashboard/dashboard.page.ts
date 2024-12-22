import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone'; // Import IonButton

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule] // Add IonButton here
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  navigateToLogger() {
    this.router.navigate(['/workout-logger']);
  }

  navigateToGallery() {
    this.router.navigate(['/gallery']);
  }

  navigateToReminders() {
    this.router.navigate(['/reminders']);
  }

  ngOnInit() {
  }

}

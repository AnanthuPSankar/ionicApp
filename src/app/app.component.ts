import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { routes } from './app.routes'; // Import routes from app.routes.ts
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule] // Import RouterModule here
})
export class AppComponent {
  // You can add any logic here if needed
}

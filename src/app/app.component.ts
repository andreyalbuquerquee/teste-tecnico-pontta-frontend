import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { ClientsComponent } from './pages/clients/clients.component';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, ClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-tecnico-frontend';
}

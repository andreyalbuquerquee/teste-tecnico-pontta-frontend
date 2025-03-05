import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/Client';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-clients',
  imports: [MatButton, MatCardModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

  clients: Client[] = []
  
  constructor(private service: ClientsService) {}

  ngOnInit(): void {
    this.getClients()
  }

  getClients(): void {
    this.service.getAll().subscribe(data => {
      this.clients = data;
    });
  }

  onDelete(id: string): void {    
    this.service.deleteById(id).subscribe({
      next: () => {
        this.clients = this.clients.filter(client => client.id !== id);
      }});
  }
}

import { Component } from '@angular/core';
import { boton } from '../../interface/boton';
import { BotonService } from '../../services/boton.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[BotonService]
})
export class HomeComponent {
  botones: boton[] = [];

  constructor(private botonService: BotonService) {}

  ngOnInit() {
    this.botonService.getBoton().then(data => this.botones = data);
  }

  onButtonClick(btn: boton) {
    console.log(`Button ${btn.cabeceraboton} clicked!`);
  }
}

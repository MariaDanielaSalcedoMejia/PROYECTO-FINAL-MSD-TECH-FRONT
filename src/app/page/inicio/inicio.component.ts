import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginComponent } from "../../auth/login/login.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [RouterLink, LoginComponent]
})
export class InicioComponent {
  constructor(private router: Router) {}

  abrirModal() {
    Swal.fire({
      icon: 'warning',
      title: 'Oops.',
      text: 'Something went wrong!',
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }


  cambioArticulo() {
    this.router.navigateByUrl('/articulo');
  }
  cambioInicio() {
    this.router.navigateByUrl('/');
  }
}

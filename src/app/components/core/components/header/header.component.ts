import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

    <nav class="navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/medi.png">
        </a>
      </div>

      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="">Home</a>
          <a class="navbar-item" routerLink="contact">Contact</a>
          <a class="navbar-item" routerLink="form">Form</a>
          <a class="navbar-item" routerLink="maps">Maps</a>
          <a class="navbar-item" routerLink="image-gallery">Images</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class SplashPage {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/cats/landing', { replaceUrl: true });
    }, 2500);
  }

}

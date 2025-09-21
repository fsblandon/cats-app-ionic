import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cat } from 'src/app/domain/models/cat.model';
import { ItemCatComponent } from '../item-cat/item-cat.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ItemCatComponent, RouterModule],
})
export class ListCatComponent{
  @Input() cats: Cat[] = [];

}

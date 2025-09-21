import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cat } from 'src/app/domain/models/cat.model';

@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ItemCatComponent {
  @Input() cat!: Cat;
}

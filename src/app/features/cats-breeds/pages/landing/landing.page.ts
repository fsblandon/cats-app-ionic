import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cat } from 'src/app/domain/models/cat.model';
import { GetListCatsUseCase } from 'src/app/domain/usecases/list-cats.usecase';
import { ListCatComponent } from '../../components/list-cat/list-cat.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  imports: [CommonModule, IonicModule, ListCatComponent, RouterModule, FormsModule],
  standalone: true,
})
export class LandingPage implements OnInit {
  isLoading = false;
  cats: Cat[] = [];
  searchTerm: string = '';
  filteredCats: Cat[] = [];

  constructor(private getCats: GetListCatsUseCase) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      this.cats = await this.getCats.execute();
      this.filteredCats = [...this.cats]
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }

  filterCats(event: any) {
    const query = event.target.value?.toLowerCase() ?? '';
    this.searchTerm = query;
    this.filteredCats = this.cats.filter(cat => cat.name.toLowerCase().includes(query));
  }

}

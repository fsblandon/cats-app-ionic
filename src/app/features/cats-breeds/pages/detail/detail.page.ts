import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cat } from 'src/app/domain/models/cat.model';
import { GetCatDetailUseCase } from 'src/app/domain/usecases/get-cat-detail.usecase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class DetailPage implements OnInit {
  isLoading = false;
  cat?: Cat;
  catId?: string;
  imageUrl?: string;

  constructor(
    private getCatDetail: GetCatDetailUseCase,
    private route: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? undefined;
    this.imageUrl = this.route.snapshot.queryParamMap.get('imageUrl') ?? undefined;
    
    this.isLoading = true;
    if (id) {
      this.cat = await this.getCatDetail.execute(id);
      if (this.imageUrl && !this.cat?.image?.url) {
        this.cat = { ...this.cat, image: { url: this.imageUrl } };
      }
    }
    this.isLoading = false;
  }

}

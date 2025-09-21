import { Injectable } from "@angular/core";
import { Cat } from "../models/cat.model";
import { CatRepository } from "../repositories/cat.repository";

@Injectable({ providedIn: 'root' })
export class GetListCatsUseCase {
    constructor(private catRepository: CatRepository) {}
    
    async execute(): Promise<Cat[]> {
        const cats = await this.catRepository.getAll();
        return cats.sort((a, b) => a.name.localeCompare(b.name));
    }

}
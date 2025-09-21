import { Injectable } from "@angular/core";
import { Cat } from "../models/cat.model";
import { CatRepository } from "../repositories/cat.repository";

@Injectable({ providedIn: 'root' })
export class GetCatDetailUseCase {
    constructor(private catRepository: CatRepository) {}
    
    async execute(id: string): Promise<Cat> {
        return this.catRepository.getById(id);
    }

}
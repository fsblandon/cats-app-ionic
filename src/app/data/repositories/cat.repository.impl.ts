import { CatApiDataSource } from "src/app/data/datasources/cat.api.datasource";
import { Cat } from "../../domain/models/cat.model";
import { Injectable } from "@angular/core";
import { CatRepository } from "src/app/domain/repositories/cat.repository";

@Injectable({ providedIn: 'root' })
export class CatRepositoryImpl implements CatRepository {
    constructor(private api: CatApiDataSource) {}

    getAll(): Promise<Cat[]> {
        return this.api.getAll();
    }

    getById(id: string): Promise<Cat> {
        return this.api.getById(id);
    }
}
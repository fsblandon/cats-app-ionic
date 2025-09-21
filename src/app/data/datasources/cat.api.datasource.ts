import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/app/core/env/environment";
import { Cat } from "src/app/domain/models/cat.model";

@Injectable({
    providedIn: 'root'
})
export class CatApiDataSource {
    private apiUrl = 'https://api.thecatapi.com/v1';

    constructor(private http: HttpClient) {}

    async getAll(): Promise<Cat[]> {
        const options = environment.THE_CAT_API_KEY
            ? { headers: { 'x-api-key': environment.THE_CAT_API_KEY } }
            : {};
        return await firstValueFrom(
            this.http.get<Cat[]>(`${this.apiUrl}/breeds`, options)
        );
    }

    async getById(id: string): Promise<Cat> {
        return await firstValueFrom(this.http.get<Cat>(`${this.apiUrl}/breeds/${id}`));
    }
}   
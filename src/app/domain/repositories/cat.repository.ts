import { Cat } from "../models/cat.model";

export abstract class CatRepository {
    abstract getAll(): Promise<Cat[]>;
    abstract getById(id: string): Promise<Cat>;
}
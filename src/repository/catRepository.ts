import Cat from "../models/cats";

export default interface CatRepository {
    listAll(): Promise<Cat[]>
    create(cat: Cat): Promise<Cat>
    deleteByName(name: String): Promise<void>
}

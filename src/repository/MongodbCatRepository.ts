
import CatRepository from "./catRepository";
import { Collection, MongoClient } from 'mongodb'
import Cat from "../models/cats";

export default class MongodbCatRepository implements CatRepository {
    
    private collection: Collection<Cat>

    constructor(url: string, database: string) {
        const client = new MongoClient(url)
        client.connect()
        const db = client.db(database)
        this.collection = db.collection("cats")
    }
    
    listAll(): Promise<Cat[]> {
        return this.collection.find().toArray()
    }

    async create(cat: Cat): Promise<Cat> {
        await this.collection.insertOne(cat)
        return cat
    }

    async deleteByName(name: String): Promise<void> {
        await this.collection.deleteOne({name})
    }
}
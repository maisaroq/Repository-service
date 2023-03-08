
import CatRepository from "./catRepository";
import { Collection, MongoClient } from 'mongodb'
import Cat from "../models/cats";

export default class MongodbCatRepository implements CatRepository {
    
    private connectionUrl: string = 'mongodb://admin:password@localhost:27017'
    private databaseName: string = "Mais-user"
    private collectionName: string = "cats"
    private collection: Collection<Cat>

    constructor() {
        const client = new MongoClient(this.connectionUrl)
        client.connect()
        const db = client.db(this.databaseName)
        this.collection = db.collection(this.collectionName)
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
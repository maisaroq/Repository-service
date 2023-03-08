import Cat from "../models/cats";
import CatRepository from "../repository/catRepository";


export default class CatService { 
    private catRepo: CatRepository // its undefined 

    constructor(catRepo: CatRepository){
        this.catRepo = catRepo // here it got assigned in cat repo
    }

    listAll(): Promise<Cat[]> {
        return this.catRepo.listAll()
    }

    create(cat: Cat): Promise<Cat> {
        return this.catRepo.create(cat)
    }

    deleteByName(name: String): Promise<void>{
        return this.catRepo.deleteByName(name)
    }


}


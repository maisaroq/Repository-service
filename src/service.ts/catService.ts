import Cat from "../models/cats";
import CatRepository from "../repository/catRepository";


export default class CatService { 
    private catRepo: CatRepository // its undefined 

    constructor(catRepo: CatRepository){
        this.catRepo = catRepo // here it got assigned in cat repo
    }

    listAll() {
        return this.catRepo.listAll()
    }

    createAcat(cat: Cat): Cat {
        return this.catRepo.createAcat(cat)
    }

    deleteAcat(name: String){
        return this.catRepo.deleteAcat(name)
    }


}


import Cat from "../models/cats";

let cats: Cat[] = [
    { name: "Dömper", age: 3, color: "black & white" }
]

export default class CatRepository {
    listAll(): Cat[] {
        return cats
    }

    createAcat(cat: Cat): Cat {
        cats.push(cat)
        return cat
    }

    deleteAcat(name: String): void {
        cats = cats.filter((cats) => cats.name !== name)
    }
}
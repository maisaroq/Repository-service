import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import MongodbCatRepository from '../src/repository/MongodbCatRepository'
import CatService from '../src/service.ts/catService'
import { MongoMemoryServer } from 'mongodb-memory-server'

/*
When running automated tests, the test shoudl:
1. Create a testing database
2. Create a service which connets the testing database
3. Assert the created service's correctness
4. Delete the testing database
*/

describe("CatService", () => {
    let service: CatService
    let mongod: any

    beforeAll(async () => {
        mongod = await MongoMemoryServer.create();

        service = new CatService(
            new MongodbCatRepository(mongod.getUri(), "testing-cats")
        )
    })

    afterAll(async () => {
        await mongod.stop();
    })

    it('Creates a cat', async () => {
        const cat = {
            name: 'Cat',
            age: 3,
            color: 'pink'
        }

        await service.create(cat)
        const cats = await service.listAll()
        expect(await service.listAll()).toContainEqual(cat)
    })
})

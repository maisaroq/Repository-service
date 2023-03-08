//import * as Repo from './repository/catRepository'
import Router from "@koa/router"
import bodyParser from "koa-bodyparser"
import CatService from "./service.ts/catService"
import type Cat from "./models/cats"
import { MongoClient } from 'mongodb'
import MongodbCatRepository from "./repository/MongodbCatRepository"


const service: CatService = new CatService(
    new MongodbCatRepository()
)

const router = new Router({
    prefix: '/cats'
})

const url = 'mongodb://admin:password@localhost:27017'
const client = new MongoClient(url)
const dbName = "Mais-user"

router.use(bodyParser());

router.get('/', async (ctx) => {
    const cats = await service.listAll()
    ctx.body = cats
})

 router.post('/', async (ctx) => {
     let cat = ctx.request.body as Cat //TODO it might be undefined
     const newCat = await service.create(cat)
     ctx.response.status = 201
     ctx.body = newCat
 })

router.delete('/:name', async (ctx) => {
    const name = ctx.params.name
    await service.deleteByName(name)
    ctx.response.status = 204
})

export default router

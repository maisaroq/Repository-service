//import * as Repo from './repository/catRepository'
import Router from "@koa/router"
import bodyParser from "koa-bodyparser"
import CatService from "./service.ts/catService"
import CatRepository from "./repository/catRepository"
import type Cat from "./models/cats"

const service: CatService = new CatService(
    new CatRepository()
)

const router = new Router({
    prefix: '/cats'
})

router.use(bodyParser());

router.get('/', (ctx) => {
    const cats = service.listAll()
    ctx.body = cats
})

 router.post('/', (ctx) => {
     let cat = ctx.request.body as Cat //TODO it might be undefined
     const newCat = service.createAcat(cat)
     ctx.response.status = 201
     ctx.body = newCat
 })

router.delete('/:name', (ctx) => {
    const name = ctx.params.name
    service.deleteAcat(name)
    ctx.response.status = 204

})

export default router

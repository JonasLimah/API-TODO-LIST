import {Router} from "express";
import * as endPoint from "../controller/router"
export const router = Router()

router.get("/tarefas", endPoint.getAll)

router.get("/tarefas/:id",endPoint.getOne)

router.post("/tarefas/add",endPoint.postOne)

router.put("/tarefas/edit/:id",endPoint.putOne)

router.delete("/tarefas/delete/:id", endPoint.deleteOne)
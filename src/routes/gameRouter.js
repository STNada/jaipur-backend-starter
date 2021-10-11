import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

router.post("/", function (req, res) {
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json(newGame)
})

export default router

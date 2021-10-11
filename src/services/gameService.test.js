import * as gameService from "./gameService"
import lodash from "lodash"

// TODO: Mock lodash shuffle
jest.mock("lodash")
lodash.shuffle.mockImplementation((x) => x)

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)
  })

  test("should init a deck", () => {
    const deck = gameService.initDeck()
    expect(deck.length).toBe(55)
    expect(deck.filter((card) => card === "diamonds").length).toBe(6)
    expect(deck.filter((card) => card === "gold").length).toBe(6)
    expect(deck.filter((card) => card === "silver").length).toBe(6)
    expect(deck.filter((card) => card === "cloth").length).toBe(8)
    expect(deck.filter((card) => card === "spice").length).toBe(8)
    expect(deck.filter((card) => card === "leather").length).toBe(10)
    expect(deck.filter((card) => card === "camel").length).toBe(11)
  })

  test("should draw cards", () => {
    // TODO
    const deck = ["camel", "diamonds", "gold"]
    const drawedCard = gameService.drawCards(deck, 1)
    expect(deck.length).toBe(2)
    expect(drawedCard).toStrictEqual(["camel"])
  })
})

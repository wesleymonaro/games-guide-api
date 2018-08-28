'use strict'

/**
 * Resourceful controller for interacting with games
 */
class GameController {
  /**
   * Show a list of all games.
   * GET games
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new game.
   * GET games/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new game.
   * POST games
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single game.
   * GET games/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing game.
   * GET games/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update game details.
   * PUT or PATCH games/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a game with id.
   * DELETE games/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GameController

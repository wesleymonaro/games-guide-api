'use strict'

/**
 * Resourceful controller for interacting with favoritegames
 */
class FavoriteGameController {
  /**
   * Show a list of all favoritegames.
   * GET favoritegames
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new favoritegame.
   * GET favoritegames/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new favoritegame.
   * POST favoritegames
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single favoritegame.
   * GET favoritegames/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing favoritegame.
   * GET favoritegames/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update favoritegame details.
   * PUT or PATCH favoritegames/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a favoritegame with id.
   * DELETE favoritegames/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FavoriteGameController

'use strict'

/**
 * Resourceful controller for interacting with platforms
 */
class PlatformController {
  /**
   * Show a list of all platforms.
   * GET platforms
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new platform.
   * GET platforms/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new platform.
   * POST platforms
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single platform.
   * GET platforms/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing platform.
   * GET platforms/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update platform details.
   * PUT or PATCH platforms/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a platform with id.
   * DELETE platforms/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PlatformController

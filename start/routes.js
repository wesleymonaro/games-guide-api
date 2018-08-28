'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.post('/sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.get('/games/search/:query', 'GamesController.index')
}).middleware(['auth'])

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

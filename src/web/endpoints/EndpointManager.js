"use strict"

module.exports = function ($injector, _, Logger) {
	return new class EndpointManager {
		register(app) {
			let endpoints = $injector.getRegex(/Endpoint$/)
			_.each(endpoints, (endpoint, name) => {
				Logger.info(`Registering ${name}`)
				app.use(endpoint.middleware())
			})
		}
	}
}
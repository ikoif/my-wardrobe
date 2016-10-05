"use strict";

describe("sanity check that server tests work", function() {
    beforeEach(function() {
        injectIntoScope(this, ["WebServer", "HTTPService", "config", "Logger"])
        this.baseUrl = `http://localhost:${this.config.Port}`
    })
    it("initial test", function() {
        expect(global.injector).toBeTruthy()
    })

    it("server start", function*() {
        yield this.WebServer.start()

        let response = yield this.HTTPService.get(this.baseUrl + "/hello").promise()
        expect(response.text).toBe("Hey")

        yield this.WebServer.stop()
    })


    it("server stop", function*() {
        yield this.WebServer.start()
        yield this.WebServer.stop()

        try {
            yield this.HTTPService.get(this.baseUrl + "/hello").promise()
        } catch (err) {
            expect(err.internalError.code).toBe("ECONNREFUSED")
        }

    })
})
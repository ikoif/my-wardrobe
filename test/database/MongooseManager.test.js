"use strict";

describe("database SystemMongoConnection", function() {
    let connection

    beforeEach(function*() {
        injectIntoScope(this, ["MongooseManager", "MongooseConnection", "config", "Logger"])

        connection = yield this.MongooseManager.connect()
    })
    afterEach(function*() {
        yield this.MongooseManager.disconnect()
    })

    it("should return connection", function() {
        expect(this.MongooseManager.connection).toBeTruthy()
        expect(this.MongooseConnection).toEqual(this.MongooseManager.connection)
        expect(this.MongooseManager.connection).toEqual(connection)
    })

    // it("close an open connection", function*() {
    //     let connection,
    //         closeConnection,
    //         testUsername = "test"
    //
    //     try{
    //         connection = yield this.SystemMongoConnection.get()
    //         connection = yield this.SystemMongoConnection.get({options:{user:testUsername}})
    //         expect(connection.options.user).not.toEqual(testUsername)
    //
    //         closeConnection = yield this.SystemMongoConnection.close()
    //         connection = yield this.SystemMongoConnection.get({options:{user:testUsername}})
    //         expect(connection.options.user).toEqual(testUsername)
    //     } catch (err) {
    //         this.Logger.error('Connection error: ', err)
    //     }
    // })

    it("should return correct error", function*() {
        this.Logger.useRecorder()
        try{
            yield this.MongooseManager.connect({uri:"wrong"})
        } catch(err){
            expect(err.message).toEqual("Failed to connect to Mongo with uri: wrong")
        }
    })
})

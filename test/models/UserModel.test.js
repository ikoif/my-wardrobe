"use strict";

describe("User model", function() {
    beforeEach(function * () {
        injectIntoScope(this, ["MongooseManager", "Schema", "mongoose", "UserModel", "config", "Logger"])
        // this.baseUrl = `http://localhost:${this.config.Port}`
        this.connection = yield this.MongooseManager.connect()
    })
    afterEach(function*() {
        yield this.connection.db.dropDatabase()
        yield this.MongooseManager.disconnect()
    })

    it("should create model and save record", function*() {
        let record

        let testUser = new this.UserModel({
            firstName: 'Test',
            lastName: 'User',
            email: 'test@nift.io',
            isAdmin: true,
            password: 'hash',
            salt: 'pepper'
        })

        record = yield testUser.save()

        expect(record._id).toEqual(jasmine.any(this.mongoose.Types.ObjectId))
        let userFind = yield this.UserModel.findOne({_id:record._id})
        expect(userFind._id).toEqual(record._id)
    })

    it("should fail when email is not unique", function*() {
        let error,
            user = {
                firstName: 'Test',
                lastName: 'User',
                email: 'test@nift.io',
                isAdmin: true,
                password: 'hash',
                salt: 'pepper'
            }

        let testUser = new this.UserModel(user)
        yield testUser.save()

        try{
            let anotherTestUser = new this.UserModel(user)
            yield anotherTestUser.save()
        } catch (err) {
            error = err.message
        }

        expect(error).toMatch(/^E11000/)
    })

    it("should fail when required fields are missing", function*() {
        let user = {
                firstName: 'Test',
                lastName: 'User',
                email: 'test@nift.io',
                password: 'hash',
                salt: 'pepper'
            }

        for (let k of Object.keys(user)) {
            let clone = _.clone(user),
                error
            delete clone[k]

            try{
                let testUser = new this.UserModel(clone)
                yield testUser.save()
            } catch (err) {
                error = err.message
            }

            expect(error).toEqual('User validation failed')
        }
    })

    it("should insert default data", function*() {
        let testUser = new this.UserModel({
            firstName: 'Test',
            lastName: 'User',
            email: 'test@nift.io',
            password: 'hash',
            salt: 'pepper'
        })

        let record = yield testUser.save()
        expect(record.isAdmin).toBeFalsy()
    })
})

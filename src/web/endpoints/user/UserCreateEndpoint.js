"use strict"

module.exports = function(KoaRouter, UserModel) {
    return new KoaRouter().post('/user/create', function*() {
        let obj = this.request.body
        try {
            yield UserModel.create(obj)
        } catch (err) {
            console.log(err)
            obj = err
        }
        this.body = obj
    })
}
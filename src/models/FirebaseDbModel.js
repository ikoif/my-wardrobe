"use strict";

module.exports = function(FirebaseDbManager) {
    return class FirebaseDbModel {
        constructor(name){
            if(name){
                this.ref = FirebaseDbManager.ref.child(name)
            } else {
                this.ref = FirebaseDbManager.ref
            }
        }

        create(obj, id){
            obj.added = new Date().toISOString()

            if(id){
                return this.ref.child(id).set(obj)
            } else {
                return this.ref.push().set(obj)
            }
        }

        update(id, obj) {
            obj.lastUpdated = new Date().toISOString()
            return this.ref.child(id).update(obj)
        }

        find(query){
            return this.ref.orderByChild(query)
        }
    }
}
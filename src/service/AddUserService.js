"use strict";

module.exports = function(FirebaseDbManager) {

    return new class AddUserService {
        seed() {
            let usersRef = FirebaseDbManager.ref.child("users")
            return usersRef.set({
                alanisawesome: {
                    date_of_birth: "June 23, 1912",
                    full_name: "Alan Turing"
                },
                gracehop: {
                    date_of_birth: "December 9, 1906",
                    full_name: "Grace Hopper"
                }
            })
        }
    }
}

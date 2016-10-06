"use strict";


module.exports = function(firebase, Logger, config) {

    return new class FirebaseDbManager {
        constructor(){
            this.connect()
        }
        
        connect(){
            if(!this.db){
                firebase.initializeApp(config.Firebase)
                Logger.info(`Firebase ${config.Firebase.serviceAccount.projectId} app initiated`)
                this.db = firebase.database()
                this.ref = this.db.ref()
                Logger.info('this.ref registered')
                return this.ref
            }else{
                return "Already connected"
            }
        }

        goOnline(){
            if(!this.db){
                this.connect()
            } else {
                this.db.goOnline()
                return this.db.ref()
            }
        }

        goOffline() {
            this.db.goOffline()
            return true
        }
    }

}

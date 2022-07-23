import admin from "firebase-admin"
import serviceAccount from "./settings-firebase.json" assert {type: "json"}

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://myserver-7f9b6-default-rtdb.firebaseio.com/"
})

export const connectionFirebaseDB=firebase.firestore()


import admin from "firebase-admin"
import { readFileSync } from "fs";
const serviceAccount = JSON.parse(readFileSync("./src/DAO/config/settings-firebase.json"));

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://myserver-7f9b6-default-rtdb.firebaseio.com/"
})

export const connectionFirebaseDB=firebase.firestore()


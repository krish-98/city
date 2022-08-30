import { setDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"

// Add document to the firestore db
export const storeItem = async (data) => {
  const docRef = doc(db, "foodItems", `${Date.now()}`)

  await setDoc(docRef, data, { merge: true })
}

import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore"
import { db } from "../firebase.config"

// Add document to the firestore db
export const storeItem = async (data) => {
  const docRef = doc(db, "foodItems", `${Date.now()}`)

  await setDoc(docRef, data, { merge: true })
}

// Get documents from the firestore db collection
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(db, "foodItems"), orderBy("id", "desc"))
  )

  return items.docs.map((doc) => doc.data())
}

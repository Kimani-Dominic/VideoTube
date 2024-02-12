import firebaseApp from "./Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function getVideoSuggestionDocument(id: string) {
    const collectionName = "video_suggestion";
    const docRef = doc(db, collectionName, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
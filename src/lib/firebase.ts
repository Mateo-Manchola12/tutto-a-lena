import type { BusinessInfo } from '@/types/pageTypes';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyB2TySez00zpXhC7_Yskfk4YS4frR-jjn4',
    authDomain: 'tutto-a-lena-cms.firebaseapp.com',
    projectId: 'tutto-a-lena-cms',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getBusinessInfo() {
    const ref = doc(db, "business_info", "1");
    const snap = await getDoc(ref);

    return snap.data() as BusinessInfo;
}
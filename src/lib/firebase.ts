import type { BusinessInfo, Menu } from '@/types/pageTypes';
import { initializeApp } from "firebase/app";
import type { FieldValue, Timestamp } from 'firebase/firestore'
import { getFirestore, doc, getDoc } from "firebase/firestore";

type FirestoreDateValue = Timestamp | FieldValue | null

export type PublishStatus = 'idle' | 'publishing' | 'published' | 'failed'
export interface BuildPointers {
    lastMenuId: number
    lastContentId: number
    lastEventsId: number
    lastGalleryId: number
}

export interface BuildCurrent extends BuildPointers {
    status: PublishStatus
    buildId: string | null
    updatedAt: FirestoreDateValue
}

export class Firebase {
    static FIREBASE_CONFIG = {
        apiKey: 'AIzaSyB2TySez00zpXhC7_Yskfk4YS4frR-jjn4',
        authDomain: 'tutto-a-lena-cms.firebaseapp.com',
        projectId: 'tutto-a-lena-cms',
    };

    static app = initializeApp(this.FIREBASE_CONFIG);
    static db = getFirestore(this.app);
    static currentBuild: BuildCurrent | null = null;

    static async getCurrentBuild() {
        if (!this.currentBuild) {
            const currentRef = doc(this.db, "builds", "current");
            const currentSnap = await getDoc(currentRef);
            this.currentBuild = currentSnap.data() as BuildCurrent;
        }

        return this.currentBuild;
    }

    static async getBusinessInfo() {
        const currentBuild = await this.getCurrentBuild();
        const ref = doc(this.db, "business_info", currentBuild.lastContentId.toString());
        const snap = await getDoc(ref);

        return snap.data() as BusinessInfo;
    }


    static async getMenuInfo() {
        const currentBuild = await this.getCurrentBuild();
        const ref = doc(this.db, "menu", currentBuild.lastMenuId.toString());
        const snap = await getDoc(ref);

        return snap.data() as Menu;
    }
}
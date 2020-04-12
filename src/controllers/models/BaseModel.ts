import firestore from '../../utils/database';

class BaseModel {
    /** Firestore instance */
    public firestore: any;

    /**
     * Constructor
     */
    constructor() {
        this.firestore = firestore;
    }

    /**
     * Get firestore document By Id
     * @param collection - firestore collection name
     * @param id - firestore document id
     */

    async getDocumentById(collection: string, id: number | string) {
        const doc = await this.firestore.collection(collection).doc(id).get();
        const data = await doc.data();
        return data;
    }
}

export default BaseModel;

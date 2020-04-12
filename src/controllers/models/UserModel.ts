import BaseModel from './BaseModel';

class UserModel extends BaseModel {
    /** Firestore collection name */
    public collection: string = 'users';
    /**
     * constructor
     */
    constructor() {
        super();
    }

    /**
     *  Get user Document by id
     * @param id
     */

    public getUserDocument(id: number | string) {
        return this.getDocumentById(this.collection, id);
    }
}

export default UserModel;

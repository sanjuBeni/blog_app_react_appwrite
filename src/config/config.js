const envUrl = import.meta.env;

const config = {
    appWriteUrl : String(envUrl.VITE_APPWRITE_URL),
    appWriteProjectId : String(envUrl.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(envUrl.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId : String(envUrl.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId : String(envUrl.VITE_APPWRITE_BUCKET_ID),


}


export default config
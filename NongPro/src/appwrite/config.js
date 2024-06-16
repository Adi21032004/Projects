import config from "../conf/config";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65c5bf35bb81f8715b13")
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredimage,status,userId}){
        try {
            return await this.databases.createDocument(
                "65c5c0592543d33eba7f",
                "65c5c08ebad221ca94dc",
                slug,// what is slug ??
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
                
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
            )

            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                "65c5c0592543d33eba7f",
                "65c5c08ebad221ca94dc",
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            return false
        }
    }
    
    //file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                "65c5c275ad914e593625",
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    //file delete service

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                "65c5c275ad914e593625",
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            "65c5c275ad914e593625",
            fileId
        )
    }
}

const appwriteService = new Service();

export default appwriteService
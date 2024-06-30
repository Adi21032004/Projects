import { Client, Account, ID } from "appwrite";
import config from "../conf/config.js";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")//url has some problem need to fix
            .setProject("65c5bf35bb81f8715b13")

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return this.login({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password)
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error)
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
    }
}

const authService = new AuthService()  //it is an object



export default authService
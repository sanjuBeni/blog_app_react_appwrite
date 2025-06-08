import {Client, Account, ID} from "appwrite"
import config from "../../config/config"

class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId)
        
        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}) {
        try {
            const account = await this.account.create(ID.unique(), email, password, name)
            if(account) {
                // call login method when accoutn create
                return this.login(email, password)
            }else {
                return account
            }
        } catch (error) {
            console.log(`Some error :: createAccount :: ${error}`)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log(`Error Method :: login :: ${error}`)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(`Error Method :: getCurrentUser :: ${error}`)
        }
        return null
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(`Error Method :: logout :: ${error}`)
        }
    }



}

const authService = new AuthService()


export default authService
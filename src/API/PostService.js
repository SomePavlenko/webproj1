import axios from "axios";

export default class PostService{
    static async getAll(){
            const respons = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return respons.data
    }

}
import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:5171/api/Products/getAll?PageSize=100")
    }
}
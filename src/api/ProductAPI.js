import {axiosClient} from "./axioClinet";


const ProductAPI = {
    getALl() {
        const url = "/all"
        return axiosClient.get(url)
    },
    getById(id){
        const url = `/${id}`
        return axiosClient.get(url)
    },
    create(data){
        const url = `/add`
        return axiosClient.post(url,data)
    },
    edit(id,data){
        const url = `/update/${id}`
        return axiosClient.put(url,data)
    },
    remove(id){
        const url=`delete/${id}`
        return axiosClient.delete(url)
    }
}
export default ProductAPI
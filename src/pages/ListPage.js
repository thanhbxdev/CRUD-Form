import React, {useEffect, useState} from "react";
import ProductAPI from "../api/ProductAPI";

function ListPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const {data: db} = await ProductAPI.getALl()
                setProducts(db.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    const deletePrd = async (id, name) => {
        const result = window.confirm(`delete ${name}`)
        if (result) {
            await ProductAPI.remove(id)
            setProducts(products.filter((item) => item.id !== id))
        }
    }

    return (
        <div className="App">
            {loading ? (<div>Loading</div>) : ('')}
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {products?.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th>{index += 1}</th>
                            <td>{item.name}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deletePrd(item.id, item.name)}
                                >
                                    Delete
                                </button>
                                <a className="btn btn-success" href={`/edit/${item.id}`}>
                                    Edit
                                </a>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default ListPage
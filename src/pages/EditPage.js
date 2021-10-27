import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom"
import {useForm} from "react-hook-form";
import ProductAPI from "../api/ProductAPI";

function EditPage() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const history = useHistory()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const {data: product} = await ProductAPI.getById(id)
                console.log(product)
                const {photo, ...newProduct} = product.data
                setProduct(newProduct)
                console.log(newProduct)
                reset(newProduct)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])
    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        // formData.append('category', data.category)
        // formData.append('price', data.price)
        // formData.append('price_sale', data.price_sale)
        // formData.append('quantity', data.quantity)
        // formData.append('description', data.description)
        // formData.append('shipping', data.shipping)
        // if (data.photo.length > 0) {
        //     formData.append('photo', data.photo[0])
        // }
        console.log(formData)
        await ProductAPI.edit(id, formData).then(() => {
            history.push('/list')
        })
    }
    return (
        <div>
            <div className="content-header">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                {...register('name', {required: true})}
                            />
                            {errors.name && (
                                <small id="emailHelp" className="form-text  text-danger">
                                    Name Required
                                </small>
                            )}
                        </div>
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Price</label>*/}
                        {/*    <input*/}
                        {/*        type="number"*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="Enter Price"*/}
                        {/*        {...register('price', { required: true })}*/}
                        {/*    />*/}
                        {/*    {errors.price && (*/}
                        {/*        <small id="emailHelp" className="form-text  text-danger">*/}
                        {/*            Price Required*/}
                        {/*        </small>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Sale</label>*/}
                        {/*    <input*/}
                        {/*        type="number"*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="Enter Sale"*/}
                        {/*        {...register('price_sale')}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Quantity</label>*/}
                        {/*    <input*/}
                        {/*        type="number"*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="Enter Qunatity"*/}
                        {/*        {...register('quantity', { required: true })}*/}
                        {/*    />*/}
                        {/*    {errors.quantity && (*/}
                        {/*        <small id="emailHelp" className="form-text  text-danger">*/}
                        {/*            Quantity Required*/}
                        {/*        </small>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                    </div>
                    {/*End col */}
                    <div className="col-sm-6">
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Description</label>*/}
                        {/*    <textarea*/}
                        {/*        className="form-control"*/}
                        {/*        id="exampleFormControlTextarea1"*/}
                        {/*        rows={5}*/}
                        {/*        {...register('description', { required: true })}*/}
                        {/*    />*/}
                        {/*    {errors.description && (*/}
                        {/*        <small id="emailHelp" className="form-text  text-danger">*/}
                        {/*            Description Required*/}
                        {/*        </small>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Image</label>*/}
                        {/*    <input*/}
                        {/*        type="file"*/}
                        {/*        className="form-control"*/}
                        {/*        {...register('photo')}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="py-3">
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                            <Link to="/list" className="btn btn-danger mx-2">
                                <span>Cancel</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPage
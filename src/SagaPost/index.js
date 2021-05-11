import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadStart } from './../action/action';


const FetchProduct = () => {
    const dispatch = useDispatch();
    const fetchProduct = () => {
        dispatch(loadStart())
    }

    const state = useSelector((state) => ({ ...state.products }));

    return (
        <>

            <h2>Fetch Product using saga</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category_Id</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {!state.loading && state.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.Price}</td>
                            <td>{product.Category_Id}</td>
                            <td>{product.rating}</td>
                            <td>
                                <button className="edit mx-1" title="Edit" data-toggle="tooltip"><i class="fas fa-edit"></i></button>
                                <button className="delete mx-1"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            <button className="mt-2 ml-2 border-2" onClick={fetchProduct}>Fetch Products</button>
            <button className="mt-2 ml-2 border-2">Add Product</button>
        </>
    );
};

export default FetchProduct;

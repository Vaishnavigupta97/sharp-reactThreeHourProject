import { useState } from "react";

const Form = (props) => {
    const [productId, setProductId] = useState([]);
    const [sellingPrice, setSellingPrice] = useState([]);
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState();

    const productIdHandler = (event) => {
        setProductId(event.target.value);
    }
    const sellingPriceHandler = (event) => {
        setSellingPrice(event.target.value);
    }
    const productHandler = (event) => {
        setProductName(event.target.value);
    }
    const categoryHandler = (event) =>{
        setCategory(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const todoObj = {
            product: productId,
            sellprice: sellingPrice,
            productName: productName,
            category: category
        }
        props.onaddDataList(todoObj);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Product Id:</label>
                <input
                    type="number"
                    value={productId}
                    onChange={productIdHandler}
                />
                <label>Selling Price:</label>
                <input
                    type="number"
                    value={sellingPrice}
                    onChange={sellingPriceHandler}
                />
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={productHandler}
                />
                <label>Choose a category:</label>
                <select value={category} onChange={categoryHandler}>
                    <option>Electronics</option>
                    <option>Food</option>
                    <option>Soap</option>
                </select>
                <button type="submit">Add Product</button>
            </form>
        </>
    )
}

export default Form;
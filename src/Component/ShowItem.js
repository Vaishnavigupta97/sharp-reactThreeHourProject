// import { useEffect } from "react";

const ShowItem = (props) => {
    const deleteProduct =() => {
        // const updatedListData = props.showatList.filter((element, id) => {
        //     return x != id;
        // })
        localStorage.removeItem(props.product);
    }
    return (
        <>
        <ul>
        {props.showatList.map((event) => {
            return <li key={event.product}>
                {event.sellprice}-food- {event.productName} 
                <button onClick={()=>deleteProduct()}>Delete Product</button>
            </li>
        })}
        </ul>
        </>
    )
}

export default ShowItem;
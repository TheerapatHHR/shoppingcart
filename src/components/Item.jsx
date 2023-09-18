import { useState } from "react";
import classes from "./style/item.module.css";

function Item({ item, sendItemData }){
    const receiveItem = {item}.item;
    const item_name = receiveItem.item_name;
    const category = receiveItem.category;
    let price = receiveItem.price;
    let [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count+=1);
        // let totalprice = price*count;
        // console.log(totalprice);
        sendItemData({
            item_name: item_name,
            category: category,
            price: price
        });
    };
    const remove = () => {
        if(count!=0){
            setCount(count-=1);
        }
        else{
            setCount(0);
        }
        // let totalprice = price*count;
        // console.log(totalprice);
        sendItemData({
            item_name: item_name,
            category: category,
            price: price
        });
    };

    
    // console.log(ReceiveItem);

    return(
        <>
        <div  className={classes.item}>
            <div className={classes.itemname}>{item_name}</div>
            <div className={classes.itemprice}>{price}</div>
            <div>
                <button onClick={remove} className={classes.count}>-</button>
                <div className={classes.count}>{count}</div>
                <button onClick={addOne} className={classes.count}>+</button>
            </div>
            
        </div>
        </>
    );
}

export default Item;
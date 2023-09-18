import Modal from "../components/Modal";
import { useLocation } from 'react-router-dom';
import classes from "./style/Checkout.module.css";

function Checkout(){
    const location = useLocation();
    const itemcart = location.state;
    // console.log(itemcart);
    return(
        <>
            <Modal>
                <div className={classes.result}>
                    <div>Total Price: {itemcart.price}</div>
                    <div>Total Discount: {itemcart.totalDiscount}</div>
                    <div>Total Price: {itemcart.totalPrice}</div>
                </div>
                
            </Modal>
        </>
    );
}

export default Checkout;

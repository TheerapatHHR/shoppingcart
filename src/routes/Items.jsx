import ItemList from "../components/ItemList";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DiscountSelect from "./DiscountSelect";
import classes from "./style/Items.module.css";

function Items() {
    const [dataFromChild, setDataFromChild] = useState([]);

  const passData = (data) => {
    setDataFromChild([...dataFromChild, data]);
    // console.log(dataFromChild);
  };

    return (
        <>
            <Outlet />
            <div className={classes.rowDisplay}>
                <div className={classes.item}><ItemList passData={passData} /></div>
                <div className={classes.item}><DiscountSelect parentToChild={dataFromChild} /></div>
                
            </div>
            
            {/* {console.log(dataFromChild)} */}
        </>
    );
}

export default Items;

export async function loader(){
    const command = "https://aomsin.online/apiList/get-item";
    const response = await fetch(command);
    const resData = await response.json();
    // console.log(resData);
    return resData.item;
}
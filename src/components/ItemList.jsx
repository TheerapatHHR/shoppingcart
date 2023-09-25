import Item from "./Item";
import { useLoaderData } from "react-router-dom";
import classes from "./style/ItemList.module.css"
import { useState } from "react";

function ItemList({ passData, removeOne }) {
  const items = useLoaderData();

  // const [dataFromChild, setDataFromChild] = useState([]);

  const itemdata = (data) => {
    // setDataFromChild([...dataFromChild, data]);
    passData(data);
  };

  const removeData = (data) => {
    removeOne(data);
  }
  

  return (
    <>
      {items.length > 0 && (
        <ul className={classes.items}>
          {items.map((item) => (
            <Item key={item.item_id} item={item} sendItemData={itemdata} removeOne={removeData} />
          ))}
        </ul>
      )}
      {items.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no item yet.</h2>
          <p>Will arrive soon!</p>
        </div>
      )}
      {/* {console.log(dataFromChild)} */}
    </>
  );
}

export default ItemList;

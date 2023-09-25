import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style/DiscountSelect.module.css";

function DiscountSelect({ parentToChild }) {
  const [coupon, setCoupon] = useState(false);
  const [ontop, setOntop] = useState(false);
  const [seasonal, setSeasonal] = useState(false);
  // console.log(parentToChild);

  const navigate = useNavigate();

  function checkNum(num) {
    if (isNaN(num) || num == "") {
      return 0;
    }
    return parseInt(num);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    const typeJson = [
      checkNum(formJson.discount_type_coupon),
      checkNum(formJson.discount_type_ontop),
      checkNum(formJson.discount_type_seasonal),
    ];
    const amountJson = [
      checkNum(formJson.amount_coupon),
      checkNum(formJson.amount_ontop),
      checkNum(formJson.amount_seasonal),
    ];
    const percentCategory = formJson.discountCategory;
    const pointEvery = checkNum(formJson.pointevery);
    const discountJsonData = {
      discount_type: typeJson,
      amount: amountJson,
      percent_category: percentCategory,
      point_every: pointEvery,
      item_cart: parentToChild,
    };
    console.log(discountJsonData);

    const response = fetch("https://aomsin.online/apiList/get-discount/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(discountJsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("../checkout", { state: data });
      });
  };
  return (
    <>
      <div className={classes.selectDiscount}>
        <form onSubmit={handleSubmit} className={classes.formtable}>
          <div className={classes.discountType}>
            <label className={classes.container}>Coupon
              <input
              className={classes.checkbox}
                type="checkbox"
                checked={coupon}
                onChange={(e) => setCoupon(e.target.checked)}
              />
              {/* <label className={classes.topic}>Coupon</label> */}
              <span className={classes.checkmark}></span>
              <br />
              <select
                disabled={!coupon}
                name="discount_type_coupon"
                defaultValue="0"
              >
                <option value="1">Fixed amount</option>
                <option value="2">Percentage discount</option>
                <option value="0" hidden>
                  Coupon
                </option>
              </select>
              <input
                disabled={!coupon}
                name="amount_coupon"
                type="number"
                min="0"
                defaultValue="0"
                className={classes.amountinput}
              />
            </label>
          </div>
          <br />

          <div className={classes.discountType}>
            <label className={classes.container}>On Top
              <input
                className={classes.checkbox}
                type="checkbox"
                checked={ontop}
                onChange={(e) => setOntop(e.target.checked)}
              />
              {/* <label className={classes.topic}>On top</label> */}
              <span className={classes.checkmark}></span>
              <br />
              <select
                disabled={!ontop}
                name="discount_type_ontop"
                defaultValue="0"
              >
                <option value="3">Percentage discount by category</option>
                <option value="4">Discount by points</option>
                <option value="0" hidden>
                  On Top
                </option>
              </select>
              <input
                disabled={!ontop}
                name="amount_ontop"
                type="number"
                min="0"
                defaultValue="0"
                className={classes.amountinput}
              />
              <select disabled={!ontop} name="discountCategory">
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Electronics">Electronics</option>
              </select>
            </label>
          </div>
          <br />

          <div className={classes.discountType}>
            <label className={classes.container}> Seasonal
              <input
              className={classes.checkbox}
                type="checkbox"
                checked={seasonal}
                onChange={(e) => setSeasonal(e.target.checked)}
              />
              {/* <label className={classes.topic}>Seasonal</label> */}
              <span className={classes.checkmark}></span>
              <br />
              <select
                disabled={!seasonal}
                name="discount_type_seasonal"
                defaultValue="0"
              >
                <option value="5">Special campaigns</option>
                <option value="0" hidden>
                  Seasonal
                </option>
              </select>
              <div className={classes.detail}>discount</div>
              <input
                disabled={!seasonal}
                name="amount_seasonal"
                type="number"
                min="0"
                defaultValue="0"
                className={classes.amountinput}
              />
              <div className={classes.detail}>every</div>
              <input
                disabled={!seasonal}
                name="pointevery"
                type="number"
                min="0"
                defaultValue="0"
                className={classes.amountinput}
              />
            </label>
          </div>
          <br />
          <input type="submit" value="Buy now!" />
        </form>
      </div>
    </>
  );
}

export default DiscountSelect;

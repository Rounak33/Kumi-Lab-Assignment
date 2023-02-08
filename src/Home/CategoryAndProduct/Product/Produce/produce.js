import React, { useState } from "react";
import "./produce.css";
import { useSelector, useDispatch } from "react-redux";
import Add from "../Produce/add.png";
import Minus from "../Produce/minus.png";

function Produce() {
  const categoryArray = useSelector((state) => state.categoryArray);
  const dispatch = useDispatch();
  const [Added, setAdded] = useState(false);
  const item = useSelector((state) => state.item);
  console.log(item[0].productImg);
  function Click() {
    console.log("Button Clicked");
  }

  return (
    <div className="rightSideContainer">
      <ul>
        {categoryArray.map((data) => (
          <li key={data} className="productWithCategory" id={data}>
            <div className="categoryName">
              <span className="catName">{data}</span>
            </div>
            <div className="products">
              {item.map((ele) => (
                <li key={ele} className="product">
                  <div className="productImg">
                    <img
                      src={ele.productImg}
                      alt="img"
                      className="productImage"
                    />{" "}
                    {!Added ? (
                      <img
                        className="add"
                        src={Add}
                        style={{ height: "30px" }}
                        alt="img"
                        onClick={() => {
                          dispatch({ type: "ADD_CART_COUNT" });
                          setAdded(!Added);
                        }}
                      />
                    ) : (
                      <img
                        className="minus"
                        src={Minus}
                        style={{ height: "40px" }}
                        alt="img"
                        onClick={() => {
                          dispatch({ type: "REMOVE_CART_COUNT" });
                          setAdded(!Added);
                        }}
                      />
                    )}
                  </div>
                  <div className="productPrice">${ele.price}</div>
                  <div className="productName">{ele.name}</div>
                  <div className="productWeight">{ele.weight}</div>
                </li>
              ))}
            </div>
            <hr className="line" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produce;

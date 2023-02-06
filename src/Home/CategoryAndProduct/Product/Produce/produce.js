import React from "react";
import "./produce.css";
import { useSelector } from "react-redux";

function Produce() {
  const categoryArray = useSelector((state) => state.categoryArray);
  const item = useSelector((state) => state.item);
  console.log(item[0].productImg);

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
                    /><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="green"
                    class="circle"
                    viewBox="0 0 16 16"
                  >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                  </svg>
                  </div>
                  <div className="productPrice">${ele.price}</div>
                  <div className="productName">{ele.name}</div>
                  <div className="productWeight">{ele.weight}</div>
                </li>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produce;

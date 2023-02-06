import React from 'react'
import './category.css'
import {useSelector} from 'react-redux'

function Category() {
  
  const categoryArray = useSelector(state => state.categoryArray);

  const handleClickScroll = (data) => {
    console.log(data);
    const element = document.getElementById(data);

    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  };
  return (
    <div className='categoryContainer'>
        <div className="wrapper">
        <ul className='categoryList'>
      {categoryArray.map(data => (
        <li key={data} onClick={()=>handleClickScroll(data)}><span>{data}</span></li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default Category
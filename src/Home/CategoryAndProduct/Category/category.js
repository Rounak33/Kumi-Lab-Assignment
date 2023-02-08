import React from 'react'
import './category.css'
import {useSelector} from 'react-redux'

function Category() {
  
  const categoryArray = useSelector(state => state.categoryArray);

  const handleClickScroll = (data,i) => {
    console.log(data);
    const element = document.getElementsByClassName(data)[0];
    const lis = document.getElementsByTagName('li')
    console.log(lis)
    for(let i=0; i<lis.length; i++){
      lis[i].classList.remove("activated")
    }
    console.log(element)
    element.classList.add("activated")
    
    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  };
  return (
    <div className='categoryContainer'>
        <div className="wrapper">
        <ul className='categoryList'>
        {categoryArray.map((data,i) => (
        <li key={i} onClick={()=>handleClickScroll(data,i)} className={`${data} listItem`}><span className='item'>{data}</span></li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default Category
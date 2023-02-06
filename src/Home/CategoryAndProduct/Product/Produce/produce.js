import React from 'react'
import './produce.css'
import {useSelector} from 'react-redux'

function Produce() {
    const categoryArray = useSelector(state => state.categoryArray)
    const item = useSelector(state => state.item)
    console.log(item[0].productImg)

  return (
    <div className='rightSideContainer'>
        <ul>
            {categoryArray.map((data)=>(
                <li key={data} className='productWithCategory' id={data}>
                    <div className='categoryName'>
                        <span className='catName'>{data}</span>
                        
                    </div>
                    <div className='products'>
                        
                        {item.map((ele)=>(
                            <li key={ele} className='product'>
                                <div className='productImg'>
                                    
                                    <img src={ele.productImg} alt="img" className='productImage'/>
                                    
                                </div>
                                <div className='productPrice'>
                                    ${ele.price}
                                </div>
                                <div className='productName'>
                                    {ele.name}
                                </div>
                                <div className='productWeight'>
                                    {ele.weight}
                                </div>
                            </li>
                        ))}  
                    </div>
                </li>
            ))}

        </ul>

    </div>
  )
}

export default Produce

import bg from "../../assets/bg0.gif"
import "./home.css"
import { category } from '../../Category'
import Product from "../../components/Product/Product"
import {dummydata} from '../../dummydata'
import { useState } from "react"

function Home() {
  let [cate, setCate] = useState(dummydata)
  function filterProducts(category){
    const updatedata = dummydata.filter((item) => (item.category === category))
    setCate(updatedata)
  }
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {category.slice(0,5).map((item) => (
          <div className="category-card" onClick={() => {
            filterProducts(item.name)
          }}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
      ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0,7).map((item) => (
          <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
      </div>

    </div>
  )
} 


export default Home

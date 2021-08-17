import React ,{ useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./product.json";
import Sepet from "./components/Sepet";
function App(){
  const [ money, setMoney] = useState(1000);
  const [ sepet, setSepet]  = useState([]);
  const [ total, setTotal]   = useState(0);
  const sepetiTemizle = () => {
    setSepet ([])
  }

  useEffect(() => {
    setTotal(
      sepet.reduce((acc,item) => {
          return acc + ( item.amount * (products.find(product => product.id === item.id).fiyat))
        },0) 
    )
  },[sepet])

   return (
     <>
      <Header total ={total} money = { money }/>
      <div className="container products">
      {products.map(product => {
            return (
              <Product
                  total    = {total}
                  money    = {money}
                  sepet    = {sepet}
                  setSepet = {setSepet}
                  key      = {product.id} 
                  product  = {product}/>
            )
          })
        }
      </div>
        { total > 0 && ( <Sepet sepetiTemizle ={sepetiTemizle} sepet ={sepet} products = {products} total = {total}/>)}
     </>
   )
}
export default App;

import {moneyFormat} from "../Helpers"
import SepetItem from "./SepetIten";
function Sepet({ sepet, products, total, sepetiTemizle }) {
  return (
    <>
      <div className="sepet-container container">
        <h3>Alışveriş Detayları </h3>
        <ul>
          {
            sepet.map(item => (
              <ul>
                <SepetItem
                  key = {item.id}
                  item={item}
                  products={products.find(x => x.id === item.id)}
                />
              </ul>
            ))
          }
        </ul>  <br/>
        <div className="total">
            Toplam : {moneyFormat(total)}
        </div>
      
        <button className="sepet-temizle-btn" onClick={sepetiTemizle}>Sepeti Sıfırla</button>
      </div>
      <style jsx>{`
             .sepet-container {
               padding :20px;
               background-color :#fff;
               border:1px solid #ddd;
             }
             .sepet-container h3 {
               font-size:20px;
               margin-bottom :15px;
             }
             .sepet-container .total {
               border-top:1px solid #ddd;
               padding-top :10px;
               margin-top :10px;
               font-size :18px;
               font-weight : bold;
               text-align : right;
               color :green;
             }
             .sepet-temizle-btn{
               background-color : #61dafb;
               height :40px;
               padding :0 20px;
               font-size :12px;
               font-weight :500;
               cursor :pointer;
             }
            `}
      </style>
    </>
  )
}
export default Sepet;
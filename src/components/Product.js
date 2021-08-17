import {moneyFormat} from "../Helpers";
function Product({ total, money, product, sepet, setSepet }) {
    
    const sepetim = sepet.find(item => item.id == product.id)

    const sepeteEkle = () => {
        const checkSepet = sepet.find(item => item.id === product.id)
        //ürün daha önce eklenmişse
        if (checkSepet) {
            checkSepet.amount += 1;
            setSepet([...sepet.filter(item => item.id !== product.id), checkSepet])
        } else {
            setSepet([...sepet, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const sepettenCikar = () => {
        const currentSepet = sepet.find(item => item.id === product.id);
        const sepetWithhoutCurrent = sepet.filter(item => item.id !== product.id);
        currentSepet.amount -= 1;
        if (currentSepet.amount === 0) {
            setSepet([...sepetWithhoutCurrent])
        }
        else {
            setSepet([...sepetWithhoutCurrent, currentSepet])
        }
    }
    
    return (
        <>
            <div className="product">
                <img src= {product.urunResmi}></img>
                <h6> {product.ad}</h6>
                <div className="price"> {moneyFormat(product.fiyat)} TL</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!sepetim} onClick={sepettenCikar}> Sat </button>
                    <span className="amount"> {sepetim && sepetim.amount || 0} </span>
                    <button className="buyy-btn" disabled={total + product.fiyat > money } onClick={sepeteEkle} > Satın Al</button>
                </div>

                <style jsx>{`
                
                .product {
                    padding       : 15px;
                    background    : #fff;
                    border        : 1px solid #ddd;  
                    margin-bottom : 20px;
                    width :24%;
                }
                
                .product img{
                    width: 100%;
                }
                
                .product h6{
                    font-size :20px;
                    margin-bottom :10px;
                }
                
                .product .actions{
                   display:flex;
                   align-item :center;
                   margin-top :15px;
                }
                
                .product .price{
                    font-size :20px;
                    color : #179b17;
                 }

                 .actions button {
                     height :40px;
                     padding :0 15px;
                     flex :1;
                     cursor :pointer;
                 }
                 .actions button[disabled] {
                     opacity : .3;
                     cursor : not-allowed;
                 }

                 .action .buy-btn {
                     backgorund: #61dafb;
                     font-size :14px;
                     font-weight :500;
                     border-radius :0 4px 4px 0;
                 }
                 .action .sell-btn {
                    background-color: #d2691e;
                    color: white;
                    font-size :14px;
                    font-weight :500;
                    border-radius :4px 0 0 4px;
                }
                 .actions .amount {
                     width :50px;
                     text-align :center;
                     border:1px solid #ddd;
                     height :40px;
                     display :flex;
                     align-items :center;
                     justify-content :center;
                     font-size :17px;
                     font-weight :bold;
                 }
            `}
                </style>
            </div>
        </>
    )
}

export default Product;
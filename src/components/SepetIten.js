function SepetIten({item,products,total}) {
    return (
        <li className="sepet-item">
            { products.ad }  :   <span> {item.amount}</span> adet
        </li>
    )
}
<style jsx>{`
             
            .sepet-item {
              padding-bottom :10px;
              font-size      :17px;
            }
            .sepet-item span {
              color :#999;
            }
            `}
      </style>
export default SepetIten;

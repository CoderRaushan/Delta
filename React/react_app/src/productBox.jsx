import Product from "./product.jsx";
let features=["hi-tech"," durable"," perfect"," good","bsdk"];

// let option =[<li>hi-tech</li>,<li>durable</li>,<li>perfect</li>,<li>diamond</li>]; 1st option is this 
function ProductBox() 
{
  return (
  <div>
      <Product title="Phone" price={58} features={features}/>
      <Product title="Car" price={1658/2}/>
      <Product title="Apple" price={288} features={features}/>
  </div>
  );
}

export default ProductBox;

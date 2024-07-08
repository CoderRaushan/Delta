import "./product.css";

// map ka kaam hai array ke ek ek ele ko lena aur usme changes kar dena

function click()
{
  console.log("bharo meri maang bharo ");
  alert("na chero hame ham sataye hue hai");
}
function Product({ title, price = NaN, features = []}) {
  const list = features.map((feature) => (
    <li>{feature}</li>
  ));

  let isdiscount=price>300;
  let discounClolr={backgroundColor: isdiscount  ? "yellow": "wheat"}
  // const list=features.map((features)=><li>{features}</li>);
  return ( 
    <div className="product" style={discounClolr}>
      <h1>{title}</h1>
      <h3>{price}</h3>
      {/* ternary operator */}
      {isdiscount ? <p>you get 5% discount</p>: <a href="/lklj gij">get discount</a>} 
      {/* {price>300 &&<p>you get 5% discount</p>} //useing and operato */}
      <p>{features}</p>
      {/* <p>{list}</p> */}
      {/* ham ye bhi kar sakte hai ki instead of makin a variable direct likh de dekho niche */}
      <p>{features.map((feature) => (<li>{feature}</li>))}</p>
      <a href="https://rausnotes39.netlify.app/"><button onClick={click} onMouseOver={click}>Click me</button></a>
    </div>
  );
}

export default Product;

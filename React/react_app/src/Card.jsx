import Price from "./Price.jsx";
import "./Card.css"
export default function Card( {title=[],id})
{
let discription=["8,000 DPI","intuitive surface","Designed for ipad pro","wireless"];
let oldprice=["12,495","11,900","1,499","599"];
let newprice=["8,999","9,199","899","270"];
const border = { border: "3px solid black",borderRadius:"20px",margin:"30px"};

    return(
       <div className="main_container">
        <div className="Card" style={border}> 
        <h2>{title}</h2> 
        <h3>{discription[id]}</h3>
        <Price oldprice={oldprice[id]} newprice={newprice[id]}/>
       </div>
       </div>
    );
}
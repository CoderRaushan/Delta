import "./App.css";
// Importing Title component
// import Title from "./Title.jsx";
// For named export 
// let name = "raushan";
// import { Title } from "./Title.jsx";
import ProductBox from './productBox.jsx';
import MsgBox from "./MsgBox.jsx";  
import CardBox from "./CardBox.jsx";
function App() {
  return (
    <div>
      <ProductBox />
      <MsgBox Username="Raushan kumar" textColor="orange"/>
      <MsgBox Username="ansh " textColor="orange"/>
      <MsgBox Username="biku kumar" textColor="orange"/>
       <CardBox/>
    </div>
    // When we don't want these elements inside a parent tag, we use <></>
    // <>
    //   <h1>Hello world, how is everyone?</h1>
    //   <p>This is a normal paragraph.</p>  
    //   <p>Math is: {3*5+3}</p>
    //   <p>Name is: {name}</p>
    //   <Title />
    // </>
  );
}

export default App;

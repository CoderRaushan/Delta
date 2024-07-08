
export default function Price({oldprice, newprice ,id})
{
   let linethrouht={
      textDecorationLine:"line-through"
   };
   let newpricefont={
      fontWeight:"bold"
   }
return(
 <>
    Old price:<span style={linethrouht}>{oldprice}</span> &nbsp; &nbsp;
    new price:<span style={newpricefont}>{newprice}</span>
 </>
);
}
import Link from "next/link";
import { usePhones } from "../hunter-phone/page";

const phn= ()=>{
    const newPhn= usePhones
    console.log(newPhn);

    const phone= newPhn.map((item)=><div className="grid grid-cols-2 border-2 border p-20 gap-5  ">

        
           <img className="h-80 w-100" src={item.image} alt={item.name} />
            
            <h1>name: {item.name}</h1>
            <h1>price:{item.price}</h1>
            <Link href={`/phone/${item.id}`} > see details</Link>
        
        {console.log(item)}
    </div>)

 return<>
 <div className="grid grid-cols-2 p-5 gap-5  ">
    {phone}
 </div>
 </>

}
export default phn 










import { useState } from "react";

import "./Room.css";

import Desktop from "../../components/Desktop/Desktop";

export default function Room(){

const[desktop,setDesktop]=useState(false);

if(desktop){

return <Desktop/>

}

return(

<div className="room">

<div

className="computer"

onClick={()=>setDesktop(true)}

>

<div className="screen"></div>

</div>

<div className="window">

<div className="rain"></div>

</div>

<div className="bed"></div>

<div className="books"></div>

<div className="cassette"></div>

<div className="clock">

22:34

</div>

</div>

)

}
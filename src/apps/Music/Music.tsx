import { useRef } from "react";

export default function Music(){

const audio=useRef<HTMLAudioElement>(null);

return(

<div
style={{
padding:20
}}
>

<h2>

LARP Player

</h2>

<br/>

<audio
ref={audio}
controls
>

<source
src="/music/rain.mp3"
/>

</audio>

</div>

)

}
import "./Archive.css";

const files=[

"IMG0001.jpg",

"IMG0002.jpg",

"IMG0003.jpg",

"Summer.png",

"Rain.png",

"Room.png"

];

export default function Archive(){

return(

<div className="archive">

{files.map(file=>(

<div
className="file"
key={file}
>

🖼

<p>

{file}

</p>

</div>

))}

</div>

)

}
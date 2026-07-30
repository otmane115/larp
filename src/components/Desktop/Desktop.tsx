import { useEffect, useState } from "react";
import Terminal from "../Terminal/Terminal";
import "./Desktop.css";
import type { AppWindow } from "../../types/window";
import Window from "../Window/Window";
import { clickSound } from "../../utils/sounds";
import Browser from "../../apps/Browser/Browser";
import Diary from "../../apps/Diary/Diary";
import Archive from "../../apps/Archive/Archive";
import Music from "../../apps/Music/Music";
import Settings from "../../apps/Settings/Settings";
export default function Desktop() {

const[start,setStart]=useState(false);
const [now, setNow] = useState(new Date());
const [windows, setWindows] = useState<AppWindow[]>([]);
function openWindow(title: string, app: string) {

    setWindows(prev => [

        ...prev,

        {

            id: Date.now(),

            title,

            app

        }

    ]);

}

function closeWindow(id: number) {

    setWindows(prev =>

        prev.filter(w => w.id !== id)

    );

}
  useEffect(() => {
    const i = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(i);
  }, []);
return(

<div className="desktop">

<div
className="icon"
onDoubleClick={() =>
openWindow(
"Internet Explorer",
"internet"
)}
>

🌐

<span>Internet</span>

</div>
<div
    className="icon"
    onDoubleClick={() =>
  openWindow("Terminal", "terminal")
}
>
    💻
    <span>Terminal</span>
</div>
<div
className="icon"
onDoubleClick={()=>openWindow("Diary","diary")}
>

📓

<span>Diary</span>

</div>

<div
className="icon"
onDoubleClick={()=>openWindow("Archive","archive")}
>

📁

<span>Archive</span>

</div>
<div className="icon">

🗑️

<span>Recycle Bin</span>

</div>
{windows.map(window => (

<Window

key={window.id}

title={window.title}

onClose={() => closeWindow(window.id)}

>

{window.app === "internet" && <Browser />}

{window.app === "diary" && <Diary />}

{window.app === "archive" && <Archive />}

{window.app === "terminal" && <Terminal />}

{window.app === "music" && <Music />}

{window.app === "settings" && <Settings />}

</Window>

))}

<div className="taskbar">

<button onClick={()=>setStart(!start)}>
Start
</button>

<div className="clock">

{now.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
})}

</div>

</div>

{start && (

<div className="start-menu">

<div>📓 Diary</div>

<div>🌐 Internet</div>

<div>🎵 Music</div>

<div>📁 Archive</div>

<div>💻 Shut Down</div>


</div>

)}

</div>

)

}
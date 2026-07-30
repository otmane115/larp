import { useEffect, useState } from "react";
import "./Boot.css";

import { bootSound } from "../../utils/sounds";
type Props = {
  onFinish: () => void;
};

const lines = [
  "LARP BIOS v0.1",
  "",
  "Memory Check ............. OK",
  "Loading archive .......... OK",
  "Connecting to the old web.",
  "Dial-up connected.",
  "",
  "Press ENTER",
];

export default function Boot({ onFinish }: Props) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        setVisibleLines((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setReady(true);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (ready && e.key === "Enter") {
        onFinish();
        bootSound.play();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [ready, onFinish]);

  return (
    <div className="boot-screen">

      <div className="scanlines"></div>

      {visibleLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      {ready && (
        <span className="cursor">█</span>
      )}

    </div>
  );
}
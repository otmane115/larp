import { useState } from "react";

import "./Terminal.css";

export default function Terminal() {

    const [history, setHistory] = useState<string[]>([
        "LARP Terminal v0.1",
        "Type 'help' to begin.",
    ]);

    const [command, setCommand] = useState("");

    function runCommand() {

        const cmd = command.trim().toLowerCase();

        let output = "";

        switch (cmd) {

            case "help":
                output = "Commands: help, dir, clear, about";
                break;

            case "dir":
                output = "Diary.txt  Music  Archive  Internet";
                break;

            case "about":
                output = "Lonely Archive & Room Project";
                break;

            case "clear":
                setHistory([]);
                setCommand("");
                return;

            default:
                output = "Unknown command.";
        }

        setHistory(prev => [...prev, "> " + cmd, output]);

        setCommand("");
    }

    return (

        <div className="terminal">

            <div className="history">

                {history.map((line, index) => (

                    <div key={index}>{line}</div>

                ))}

            </div>

            <div className="input-line">

                <span>{">"}</span>

                <input

                    value={command}

                    onChange={(e) => setCommand(e.target.value)}

                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            runCommand();

                        }

                    }}

                />

            </div>

        </div>

    );

}
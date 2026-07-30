import { useState } from "react";
import "./Browser.css";

export default function Browser() {

  const [page, setPage] = useState("home");

  return (

    <div className="browser">

      <div className="toolbar">

        <button onClick={() => setPage("home")}>🏠</button>

        <button onClick={() => setPage("diary")}>📓</button>

        <button onClick={() => setPage("music")}>🎵</button>

        <button onClick={() => setPage("links")}>🔗</button>

        <input
          readOnly
          value={`http://larp.local/${page}.html`}
        />

      </div>

      <div className="page">

        {page === "home" && <HomePage />}
        {page === "diary" && <DiaryPage />}
        {page === "music" && <MusicPage />}
        {page === "links" && <LinksPage />}

      </div>

      <div className="status">

        Done

      </div>

    </div>

  );

}

function HomePage() {

  return (

    <>

      <center>

        <h1>LARP</h1>

<div className="marquee">

<div className="marquee-text">

Welcome to my homepage.

</div>

</div>

      </center>

      <hr />

      <p>
        Last updated:
        April 2003
      </p>

      <br />

      <img
        src="https://media.tenor.com/JjRlfP4Z5XAAAAAM/computer-loading.gif"
        width={150}
        alt=""
      />

    </>

  );

}

function DiaryPage() {

  return (

    <>
      <h2>Diary</h2>

      <p>
        Today it rained.
      </p>

      <p>
        Stayed home.
      </p>

      <p>
        Played old CDs.
      </p>
    </>

  );

}

function MusicPage() {

  return (

    <>
      <h2>Playlist</h2>

      <ul>

        <li>Rain.wav</li>

        <li>Night.mp3</li>

        <li>Memory.mid</li>

      </ul>

    </>

  );

}

function LinksPage() {

  return (

    <>

      <h2>Friends</h2>

      <a href="#">Lain</a>

      <br />

      <a href="#">Old Blog</a>

      <br />

      <a href="#">Guestbook</a>

    </>

  );

}
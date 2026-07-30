import "./Diary.css";

const pages = [
  {
    date: "15 April 2003",
    text: "It rained today.\nStayed inside.\nListened to old cassette tapes."
  },
  {
    date: "16 April 2003",
    text: "Found an old website.\nIt hasn't been updated in years."
  },
  {
    date: "18 April 2003",
    text: "Maybe memories never disappear."
  }
];

export default function Diary() {

    return(

        <div className="diary">

            {pages.map((page,index)=>(

                <div
                    className="page"
                    key={index}
                >

                    <h3>{page.date}</h3>

                    <hr/>

                    <pre>

{page.text}

                    </pre>

                </div>

            ))}

        </div>

    )

}
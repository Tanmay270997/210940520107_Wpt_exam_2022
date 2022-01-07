import axios from "axios";
import { useEffect, useState } from "react";

export default function App()
    {
        return(
          <>
          <MyComponent>
          </MyComponent>
          </>

        );
    }

    function MyComponent()
    {
        const appName = "MyChatApp";
        const studentname = "Tanmay Ghadge";
        const studentid = "210940520107";

        const [Message, setMessage] = useState("");
        const [list, setlist] = useState([]);

        const handlemessage = (e) =>  {
            setMessage(e.target.value);
        };
        return (
            <div>
                <div className = "d-flex align items-center">
                    <h1 className = "p-2 fs-2 text-dark">
                        <strong>{appName}</strong>
                    </h1>
                    <h6 className ="text-dark">
                        <em>
                            by {studentname} {studentid}
                        </em>
                    </h6>
                </div>
            <div className = "d-flex">
                <input
                    className="from-control me-2"
                    type="text"
                    value={Message}
                    placeholder ="Let's Chat here..."
                    onChange={handlemessage}
                    />
                 <input className="btn btn-secondary w-25" type="button"   value ="Send" />
            </div>
            </div>
        )
    }

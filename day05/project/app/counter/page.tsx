import Button from "./Button";
import Person from "./Person";

export default function Counter() {

    // let count = 10;

    return (<><div>
        <h1>Counter</h1>
        <Button />
    </div><div className="border m-8 w-200">
            <Person />
        </div></>
    )
    
}


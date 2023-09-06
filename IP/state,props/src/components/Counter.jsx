import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => setCounter(counter + 1);
    const handleTitle = () => {
        document.title = "Pikachu izz here"
    }

    return (
        <div>
            <h5>You have clicked {counter} times.</h5>
            <button onClick={handleCounter}>Increment Counter</button>
            <button onClick={handleTitle}>Change Title</button>

        </div>
    );
}
export default Counter;
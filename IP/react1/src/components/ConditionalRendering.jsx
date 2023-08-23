import { useState } from "react";

const ConditionalRendering = () => {
    const [name, setName] = useState("pikachu");

    return (
        <div>
            
            <h3>{name=="Altaf"?`${name} is logged in`:"You are a scammer"}</h3>

        </div>
    );
}
export default ConditionalRendering;
import React, { useState } from "react";

const ConditionalRendering = () => {
    const [name, setName] = useState("Altaf");
    const [role, setRole] = useState("admin");
    const [roles, setRoles] = useState(["admin", "user", "guest"]);

    return (
        <div>
            <p>{name === "Altaf" && <h3>{`${name} is logged in`}</h3>}</p>
            {name === "Altaf" && <h3>{`${name} is logged in`}</h3>}

            <h3>{name === "Altaf" ? `${name} is logged in` : "You are a scammer"}</h3>

            {name === "Altaf" && <h3>{`${name} is logged in`}</h3>}
            {name !== "Altaf" && <h3>You are a scammer</h3>}

            {role === "admin" ? (
                <h3>You are an admin</h3>
            ) : role === "user" ? (
                <h3>You are a user</h3>
            ) : (
                <h3>You are unknown</h3>
            )}

            {roles.map((role) => (
                <h3 key={role}>You have role: {role}</h3>
            ))}
        </div>
    );
};

export default ConditionalRendering;

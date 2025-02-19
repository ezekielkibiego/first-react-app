import { useState } from "react"

function NameForm() {
    const [name, setName] = useState("");


    return (
        <div className="p-4">
            <input 
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p className="mt-2 text-lg">Hello, {name ?  name : "stranger"}!</p>
        </div>
    )
}

export default NameForm



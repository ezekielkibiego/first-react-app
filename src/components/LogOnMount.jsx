import { useEffect } from "react"

function LogOnMount() {
    useEffect(() => {
        console.log("Component mounted!")
    }, []);

    return (
        <div>
            <p>Open your console to see the log</p>
        </div>
    )
}

export default LogOnMount
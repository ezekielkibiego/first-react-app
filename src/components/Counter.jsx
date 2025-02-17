import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 className="text-3xl  font-extrabold text-gray-800 mb-4" >Counter: <span className="text-blue-600"> {count}</span></h2>
                <div className="flex flex-col space-y-4">
                    <button
                        className=" bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 m-2 rounded-lg transition duration-300"
                        onClick={() => setCount(count + 1)}>
                        + Increase
                    </button>
                </div>
                <div className="flex flex-col space-y-4 space-x-4">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 m-2 rounded-lg transition duration-300"
                        onClick={() => setCount(count - 1)}>
                        - Decrease
                    </button>
                </div>
                <div className="flex flex-col space-y-4 ">
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-5 py-2 m-2 rounded-lg transition duration-300"
                        onClick={() => setCount(0)}>
                        Reset
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Counter;
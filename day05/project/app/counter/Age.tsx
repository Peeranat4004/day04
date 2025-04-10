'use client'
import { useState } from "react"

export default function Age() {
    const [age, setAge] = useState("")

    return (
        <div className="p-5 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold mb-3">Age</h2>
            <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border border-gray-300 p-2 rounded-md mb-3 w-full"
            />
            <p className="text-gray-700">Your age is {age}</p>
        </div>
    )
}
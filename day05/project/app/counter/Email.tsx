'use client'
import { useState } from "react"

export default function Email() {
    const [email, setEmail] = useState("")

    return (
        <div className="p-5 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold mb-3">Email</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 rounded-md mb-3 w-full"
            />
            <p className="text-gray-700">Your email is {email}</p>
        </div>
    )
}
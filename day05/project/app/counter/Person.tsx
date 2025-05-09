'use client'

import { useState } from "react"

export default function Person() {

    const [person, setPerson] = useState({
        name: "Peeranat Chuenkeaw",
        age: 21,
        email: "au@gmail.com",
        salary: 1000000
    })
    
    const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {   
        const { name, value } = e.target

        // const aObj = { x:1, y:2}
        // const bObj = { ...aObj, y:3}

        setPerson({
            ...person,
            [name]: value
        })
    }   
  
    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Person:</b> {person.name}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Age:</b> {person.age}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Email:</b> {person.email}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Salary:</b> {person.salary}
            </div>
            <div> 
                <label
                    htmlFor="name">Name</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="text"
                    name="name"
                    value={person.name}
                    onChange={handleChage}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Age</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="number"
                    name="age"
                    value={person.age}
                    onChange={handleChage}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Email</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChage}
                />
            </div>
            <div>
                <label
                    htmlFor="name">Salary</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="number"
                    name="salary"
                    value={person.salary}
                    onChange={handleChage}
                />
            </div>

        </div>
    )
}
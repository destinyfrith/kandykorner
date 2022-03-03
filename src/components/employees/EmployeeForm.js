import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {

    const [employee, changeEmployee] = useState({
        name: "",
        locationId: "",
        manager: "",
        fullTime: "",
        hourlyRate: ""
    })

    const history = useHistory()

    const hireEmployee = (evt) => {
        evt.preventDefault()

        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form>
            <h2>New Employee</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                changeEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                    />
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Location:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.specialty = evt.target.value
                                changeEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical specialty"
                    />
                </div>
            </fieldset>

            <button onClick={hireEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )
}
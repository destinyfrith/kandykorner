import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeForm = () => {

    const [employee, changeEmployee] = useState({
        name: "",
        locationId: 1,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    })

    const history = useHistory()

    // we need to get the state of the current locations
    const [locations, setLocations] = useState([])

    // useState is a built in hook 
    // function below gets location information so we can access and set the state 
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locations) => {
                    setLocations(locations)
                })
        },
        []
    )
    // add the prevent default function
    const hireEmployee = (evt) => {
        evt.preventDefault()

        // new object format for what will be added to API
        // use parseInt to log location as number id
        const newEmployee = {
            name: employee.name,
            locationId: parseInt(employee.locationId),
            fullTime: employee.fullTime,
            manager: employee.manager,
            hourlyRate: parseFloat(employee.hourlyRate)
        }

        // POST = create something new aka new employee object
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        // render the list of tickets for the user to see once they submit a request
        // we expanded locationId property so we could access that later
        return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }


    // for each element in the form, create a fieldset
    // each fieldset will need to copy user's input and update state
    // for location, will need to access expanded location id
    // will need locations to be choices in a dropdown box 
    // will need to iterate locations array to have them as options
    // for manager and full time, will need to have a select dropdown with true or false
    return (
        <form>
            <h2>New Employee</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
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
                    <label htmlFor="location">Location: </label>
                    <select name="location" className="form-control"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.locationId = evt.target.value
                                changeEmployee(copy)
                            }
                        }>
                        <option value="0">Select Your Location: </option>
                        {
                            locations.map((location) => {
                                return <option value={location.id} key={location.id}>{location.name}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Check if manager: </label>
                    <input type="checkbox"
                    // can't check a checkbox's value but you can check to see if it's checked
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.manager = evt.target.checked
                                changeEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Check if full time: </label>
                    <input type="checkbox"

                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullTime = evt.target.checked
                                changeEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.hourlyRate = evt.target.value
                                changeEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        className="form-control"
                    />
                </div>
            </fieldset>

            <button onClick={hireEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form >
    )
}
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    // const [specialites, setSpecial] = useState("")
    const history = useHistory()

    // useState is a built in hook 
    // function below gets employee information and set the state 
    const getState = () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployee(employeeArray)
                })
        }

        // create a use effect whose function is to get state so you can use it later
        useEffect(
            () => {
                getState()
            },
            []
        )

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then((data) => {
                getState(data)
            })
    }

    // button below adds a hire employee button that reroutes to create employee form
    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} {""}
                        <button onClick={() => { fireEmployee(employee.id) }}>Delete</button>
                        </p>
                    }
                )
            }
        </>
    )
}
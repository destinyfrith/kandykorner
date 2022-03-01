import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [locationRender, updateLocations] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    return (
        <>
            <div>{locationRender}</div>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.name}</p>
                    }
                )
            }
        </>
    )
}
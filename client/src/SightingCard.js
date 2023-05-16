import { deleteSighting, } from "./SightingService"
import UpdateForm from "./UpdateForm"
import React, { useState } from 'react';


const SightingCard = ({ sighting, removeSighting, updateSighting }) => {

    console.log(sighting);
    const [isClicked, setClicked] = useState(false);
    const [formData, setFormData] = useState({
        species: sighting.species,
        location: sighting.location,
        date: sighting.date
    })

    const handleClick = () => {
        setClicked(!isClicked);
    };

    const handleDelete = () => {
        deleteSighting(sighting._id).then(() => {
            removeSighting(sighting._id);
        })
    }


    // const handleUpdate = () => {
    //     updateSighting(sighting._id)
    // }

    return (
        <>
            <div>
                {isClicked ? <UpdateForm sighting={sighting} putSighting={putSighting} /> :

                    <div>
                        <h1>{sighting.species}</h1>
                        <p>Location: {sighting.location}</p>
                        <p>Date: {sighting.date}</p>
                        <button onClick={handleDelete}> 🗑 </button>
                        <button onClick={handleClick}> ✏️ </button>
                        <hr></hr>
                    </div>
                }
            </div>
        </>
    )

}

export default SightingCard;
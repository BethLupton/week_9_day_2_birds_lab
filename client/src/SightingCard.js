import { deleteSighting } from "./SightingService"
import UpdateForm from "./UpdateForm"
import React, {useState} from 'react';


const SightingCard = ({sighting, removeSighting, updateSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
    };

    // const handleUpdate = () => {
    //     updateSighting(sighting._id)
    // }

    return (
        <>
        <div>
            <UpdateForm {sighting}/>
        </div>
        <div>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleClick}> ✏️ </button>
            <hr></hr>
        </div>
        </>
    )

}

export default SightingCard;
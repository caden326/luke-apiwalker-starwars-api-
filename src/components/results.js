import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result = (props) => {
    const [info, setInfo] = useState({})
    const [valid, setValid] = useState(true)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.resource}/${props.id}/`)
            .then(response => {
                console.log("response is here!!!!")
                console.log(response)
                setValid(true)
                setInfo(response.data)

            })
            .catch(err => {
                console.log(err)
                setValid(false)

            })
    }, [props.resource, props.id])

    return (

        <div>

            {!valid ? <p>These are not the droids you're looking for</p> :
                <>
                    <h4>results for {props.resource} and {props.id}</h4>
                    {
                        props.resource === "people" ?
                            <>
                                <h4>Name: {info.name}</h4>
                                <h4>Mass: {info.mass}</h4>
                                <h4>Hair Color: {info.hair_color}</h4>
                                <h4>Skin Color: {info.skin_color}</h4>
                            </> : null
                    }
                    {
                        props.resource === "planets" ?
                            <>
                                <h4>Name: {info.name}</h4>
                                <h4>Climate: {info.climate}</h4>
                                <h4>Terrain: {info.terrain}</h4>
                                <h4>Surface Water: {info.surface_water}</h4>
                                <h4>Population: {info.population}</h4>
                            </> : null
                    }

                    {
                        props.resource === "films" ?
                            <>
                                <h4>Title: {info.title}</h4>
                                <h4>Director: {info.director}</h4>
                            </> : null
                    }
                </>
            }


        </div>
    );
};


export default Result;
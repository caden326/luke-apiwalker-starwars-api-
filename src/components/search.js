import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {navigate} from '@reach/router';

const Search = (props) => {
    const [resource, setResource] = useState([])
    const [forminfo, setForminfo] = useState({
        resource:"",
        id:""
    })

    useEffect(() => {
        axios.get("https://swapi.dev/api")
        .then(res=>{
            console.log(res)
            console.log(Object.keys(res.data))
            setResource(Object.keys(res.data))
    })
    .catch(err=> console.log("axios goofed",err))
    }, []);


    
    const changeHandler = (event)=>{    
        console.log("something is changing")
        setForminfo({
            ...forminfo,
            [event.target.name]: event.target.value
        })
    }



    const onSubmitform = (event) => {
        event.preventDefault()
        navigate(`/${forminfo.resource}/${forminfo.id}`)
    }



    return (
        <div className="container">
            <h1> Starwars API </h1>
            <form class="form-inline" onSubmit={onSubmitform} >
                
                <select onChange={changeHandler} name="resource" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    {
                        resource.map((resource,i)=>{
                            return <option key={i} value={resource}>{resource}</option>
                        })
                    }

                </select>

                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                    <label class="custom-control-label" for="customControlInline">ID: </label>
                    <input onChange={changeHandler} type="number" class="custom-control-input" name="id" id="customControlInline"/>
                    
                </div>

                    <button type="submit" class="btn btn-dark my-1">Submit</button>
            </form>
        </div>
            )

}


            export default Search
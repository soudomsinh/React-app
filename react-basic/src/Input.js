import React, {useState} from "react";
import PropTypes from 'prop-types'

// addNewPost created in App.js is received props(properties)
function Input({addNewPost}){
    const[input, setInput] = useState('')
    
    // onChange Event
    function onChange(event){
        setInput(event.target.value)
    }

    // onKeyDown event
    function onKeyDown(event){
        const title = event.target.value;
        if(event.key ==='Enter' && title){
            addNewPost(title);
            setInput('')
        }
    }
    return (
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input 
            className="Input__field"
            type="text" 
            value={input} 
            onChange={onChange}
            onKeyDown={onKeyDown}/>
        </div>
    )
}

Input.propTypes = {
    addNewPost:PropTypes.func.isRequired
}
export default Input ;
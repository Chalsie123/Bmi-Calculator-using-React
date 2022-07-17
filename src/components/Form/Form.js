import React, { useState } from "react";


function Form(props) {
    const [weight, updateweight] = useState('');
    const [height, updateheight] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(weight, height);
        props.onSave(height / 100, weight);
    }

    function heightHandler(event) {
        updateheight(event.target.value)
    }

    function weighthandler(event) {
        updateweight(event.target.value)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Weight (in kg)</label>
            <input type="number" min="0" step="0.1" onChange={weighthandler}></input>
            <label>Height (in cms)</label>
            <input type="number" min="0" step="0.1" onChange={heightHandler}></input>
            <br></br>
            <button>Calculate BMI</button>
        </form>
    )
}

export default Form;
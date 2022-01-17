import React, {Fragment, useState} from "react";

const InputGroceryItem = () => {

    const [description, setDescription] = useState("");

   const  onSubmitForm = async e => {
       e.preventDefault();
       try {
        const body = {description};
        const response = await fetch("http://localhost:5000/todos", { //obtain data from server and adds grocery item when button is pressed
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location = "/";
       }catch (err) {
           console.error(err.essage);
       }
   }
    return (
    <Fragment>
    <h1 className = "text-center mt-5 font-italic">PERN Grocery List</h1>
    <br/>
    <h5 className="font-weight-bold">Enter a Grocery Item Below!</h5>
    <form className="d-flex mt-3" onSubmit={onSubmitForm}>
        <input type = "text" className="form-control border border-dark border-5" value={description} onChange={e => setDescription(e.target.value)}/>
        <button className="btn btn-primary">Add Item!</button>
    </form>
    </Fragment>
    );
};

export default InputGroceryItem;
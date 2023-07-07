import { useState } from "react";

function EditForm () {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [renter, setRenter] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="editform" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="username" placeholder=""></input>
        <label>Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} type="username" placeholder=""></input>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="username" placeholder=""></input>
        <label>Price:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="username" placeholder=""></input>
        <label>Renter Name:</label>
        <input value={renter} onChange={(e) => setRenter(e.target.value)} type="username" placeholder=""></input>
        </form>
    )
}

export default EditForm; 
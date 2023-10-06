import React, { useState } from "react";
import CustomTextField from "./CustomTextField";

const JoinUsForm = () => {

    const [userData, setUserData] = useState({
        name : "",
        email : "",
        department : "",
        year: "",
    });



    // Handle Change in Input Field
    const handleChange = (e) =>{
        const value = e.target.value;
        setUserData({...userData, [e.target.name]: value.trim()});
    }


    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formElement = document.querySelector("join-us-form");
        const data = new FormData(formElement);
        const apiURL = process.env.REACT_APP_FORM_URL;

        fetch(apiURL, {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="">
            <form className="join-us-form flex flex-col align-middle justify-center" onSubmit={(e) => handleSubmit(e)}>
                <CustomTextField
                    label="Name"
                    type="text"
                    margin="normal"
                    name="name"
                    value={userData.name}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Email"
                    type="text"
                    margin="normal"
                    name="email"
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Department"
                    type="text"
                    margin="normal"
                    name="department"
                    value={userData.department}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Year"
                    type="text"
                    margin="normal"
                    name="year"
                    value={userData.year}
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </div>
    );
};

export default JoinUsForm;

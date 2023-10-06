import { TextField } from "@mui/material";
import React from "react";
import CustomTextField from "./CustomTextField";
// import { makeStyles } from "@mui/styles";

const JoinUsForm = () => {
    const textFieldStyles = {
        " & label.Mui-focused": {
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
    };

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
        <div>
            <form className="join-us-form" onSubmit={(e) => handleSubmit(e)}>
                <CustomTextField
                    label="Name"
                    type="text"
                    margin="normal"
                    name="name"
                    value={"Zubayer"}
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </div>
    );
};

export default JoinUsForm;

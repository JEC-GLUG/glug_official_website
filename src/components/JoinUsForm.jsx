import React, { useState } from "react";
import CustomTextField from "./CustomTextField";
import { Alert, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/styles";

// const StyledSnackbar = styled((props) => <Snackbar {...props} />)(
//     ({ theme }) => ({
//         "& .MuiSnackbar-root": {
//             top: theme.spacing(15),
//         },
//     })
// );

const JoinUsForm = () => {
    // Constants
    const SUCCESS = "SUCCESS";

    // State Variables
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Department: "",
        Year: "",
    });

    // Handle Change in Input Field
    const handleChange = (e) => {
        const value = e.target.value;
        setUserData({ ...userData, [e.target.name]: value });
    };

    // Toogle Snackbar state
    const [alertType, setAlertType] = useState({
        open: false,
        type: "success",
        message: "",
    });

    // Handle Closing of Alert
    const handleSnackClose = () => {
        setAlertType({ ...alertType, open: false });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiURL = import.meta.env.VITE_FORM_URL;

        const values = Object.values(userData);
        if (values.includes("")) {
            setAlertType({ type: "warning", open: true, message: "Please fill out the form before submitting." });
        } else {
            const response = await fetch(apiURL, {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                // Form submitted successfully
                setAlertType({ type: "success", open: true, message: "Your response has been recorded." });
                setUserData({
                    Name: "",
                    Email: "",
                    Department: "",
                    Year: "",
                });
            }
        }
    };

    return (
        <div className="">
            <form className="join-us-form flex flex-col align-middle justify-center self-center">
                <CustomTextField
                    label="Name"
                    type="text"
                    margin="normal"
                    name="Name"
                    value={userData.Name}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Email"
                    type="email"
                    margin="normal"
                    name="Email"
                    value={userData.Email}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Department"
                    type="text"
                    margin="normal"
                    name="Department"
                    value={userData.Department}
                    onChange={(e) => handleChange(e)}
                />
                <CustomTextField
                    label="Year"
                    type="text"
                    margin="normal"
                    name="Year"
                    value={userData.Year}
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{
                        width: "10rem",
                        alignSelf: "center",
                        marginTop: "0.6rem",
                    }}
                >
                    Submit
                </Button>
            </form>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={alertType.open}
                onClose={handleSnackClose}
                autoHideDuration={3000}
            >
                <Alert severity={alertType.type} onClose={handleSnackClose}>
                    {alertType.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default JoinUsForm;

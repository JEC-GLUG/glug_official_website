import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "gray",
        },
    },
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "& .MuiInputBase-input": {
        color: "white",
    },
}));

export default function CustomTextFieldComponent(props) {
    return <CustomTextField {...props} variant="outlined" />;
}




// import React from "react";
// import { styled } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";

// const CustomTextField = styled(TextField)(({ theme }) => ({
//     "& .MuiOutlinedInput-root": {
//         "& fieldset": {
//             borderColor: "white",
//         },
//         "&:hover fieldset": {
//             borderColor: "gray",
//         },
//     },
//     "& .MuiInputLabel-root": {
//         color: "white",
//     },
//     "& .MuiInputBase-input": {
//         color: "white",
//     },
// }));

// export default function CustomTextFieldComponent(props) {
//     return <CustomTextField {...props} variant="outlined" />;
// }




// // import React from "react";
// // import { withStyles } from "@mui/styles";
// // import TextField from "@mui/material/TextField";

// // const styles = {
// //     root: {
// //         "& .MuiOutlinedInput-root": {
// //             "& fieldset": {
// //                 borderColor: "white",
// //             },
// //             "&:hover fieldset": {
// //                 borderColor: "gray",
// //             },
// //         },
// //         "& .MuiInputLabel-root": {
// //             color: "white",
// //         },
// //         "& .MuiInputBase-input": {
// //             color: "white",
// //         },
// //     },
// // };

// // function CustomTextField(props) {
// //     const { classes } = props;

// //     return <TextField {...props} variant="outlined" className={classes.root} />;
// // }

// // export default withStyles(styles)(CustomTextField);

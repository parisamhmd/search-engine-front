import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F7444E",
        },
        secondary: {
            main: "#26BCCD",
            accept: "#2ACB33"   //Used for accept button
        },
        text: {
            primary: "#002C3E",
            secondary: "#6E6E6E", //description
            disabled: "#B2B2B2", //placeholder
            searchPlaceholder: "#6f6f6f",
        },
        background: {
            default: "#F7F8F3", //input bg and main bg
            paper: "#ffffff", //white
        },
        grey: {
            border: "#E9E9E9", // input border
            option: "#BABABA", //poll options bg
        },
    },
});

export default theme;

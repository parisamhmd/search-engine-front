import React from "react";

import {InputBase, InputBaseProps} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start",
    width:  "22.5rem",
  },
  inputBox: {
    width: " 100%",
    display: "inline-block",
    position: "relative",
  },
  TextInput: {
    width: " 100%",
    height: "3.125rem",
    padding: "0.813rem",
    borderRadius: "4px",
    border: `solid 1.6px ${theme.palette.grey[100]}`,
    backgroundColor: "#fff",
  },
  input: {
    paddingRight: "3.063rem",
    paddingLeft: "3.063rem",
    color: theme.palette.text.primary,
    fontSize: ".875rem",
    fontWeight: 500,
    "&::placeholder": {
      color: theme.palette.text.secondary,
      fontSize: ".75rem",
    },
  },
  focused: {
    border: `solid 1.6px ${theme.palette.primary.main}`,
  },
  error: {
    border: "solid 1.6px #ff3d3d",
  },
  iconBox: {
    position: "absolute",
    top: 0,
    width: " 3.125rem",
    height: "3.125rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f4f4f4",
      borderRadius: "4px",
    },
  },
}));



const SearchInput = ({
  onClear: handleClear,
  value,
  ...rest
}) => {
  const styles = useStyle({...rest});

  return (
    <div >
        jjh
      {/* <div className={styles.inputBox}>
        <span className={styles.iconBox}>
          <SearchIcon/>
        </span>
        <InputBase
          value={value}
          placeholder="اینجا جستجو کنید..." 
          className={styles.TextInput}
          classes={{root: styles.input, focused: styles.focused, error: styles.error}}
          {...rest}
        />
        <span className={`${styles.iconBox} left-0`}>
          {value && <ClearIcon/>}
        </span>
      </div> */}
    </div>
  );
};

export default SearchInput;

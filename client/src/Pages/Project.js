import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import Addform from "./Addform";
import Main from "../components/Main";
import './PageStyle.css';
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(3)
  }
}));

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
    
        <Box textAlign='centre'>
        
      <Button className="popup" variant="contained" color="primary" onClick={handleClick}>
        Add Project
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}><Addform /></Typography>
      </Popover>
      </Box>
    </div>
  );
}
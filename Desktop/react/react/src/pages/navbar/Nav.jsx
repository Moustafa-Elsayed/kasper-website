import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import {
  List,
  ListItem,
  ListItemButton,
  
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Box  >
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img style={{width:"50px"}} src=".\img\team-1.png"/>
          
          
          
          {/* start navbar links */}
          <List sx={{ display: "flex" }}>
            <ListItem disablePadding>
              <ListItemButton fullWidth>
                <ListItemText primary="Home" onClick={()=>{
                    navigate("/");

            }}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
              <ListItemButton fullWidth small>
                <ListItemText primary="Contact us" onClick={()=>{
                    navigate("/contact");

            }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={()=>{
                    navigate("/about");

            }}>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemText primary="our services" />
              </ListItemButton>
            </ListItem>
            <Button color="inherit" variant="outlined" onClick={()=>{
                    navigate("/form");

            }}>
              Login
            </Button>
          </List> 
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;

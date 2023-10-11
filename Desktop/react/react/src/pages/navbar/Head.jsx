import { Box, Button, ListItemButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Head = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography>
          <img src=".\img\logo.png" />
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box sx={{ display: "flex" }}>
            <ListItemButton>
              <ListItemText
                primary="Home"
                onClick={() => {
                  navigate("/");
                }}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary="About"
                onClick={() => {
                  navigate("/about");
                }}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary="Contact"
                onClick={() => {
                  navigate("/contact");
                }}
              />
            </ListItemButton>

            <Button
              startIcon={<LoginIcon />}
              variant="outlined"
              color="inherit"
              onClick={() => {
                navigate("/newform");
              }}
            >
              Sign-In
            </Button>
          </Box>
        </Box>
        <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
      </Toolbar>
    </AppBar>
  );
};

export default Head;

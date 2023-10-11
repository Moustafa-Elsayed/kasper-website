import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const Head = ({ open, setOpen, close, setClose }) => {
  const navigate = useNavigate();

  return (
    <>
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

          <MenuIcon
            onClick={() => {
              setClose("temporary");
              setOpen("block");
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        open={true}
        onClose={() => {
          setClose("permanent");
          setOpen("none");
        }}
        sx={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
          display: { xs: open },
        }}
        variant={close}
        anchor="right"
      >
        <CloseIcon sx={{ position: "absolute", right: 13, top: 13 }} />

        <Toolbar />
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <ListItemButton sx={{ textAlign: "center", mb: 1 }}>
              <ListItemText
                primary="Home"
                onClick={() => {
                  navigate("/");
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ textAlign: "center", mb: 1 }}>
              <ListItemText
                primary="About"
                onClick={() => {
                  navigate("/about");
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ textAlign: "center", mb: 1 }}>
              <ListItemText
                primary="Contact"
                onClick={() => {
                  navigate("/contact");
                }}
              />
            </ListItemButton>

            <Button
              sx={{ textAlign: "center", mb: 1 }}
              fullWidth
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
      </Drawer>
    </>
  );
};

export default Head;

import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./Header.css";

// eslint-disable-next-line react/prop-types
const Head = () => {
  const [open, setOpen] = useState("none");
  const [close, setClose] = useState("permanent");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography>
            <img
              src=".\img\logo.png"
              onClick={() => {
                navigate("/");
              }}
            />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ display: "flex" }}>
              <ListItemButton
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "transparent",
                  },
                  color: location.pathname === "/" ? "black" : null,
                  borderBottom:
                    location.pathname === "/" ? "1px solid black" : null,
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/about" ? "black" : null,
                  borderBottom:
                    location.pathname === "/about" ? "1px solid black" : null,
                }}
                onClick={() => {
                  navigate("/about");
                }}
              >
                <ListItemText primary="About" />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/contact" ? "black" : null,
                  borderBottom:
                    location.pathname === "/contact" ? "1px solid black" : null,
                }}
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>

              <Button
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/sign" ? "black" : null,
                  borderBottom:
                    location.pathname === "/sign" ? "1px solid black" : null,
                }}
                onClick={() => {
                  navigate("/sign");
                }}
                startIcon={<LoginIcon />}
                variant="outlined"
                color="inherit"
              >
                Sign-In
              </Button>
            </Box>
          </Box>

          <MenuIcon
            onClick={() => {
              setClose("temporary");
              setOpen("block");
              console.log("done");
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          />
        </Toolbar>
      </AppBar>
      {/* start Drawer */}
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
            width: { xs: "100%", sm: "250px" },
            boxSizing: "border-box",
          },
          display: { xs: open },
        }}
        variant={close}
        anchor="right"
      >
        <CloseIcon
          onClick={() => {
            setClose("permanent");
            setOpen("none");
          }}
          sx={{
            position: "absolute",
            right: 13,
            top: 13,
            zIndex: "555",
            cursor: "pointer",
          }}
        />

        <Toolbar />
        <Divider />
        <Box>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            onClick={() => {
              navigate("/");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText className="drawer-links" primary="Home" />
          </ListItemButton>

          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            onClick={() => {
              navigate("/about");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            onClick={() => {
              navigate("/contact");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>

          <Button
            sx={{ textAlign: "center", mb: 1 }}
            fullWidth
            startIcon={<LoginIcon />}
            variant="outlined"
            color="inherit"
            onClick={() => {
              navigate("/sign");
              setClose("permanent");
              setOpen("none");
            }}
          >
            Sign-Up
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Head;

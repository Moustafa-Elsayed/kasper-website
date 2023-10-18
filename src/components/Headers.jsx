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
                }}
              >
                <ListItemText
                  primary="Home"
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/about" ? "black" : null,
                }}
              >
                <ListItemText
                  primary="About"
                  onClick={() => {
                    navigate("/about");
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/contact" ? "black" : null,
                }}
              >
                <ListItemText
                  primary="Contact"
                  onClick={() => {
                    navigate("/contact");
                  }}
                />
              </ListItemButton>

              <Button
                sx={{
                  "&:hover": { color: "black", backgroundColor: "transparent" },
                  color: location.pathname === "/sign" ? "black" : null,
                }}
                startIcon={<LoginIcon />}
                variant="outlined"
                color="inherit"
                onClick={() => {
                  navigate("/sign");
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
          >
            <ListItemText
              className="drawer-links"
              primary="Home"
              onClick={() => {
                navigate("/");
                setClose("permanent");
                setOpen("none");
              }}
            />
          </ListItemButton>

          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
          >
            <ListItemText
              primary="About"
              onClick={() => {
                navigate("/about");
                setClose("permanent");
                setOpen("none");
              }}
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
          >
            <ListItemText
              primary="Contact"
              onClick={() => {
                navigate("/contact");
                setClose("permanent");
                setOpen("none");
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

import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Drawerr = () => {
  const [open, setOpen] = useState("none");
  const [close, setClose] = useState("permanent");
  const navigate = useNavigate();
  return (
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <ListItemButton sx={{ mb: 1 }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                onClick={() => {
                  navigate("/");
                  setClose("permanent");
                  setOpen("none");
                }}
              />
            </ListItemButton>

            <ListItemButton sx={{ textAlign: "center", mb: 1 }}>
              <ListItemIcon>
                <ContactEmergencyIcon />
              </ListItemIcon>

              <ListItemText
                primary="About"
                onClick={() => {
                  navigate("/about");
                  setClose("permanent");
                  setOpen("none");
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ textAlign: "center", mb: 1 }}>
              <ListItemIcon>
                <PermContactCalendarIcon />
              </ListItemIcon>
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
        </Box>
      </Drawer>
  )
}

export default Drawerr

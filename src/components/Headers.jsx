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
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// eslint-disable-next-line react/prop-types
const Head = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const [open, setOpen] = useState("none");
  // const [isCollapde, setisCollapde] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [close, setClose] = useState("permanent");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ cursor: "pointer" }}>
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
                <ListItemText primary={t("Home")} />
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
                <ListItemText primary={t("About")} />
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
                <ListItemText primary={t("Contact")} />
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
                {t("Sign-In")}
              </Button>
              <Box>
                <FormControl
                  color="secondary"
                  sx={{ m: 1, borderColor: "black" }}
                  fullWidth={false}
                  size="small"
                  onClick={()=>{
                    localStorage.setItem("current language","ar")
                  }}
                >
                  <Select value={age} onChange={handleChange} displayEmpty>
                    <MenuItem
                      onClick={() => {
                        handleChangeLng("ar");
                      }}
                      value={10}
                    >
                      <img src="https://flagcdn.com/w20/eg.png" />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleChangeLng("en");
                      }}
                      value={20}
                    >
                      <img src="https://flagcdn.com/w20/us.png" />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* <Button
                variant="outlined"
                sx={{ color: "white", position: "relative" }}
              >
                <LanguageIcon
                  onClick={() => {
                    setisCollapde(true);
                  }}
                />
              </Button>
              {isCollapde ? (
                <ExpandLessIcon
                  sx={{ zIndex: "55" }}
                  onClick={() => {
                    setisCollapde(true);
                  }}
                />
              ) : (
                <ExpandMoreIcon
                  sx={{ zIndex: "55" }}
                  onClick={() => {
                    setisCollapde(false);
                  }}
                />
              )}
              <Collapse
                in={isCollapde}
                timeout="auto"
                unmountOnExit
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "0",
                  top: "60px",
                  border: "1px solid red",
                }}
              >
                <ListItem
                  onClick={() => {
                    setisCollapde(false);
                  }}
                >
                  <ListItemButton>
                    <ListItemText
                      sx={{ color: "black" }}
                      onClick={() => {
                        handleChangeLng("ar");
                      }}
                      primary="Arabic"
                    />
                    <ListItemIcon />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  onClick={() => {
                    setisCollapde(false);
                  }}
                >
                  <ListItemButton>
                    <ListItemText
                      onClick={() => {
                        handleChangeLng("en");
                      }}
                      sx={{ color: "black" }}
                      primary="English"
                    />
                    <ListItemIcon />
                  </ListItemButton>
                </ListItem>
              </Collapse> */}
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
              backgroundColor:
              location.pathname === "/" ? "#1976d2" : null,
          
              
            }}
            onClick={() => {
              navigate("/");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText className="drawer-links" primary={t("Home")} />
          </ListItemButton>

          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
              backgroundColor:
              location.pathname === "/about" ? "#1976d2" : null,
            }}
            onClick={() => {
              navigate("/about");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText primary={t("About")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
              backgroundColor:
              location.pathname === "/contact" ? "#1976d2" : null,
            }}
            onClick={() => {
              navigate("/contact");
              setClose("permanent");
              setOpen("none");
            }}
          >
            <ListItemText primary={t("Contact")} />
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
            {t("Sign-In")}
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <FormControl
              color="secondary"
              sx={{ m: 1, borderColor: "black" }}
              fullWidth={false}
              size="small"
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{ margin: "0 auto" }}
              >
                <MenuItem
                  onClick={() => {
                    handleChangeLng("ar");
                    setClose("permanent");
                    setOpen("none");
                  }}
                  value={10}
                >
                  <img src="https://flagcdn.com/w20/eg.png" />
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleChangeLng("en");
                    setClose("permanent");
                    setOpen("none");
                  }}
                  value={20}
                >
                  <img src="https://flagcdn.com/w20/us.png" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* <Button
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <LanguageIcon
              onClick={() => {
                setisCollapde(true);
              }}
            />
            {isCollapde ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>

          <Collapse
            in={isCollapde}
            timeout="auto"
            unmountOnExit
            sx={{
              cursor: "pointer",
            }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemText onClick={changeAr} primary="Arabic" />
                <ListItemIcon />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText onClick={changeEn} primary="English" />
                <ListItemIcon />
              </ListItemButton>
            </ListItem>
          </Collapse> */}
        </Box>
      </Drawer>
    </>
  );
};

export default Head;

import Box from "@mui/material/Box";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ paddingTop: "150px", margin: "0 auto" }}>
      <SentimentVeryDissatisfiedIcon fontSize="large" mb="10px" />
      <Typography variant="h3" color="initial" mb="10px">
      <Typography variant="h1" color="initial" mb="10px">
        404
      </Typography>
        <Typography variant="" color="red">
          Oops!
        </Typography>
        page not found
      </Typography>
      <Button
        onClick={() => {
          navigate("/");
        }}
        endIcon={<HomeIcon />}
        variant="outlined"
        color="primary"
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Error;

import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ePathVariables } from "../config/SupplierConfig";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(ePathVariables.ORDERS)}
        sx={{ mt: 3 }}
      >
        Back to Orders
      </Button>
    </Box>
  );
};

export default NotFoundPage;

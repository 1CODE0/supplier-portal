import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
// import { darkTheme } from "./lib/theme";
import { QueryProvider } from "./providers/QueryProvider";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./lib/theme";
import { AuthProvider } from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <CssBaseline />
        <header>
          <Box
            component="header"
            sx={{ bgcolor: "primary.main", color: "#fff", py: 1 }}
          >
            <Container maxWidth="md">
              <Typography variant="h6">Smart Supplier Portal</Typography>
            </Container>
          </Box>
        </header>

        <Container maxWidth="md" sx={{ my: 4 }}>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </Container>

        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;

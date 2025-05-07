// src/App.tsx
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { QueryProvider } from "./providers/QueryProvider";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./providers/AuthProvider";
import CustomToastContainer from "./utilities/CustomToastContainer";
import { getMode, getSettingsFromCookie } from "./utilities/cookieUtils";
import { useSettings } from "./hooks/useSettings";
import { darkTheme, lightTheme } from "./lib/theme";
import { SettingsProvider } from "./contexts/settingsContext";

function ThemedAppContent() {
  const { settings } = useSettings();
  const theme = settings.mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <header>
        <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 1 }}>
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

      <CustomToastContainer />
    </ThemeProvider>
  );
}

export default function App() {
  const settingsCookie = getSettingsFromCookie();
  const mode = getMode();

  return (
    <QueryProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemedAppContent />
      </SettingsProvider>
    </QueryProvider>
  );
}

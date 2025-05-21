// src/App.tsx
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryProvider } from "./providers/QueryProvider";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./providers/AuthProvider";
import CustomToastContainer from "./utilities/CustomToastContainer";
import { getMode, getSettingsFromCookie } from "./utilities/cookieUtils";
import { useSettings } from "./hooks/useSettings";
import { darkTheme, lightTheme } from "./lib/theme";
import { SettingsProvider } from "./contexts/settingsContext";
import { DrawerProvider } from "./contexts/DrawerContext";

function ThemedAppContent() {
  const { settings } = useSettings();
  const theme = settings.mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <AuthProvider>
          <DrawerProvider>
            <AppRouter />
          </DrawerProvider>
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

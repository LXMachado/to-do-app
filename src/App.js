import { useState } from "react";
import { Button, Container, Grid, Typography, Paper, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Define the light mode theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
});

// Define the dark mode theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#90caf9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f48fb1',
      contrastText: '#fff',
    },
    background: {
      default: '#333',
      paper: '#424242',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
});

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("light"); // State for theme mode

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <Container>
        <Grid>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">To-Do List</Typography>
              <IconButton color="inherit" onClick={toggleMode}>
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task"
          />
          <Paper elevation={mode === "dark" ? 3 : 1}>
            <Button onClick={() => {
              if (input.trim()) {
                setTodos([...todos, input.trim()]);
                setInput("");
              }
            }}>Add</Button>
          </Paper>
          <Paper elevation={mode === "dark" ? 3 : 1}>
            <ul style={{ listStyle: "none" }}>
              <Typography variant="h6">Tasks</Typography>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </Paper>
        
          <Typography variant="h6">Contact Me</Typography>
          <Typography variant="h6">Social Media</Typography>
          <IconButton color="inherit"><TwitterIcon /></IconButton>
          <IconButton color="inherit"><LinkedInIcon /></IconButton>
          <IconButton color="inherit"><GitHubIcon /></IconButton>
        </Grid>        
      </Container>
    </ThemeProvider>
  );
}

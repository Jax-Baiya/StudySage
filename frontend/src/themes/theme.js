// File: frontend/src/themes/theme.jsx
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f6f8',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// Catppuccin Themes
export const latteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#babbf1', // Lavender
    },
    secondary: {
      main: '#babbf1', // Lavender
    },
    background: {
      default: '#fafafa', // Rosewater
      paper: '#ffffff',
    },
    text: {
      primary: '#1E1F29',
      secondary: '#3E424E',
    },
  },
});

export const frappeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#96CDFB', // Sky
    },
    secondary: {
      main: '#E891BB', // Red
    },
    background: {
      default: '#303446', // Text Primary
      paper: '#292C3C', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});

export const macchiatoTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c6a0f6', // Mauve
    },
    secondary: {
      main: '#b7bdf8', // Lavender
    },
    background: {
      default: '#24273A', // Base
      paper: '#1E2030', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});

export const mochaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5e0dc', // Rosewater
    },
    secondary: {
      main: '#f2cdcd', // Flamingo
    },
    background: {
      default: '#1e1e2e', // Base
      paper: '#181825', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});

export const glassmorphicTheme = createTheme({
  palette: {
    mode: 'dark', // Or 'light', depending on user preference
    primary: {
      main: '#8aadf4', // Lavender
    },
    secondary: {
      main: '#f4b8e4', // Pink
    },
    background: {
      default: 'rgba(30, 30, 46, 0.6)', // Glass-like background
      paper: 'rgba(255, 255, 255, 0.1)', // Frosted effect for components
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backdropFilter: 'blur(20px)', // Apply frosted effect to the body
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(30, 30, 46, 0.7)', // Transparent background
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)', // Frosted effect for app bar
          WebkitBackdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(30, 30, 46, 0.8)', // Match Theme
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Subtle shadow
        },
      },
    },
    MuiFooter: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)', // Frosted effect for footer
          WebkitBackdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(30, 30, 46, 0.8)', // Match Theme
          color: '#BAC2DE',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)', // Global frosted effect
          WebkitBackdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)', // Transparent background
          borderRadius: '16px', // Rounded corners for a soft look
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)', // Subtle shadow
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)', // Frosted effect for buttons
          WebkitBackdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
          borderRadius: '8px',
        },
      },
    },
  },
});

const addGlassmorphism = (mode) => ({
  backdropFilter: 'blur(20px)', // Frosted effect
  WebkitBackdropFilter: 'blur(20px)',
  backgroundColor:
    mode === 'dark'
      ? 'rgba(30, 30, 46, 0.7)' // Glass-like for dark mode
      : 'rgba(255, 255, 255, 0.5)', // Glass-like for light mode
  boxShadow:
    mode === 'dark'
      ? '0 4px 30px rgba(0, 0, 0, 0.5)'
      : '0 4px 30px rgba(0, 0, 0, 0.1)',
});

export const generateTheme = (themeName, isGlassmorphic) => {
  let baseTheme;

  switch (themeName) {
    case 'latte':
      baseTheme = latteTheme;
      break;
    case 'frappe':
      baseTheme = frappeTheme;
      break;
    case 'macchiato':
      baseTheme = macchiatoTheme;
      break;
    case 'mocha':
      baseTheme = mochaTheme;
      break;
    case 'glassmorphic':
    default:
      baseTheme = glassmorphicTheme;
      break;
  }

  if (isGlassmorphic) {
    baseTheme = {
      ...baseTheme,
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: addGlassmorphism(baseTheme.palette.mode),
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: addGlassmorphism(baseTheme.palette.mode),
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: addGlassmorphism(baseTheme.palette.mode),
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              ...addGlassmorphism(baseTheme.palette.mode),
              borderRadius: '8px',
              border: `1px solid ${
                baseTheme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(0, 0, 0, 0.2)'
              }`,
              '&:hover': {
                backgroundColor:
                  baseTheme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: addGlassmorphism(baseTheme.palette.mode),
          },
        },
      },
    };
  }

  return createTheme(baseTheme);
};


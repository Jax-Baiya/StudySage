import React, { useContext } from 'react';
import { Container, Typography, Box, Link as MuiLink, IconButton, Divider } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoLightSvg } from '../../assets/logos/StudySage_light_bg.svg';
import { ReactComponent as LogoDarkSvg } from '../../assets/logos/StudySage_dark_bg.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const { currentTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const isCatpuccinTheme = currentTheme === 'catpuccin';
  const logoMap = {
    light: <LogoDarkSvg style={{ width: '50px', height: '50px' }} />,
    dark: <LogoLightSvg style={{ width: '50px', height: '50px' }} />,
  };

  return (
    <footer
      style={{
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isCatpuccinTheme
          ? theme.palette.catpuccin.background.paper
          : theme.palette.background.paper,
        color: isCatpuccinTheme
          ? theme.palette.catpuccin.text.primary
          : theme.palette.text.primary,
        padding: '20px 0', // Adjusted padding for spacing
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* Logo Section */}
          <Box>
            <MuiLink component={Link} to="/">
              {logoMap[theme.palette.mode] || <LogoDarkSvg style={{ width: '75px', height: '75px' }} />}
            </MuiLink>
          </Box>

          {/* Links Section */}
          <Box display="flex" flexDirection="row" gap={3}>
            <MuiLink
              component={Link}
              to="/about"
              color="inherit"
              underline="none"
              fontSize="14px"
            >
              About
            </MuiLink>
            <MuiLink
              component={Link}
              to="/privacy"
              color="inherit"
              underline="none"
              fontSize="14px"
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              to="/terms"
              color="inherit"
              underline="none"
              fontSize="14px"
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={Link}
              to="/contact"
              color="inherit"
              underline="none"
              fontSize="14px"
            >
              Contact Us
            </MuiLink>
          </Box>

          {/* Social Media Section */}
          <Box display="flex" flexDirection="row" gap={1}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" size="small">
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank" size="small">
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" size="small">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank" size="small">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Divider */}
        <Divider style={{ margin: '10px 0', backgroundColor: theme.palette.divider }} />

        {/* Copyright Section */}
        <Typography variant="body2" align="center" style={{ fontSize: '12px' }}>
          &copy; 2024 StudySage. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;

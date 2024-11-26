// File: src/components/common/Footer.js
import React, { useContext } from 'react';
import { Container, Typography, Box, Link as MuiLink, IconButton } from '@mui/material';
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
  const isDarkTheme = ['dark', 'mocha', 'macchiato', 'frappe'].includes(currentTheme);
  const isCatpuccinTheme = currentTheme === 'catpuccin'; // Assuming 'catpuccin' is the theme key

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
        padding: '2px 0', // Changed from '0.5rem 0' to '8px 0'
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          {/* Logo Section */}
          <Box textAlign="center">
            <Link to="/">
              {isDarkTheme ? <LogoLightSvg style={{ width: '50px', height: '50px' }} /> : <LogoDarkSvg style={{ width: '50px', height: '50px' }} />}
            </Link>
          </Box>

          {/* Quick Links Section */}
          <Box textAlign="center">
            <Typography variant="h6">Quick Links</Typography>
            <MuiLink
              component={Link}
              to="/"
              color="inherit"
              underline="none"
              display="block"
              marginY="2px"
            >
              Home
            </MuiLink>
            <MuiLink
              component={Link}
              to="/about"
              color="inherit"
              underline="none"
              display="block"
              marginY="1px"
            >
              About
            </MuiLink>
            <MuiLink
              component={Link}
              to="/contact"
              color="inherit"
              underline="none"
              display="block"
              marginY="1px"
            >
              Contact
            </MuiLink>
            <MuiLink
              component={Link}
              to="/privacy"
              color="inherit"
              underline="none"
              display="block"
              marginY="0.5rem"
            >
              Privacy Policy
            </MuiLink>
          </Box>

          {/* Social Media Section */}
          <Box textAlign="center">
            <Typography variant="h6">Follow Us</Typography>
            <Box display="flex" justifyContent="center" gap={1} marginTop="6px">
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" align="center" style={{ marginTop: '3px' }}> {/* Changed from '2rem' to '32px' */}
          &copy; 2024 StudySage. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
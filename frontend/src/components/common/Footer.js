// File: src/components/common/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  console.log('Footer component rendered');
  return (
    <Container style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2024 StudySage. All rights reserved.</Typography>
    </Container>
  );
}

export default Footer;
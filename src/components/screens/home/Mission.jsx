import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MKTypography from '../../common/MKTypography';
import MKBox from '../../common/MKBox';
import TextLink from '../../common/TextLink';

function Mission() {
  const webauthnLink = <TextLink href="https://webauthn.guide/" text="WebAuthn" />;

  const capstoneLink = <TextLink href="https://uwaterloo.ca/capstone-design/" text="Mechatronics Capstone Design" />;

  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3">Our Mission</MKTypography>
            <br />
            <MKTypography variant="body1">
              Our mission is to design and build a unified identity and access management system for building and IT
              hardware access based on {webauthnLink}.
            </MKTypography>
            <br />
            <MKTypography variant="body1">
              This project is created as our {capstoneLink} project for the 2024 Engineering Capstone Design Symposium.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Mission;

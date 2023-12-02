import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MKTypography from '../../common/MKTypography';
import MKBox from '../../common/MKBox';

function Vision() {
  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3">Our Vision</MKTypography>
            <br />
            <MKTypography variant="body1">
              Our vision is to inspire the development of technologies to support work to combat climate change, provide
              clean energy, feed our growing global population, monitor ocean health, and preserve our maritime history.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Vision;

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

function Information() {
  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3">Who are we?</MKTypography>
            <br />
            <MKTypography variant="body1">
              We are a group of Mechatronics Engineering students. Our team is united in the pursuit of developing new
              cutting edge security solutions without compromising the convenience that you are already familiar with.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

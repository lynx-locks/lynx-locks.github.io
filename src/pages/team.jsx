import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';
import rgba from '../assets/theme/functions/rgba';
import linearGradient from '../assets/theme/functions/linearGradient';

// Sections
import Information from '../components/screens/team/Information';
import TeamMembers from '../components/screens/team/TeamMembers';
import Sponsors from '../components/screens/sponsors/SponsorsList';

// Images
const bgImage = '/images/background/team.jpg';

function Team() {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.primary.main, 0.05), rgba(gradients.primary.state, 0.15))}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ py: { xs: 10, sm: 20, md: 0 }, mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Meet the Team
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              The core of Lynx Locks.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: -5, sm: -6, md: -8 },
          mb: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox sx={{ pt: { xs: -10, sm: -5, md: 0 } }}>
          <Information />
          <TeamMembers />
          <Sponsors />
        </MKBox>
      </Card>
    </>
  );
}

export default Team;

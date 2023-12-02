import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import sponsorStructure from '../../../utils/sponsorStructure';

function Sponsors() {
  // Sort alphabetically.
  sponsorStructure.sort((a, b) => a.name.localeCompare(b.name));
  const sponsors = sponsorStructure.map((sponsor) => {
    // TODO fix this to follow rules of hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [style, setStyle] = useState({ opacity: 0 });
    return (
      <Grid
        key={sponsor.name}
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="a"
          href={sponsor.href}
          target="_blank"
          rel="noreferrer"
          borderRadius="0.5rem"
          p={1}
          onMouseEnter={() => {
            setStyle({ opacity: 1 });
          }}
          onMouseLeave={() => {
            setStyle({ opacity: 0 });
          }}
          sx={{
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: ({ palette: { primary } }) => `${primary.main}`,
            },
          }}
        >
          <Image src={sponsor.logo} alt={sponsor.name} width={1000} height={500} objectFit="contain" />
          <p
            style={{
              color: 'white',
              transition: 'all 0.2s ease-in-out',
              ...style,
            }}
          >
            {sponsor.name}
          </p>
        </Box>
      </Grid>
    );
  });

  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <MKBox p={2} lineHeight={1}>
              <MKTypography variant="h3" mt={2} mb={8}>
                Our Sponsors
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid container alignItems="center" justifyContent="center" spacing={6}>
            {sponsors}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Sponsors;

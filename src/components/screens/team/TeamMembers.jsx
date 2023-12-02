import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import TeamCard from './TeamCards';

// Images
import teamStructure from '../../../utils/teamStructure';

function Team() {
  return (
    <MKBox component="section" position="relative" py={6} px={{ xs: 2, lg: 0 }} mx={-2}>
      <Container>
        {teamStructure.map((team) => (
          <>
            <Grid container>
              <Grid item xs={12} md={12} sx={{ mb: 6 }}>
                <MKTypography variant="h3" color="white" mt={8}>
                  {team.name}
                </MKTypography>
                <MKTypography variant="body2" color="white" mt={1} opacity={0.8}>
                  {team.description}
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {team.members.map((member) => (
                <Grid item xs={12} lg={6}>
                  <MKBox mb={1}>
                    <TeamCard
                      image={member.image}
                      name={member.name}
                      position={{
                        color: 'primary',
                        label: member.role,
                      }}
                      socials={member.socials}
                    />
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </MKBox>
  );
}

export default Team;

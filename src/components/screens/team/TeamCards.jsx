import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import IconLink from '../../common/icons/IconLink';

function TeamCard({ image, name, position, socials }) {
  return (
    <Card sx={{ mt: 3, backgroundColor: ({ palette: { black } }) => `${black.main}`, border: '2px solid #333;' }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              width="9em"
              height="9em"
              borderRadius="100%"
              shadow="lg"
              overflow="hidden"
              sx={{ border: '2px solid #333;', position: 'relative' }}
            >
              <Image layout="fill" src={image} />
            </MKBox>
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: 'auto' }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={0} pr={4} pl={{ xs: 4 }} lineHeight={1} height={120}>
            <MKTypography variant="h5" color="white">
              {name}&nbsp;
              {socials.map((social) => (
                <IconLink name={social.name} href={social.href} pl={0.75} />
              ))}
            </MKTypography>
            <MKTypography variant="h6" color={position.color} mt={0.5}>
              {position.label}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light']),
    label: PropTypes.string.isRequired,
  }).isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(['github', 'linkedin']),
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TeamCard;

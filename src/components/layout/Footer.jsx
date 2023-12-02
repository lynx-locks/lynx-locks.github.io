import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import MKBox from '../common/MKBox';
import MKTypography from '../common/MKTypography';
import routes from '../../utils/routes/routes';

function CenteredFooter({ links }) {
  const renderLinks = links.map((link) => (
    <NextLink key={link.name} href={link.href} passHref>
      <MKTypography
        component={Link}
        variant="body2"
        color="white"
        fontWeight="regular"
        sx={{
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            color: ({ palette: { primary } }) => `${primary.main}`,
          },
        }}
      >
        {link.name}
      </MKTypography>
    </NextLink>
  ));

  return (
    <MKBox sx={{ borderTop: '1px solid #333;' }} component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={{ xs: 2, lg: 3, xl: 6 }} mb={3}>
            {renderLinks}
          </Stack>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
const footerRoutes = {
  links: [
      {
          href: '/',
          name: 'Home',
      },
      ...routes.links],
};
CenteredFooter.defaultProps = footerRoutes;

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default CenteredFooter;

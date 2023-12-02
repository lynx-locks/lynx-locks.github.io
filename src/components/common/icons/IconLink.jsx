import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

import MKTypography from '../MKTypography';

function IconLink(props) {
  const { name, href, size, ...rest } = props;
  const brands = ['facebook', 'github', 'instagram', 'linkedin', 'twitter'];
  const iconClass = brands.includes(name) ? 'fab' : 'fa';
  return (
    <NextLink href={href} passHref>
      <MKTypography
        {...rest}
        component={Link}
        variant="body2"
        fontWeight="regular"
        target={href.startsWith('https://') ? '_blank' : ''} // don't open in new tab if internal reference
        color="white"
        sx={{
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            color: ({ palette: { primary } }) => `${primary.main}`,
          },
        }}
      >
        <FontAwesomeIcon icon={[iconClass, name]} color="inherit" size={size} />
      </MKTypography>
    </NextLink>
  );
}

IconLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string,
};

IconLink.defaultProps = {
  size: 'lg',
};

export default IconLink;

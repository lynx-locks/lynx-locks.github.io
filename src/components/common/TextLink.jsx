import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import MKTypography from './MKTypography';

function TextLink(props) {
  const { href, text, contrast } = props;
  return (
    <Link href={href} passHref>
      <MKTypography
        component="a"
        target={href.startsWith('https://') ? '_blank' : ''} // don't open in new tab if internal reference
        variant="body1"
        color="white"
        sx={{
          color: ({ palette: { primary, white } }) => `${contrast ? white.main : primary.main}`,
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          '&:hover': {
            color: ({ palette: { primary } }) => `${primary.focus}`,
          },
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '2px',
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            backgroundColor: ({ palette: { primary } }) => `${primary.focus}`,
            visibility: 'hidden',
            transition: 'all 0.2s ease-in-out',
          },
          '&:hover:before': {
            visibility: 'visible',
            width: '100%',
          },
        }}
      >
        <b>{text}</b>
      </MKTypography>
    </Link>
  );
}

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  contrast: PropTypes.bool,
};

export default TextLink;

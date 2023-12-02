import React, { useRef } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import MKBox from '../components/common/MKBox';
import MKButton from '../components/common/MKButton';
import MKTypography from '../components/common/MKTypography';

// Sections
import Sponsors from '../components/screens/sponsors/SponsorsList';
import Mission from '../components/screens/home/Mission';
import Vision from '../components/screens/home/Vision';
import Design from '../components/screens/designLog/designLog.mdx';
// Images
const bgImage = '/images/background/home.jpg';

function DesignLog() {
  return (
    <>
      <MKBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="15vh"
        sx={{ pt: { xs: -10, sm: -5, md: 0 }, mb: 8 }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: -5, sm: -6, md: -8 },
          mb: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ pt: { xs: -10, sm: -5, md: 0 }, mb: 8 }}
        >
          <Design />
        </MKBox>
      </Card>
    </>
  );
}

export default DesignLog;

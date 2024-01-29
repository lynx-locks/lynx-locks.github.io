import React from 'react';
import Card from '@mui/material/Card';

import MKBox from '../components/common/MKBox';
import YouTubeVid from '../components/common/YoutubeVid';
import LocalVid from '../components/common/LocalVid';
import Image from '../components/common/Image';
import Images from '../components/common/Images';

// Sections
import BuildLogMdx from '../components/screens/buildLog/buildLog.mdx';

function BuildLog() {
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
          <BuildLogMdx components={{ YouTubeVid, LocalVid, Image, Images }} />
        </MKBox>
      </Card>
    </>
  );
}

export default BuildLog;

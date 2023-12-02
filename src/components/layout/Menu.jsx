import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { Drawer } from '@mui/material';
import routes from '../../utils/routes/routes';
import MKTypography from '../common/MKTypography';
import typography from '../../assets/theme/base/typography';
import MKBox from '../common/MKBox';

const drawerWidth = '70%';

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <NextLink href="/" passHref>
          <MKTypography
            component={Link}
            variant="h1"
            color="white"
            fontWeight="regular"
            fontSize={typography.size.lg}
            py={1}
            pb={{ sm: 1, md: 19 }}
            sx={{
              pl: 1,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                cursor: 'pointer',
                color: ({ palette: { primary } }) => `${primary.main}`,
              },
            }}
          >
            LYNX LOCKS
          </MKTypography>
        </NextLink>
      </Toolbar>
      <Divider color="white" />
      <List component="nav" sx={{ pl: 2 }}>
        {routes.links.map((route) => (
          <MKBox key={route.name} component="li" sx={{ pb: 3, pt: 2 }}>
            <NextLink href={route.href} passHref>
              <MKTypography
                component={Link}
                variant="subtitle1"
                fontWeight="regular"
                fontSize={typography.size['2xl']}
                p={1}
                sx={{
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    cursor: 'pointer',
                    color: ({ palette: { primary } }) => `${primary.main}`,
                  },
                }}
              >
                {route.name}
              </MKTypography>
            </NextLink>
          </MKBox>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar>
        <IconButton
          color="white"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          onOpen={handleDrawerToggle}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'black', opacity: '80%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

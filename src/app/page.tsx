// import Image from 'next/image';
import NavigationLoader from '@/components/NavigationLoader';
import { Box, CssBaseline, Typography } from '@mui/material';
import AddMusic from '@/pages/addMusic';
export default function Home() {
  return (
    <Box className="flex flex-col items-center justify-center">
      <CssBaseline>
        <Typography>Hello</Typography>
        <NavigationLoader />
        <AddMusic />
      </CssBaseline>
    </Box>
  );
}

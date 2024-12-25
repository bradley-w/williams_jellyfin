import { Box, FormControl, Input, InputLabel, Button } from '@mui/material';

const AddMusic = () => {
  return (
    <Box>
      <FormControl className="flex flex-col items-center justify-center">
        <InputLabel className="text-optional">
          Input YouTubeMusic URL
        </InputLabel>
        <Input id="music-url" className="w-9/12" />
        <Button variant="contained">Add</Button>
      </FormControl>
    </Box>
  );
};

export default AddMusic;

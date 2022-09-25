import React from 'react';
import {Button, Stack} from '@mui/material';

const Filter = ({onFilter}) => {
  return (
    <Stack direction='row' justifyContent='center' mt={3} spacing={4} mb={4}>
        <Button
            onClick={() => onFilter(false)}
        >
            All
        </Button>
        <Button
           onClick={() => onFilter(true)} 
        >
            Important
        </Button>
    </Stack>
  )
}

export default Filter
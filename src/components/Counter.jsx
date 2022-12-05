import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import count from '../store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  return (
    <div>
      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Counter component example
        </Typography>
        {count.prices.map((item) => (
          <TextField
            key={item.id}
            label={item.name}
            color="primary"
            value={item.price}
            onChange={(event) => count.setPrice(item.id, +event.target.value)}
            helperText="Enter price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
        ))}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
          mb={3}
        >
          <Typography variant="h6" gutterBottom>
            counter = {count.counter}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button color="secondary" onClick={() => count.decrement()}>
              -
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => count.increment()}
            >
              +
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => count.randomNumber()}
            >
              random
            </Button>
          </ButtonGroup>
        </Box>
        <Divider />
        <Typography variant="h6" gutterBottom>
          Total = {count.total}
        </Typography>
      </Box>
      <Divider />
    </div>
  );
});
export default Counter;

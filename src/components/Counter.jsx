import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import RootStore from '../store/RootStore';
import { observer } from 'mobx-react-lite';

const Counter = () => {
  return (
    <>
      <TableBody>
        <TableRow
          sx={{
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }}
        >
          <TableCell align="left">
            <Checkbox
              checked={RootStore.todo.todos[0].completed}
              onChange={() => RootStore.todo.completeTodo(-2)}
            />
          </TableCell>
          <TableCell align="left">{RootStore.todo.todos[0].title}</TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="delete"
              onClick={() => RootStore.todo.removeTodo(-2)}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Counter component example
        </Typography>
        {RootStore.counter.prices.map((item) => (
          <TextField
            key={item.id}
            label={item.name}
            color="primary"
            value={item.price}
            onChange={(event) =>
              RootStore.counter.setPrice(item.id, +event.target.value)
            }
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
            counter = {RootStore.counter.counter}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              color="secondary"
              onClick={() => RootStore.counter.decrement()}
            >
              -
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => RootStore.counter.increment()}
            >
              +
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => RootStore.counter.randomNumber()}
            >
              random
            </Button>
          </ButtonGroup>
        </Box>
        <Divider />
        <Typography variant="h6" gutterBottom>
          Total = {RootStore.counter.total}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};
export default observer(Counter);

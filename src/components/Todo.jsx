import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import RootStore from '../store/RootStore';
import { observer } from 'mobx-react-lite';

const Todo = observer(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Todos component example
      </Typography>
      <Button
        variant="outlined"
        onClick={() => RootStore.todo.fetchTodo()}
        startIcon={<CloudDownloadIcon />}
        disabled={RootStore.todo.isLoaded}
      >
        Get Todos
      </Button>
      <Typography variant="text" gutterBottom={true} ml={2}>
        Completed <strong>{RootStore.todo.countCompletedTodos}</strong> Todos
      </Typography>
      <Typography variant="h6" gutterBottom>
        counter = {RootStore.counter.counter}
      </Typography>
      <Box mt={4}>
        <TableContainer component={Paper} mt={3}>
          <Table sx={{ minWidth: 350 }} aria-label="Todos table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Completed Todo</TableCell>
                <TableCell align="left">Todo title</TableCell>
                <TableCell align="right">Delete Todo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RootStore.todo.todos.map((item) => {
                return (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell align="left">
                      <Checkbox
                        checked={item.completed}
                        onChange={() => RootStore.todo.completeTodo(item.id)}
                      />
                    </TableCell>
                    <TableCell align="left">{item.title}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => RootStore.todo.removeTodo(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
});

export default Todo;

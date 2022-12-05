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
import todosList from '../store/todo';
import { observer } from 'mobx-react-lite';

const Todo = observer(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Todos component example
      </Typography>
      <Button
        variant="outlined"
        onClick={() => todosList.fetchTodo()}
        startIcon={<CloudDownloadIcon />}
        disabled={todosList.isLoaded}
      >
        Get Todos
      </Button>
      <Typography variant="text" gutterBottom={true} ml={2}>
        Completed <strong>{todosList.countCompletedTodos}</strong> Todos
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
              {todosList.todos.map((item) => {
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
                        onChange={() => todosList.completeTodo(item.id)}
                      />
                    </TableCell>
                    <TableCell align="left">{item.title}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => todosList.removeTodo(item.id)}
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

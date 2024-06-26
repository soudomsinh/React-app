import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';



export default function Users() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        UserGet()
    }, [])
    const UserGet = () =>{
        fetch("https://www.melivecode.com/api/users")
          .then(res => res.json())
          .then(
            (result) => {
            //   setIsLoaded(true);
              setItems(result);
            }
          )
    }
    const UserUpdate = id =>{
      window.location = '/update/' +id;
    }

    const UserDelete = id =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "id": id
        });

        const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/delete", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            alert(result['message'])
            if(result['status']==='ok'){
                UserGet()
            }
        })
        .catch((error) => console.error(error));
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p:2}}>
        <Paper sx={{p:2}}>
            <Box display={'flex'}>
                <Box sx={{ flexGrow: 1 }}> 
                    <Typography variant="h6" gutterBottom>
                        Users
                    </Typography>
                </Box>
                <Box>
                  <Link href="create">
                    <Button variant="contained">Create</Button>
                  </Link>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Avartar</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="center">
                            <Box display={'flex'} justifyContent={'center'}>
                                <Avatar alt={row.username} src={row.avatar} />
                            </Box>  
                        </TableCell>
                        <TableCell align="right">{row.fname}</TableCell>
                        <TableCell align="right">{row.lname}</TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button onClick={()=>UserUpdate(row.id)} >Edit</Button>
                              <Button onClick={()=>UserDelete(row.id)}>Delete</Button>
                            </ButtonGroup>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

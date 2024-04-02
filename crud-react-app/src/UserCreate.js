import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'



export default function UserCreate() {
    const handleSubmit = event =>{
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": email,
        "email": email,
        "avatar": avatar
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            alert(result['message'])
            if(result['status']==='ok'){
                window.location.href='/'
            }
        })
        .catch((error) => console.error(error));
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p:5}}>
            <Typography variant="h6" gutterBottom>
                  Create Users
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="fname" label="First Name" variant="outlined" 
                        fullWidth required 
                        onChange={(e)=>setFname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="lname" label="Last Name" variant="outlined" 
                        fullWidth required 
                        onChange={(e)=>setLname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" label="username" variant="outlined" 
                        fullWidth required 
                        onChange={(e)=>setUsername(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="email" variant="outlined" 
                        fullWidth required 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="avatar" label="Avatar" variant="outlined" 
                        fullWidth required 
                        onChange={(e)=>setAvatar(e.target.value)}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center" alignItems="center">
                        <Link href="create">
                            <Button type='submit' variant="contained" >Create</Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
      </Container>
    </React.Fragment>
  );
}

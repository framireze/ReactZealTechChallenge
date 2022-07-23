//import React from 'react'
interface User {
    age      : number,
    avatar   : string,
    firstName: string,
    id       : number,
    lastName : string
  }
/*export const UserCard = (user:User) => {
    return (
        <div>
            <h1>{user.firstName}</h1>
        </div>
    )
}*/

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard(user:User) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Edad: {user.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
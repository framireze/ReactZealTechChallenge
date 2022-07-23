import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNotes } from '../actions/user';
import UserCard from '../components/user/UserCard';

interface User {
    age      : number,
    avatar   : string,
    firstName: string,
    id       : number,
    lastName : string
  }
interface Users {
    user: {users:[User]}
}

export const SecondChallenge = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startLoadingNotes());
    },[])

    const {users} = useSelector((state: Users) => state.user);
    console.log('11',users);
    return (        
        <div>
            {
                users.map((user:User) => (<UserCard key={user.id}
                {...user}
                />))
            }
        </div>
    )
}
    
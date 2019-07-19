import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SGetSomeData = styled.div`
    height: 500px;
    width: 800px;
    margin-bottom: 25px;
    overflow-y: scroll;
    
    .users {
      color: #fff;
    }
    
    .users__user {
      background: #222;
      box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
      display: grid;
      grid-template-columns: 100px auto;
    }
    
    .users__user:after {
      content: "";
      background-image: linear-gradient(to top left,#ff8a00,#da1b60);
      grid-column: span 2;
      height: 3px;
      position: relative;
      width: 100%;
    }
    
    .users__avatar {
      min-width: 100px;
    }
    
    .users__meta {
      margin-left: 1em;
      padding-right: 1em;
    }
    
    .users h1 {
      line-height: 0;
    }
`;

export const GetSomeData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios("https://randomuser.me/api/?results=10")
            .then(response =>
                response.data.results.map(user => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.thumbnail}`
                })))
            .then(data => {
                setUsers(data);
            })
    }, []);

    return (
        <SGetSomeData>
            {users.map(user => (
                <div key={user.username} className="users__user">
                    <img src={user.image} className="users__avatar" alt='' />
                    <div className="users__meta">
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                </div>
            ))}
        </SGetSomeData>
    )
};
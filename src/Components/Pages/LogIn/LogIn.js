import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Register from '../../Register/Register';
import "./LogIn.css"

const LogIn = () => {
    const { signInUsingGoogle, user, logOut } = useAuth();
    const history = useHistory();
    return (
        <div>
            <Container>
            {user.email ?
                <div>
                    <Image fluid src={user.photoURL} />
                    <h2>Welcome {user.displayName}</h2>
                    <Button variant="danger" onClick={logOut}>Log Out</Button>
                </div> :
                <div>
                    <Register></Register>
                    <Button varient="primary" onClick={signInUsingGoogle}>Google login</Button>
                </div>
            }
            </Container>
        </div>
    );
};

export default LogIn;
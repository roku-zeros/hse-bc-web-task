import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './App.css';
import {CardBody} from "react-bootstrap";

const App = () => {
    const handleButtonClick = () => {
        const postData = {
            login: 'frolova.a.e@sovkom.bank',
            password: 'testpass21'
        };

        axios.post('http://94.139.254.148/managers/login', postData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
    <Card style={{ width: '18rem' }} className={"App"}>
        <Card.Body>
            <Card.Title>RESPONSE</Card.Title>
            <CardBody><button onClick={handleButtonClick}>send response</button></CardBody>
        </Card.Body>

    </Card>
    );
};

export default App;
app.options('/url...', function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "accept, content-type");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
});

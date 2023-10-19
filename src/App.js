import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
    <Card style={{ width: '18rem' }} className={"App"}>
        <Card.Body>
            <Card.Title>COUNTER</Card.Title>
            <Card.Title>{count}</Card.Title>
            <Button variant="outline-primary" onClick={decrementCount}>Decrement</Button>
            <Button variant="primary" onClick={incrementCount}>Increment</Button>
        </Card.Body>
    </Card>
    );
};

export default App;

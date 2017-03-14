import React from 'react';
import styles from './App.css';
import Button from './Button';
import Input from './Input';

const App = () => (
    <div className={styles.app}>
        <h1>Servers</h1>
        <Input />
        <Button />
    </div>
);

export default App;

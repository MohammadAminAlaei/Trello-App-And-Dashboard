import React, {Component} from 'react';
import styles from './assets/styles/default.module.scss'
import {Inputs} from "./components/inputs/Inputs";
import {Card} from "./components/card/Card";

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Inputs/>
            </div>
        );
    }
}

export {App};
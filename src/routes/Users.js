import React, {Component} from 'react';
import {connect} from 'dva';

import styles from './Users.css'

import UserComponent from '../components/Users/Users'

class Users extends Component {
    render(){
        return (
            <div className={styles.normal}>
                <UserComponent></UserComponent>
            </div>
        )
    }
}

Users.propsTypes = {}

export default connect()(Users)

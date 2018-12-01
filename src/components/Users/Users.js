import React, { Component } from 'react';
import { connect } from 'dva';

import { Table, Button, Popconfirm, Pagination} from 'antd';

import styles from './Users.css'

class Users extends Component {

    createHandler = ({values}) => {
        this.props.dispatch({
            type: 'users/create',
            payload: values
        })
    }
    editHandler = ({id, values}) => {
        this.props.dispatch({
            type: 'users/patch',
            payload: {id, values}
        })
    }
    deleteHandler = ({id}) => {
        console.log(id)
        this.props.dispatch({
            type: 'users/remove',
            payload: {id}
        })
    }
    pageChangeHander = page => {
        this.props.dispatch({
            type:'users/fetch',
            payload: {page}
        })
    }
    componentDidMount(){
        const {dispatch, list} = this.props;
        //if(list.length <= 0){
            dispatch({
                type:'users/fetch',
                payload: {page: 1}
            })
       // }
    }
    render(){
        const {list: dataSource, loading, total, page: current} = this.props;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                render: text => 
                    <a href="">
                        {text}
                    </a>
            },
            {
                title: 'Email',
                dataIndex: 'email'
            },
            {
                title: 'Website',
                dataIndex: 'website'
            },
            {
                title: 'Username',
                dataIndex: 'username'
            },{
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        
                    </span>
            }
        ]
        return (
            <div className={styles.normal}>
                <div>
                    <div className={styles.create}>
                        <Button type="primary">Create User</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={loading}
                        rowKey={record => record.id}
                        pagination={false}
                    ></Table>
                    <Pagination
                        className="ant-table-pagination"
                        total={total}
                        current={current}
                        pageSize={50}
                        onChange={this.pageChangeHander}
                    ></Pagination>
                </div>
            </div>
        )
    }
}

export default connect()(Users)
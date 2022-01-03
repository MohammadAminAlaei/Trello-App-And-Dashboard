import React, {Component} from 'react';
import style from '../../assets/styles/inputs.module.scss'
import {Card} from "../card/Card";

class Inputs extends Component {

    inputs = [
        {
            type: 'text',
            name: 'title',
            placeholder: 'Title'
        },
        {
            type: 'text',
            name: 'description',
            placeholder: 'Description'
        },
        {
            type: 'date',
            name: 'dueDate',
            placeholder: 'End Date'
        }
    ]

    state = {
        title: '',
        description: '',
        dueDate: '',
        status: 'task',
        info: []
    }


    componentDidMount() {
        this.setState({info: JSON.parse(localStorage.getItem('todo'))})
    }


    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('todo', JSON.stringify(this.state.info))
    }


    todoArray;
    info;

    handleSubmit = (e) => {
        e.preventDefault();
        let myObj = {};
        myObj.title = this.state.title;
        myObj.description = this.state.description;
        myObj.dueDate = this.state.dueDate;
        myObj.status = this.state.status;
        myObj.id = Date.now()

        this.setState({info: [...this.state.info, myObj]})
        console.log(this.state.info)


    }

    handleDelete = (index) => {
        let shallowState = [...this.state.info]
        shallowState = shallowState.filter(item => item.id !== index)
        this.setState({info: shallowState})
    }

    handleChangeStatus = (item, change) => {
        item.status = change;
        console.log(item)
        this.forceUpdate();
    }


    render() {
        return (
            <>
                <form className={style.input_div} onSubmit={this.handleSubmit}>
                    {this.inputs.map(item => (
                        <input type={item.type} name={item.name} key={item.name} placeholder={item.placeholder}
                               className={style.input_div__inputs}
                               onChange={e => this.setState({[item.name]: e.target.value})}/>
                    ))}
                    <input type="submit" value='Submit' className={style.button}/>
                </form>
                <Card onState={this.state.info} onHandleDelete={this.handleDelete}
                      onChangeStatus={this.handleChangeStatus}/>
            </>
        );
    }
}

export {Inputs};
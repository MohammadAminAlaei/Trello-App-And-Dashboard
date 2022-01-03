import React, {Component} from 'react';
import style from '../../assets/styles/card.module.scss'

class Card extends Component {


    render() {

        return (
            <div className={style.card}>
                <div className={style.card__task}>
                    <h1 className={style.card__task__header}> Task </h1>
                    {this.props.onState.filter(item => item.status === 'task').map((item, index) => (
                        <div className={style.create}>
                            <h1 className={style.create__title}> {item.title}
                                <button className={style.create__title__button}
                                        onClick={e => this.props.onHandleDelete(item.id)}> &times; </button>
                            </h1>
                            <div className={style.create__sub}>
                                {item.description}
                            </div>
                            <div className={style.create__dueDate}> {item.dueDate} </div>
                            <div className={style.create__buttons}>
                                <button className={style.create__buttons__task}
                                        onClick={e => this.props.onChangeStatus(item, 'task')}> -
                                </button>
                                <button className={style.create__buttons__doing}
                                        onClick={e => this.props.onChangeStatus(item, 'doing')}> O
                                </button>
                                <button className={style.create__buttons__done}
                                        onClick={e => this.props.onChangeStatus(item, 'done')}> &#10003; </button>
                            </div>
                        </div>
                    ))}

                </div>
                <div className={style.card__doing}>
                    <h1 className={style.card__doing__header}> Doing </h1>
                    {this.props.onState.filter(item => item.status === 'doing').map(item => (
                        <div className={style.create__doing}>
                            <h1 className={style.create__title}> {item.title}
                                <button className={style.create__title__button}
                                        onClick={e => this.props.onHandleDelete(item.id)}> &times; </button>
                            </h1>
                            <div className={style.create__sub}>
                                {item.description}
                            </div>
                            <div className={style.create__dueDate}> {item.dueDate} </div>
                            <div className={style.create__buttons}>
                                <button className={style.create__buttons__task}
                                        onClick={e => this.props.onChangeStatus(item, 'task')}> -
                                </button>
                                <button className={style.create__buttons__doing}
                                        onClick={e => this.props.onChangeStatus(item, 'doing')}> O
                                </button>
                                <button className={style.create__buttons__done}
                                        onClick={e => this.props.onChangeStatus(item, 'done')}> &#10003; </button>
                            </div>
                        </div>
                    ))}

                </div>
                <div className={style.card__done}>
                    <h1 className={style.card__done__header}> Done </h1>
                    {this.props.onState.filter(item => item.status === 'done').map(item => (
                        <div className={style.create__done}>
                            <h1 className={style.create__title}> {item.title}
                                <button className={style.create__title__button}
                                        onClick={e => this.props.onHandleDelete(item.id)}> &times; </button>
                            </h1>
                            <div className={style.create__sub}>
                                {item.description}
                            </div>
                            <div className={style.create__dueDate}> {item.dueDate} </div>
                            <div className={style.create__buttons}>
                                <button className={style.create__buttons__task}
                                        onClick={e => this.props.onChangeStatus(item, 'task')}> -
                                </button>
                                <button className={style.create__buttons__doing}
                                        onClick={e => this.props.onChangeStatus(item, 'doing')}> O
                                </button>
                                <button className={style.create__buttons__done}
                                        onClick={e => this.props.onChangeStatus(item, 'done')}> &#10003; </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export {Card};
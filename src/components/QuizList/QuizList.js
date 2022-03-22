import React, {Component} from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchQuizes } from '../../store/actions/quiz'


class QuizList extends Component {
    //state для хранения списка наших тестов
    // state = {
    //     quizes: [],
    //     loading: true
    // }
    renderQuizes() {
        return this.props.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    //при необходимости получения данных с backend сначала нужно дождаться момента, когда будет создано DOM-дерево
    //Поэтому в 99% случаев для того, чтобы сделать обращение к backend, нам потребуется жизненный цикл, котороый называется componentDidMount

    // async componentDidMount() {
    //     try {
    //         const response = await axios.get('quizes.json')

    //         const quizes = []
    //         Object.keys(response.data).forEach((key, index) => {
    //             quizes.push({
    //                 id: key,
    //                 name: `Тест №${index + 1}`
    //             })

    //             this.setState({
    //                 quizes, loading: false 
    //             })
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // }

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    
                    { 
                        this.props.loading && this.props.quizes.length !== 0
                            ? <Loader /> 
                            : <ul>{ this.renderQuizes() }</ul> 
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return { //Загрузить набор тестов
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList) 
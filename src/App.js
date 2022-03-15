import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/Quizcreator';
import QuizList from './components/QuizList/QuizList';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Quiz}/>
        <Route path='/quiz-creator' component={Quiz}/>
        <Route path='/quiz?:id' component={Quiz}/>
        <Route path='/' component={Quiz}/>
      </Switch>
    </Layout>
  );
}

export default App;

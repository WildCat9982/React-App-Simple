import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Favorites, MyBooks, Page404, Payment } from './pages'
import { Layout } from './components';


const App = props => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Redirect exact from='/' to="/payment" />
                    <Route path="/payment" component={Payment}></Route>
                    <Route exact path="/mybooks" component={MyBooks}></Route>
                    <Route exact path="/favorites" component={Favorites}></Route>
                    <Route exact path="/404" component={Page404}></Route>
                    <Redirect from='*' to='/404' />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App;
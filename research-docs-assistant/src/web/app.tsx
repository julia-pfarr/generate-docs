import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/index';
import Editor from './components/Editor';
import TemplateSelector from './components/TemplateSelector';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/editor" component={Editor} />
                <Route path="/templates" component={TemplateSelector} />
            </Switch>
        </Router>
    );
};

export default App;
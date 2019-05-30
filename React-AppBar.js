import React from '//dev.jspm.io/react';
import ReactDOM from '//dev.jspm.io/react-dom';
import MuiThemeProvider from '//dev.jspm.io/material-ui/styles/MuiThemeProvider';
import AppBar from '//dev.jspm.io/material-ui/AppBar';
import DatePicker from '//dev.jspm.io/material-ui/DatePicker';

const App = () => [
    React.createElement(AppBar.default, {
        key: 'titlebar',
        title: 'Title',
        iconClassNameRight: 'muidocs-icon-navigation-expand-more'
    }),
    React.createElement(DatePicker.default, {
        key: 'datepicker',
        hintText: 'Click to Select a Date'
    })
];

ReactDOM.render(
    React.createElement(MuiThemeProvider.default, null,
        React.createElement(App, null)
    ),
    document.getElementById('root')
);

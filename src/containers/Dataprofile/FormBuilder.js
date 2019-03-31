import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'jquery-ui-sortable';

window.jQuery = $;
window.$ = $;

require('formBuilder');

class FormBuilder extends Component{

    componentDidMount() {
        $('#fb-editor').formBuilder();
    }

    render() {
        return(
            <div id="fb-editor" />
        );

    }
}

export default FormBuilder;
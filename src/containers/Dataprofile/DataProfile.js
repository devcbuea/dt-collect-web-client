import $ from 'jquery'
import React, { Component } from 'react';
import {
    FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import FormBuilder from './FormBuilder';

class DataProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            category: '',
            contributors: null,
            fields: null,
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.save = this.save.bind(this)
    }

    save(el){
        el.preventDefault()
        el.stopPropagation()
        let fields = null;
        let fieldContainers = $("li.form-field");
        let fieldsArray= fieldContainers.map((index, el) => {
            let field = {};
            field.type = $(el).attr('type')
            field.name = $(el).find('label.field-label').text()
            field.required = $(el).find('span.required-asterisk').css('display') == 'none' ? false : true;
            return field
        })
        console.log(fieldsArray)
        this.state.fields = fieldsArray
        console.log(this.state)
        return true;
    }
    changeHandler(el){
        let value = el.currentTarget.value;
        let name = el.currentTarget.name;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="dataprofile-form">
                <h2>Data Profile</h2>
                <form onSubmit={this.save}>
                    <FormGroup controlId="name" validationState="success" >
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder=""  name="name" onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup controlId="description" validationState="success">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="textarea" placeholder=""  name="description" onChange={this.changeHandler} />
                    </FormGroup>
                    <FormGroup controlId="category" validationState="success">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl type="text" placeholder="" name="category" onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup controlId="contributors" validationState="success">
                        <ControlLabel>Contributor(s)</ControlLabel>
                        <FormControl type="select" placeholder="" />
                    </FormGroup>
                    <h3>Create Additional Fields</h3>
                    <FormBuilder />
                    <Button  type="submit" className="save-data-profile" >Save</Button>
                </form>
            </div>
        );
    }
}
export default DataProfile;
import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


class ItemModal extends Component {
    state = {
        modal : false,
        name : ''
    }

    toggle = () => {
        this.setState({
            modal : !this.state.modal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.name);
        this.toggle();

    }

    onChange = (e) => {
        this.setState({[e.target.name] : [e.target.value]})
    }

    render() {
        return (
            <div>
                <Button onClick = {this.toggle} color = "dark" className = "mb-4">Add Item</Button>
                <Modal isOpen = {this.state.modal} toggle = {this.toggle}>
                    <ModalHeader toggle = {this.toggle} >Add Shopping Item</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for = "item">Item</Label>
                                <Input onChange = {this.onChange} name = "name" type = "text" id = "item" 
                                 placeholder = "Add Shopping Item" />
                                 <Button color = "dark" className = "mt-2" block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody> 
                </Modal>
            </div>
        );
    }
}

ItemModal.propTypes = {
    addItem : PropTypes.func.isRequired
}

const mapStatetoProps = (state) => ({
    item : state.test
});

export default connect(mapStatetoProps, {addItem})(ItemModal);
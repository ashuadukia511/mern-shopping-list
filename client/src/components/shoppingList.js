import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {v4 as uuid} from 'uuid';

class shoppingList extends Component {
    state = {
        items : [
            {id : uuid(), name : 'Eggs'},
            {id : uuid(), name : 'Mangoes'},
            {id : uuid(), name : 'Apples'},
            {id : uuid(), name : 'Bananas'}
        ]
    }
    render() {
        const {items} = this.state;
        return (
            <div>
                <Container>
                    <Button color = 'dark' className = "mb-2"onClick = {() => {
                        const name = prompt('Enter Item');
                        if(name){
                        this.setState(state =>({
                            items : [...state.items, {id : uuid(), name : name}]
                        }));}
                    }}>Add Item</Button>
                    <ListGroup>
                        <TransitionGroup className = "shopping-list">
                            {items.map(({id, name}) => {
                                return <CSSTransition key = {id} timeout = {500} classNames = "fade">
                                    <ListGroupItem>
                                        <Button color = "danger" className = "remove-btn mr-2" size = "sm" onClick = {() => {
                                            this.setState(state => ({
                                                items : state.items.filter(item => item.id !== id)
                                            }))
                                        }}>&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            })}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default shoppingList;
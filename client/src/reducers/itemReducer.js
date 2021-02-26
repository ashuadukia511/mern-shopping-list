import {v4 as uuid} from 'uuid';
import {GET_ITEMS, ADD_ITEM , DELETE_ITEM} from '../actions/types';
const initalState = {
    items : [
        {id : uuid(), name : 'Eggs'},
        {id : uuid(), name : 'Mangoes'},
        {id : uuid(), name : 'Apples'},
        {id : uuid(), name : 'Bananas'}
    ]
};

export default function(state = initalState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            };
        case DELETE_ITEM:
            return{
                ...state,
                items : state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return{
                ...state,
                items : [...state.items, {id : uuid(), name : action.payload}]
            };
        default:
            return state;
    }
};
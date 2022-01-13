import React from 'react';

const init = {
    name: '',
    email: '',
    gender: '',
    weight: 0,
    height: 0,
    born: '',
    activity: '',
    gap:'',
    target:'',
    preferences: ''
}

const ItemContext = React.createContext();
const UpdateContext = React.createContext();

export {ItemContext, UpdateContext};
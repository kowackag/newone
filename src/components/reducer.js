import {useReducer} from 'react';

export const useHandler = () => {
    const init = { 
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: '',
        goal: '',
        targetWeight: 0,
        diet: '',
        lactosy: false,
        gluten: false,
        excluded1: '',         
        excluded2: '',
        personalData: {
            userName: '',
            userEmail: '',
            userPhone:'',
            userInfo:'',
        }
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'reset': 
                return init;
            case 'change':
                const {name, value, checked, type, title} = action.element;
                const copyValue = type==='checkbox' ? checked : value;
                const result = title ? {...state, [name]: {...state.personalData, [title]:copyValue}} : {...state, [name]:copyValue};
                return result;
            case 'choose':
                let nameLi = action.element.getAttribute('name');
                return {...state, [nameLi]: action.element.innerText};
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, init);
    return [state, dispatch];
}

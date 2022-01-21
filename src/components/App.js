import React, {useReducer, useState, useEffect} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import LastStage from './LastStage/LastStage';
import ResetStyle from '../styled/Reset';
import GlobalStyle from '../styled/Global';
import StyledApp from './../components/App.styled';
import validateData from './validateData';
import DataAPI from './DataAPI';


const App = () => {
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
        // Chciałam zrobić excluded: ['',''] a potem korzystac z destrukturyzacji ale chyba źle zapisywałam zasadę w reducer. Czy powinnam zmieniac?
        userName: '',
        userEmail: '',
        userPhone:'',
        userInfo:'',
    };

    const reducer = (state, action) => {
        
        switch (action.type) {
            case 'reset': 
                return init;

            case 'change':
                const {name, value, checked, type} = action.element;
                let copyValue = type=='checkbox' ? checked : value;
                return {...state, [name]:copyValue};
            case 'add':
                return {...state, [name]:[value]};
            case 'click':
                let copyValue2 = type=='checkbox' ? checked : value;
                return {...state, [name]:copyValue2};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [stage, setStage] = useState(1);
    const [form, setForm] = useState({})
    const [bmi, setBMI] = useState();
    const [err, setErr] = useState({});
    const [products, setProducts] = useState([]);
    
    const dataDB = new DataAPI();
    useEffect(() => {dataDB.loadProductsAPI().then(data=>setProducts(data))},[]);

    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    const handleForm =(e) => {
        e.preventDefault();
        const errors = validateData(stage, state);
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            setBMI(bmi);
            if (stage <4) {
                setForm(prevState=> {
                    return {...prevState, ...state}
                });
                setStage(prev => ++prev); 
            } else {
                dataDB.addOrdersAPI(state);
                alert('Formularz został wysłany')
                dispatch({type:'reset'});
                setStage(1); 
            }
        } 
    }
    
    const prevForm = (e) => {
        e.preventDefault();
        setStage(prev => --prev); 
    }

    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <ResetStyle/>
            <GlobalStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage state = {state} active={stage===1} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <SecondStage state={state} active={stage===2} bmi={bmi} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <ThirdStage state={state} active={stage===3} prod={products} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <LastStage state={state} active={stage===4} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })}  errors={err}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;

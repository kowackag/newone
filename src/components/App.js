import React, {useReducer, useState, useEffect} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import LastStage from './LastStage/LastStage';
import Complete from './Complete/Complete';
import ResetStyle from '../styled/Reset';
import GlobalStyle from '../styled/Global';
import StyledApp from './../components/App.styled';
import validateData from './validateData';
import DataAPI from './DataAPI';
import ProgressBar from './ProgresBar/ProgressBar';


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
            case 'choose':
                let nameLi = action.element.getAttribute('name');
                return {...state, nameLi: action.element.innerText};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [stage, setStage] = useState(1);
    const [bmi, setBMI] = useState();
    const [err, setErr] = useState({});
    const [products, setProducts] = useState([]);
    const dataDB = new DataAPI();
    useEffect(() => {dataDB.loadProductsAPI().then(data=>setProducts(data))},[]);

    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    const handleForm = (e) =>  {
        e.preventDefault();
        const errors = validateData(stage, state);
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            setBMI(bmi);
            if (stage === 4) {
                dataDB.addOrdersAPI(state);
            } 
            setStage(prev => ++prev); 
        } 
    }
    
    const prevForm = (e) => {
        e.preventDefault();
        setStage(prev => --prev); 
    }

    const reset = (e) => {
        e.preventDefault();
        setStage(1); 
        dispatch({type:'reset'});
    }

    const getProgress = (stage) => {
        const progress = 25 * (stage-1);
        return progress;
    }

    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <ResetStyle/>
            <GlobalStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage state = {state} active={stage===1} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onChoose={e=>dispatch({type:'choose', element: e.target })} errors={err}/>
                <SecondStage state={state} active={stage===2} bmi={bmi} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <ThirdStage state={state} active={stage===3} prod={products} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} errors={err} errors={err} onChoose={e=>dispatch({type:'choose', element: e.target })}/>
                <LastStage state={state} active={stage===4} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <Complete active={stage===5} reset={reset}/> 
                <ProgressBar progress={getProgress(stage)} ></ProgressBar>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;

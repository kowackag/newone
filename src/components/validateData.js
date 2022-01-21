const validateData = (stage, data) => {
    if (stage===1) return validateDataFirstStage(data);
    if (stage===2) return validateDataSecondStage(data);
    if (stage===3) return validateDataThirdStage(data);
    if (stage===4) return validateDataLastStage(data);
}
  
const validateDataFirstStage =({weight, height, gender, born, activity}) => {
    let errors = {};
    if (gender=='') {
        const copyErrors = {gender: 'Podaj płeć'};
        errors = {...errors, ...copyErrors};
    }
    if (Number(weight) < 20) {
        const copyErrors = {weight: 'Błędnie podana waga'};
        errors = {...errors, ...copyErrors};
    }
    if (Number(height) < 100 || Number(height) > 250) {
        const copyErrors = {height: 'Błędnie podany wzrost'};
        errors = {...errors, ...copyErrors};
    }
    const regDate = /(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
    if (!regDate.test(born)) {
        const copyErrors = {born: 'Wprowadzono błędną datę urodzenia'};
        errors = {...errors, ...copyErrors};
    }
    if (!activity) {
        const copyErrors = {activity: 'Uzupełnij rodzaj aktywności'};
        errors = {...errors, ...copyErrors};
    }

    return errors;
}

const validateDataSecondStage =({targetWeight, goal, weight}) => {
    let errors = {};
    if (!goal) {
        const copyErrors = {goal: 'Uzupełnij cel diety'};
        errors = {...errors, ...copyErrors};
    }
    if (goal!=='stable' && Number(targetWeight) < 20) {
        const copyErrors = {weight: 'Błędnie podana waga'};
        errors = {...errors, ...copyErrors};
    }
    if (goal==='muscle-mass' && Number(targetWeight) <= Number(weight) ) {
        const copyErrors = {weight: 'Waga docelowa musi byc większa od obecnej'};
        errors = {...errors, ...copyErrors};
    }
    if (goal==='reduction' && Number(targetWeight) >= Number(weight) ) {
        const copyErrors = {weight: 'Waga docelowa musi być mniejsza od obecnej'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}

const validateDataThirdStage =({diet}) => {
    let errors = {};
    if (!diet) {
        const copyErrors = {diet: 'Wybierz rodzaj diety'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}

const validateDataLastStage =({userName, userEmail, userPhone}) => {
    let errors = {};
    if (userName.length<3) {
        const copyErrors = {userName: 'Wpisz poprawnie imię i Nazwisko'};
        errors = {...errors, ...copyErrors};
    }
    if (!userEmail.includes('@')) {
        const copyErrors = {userEmail: 'Błędny adres email'};
        errors = {...errors, ...copyErrors};
    }
    const regDate = /([1-9]{1}[0-9]{8})/;
    if (!regDate.test(userPhone)) {
        const copyErrors = {userPhone: 'Wprowadzono błędny numer telefonu'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}


export default validateData;
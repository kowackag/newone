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
    console.log(errors)

    return errors;
}

const validateDataSecondStage =({weight, goal}) => {
    const errors = {};
    if (Number(weight) < 20) {
        const copyErrors = {weight: 'Błędnie podana waga'};
        errors = {...errors, ...copyErrors};
    }
    if (!goal) {
        const copyErrors = {goal: 'Uzupełnij cel diety'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}

const validateDataThirtStage =({weight, goal}) => {
    const errors = {};
    if (Number(weight) < 20) {
        const copyErrors = {weight: 'Błędnie podana waga'};
        errors = {...errors, ...copyErrors};
    }
    if (!goal) {
        const copyErrors = {goal: 'Uzupełnij cel diety'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}


export {validateDataFirstStage, validateDataSecondStage, validateDataThirtStage};
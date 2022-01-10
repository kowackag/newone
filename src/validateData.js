export const validateData =({weight, height, gender, born, activity}) => {
    const errors =[];
    if (gender=='') errors.push('Podaj płeć');
    if (Number(weight) < 20) errors.push('Błędnie podana waga');
    if (Number(height) < 100 || Number(height) > 250) errors.push('Błędnie podany wzrost');
    const regDate = /(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
    if (!regDate.test(born)) {errors.push('Wprowadzono błędną datę urodzenia')}
    return errors;
}
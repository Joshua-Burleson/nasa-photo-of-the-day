import React from 'react';
import DateInput from './styles/DateInput.js';

function DateForm(props){
    return(
        <form>
            <h3>Pick Another Date</h3>
            <DateInput id="date-picker" name="newDate" type="date" onChange = { (e) => props.onChangeEvent(e) }></DateInput>
        </form>
    )
}

export default DateForm;
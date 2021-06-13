import React from 'react';
import CalendarDateListStyled from './CalendarDateList.styled';
// import {CalendarDateItem} from './CalendarDateItem';
const CalendarDateList = ({children}) => {
    return (
        <CalendarDateListStyled>
            {children}
        </CalendarDateListStyled>
    )
}

export default CalendarDateList
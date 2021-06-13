import React from 'react';
import { CalendarTitleStyled } from '../../Calendar/CalendarTitle/CalendarTitle.styled';

const TimeSliderTitle = ({title}) => {
    return (
        <CalendarTitleStyled style={{textAlign: "left"}} >
            {title}
        </CalendarTitleStyled>
    )
}

export default TimeSliderTitle

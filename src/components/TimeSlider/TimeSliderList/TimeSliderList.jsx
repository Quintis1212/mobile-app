import React from 'react'
import {TimeSliderListStyled,TimeSliderNumberStyled} from "./TimerSliderList.styled";

const TimeSliderList = ({freeTime}) => {
    return (
        <TimeSliderListStyled>
            {freeTime.map(el=>{
                return (
                    <TimeSliderNumberStyled key={el}>
                        {el}
                    </TimeSliderNumberStyled>
                )
            })}
            
        </TimeSliderListStyled>
    )
}

export default TimeSliderList

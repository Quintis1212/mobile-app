import styled from "styled-components";

const CalendarDateListItemStyled = styled.div`
  width: 86px;
  height: 92px;
  background: #ffffff;
  border: 1px solid #edeff2;
  box-sizing: border-box;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  margin-right:16px;
`;

const CalendarDateListTitle = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #5b5b5b;
  padding-top:16px;
  padding-bottom:4px;
`;

const CalendarDateListDate = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  align-items: center;
  text-align: center;
  color: #1d201f;
`;

export { CalendarDateListItemStyled, CalendarDateListTitle,CalendarDateListDate };

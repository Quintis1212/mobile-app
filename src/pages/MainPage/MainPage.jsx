import React from "react";
import MainPageStyled from "./MainPage.styled";
import {
  PersonCardContainer,
  CalendarContainer,
  TimeSliderContainer,
  AppointmentContainer,
  PersonTitle,
  Section,
  PersonPhoto,
  PersonInfo,
  TimeSliderTitle,
  TimeSliderList,
  CalendarTitle,
  CalendarDateList,
  CalendarDateItem,
  AppointmentButton,
  AppointmentInfo,
} from "../../components";
import image from "../../man.png";

const MainPage = () => {
  const time = ["13:52", "13:10", "13:40"];

  return (
      <MainPageStyled>
        <PersonCardContainer>
          <PersonTitle title={"Имя"} />
          <Section>
            <PersonPhoto image={image} alt={"Person photo"} />
            <PersonInfo
              paragraphInfo={"Длительность консультации"}
              paragraphInfoBold={"50 минут"}
            />
          </Section>
        </PersonCardContainer>
        <CalendarContainer>
          <CalendarTitle title={"Возможная дата"} />
          <CalendarDateList>
            <CalendarDateItem list={[3, 4, 5]} />
          </CalendarDateList>
        </CalendarContainer>
        <TimeSliderContainer>
          <TimeSliderTitle title={"Свободное время"} />
          <TimeSliderList freeTime={time} />
        </TimeSliderContainer>
        <AppointmentContainer>
          <Section>
            <AppointmentInfo label={"Дата"} time={"26 мая"} />
            <div className="custom-line"></div>
            <AppointmentInfo label={"Время"} time={"18:30"} />
          </Section>
          <AppointmentButton>
            ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
          </AppointmentButton>
        </AppointmentContainer>
      </MainPageStyled>
  );
};

export default MainPage;

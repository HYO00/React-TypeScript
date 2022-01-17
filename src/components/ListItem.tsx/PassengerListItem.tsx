import React from "react";
import { Response } from "api/getData";
import {
  PassengerList,
  ListBox,
  NameNtrip,
  SpanName,
  SpanTrip,
  AirlineInfoBox,
  AirlineInfo,
  AirlineLogo,
  AirlineSlogan,
} from "./PassengerListItemStyle";

const PassengerListItem = (list: Response): JSX.Element => {
  return (
    <PassengerList>
      <ListBox>
        <NameNtrip>
          <SpanName>{list.name}</SpanName>
          <SpanTrip>{list.trips}trips</SpanTrip>
        </NameNtrip>
        <AirlineInfoBox>
          <AirlineInfo>
            <AirlineLogo src={list.airline[0].logo}></AirlineLogo>
            <AirlineSlogan>{list.airline[0].slogan}</AirlineSlogan>
          </AirlineInfo>
        </AirlineInfoBox>
      </ListBox>
    </PassengerList>
  );
};

export default PassengerListItem;

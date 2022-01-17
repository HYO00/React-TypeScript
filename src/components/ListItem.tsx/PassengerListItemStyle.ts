import styled from "styled-components";

export const PassengerList = styled.div`
  border-top: 1px solid rgb(241, 243, 249);
`;

export const ListBox = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 20px 0px;
`;

export const NameNtrip = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const SpanName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;

export const SpanTrip = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgb(0, 0, 0);
`;

export const AirlineInfoBox = styled.div``;

export const AirlineInfo = styled.div`
  margin-top: 10px;
  background-color: rgb(242, 242, 242);
  padding: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const AirlineLogo = styled.img`
  width: 80px;
`;

export const AirlineSlogan = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

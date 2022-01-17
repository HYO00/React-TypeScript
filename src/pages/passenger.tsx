import styled from "styled-components";
import getData from "../api/getData";
import { Response } from "api/getData";
import PassengerListItem from "components/ListItem.tsx/PassengerListItem";

const PassengerContainer = styled.div`
  padding: 20px;
`;

const PassengerBox = styled.div``;

const passenger = () => {
  const { response } = getData({
    url: "https://api.instantwebtools.net/v1/passenger?page=0&size=10",
  });
  console.log(response);

  return (
    <PassengerContainer>
      <h2>passenger</h2>
      <PassengerBox>
        {response &&
          response?.map((list: Response, idx: number) => {
            return <PassengerListItem {...list} key={idx.toString()} />;
          })}
      </PassengerBox>
    </PassengerContainer>
  );
};
export default passenger;

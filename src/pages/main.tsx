import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainContainer = styled.div`
  padding: 40px;
`;

const List = styled.li`
  margin: 40px 0px;
`;

const Span = styled.span`
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: bold;
`;

const main = () => {
  return (
    <MainContainer>
      <ul>
        <List>
          <Link to="/report">
            <Span>레포트</Span>
          </Link>
        </List>
        <List>
          <Link to="/passenger">
            <Span>승객목록</Span>
          </Link>
        </List>
      </ul>
    </MainContainer>
  );
};

export default main;

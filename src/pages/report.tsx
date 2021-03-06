import React from "react";
import getData from "../api/getData";
import styled from "styled-components";

const ReportContainer = styled.div`
  padding: 20px;
`;

const ReportBox = styled.div`
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
`;

const ReportBar = styled.div`
  padding: 10px;
`;

const ReportBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ReportActiveBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Cycle = styled.div`
  background-color: rgb(34, 34, 34);
  width: 7px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
`;

const Start = styled.div`
  background-color: rgb(34, 34, 34);
  width: 22px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
  margin-left: 18px;
`;

const Span = styled.span`
  font-size: 10px;
  color: rgb(96, 96, 96);
  margin-right: 4px;
`;

const GraphContainer = styled.div``;

const GraphBox = styled.div`
  position: relative;
`;

const Svg = styled.svg``;

const GraphDate = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const GraphSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => props.color || "rgb(112, 112, 112)"};
`;

const BarContainer = styled.div`
  margin-top: 40px;
`;

const BarBox = styled.div`
  display: flex;
  padding-left: 46.5px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Bar = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  -webkit-box-align: center;
  width: 93px;
`;

const BarWhite = styled.div<{ height: number | string }>`
  height: ${(props) => props.height || 0}px;
  width: 30px;
  background-color: rgb(255, 255, 255);
`;

const BarBlack = styled.div<{ height: number | string }>`
  border-radius: 10px;
  height: ${(props) => props.height || 0}px;
  width: 30px;
  background-color: rgb(51, 51, 51);
`;

const BarDay = styled.div`
  margin-top: -23px;
  text-align: center;
`;

const BarSpan = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: rgb(85, 85, 85);
`;

const BarMonth = styled.div`
  margin-top: 5px;
`;

const MonthSpan = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgb(85, 85, 85);
`;
//????????? ??????
// line x1 ??? ?????? ?????? y1 ??? ?????? ?????? x2 ??? ????????? ?????? y2 ??? ????????? ??????
// ??? ????????? circle cx ?????? ?????? x??????  cy ?????? ?????? y?????? r ?????? ????????? ??????
//width 556 / 6 => 92.6666666667 ???????????????
//x1 = 92.6666666667 x2 = 92.6666666667*2
//y1 = 160?????? - 28 ????????????  y2 = 160 - 42 ????????????

//???????????? cx = line x1 ???  cy = line y1 ??? r = 4.5\
//[92.6666666667, width - cycle, 92.6666666667*2, ]

//bar ??? ??????
// 100 / 15 * ?????? ?????? Math.ceil(100 / 15 * ?????? ??????)
//100 - ????????????

const Report: React.FC = () => {
  const intervalX: number = 556 / 6;
  const barValue: number = 100 / 15;
  const width: number = 160;

  const { response } = getData({
    url: "https://motionz-kr.github.io/playground/apis/report.json",
  });

  const cycle = response?.map((el) => el.cycle);

  //barData
  const startDate: (string | number)[][] | undefined = response?.map((el) => {
    let arr = el.startDate.split("-");
    const white: number = 100 - Math.ceil(barValue * el.period);
    const black: number = 100 - white;
    return [white, black, el.period, `${arr[1]}/${arr[2]}`];
  });

  //cycle line ??????
  const cycleArr = cycle?.map((el, idx, ar) => {
    return [
      intervalX * (idx + 1),
      width - el,
      intervalX * (2 + idx),
      width - ar[idx + 1],
    ];
  });

  //cycle date ??????
  const cycleDate = cycle?.map((el, idx) => {
    let top = 130;
    let left = 80.6667;
    return [top - el, left + idx * intervalX, el];
  });
  //console.log(cycleData);

  return (
    <ReportContainer>
      <h2>User Report</h2>
      <ReportBox>
        <ReportBar>
          <ReportBarBox>
            <ReportActiveBox>
              <Cycle></Cycle>
              <Span>????????????</Span>
            </ReportActiveBox>
            <ReportActiveBox>
              <Start></Start>
              <Span>????????????, ?????????</Span>
            </ReportActiveBox>
          </ReportBarBox>
        </ReportBar>
        <GraphContainer>
          <GraphBox>
            <svg height="160" width="556">
              {cycleArr &&
                cycleArr.map((el, idx) => {
                  return idx !== cycleArr.length - 1 ? (
                    <line
                      key={idx}
                      x1={el[0]}
                      y1={el[1]}
                      x2={el[2]}
                      y2={el[3]}
                      stroke="#222"
                      strokeWidth="2"
                    ></line>
                  ) : null;
                })}
              {cycleArr &&
                cycleArr.map((el, idx) => {
                  return (
                    <circle
                      key={idx}
                      cx={el[0]}
                      cy={el[1]}
                      r="4.5"
                      fill="#222"
                    ></circle>
                  );
                })}
            </svg>
            {cycleDate &&
              cycleDate.map((el, idx) => {
                return el[2] >= 100 ? (
                  <GraphDate key={idx.toString()} top={el[0]} left={el[1]}>
                    <GraphSpan color={"#f00"}>{el[2]}???</GraphSpan>
                  </GraphDate>
                ) : (
                  <GraphDate key={idx.toString()} top={el[0]} left={el[1]}>
                    <GraphSpan>{el[2]}???</GraphSpan>
                  </GraphDate>
                );
              })}
          </GraphBox>
        </GraphContainer>
        <BarContainer>
          <BarBox>
            {startDate &&
              startDate.map((el, idx) => {
                return (
                  <Bar key={idx}>
                    <BarWhite height={el[0]}></BarWhite>
                    <BarBlack height={el[1]}>
                      <BarDay>
                        <BarSpan>{el[2]}???</BarSpan>
                      </BarDay>
                    </BarBlack>
                    <BarMonth>
                      <MonthSpan>{el[3]}</MonthSpan>
                    </BarMonth>
                  </Bar>
                );
              })}
          </BarBox>
        </BarContainer>
      </ReportBox>
    </ReportContainer>
  );
};

export default Report;

import styled from "styled-components";
import getData from "../api/getData";
import { Response } from "api/getData";
import PassengerListItem from "components/ListItem.tsx/PassengerListItem";
import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "hook/useFetch";

const PassengerContainer = styled.div`
  padding: 20px;
`;

const PassengerBox = styled.div``;

interface ObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
}

const Passenger = () => {
  //const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { loading, list } = useFetch(page);
  const loader = useRef(null);
  //console.log("list", list, "loader", loader);

  const handleObserver = useCallback((entries) => {
    //관찰대상
    const target = entries[0];
    //console.log("target", target);
    //isIntersecting: 관찰 대상의 교차 상태(Boolean)
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      //console.log("page", page);
    }
  }, []);

  useEffect(() => {
    const option: ObserverProps = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    //callbackFunc - handleObserver entries 배열인자를 받는다.
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <PassengerContainer>
      <h2>passenger</h2>
      <PassengerBox>
        {list &&
          list?.map((list: Response, idx: number) => {
            return <PassengerListItem {...list} key={idx.toString()} />;
          })}
        {loading && <p>Loading...</p>}
        <div ref={loader}></div>
      </PassengerBox>
    </PassengerContainer>
  );
};
export default Passenger;

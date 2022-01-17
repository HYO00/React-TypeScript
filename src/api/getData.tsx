import axios from "axios";
import React, { useState, useEffect } from "react";

export interface GetData {
  url: string;
}

export interface Response {
  startDate: string;
  endDate: string;
  period: number;
  cycle: number;
  name: string;
  trips: number;
  airline: Array<any>;
  logo: string;
}

const useGetData = (url: GetData) => {
  const [response, setResponse] = useState<Response[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const ApiUrl = "https://motionz-kr.github.io/playground/apis/report.json";
  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetch");
      try {
        setIsLoading(true);
        axios(url).then((res) => {
          setResponse(res.data.data);
          setIsLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return { response, isLoading };
};

export default useGetData;

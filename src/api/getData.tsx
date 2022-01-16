import axios from "axios";
import React, { useState, useEffect } from "react";

interface GetData {
  url: string;
}

interface Response {
  startDate: string;
  endDate: string;
  period: number;
  cycle: number;
}

const useGetData = (url: GetData) => {
  const [response, setResponse] = useState<Response[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const ApiUrl = "https://motionz-kr.github.io/playground/apis/report.json";
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch");
      try {
        axios(url).then((res) => {
          setResponse(res.data.data);
          setIsLoading(!isLoading);
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

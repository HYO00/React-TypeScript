import { useState, useEffect, useCallback } from "react";
import { Response } from "api/getData";
import axios from "axios";

const useFetch = (page: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<Response[]>([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      setList(list?.concat(res.data.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  useEffect(() => {
    //쿼리 날리기
    sendQuery();
  }, [sendQuery, page]);

  return { loading, list };
};
export default useFetch;

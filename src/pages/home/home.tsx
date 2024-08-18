import { useContext, useEffect } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import { INewsAPIResponse } from "../../utils/interfaces";

export default function HomePage() {
  const userContext = useContext(UserSettingsContext);

  const getHeadlines = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?language=en",
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      }
    );

    const data: INewsAPIResponse = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <>
      <h1>This is home page</h1>
      <pre>
        <code>{JSON.stringify(userContext, null, 2)}</code>
      </pre>
    </>
  );
}

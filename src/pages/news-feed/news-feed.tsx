import React, { useContext, useEffect } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

export default function NewsFeedPage() {
  const userContext = useContext(UserSettingsContext);

  return (
    <>
      <h1>This is news feed page</h1>
      <pre>
        <code>{JSON.stringify(userContext, null, 2)}</code>
      </pre>
    </>
  );
}

import { useContext } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

export default function HomePage() {
  const userContext = useContext(UserSettingsContext);

  return (
    <>
      <h1>This is home page</h1>
      <pre>
        <code>{JSON.stringify(userContext, null, 2)}</code>
      </pre>
    </>
  );
}

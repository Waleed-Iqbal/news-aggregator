import { useContext } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

export default function SettingsPage() {
  const userContext = useContext(UserSettingsContext);

  return (
    <>
      <h1>This is settings page</h1>
      <pre>
        <code>{JSON.stringify(userContext, null, 2)}</code>
      </pre>
    </>
  );
}

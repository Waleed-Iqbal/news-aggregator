import React from "react";

import Navigation from "../navigation/navigation";

export default function Page({ pageTitle, childComponent }) {
  document.title = pageTitle;
  const PageComponent = childComponent;

  // scrolling to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <>
      <Navigation />
      <PageComponent />
    </>
  );
}

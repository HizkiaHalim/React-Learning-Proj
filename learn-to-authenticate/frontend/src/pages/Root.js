import { Outlet, useNavigation, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getAuthToken, getTokenDuration } from "../util/auth";
import { useEffect } from "react";

function RootLayout() {
  const token = getAuthToken();
  const submit = useSubmit();
  // const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED'){
      submit(null, { action: "/logout", method: "post" });
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

import { Fragment } from "react/jsx-runtime";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";


function App() {
  const show = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!show ? <Auth /> : <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;

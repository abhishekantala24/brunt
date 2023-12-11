import { ToastContainer } from "react-toastify";

import AuthNavigator from "./navigators/AuthNavigator";

import { Provider as ReduxProvider, useSelector } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import ScrollToTop from "./utils/scrollToTop";
import AppNavigator from "./navigators/AppNavigator";
import { authSelector } from "./redux/auth/authSlice";
import SessionModal from "./component/SessionModal/SessionModal";
import Loader from "./component/loader";
import WipModalView from "./component/WipModal/WipModal";

const App: React.FC = (): JSX.Element => {
  const authUser = useSelector(authSelector)  
    // console.log(authUser);
    
  return (
    <>
      <ScrollToTop />
      <Loader />
      <SessionModal />
      <WipModalView />
      {authUser.token ? <AppNavigator /> : <AuthNavigator />}
      <ToastContainer />
    </>
  );
}

export default () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
)

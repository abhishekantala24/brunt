import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../screen/Auth/Login";
 

const AuthNavigator: React.FC = (): JSX.Element => {
  return (
    <>
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
};

export default AuthNavigator;

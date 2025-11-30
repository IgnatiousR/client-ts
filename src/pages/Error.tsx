import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
// import Wrapper from '../assets/wrappers/ErrorPage';
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <main>
          <div>
            <img src={img} alt="not found image" />
            <h3>Ohh! page not found</h3>
            <p>we can't seem to find the page you are looking for</p>
            <Link to="/dashboard">back home</Link>
          </div>
        </main>
      );
    }
  }
  return (
    <main>
      <div>
        <h3>something went wrong</h3>
      </div>
    </main>
  );
};
export default Error;

import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="card p-4 mt-3">
      <h1
        className="text-danger text-center"
        alt="Error Page, Something Went Wrong"
      >
        Something Went Wrong 😢
      </h1>
      <Link to="/" className="btn btn-outline-success ">
        <small>Go back to</small> <strong>Home Page🏠</strong>
      </Link>
    </div>
  );
};

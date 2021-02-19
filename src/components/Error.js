import { RiErrorWarningLine } from "react-icons/ri";

const Error = ({ error }) => {
  return (
    <h2 className="error container">
      <span className="error-icon">
        <RiErrorWarningLine />
      </span>
      &nbsp; {error}
    </h2>
  );
};

export default Error;

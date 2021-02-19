import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

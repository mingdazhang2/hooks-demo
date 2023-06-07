import React from "react";

const useFetch = () => {
  return (
    <>
      <div>
        <a href="https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480#:~:text=When%20using%20'this'%20in%20an,values%20in%20the%20object's%20methods.">
          What is "this"
        </a>
      </div>
      {console.log("In return", this)}
    </>
  );
};
export default useFetch;

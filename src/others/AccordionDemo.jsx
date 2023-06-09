import React, { useState, useEffect } from "react";

const AccordionDemo = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {
      signal: signal,
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
    //   .catch((err) => setError(err));
    return () => {
      console.log("abort");
      controller.abort();
    };
  }, [resourceType]);
  return (
    <>
      <div className="lead mb-3">
        Accordion, open the current one, close others.
        <br /> Data from fetching https://jsonplaceholder.typicode.com/
        {/* <select onClick={(e) => setResourceType(e.target.value)}>
          <option value="posts">posts</option>
          <option value="users">users</option>
          <option value="comments">comments</option>
        </select> */}
        <Accordion items={items} />
      </div>
    </>
  );
};
export default AccordionDemo;

const Accordion = ({ items }) => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <ul className="accordion mt-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  );
};

export const AccordionItem = ({ item, onToggle, active }) => {
  const { body, title } = item;
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <div className="accordion_title" onClick={onToggle}>
        {title}
        <span className="control">{active ? "-" : "+"}</span>
      </div>
      <div className={`accordion_body_wrapper ${active ? "active" : ""}`}>
        <div className="accordion_body">{body}</div>
      </div>
    </li>
  );
};

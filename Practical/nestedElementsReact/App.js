const heading1 = React.createElement("h1", {}, "This is the Heading 1");
const heading2 = React.createElement("h2", {}, "This is the Heading 2");

const container = React.createElement("div", {}, [heading1, heading2]); //[] this will be used to club the elements together

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
import "./App.css";
import Accordion from "./lib/components/Accordion";

const values = [
  {
    id: 0,
    heading: "Introduction to JavaScript",
    renderContent: () => (
      <p>
        JavaScript is a versatile programming language used in web development.
      </p>
    ),
  },
  {
    id: 1,
    heading: "Understanding React",
    renderContent: () => (
      <p>React is a popular JavaScript library for building user interfaces.</p>
    ),
  },
  {
    id: 2,
    heading: "Learning CSS",
    renderContent: () => <p>CSS is used to style and layout web pages.</p>,
  },
  {
    id: 3,
    heading: "Getting Started with Node.js",
    renderContent: () => (
      <p>Node.js allows JavaScript to be run on the server-side.</p>
    ),
  },
  {
    id: 4,
    heading: "Exploring Web APIs",
    renderContent: () => (
      <p>
        Web APIs allow interaction between different software applications over
        the web.
      </p>
    ),
  },
];

function App() {
  return (
    <>
      <div>
        <Accordion items={values} keepOpen={false} />
      </div>
    </>
  );
}

export default App;

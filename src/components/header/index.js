import "./index.style.css";

const Header = () => {
  return (
    <header className="App-header">
      <h1>What's React?</h1>
      <p>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on components. It lets you compose
        complex UIs from small and isolated pieces of code called “components”.
        Most React developers use a special syntax called “JSX ” which makes
        these structures easier to write.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about React
      </a>
    </header>
  );
};

export default Header;

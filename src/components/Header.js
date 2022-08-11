import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <h2>Comment System</h2>
        <nav>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link to="/Login" style={styles.anChorTags}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/Sign Up" style={styles.anChorTags}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "royalblue",
    gap: 40,
  },
  list: {
    display: "flex",
    listStyle: "none",
  },

  listItem: {
    marginRight: "2rem",
  },

  anChorTags: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;

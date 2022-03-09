import Header from "../header/Header";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
      {/* Home Section */}
      {/* About Section */}
      {/* Skills Section */}
      {/* Projects Section */}
      {/* Contact Section */}
    </>
  );
};

export default Layout;

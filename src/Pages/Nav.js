import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AskQuestion" className="nav-link">
              <i className="fas fa-question-circle"></i> Ask a question
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

































// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           Stack Overflow
//         </Link>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/questions" className="nav-link">
//               Questions
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/tags" className="nav-link">
//               Tags
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/users" className="nav-link">
//               Users
//             </Link>
//           </li>
//           {/* Add more navigation items here */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

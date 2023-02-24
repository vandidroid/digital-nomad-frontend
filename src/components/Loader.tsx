import { FaSpinner } from "react-icons/fa";

import "./Loader.scss";

function Loader() {
  return (
    <div className="Loader">
      <div className="spinner">
        <FaSpinner size={32} />
      </div>
    </div>
  );
}

export default Loader;

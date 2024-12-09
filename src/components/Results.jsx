import { useSelector } from "react-redux";
import HasResults from "./HasResults.jsx";
import NoResults from "./NoResults.jsx";

const Results = () => {
  const mortgageType = useSelector((state) => state.type);

  if (mortgageType) {
    return <HasResults />;
  }

  return <NoResults />;
};

export default Results;

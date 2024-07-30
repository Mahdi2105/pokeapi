import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />;
}

export default Loading;

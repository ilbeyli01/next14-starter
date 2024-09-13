import Link from "next/link";

const NotFound = () => {
  return <div>
    <h2>F*CK!!!</h2>
    <p>Sorry, the page does not exist...</p>
    <Link href={"/"}>Return Home</Link>
  </div>;
};

export default NotFound;
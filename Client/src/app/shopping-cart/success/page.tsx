import { NavBar } from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Success() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center w-screen min-h-screen gap-20">
        <h1 className="text-8xl font-bold">Payment Successful!</h1>
        <FontAwesomeIcon icon={faCircleCheck} width={100} />
      </div>
    </>
  );
}

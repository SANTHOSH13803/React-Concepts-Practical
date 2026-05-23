import { useSelector } from "react-redux";

const NthChild = () => {
  const { profileDetails } = useSelector((state) => {
    return state.user;
  });
  return (
    <div className="flex flex-col space-x-4 border-t mt-12">
      <h1 className="font-semibold text-3xl">Nth Child compoent</h1>
      <span className="mt-12 text-3xl text-yellow-400 bg-gray-700 p-2 rounded-xl text-center">
        {profileDetails?.user}
      </span>
    </div>
  );
};

export default NthChild;

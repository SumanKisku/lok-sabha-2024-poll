import { contract } from "../../utils/constants";
import { readContract } from "thirdweb";

const Testing = () => {
  const hasVoted = await readContract({
    contract: contract,
    method: "function hasVoted() public  view returns (bool)",
  });

  return (
    <div>
      {`Has voted? ${hasVoted}`}
    </div>
  );
};

export default Testing;

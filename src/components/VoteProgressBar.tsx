import { Progress } from "./ui/progress";

const VoteProgressBars = ({
  partyAVotes,
  partyBVotes,
}: {
  partyAVotes: bigint | number | undefined;
  partyBVotes: bigint | number | undefined;
}) => {
  partyAVotes = Number(partyAVotes);
  partyBVotes = Number(partyBVotes);
  const totalVotes = partyAVotes + partyBVotes;
  const bjpPercentage = (partyAVotes / totalVotes) * 100;
  const congressPercentage = (partyBVotes / totalVotes) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Voting Results</h2>

      <div className="mb-4">
        <span className="block text-sm font-medium text-slate-100 mb-1">
          BJP: {bjpPercentage}%
        </span>
        <Progress className="text-orange-500" value={bjpPercentage} />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-100 mb-1">
          Congress: {congressPercentage}%
        </span>
        <Progress value={congressPercentage} />
      </div>
    </div>
  );
};

export default VoteProgressBars;

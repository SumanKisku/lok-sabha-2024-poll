import { client, contract } from "../../utils/constants";
import {
  ConnectButton,
  TransactionButton,
  useActiveWallet,
  useReadContract,
} from "thirdweb/react";

import { prepareContractCall } from "thirdweb";
import VoteProgressBars from "./VoteProgressBar";
const Vote = () => {
  const wallet = useActiveWallet();
  const currentWalletAddress =
    wallet?.getAccount()?.address ?? "";

  const {
    data: hasVoted,
    isLoading,
    refetch,
  } = useReadContract({
    contract,
    method: "hasVoted",
    params: [currentWalletAddress],
  });

  const { data: votes } = useReadContract({
    contract,
    method: "getVotes",
    params: [currentWalletAddress],
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : hasVoted ? (
        <div className="text-center">
          <ConnectButton client={client} />

          <h3 className="font-extrabold">{`BJP: ${votes?.[0]} - Congress: ${votes?.[1]}`}</h3>
          <VoteProgressBars partyAVotes={votes?.[0]} partyBVotes={votes?.[1]} />
          <p className="mt-5">You have already voted</p>
        </div>
      ) : (
        <div className="flex gap-4">
          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract,
                method: "voteBjp",
              })
            }
            onTransactionSent={() => {
              console.log("Voting for BJP");
            }}
            onTransactionConfirmed={() => refetch()}
          >
            Vote BJP
          </TransactionButton>

          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract,
                method: "voteCongress",
              })
            }
            onTransactionSent={() => {
              console.log("Voting for INDIA");
            }}
            onTransactionConfirmed={() => refetch()}
          >
            Vote Congress
          </TransactionButton>
        </div>
      )}
    </>
  );
};

export default Vote;

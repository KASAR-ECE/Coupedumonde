const ButtonQuickVote = ({
  equipeName = "default",
  quickScoreVote = false,
  state,
  setQuickVote = () => {},
  setScoreVote = () => {},
}) => {
  const quickVoteHandler = () => {
    setQuickVote();
  };

  const scoreVoteHandler = (e) => {
    setScoreVote(e.target.value);
  };

  let color = "bg-kasar3";
  if (state.draw || state.draw === "true") {
    color = "bg-draw text-white";
  } else if (state.win || state.win === "true") {
    color = "bg-win";
  } else {
    color = "bg-white";
  }

  return (
    <div className="flex flex-wrap flex-col items-center min-w-[30%] max-w-[35%] min-h-10 my-auto">
      {quickScoreVote ? (
        <input
          onChange={scoreVoteHandler}
          className={`shadow appearance-none border rounded w-16 py-2 px-3 ${color}
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="username"
          type="number"
          placeholder="Score"
        />
      ) : (
        <button
          onClick={() => {
            quickVoteHandler(equipeName);
          }}
          className={`text-kasar1 font-bold ${color} border border-kasar2 rounded-lg p-2 hover:validate my-2`}
        >
          {equipeName}
        </button>
      )}
    </div>
  );
};

export default ButtonQuickVote;

//this is the state of each users
var voteState = {
  Bret: 1,
  Krishna: 1,
};

function doSomething() {
  return Object.assign({}, voteState, {
    Krishna: voteState.Krishna + 1,
  });
}

console.log(doSomething());

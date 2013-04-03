/* 
 *@Version: 0.1
 *@Author: Davis Dong
 *@Function: ProblemSceneControl
 */
 
/* 
 * Enum of Problem States
 * The First Number represents the scene {1: Room 2: Port 3: Bay}
 * The Second Number represents the specific problem.
 */
var ProblemState = 0;
   
ProblemStates = {
	0:'idle',
	11:'DebugMode',
	12:'WireShark',
	13:'FileStructure',
	14:'Crypto',
	15:'CMD',
	21:'PortLayout',
	22:'FindShip',
	23:'UnlockTheDoor',
	24:'TechieChallenge',
	25:'HowToPilot',
	26:'PartolDrone',
	31:'PassTheGuard',
	32:'PilotInfo',
	33:'BreakTheAuthenticationSystem',
	34:"BoardTheShip",
}

/*
 *@Function: ProblemScencControl 1 arg 0 return
 *@Arg: CurrentProblem range:{11,12,13,14,15,21,22,23,24,25,26,31,32,33,34}, represents the current problem.
 *@Usage: using this function in main.js::update()
 */
function ProblemSceneControl(CurrentProblem)
{
	ig.game.loadLevel(ig.global ['Level' + ProblemStates[CurrentProblem]]);
	ProblemState = CurrenProblem;
}
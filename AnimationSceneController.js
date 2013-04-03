/* 
 *@Version: 0.1
 *@Author: Davis Dong
 *@Function: AnimationSceneControl
 */
 
/* 
 * Enum of Animation States
 */
var AnimationState = 0
   
AnimationStates = {
	0:'idle',
	1:'StartAnimation',
	11:'DebugAnimation',
	12:'WiresharkAnimation',
	13:'FileAnimation',
	14:'CryptoAnimation',
	15:'CMDAnimation',
    21:'PortAnimation',
	22:'ShipAnimation',
	23:'DoorAnimation',
	24:'TechieAnimation',
	25:'PilotAnimation',
	26:'DroneAnimation',
	31:'GuardAnimation',
	32:'InfoAnimation',
	33:'AuthAnimation',
	34:'ShipAnimation',
}

/*
 *@Function: AnimationControl 1 arg 0 return
 *@Arg: CurrentAnimation represents the animation clip;
 *@Usage: using this function in main.js::update()
 */
function AnimationControl(CurrentAnimation)
{
	ig.game.loadLevel(ig.global ['Level' + AnimationStates[CurrentAnimation]]);
	AnimationState = CurrentAnimation;
	PlayAnimation();
}
/*
 *@Function: Play animations 0 arg 0 return
 *State Machine of Different Animation
 */
function PlayAnimation()
{
	switch (AnimationState)
	{
		case 0: break;
		case 1: StartAnimation();
				break;
		case 11: DebugAnimation();
				 break;
		case 12: WireSharkAnimation();
				 break;
		case 13: FileAnimation();
				 break;
		case 14: CryptoAnimation();
				 break;
		case 15: CMDAnimation();
				 break;
		case 21: PortAnimation();
				 break;
		case 22: ShipAnimation();
				 break;
		case 23: DoorAnimation();
				 break;
		case 24: TechieAnimation();
				 break;
		case 25: PilotAnimation();
				 break;
		case 26: DroneAnimation();
				 break;
		case 31: GuardAnimation();
				 break;
		case 32: InfoAnimation();
				 break;
		case 33: AuthAnimation();
				 break;
		case 34: ShipAnimation();
				 break;
	}
}

function StartAnimation()
{
	
}
#pragma strict

function Start () {

}

function Update () {
	
}

function OnMouseDown() 
{
	switch(name)
	{
		case"LevelCube":
			SwitchScene.SwitchToLevelSelect();
		break;
		case"UpgradeCube":
			SwitchScene.SwitchToUpgradeMenu();
		break;
		case"Level1Cube":
			SwitchScene.SwitchToLevel("SPRING_LVL1");
		break;
		case"Level2Cube":
			SwitchScene.SwitchToLevel("SPRING_LVL2");
		break;
		case"Level3Cube":
			SwitchScene.SwitchToLevel("SPRING_LVL3");
		break;
		case"Level4Cube":
			SwitchScene.SwitchToLevel("SPRING_LVL4");
		break;
	}
}
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
		case"Level1":
			SwitchScene.SwitchToLevel("SPRING_LVL1");
		break;
		case"Level2":
			SwitchScene.SwitchToLevel("SPRING_LVL2");
		break;
		case"Level3":
			SwitchScene.SwitchToLevel("SPRING_LVL3");
		break;
		case"Level4":
			SwitchScene.SwitchToLevel("SPRING_LVL4");
		break;
	}
}
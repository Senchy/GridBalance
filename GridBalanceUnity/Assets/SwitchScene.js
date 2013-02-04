static class SwitchScene
{
	function SwitchToMainMenu()
	{
		Application.LoadLevel("MasterMainMenu");
	}
	function SwitchToLevelSelect()
	{
		Application.LoadLevel("MasterLevelMenu");
	}
	function SwitchToUpgradeMenu()
	{
		Application.LoadLevel("MasterUpgradeMenu");
	}
	function SwitchToLevel(number)
	{
		var name : String = "Level";
		name = name + number;
		Application.LoadLevel(name); 
	}
};
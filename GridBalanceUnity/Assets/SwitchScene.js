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
	function SwitchToLevel(name)
	{
		Application.LoadLevel(name); 
	}
};
#pragma strict

	private var ScreenWidth = Screen.width;
	private var ScreenHeight = Screen.height;
	private var ButtonWidth = 120;
	private var ButtonHeight = 60;
function Start () {

}

function Update () {

}

function OnGUI () {
	if(GUI.Button (new Rect (ScreenWidth - ButtonWidth,
		ScreenHeight - ButtonHeight, 
		ButtonWidth, ButtonHeight), "Return") ){
			SwitchScene.SwitchToMainMenu();
		}
}
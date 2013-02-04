#pragma strict
	private var ScreenWidth = Screen.width;
	private var ScreenHeight = Screen.height;
	private var Width = ScreenWidth / 4;
	private var ButtonWidth = Width / 3;
	private var ButtonHeight = ScreenHeight / 5;
	private var Timer = 0;
	private var SwitchGUI = true;
	private var SwitchMessageBox = false;
	private var messageBoxWidth = 160;
	private var messageBoxHeight = 40;
	var EducationalText = "EducationalText";
	var NameOfChange = "NameOfChange";
	var ChangeValue = "ChangeValue";
	var Cost = 120;
	var message = "";
function Start () {
}

function Update () {
	if(SwitchMessageBox)
	{
		Timer++;
		if(Timer > 60)
		{
			SwitchMessageBox = false;
			Timer = 0;
		}
	}
}

function OnGUI () {
    if(SwitchGUI){
		GUI.Box (new Rect(ScreenWidth - Width,0,Width,ScreenHeight), "");
		//leftSide
		if(GUI.Button (new Rect ((ScreenWidth - Width) + (ButtonWidth / 3),
		ButtonHeight / 5, 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + (ButtonWidth / 3),
		ButtonHeight + 2 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + (ButtonWidth / 3),
		2 * ButtonHeight + 3 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		//rightside
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 *(ButtonWidth / 3)),
		ButtonHeight / 5, 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 *(ButtonWidth / 3)),
		ButtonHeight + 2 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 * (ButtonWidth / 3)),
		2 * ButtonHeight + 3 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			SwitchGUI = false;
		}
		//return
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth ,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth, ButtonHeight/2), "Return")) {
			SwitchScene.SwitchToMainMenu();
		}
	}
	else
	{
		if(SwitchMessageBox){
			GUI.Box (new Rect((ScreenWidth/2)- (messageBoxWidth/2),
					(ScreenHeight/2) - (messageBoxHeight/2),
					messageBoxWidth,messageBoxHeight), message);
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) - 10,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth, ButtonHeight/2), "Buy")) {
			SwitchMessageBox = true;
			if(PlayerInfoHandler.money < Cost){
				message = "Not Enough Money";
			}
			else
			{
				PlayerInfoHandler.money - Cost;
				message = "Purchased";
			}
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + 2 * ButtonWidth - 10 ,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth, ButtonHeight/2), "Cancel")) {
			SwitchGUI = true;
			SwitchMessageBox = false;
		}
	}
}
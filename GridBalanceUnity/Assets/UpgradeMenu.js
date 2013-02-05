//#pragma strict
	
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
	private var educationalText : String = "Educational Text";
	private var nameOfChange : String = "Name Of Change";
	private var changeValue : String = "Change Value";
	private var cost = 120;
	private var message : String = "";
function Start () {
	PlayerInfoHandler.LoadPlayerInfo();
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
			// Upgrade Pump
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
				//Turbine
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 *(ButtonWidth / 3)),
		ButtonHeight / 5, 
		ButtonWidth, ButtonHeight), "")) {
			
			SwitchGUI = false;
		}
				//Expand Resivour
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 *(ButtonWidth / 3)),
		ButtonHeight + 2 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			
			SwitchGUI = false;
		}
				//
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 * (ButtonWidth / 3)),
		2 * ButtonHeight + 3 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "")) {
			
			SwitchGUI = false;
		}
		//return
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth ,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth, ButtonHeight/2), "Return")) {
			PlayerInfoHandler.SavePlayerInfo();
			SwitchScene.SwitchToMainMenu();
		}
	}
	else
	{
		////Display Message
		if(SwitchMessageBox){
			GUI.Box (new Rect((ScreenWidth/2)- (messageBoxWidth/2),
					(ScreenHeight/2) - (messageBoxHeight/2),
					messageBoxWidth,messageBoxHeight), message);
		}
		////Information Labels
		GUI.Label(new Rect((ScreenWidth - Width) - 80,30,Width + 50, 165), educationalText);
		GUI.Label(new Rect((ScreenWidth - Width) - 80,3 *(ScreenHeight/ 5),Width + 50, 30), nameOfChange + " :");
		GUI.Label(new Rect(ScreenWidth - ((2*Width) / 3),3 *(ScreenHeight/5),Width, 30), changeValue);
		GUI.Label(new Rect((ScreenWidth - Width) - 80,3 * ButtonHeight + 7 * (ButtonHeight / 5) - 30,Width + 50, 30), "Price :  " + cost);
		GUI.Label(new Rect(20,30,200, 30), "$ :  ");// + PlayerInfoHandler.money);
		///BUTTONS
		if(GUI.Button (new Rect ((ScreenWidth - Width) - 70,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth + 10, ButtonHeight/2), "Buy")) {
			SwitchMessageBox = true;
			if(PlayerInfoHandler.money < cost){
				message = "Not Enough Money";
			}
			else
			{
				PlayerInfoHandler.money -= cost;
				message = "Purchased";
			}
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + 2 * ButtonWidth - 40 ,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth + 10, ButtonHeight/2), "Cancel")) {
			SwitchGUI = true;
			SwitchMessageBox = false;
		}
	}
}
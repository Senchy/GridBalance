//#pragma strict
	
	private var HydroPlantTexture : Texture;
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
	private var WhichPress = 0;
	private var educationalText : String = "Educational Text";
	private var nameOfChange : String = "Name Of Change";
	private var changeValue = 0;
	private var cost = 0;
	private var message : String = "";
function Start () {
	PlayerInfoHandler.LoadPlayerInfo();
	var Cameras : Camera[] = FindObjectsOfType(Camera) as Camera[];
	for (var count : int = 0; count < Cameras.Length; count++)
	{	
		if(Cameras[count].name.ToString() == "MainCamera"){
			Cameras[count].enabled = true;
		}
		else{
			Cameras[count].enabled = false;
		}
	}
}

function SwitchCamera(cameraName : String )
{
	var Cameras : Camera[] = FindObjectsOfType(Camera) as Camera[];
	for (var count : int = 0; count < Cameras.Length; count++)
	{	
		if(Cameras[count].name.ToString() == cameraName){
			Cameras[count].enabled = true;
		}
		else{
			Cameras[count].enabled = false;
		}
	}
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
    	//GUI Image Of Plant
//    	GUI.DrawTexture(Rect(0,0,ScreenWidth - Width, ScreenHeight), HydroPlantTexture, ScaleMode.ScaleToFit, true, 10.0f);
    	//gui holder
		GUI.Box (new Rect(ScreenWidth - Width,0,Width,ScreenHeight), "");
		//leftSide
			// Upgrade Pump
		if(GUI.Button (new Rect ((ScreenWidth - Width) + (ButtonWidth / 3),
		ButtonHeight / 5, 
		ButtonWidth, ButtonHeight), "P")) {
			var Pump_Information = new UpgradeInfoHandler(UpgradeInfoHandler.PUMP_INFO_LOCATION, PlayerInfoHandler.pumpLevel);
			educationalText = Pump_Information.educationalDescription;
			nameOfChange = Pump_Information.effectName;
			changeValue = Pump_Information.effectValue;
			cost = Pump_Information.cost;
			WhichPress = 1;
			Debug.Log(PlayerInfoHandler.pumpLevel);
			SwitchCamera("PumpCamera");
			SwitchGUI = false;
		}
		//reservour
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth,
		ButtonHeight + 2 * (ButtonHeight / 5), 
		ButtonWidth, ButtonHeight), "R")) {
			var Reservoir_Information = new UpgradeInfoHandler(UpgradeInfoHandler.RESERVOIR_INFO_LOCATION, PlayerInfoHandler.reservoirLevel);
			educationalText = Reservoir_Information.educationalDescription;
			nameOfChange = Reservoir_Information.effectName;
			changeValue = Reservoir_Information.effectValue;
			cost = Reservoir_Information.cost;	
			WhichPress = 2;
			Debug.Log(PlayerInfoHandler.reservoirLevel);
			SwitchCamera("ReservourCamera");
			SwitchGUI = false;
		}
		//rightside
				//Turbine
		if(GUI.Button (new Rect ((ScreenWidth - Width) + ButtonWidth + (2 *(ButtonWidth / 3)),
		ButtonHeight / 5, 
		ButtonWidth, ButtonHeight), "T")) {
			var Turbine_Information = new UpgradeInfoHandler(UpgradeInfoHandler.TURBINE_INFO_LOCATION, PlayerInfoHandler.turbineLevel);
			educationalText = Turbine_Information.educationalDescription;
			nameOfChange = Turbine_Information.effectName;
			changeValue = Turbine_Information.effectValue;
			cost = Turbine_Information.cost;	
			WhichPress = 3;
			Debug.Log(PlayerInfoHandler.turbineLevel);
			SwitchCamera("TurbineCamera");
			SwitchGUI = false;
		}
		//Expand Resivour
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
		GUI.Label(new Rect(ScreenWidth - ((2*Width) / 3),3 *(ScreenHeight/5),Width, 30), "" + changeValue);
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
				switch(WhichPress)
				{
					case 1:
						PlayerInfoHandler.pumpLevel +=1;
						break;
					case 2:
						PlayerInfoHandler.reservoirLevel +=1;
						break;
					case 3:
						PlayerInfoHandler.turbineLevel += 1;
						break;
				}
				message = "Purchased";
			}
		}
		if(GUI.Button (new Rect ((ScreenWidth - Width) + 2 * ButtonWidth - 40 ,
		3 * ButtonHeight + 7 * (ButtonHeight / 5) ,
		ButtonWidth + 10, ButtonHeight/2), "Cancel")) {
			SwitchGUI = true;
			SwitchCamera("Main Camera");
			SwitchMessageBox = false;
		}
	}
}
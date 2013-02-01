import System.IO;

private var turbineModifier;
private var pumpModifier;
private var reservoirModifier;

private var BASE_TURBINE_VALUE = 5;
private var BASE_PUMP_VALUE = 5;
private var BASE_RESERVOIR_VALUE = 100;

private var waterLeft;
private var money;

function Start () 
{

Debug.Log("START");
	//Load upgrade info
	PlayerInfoHandler.LoadPlayerInfo();
Debug.Log("save");
	PlayerInfoHandler.SavePlayerInfo();
Debug.Log("done");
	//waterLeft = BASE_RESERVOIR_VALUE * reservoirModifier;
}

function MoveUp()
{
	var move = BASE_TURBINE_VALUE * turbineModifier * Time.deltaTime;
}

function MoveDown()
{
	var move = BASE_PUMP_VALUE * pumpModifier * Time.deltaTime;
}

function Update () 
{
}


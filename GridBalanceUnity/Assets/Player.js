import System.IO;

private var turbineModifier;
private var pumpModifier;
private var reservoirModifier;
private var moveDirection : Vector3 = Vector3.zero;

var BASE_TURBINE_VALUE = 20;
var BASE_PUMP_VALUE = 20;
var BASE_RESERVOIR_VALUE = 100;
var speed = 30;
var maxSpeed = 50;

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
	//var move = BASE_TURBINE_VALUE * turbineModifier * Time.deltaTime;
	moveDirection.z += BASE_TURBINE_VALUE * Time.deltaTime; // insert turbineModifier when i'ts implemented
	if(moveDirection.z >= maxSpeed)
	{
		moveDirection.z = maxSpeed;
	}
}

function MoveDown()
{
	//var move = BASE_PUMP_VALUE * pumpModifier * Time.deltaTime;
	moveDirection.z -= BASE_PUMP_VALUE * Time.deltaTime;
}

function Update() 
{
	var controller : CharacterController = GetComponent(CharacterController);
	moveDirection.x = speed;
    if (Physics.Raycast(transform.position, -transform.up, 8)) {
        var name = Application.loadedLevelName;
        SwitchScene.SwitchToLevel(name);
    }

	if(Input.GetKey("space")){
		MoveUp();
    }
	else{
		MoveDown();
    }

    if(Input.GetKey("a")){
    	speed = 60;
	}
    else if(Input.GetKey("s")){
    	speed = 15;
	}
    else{
		speed = 30;
	}
	
    controller.Move(moveDirection * Time.deltaTime);
}


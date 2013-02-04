import System.IO;

private var turbineModifier;
private var pumpModifier;
private var reservoirModifier;

private var BASE_TURBINE_VALUE = 5;
private var BASE_PUMP_VALUE = 5;
private var BASE_RESERVOIR_VALUE = 100;
private var level;

private var waterLeft;
private var money;

private var BASE_SPEED : float = 25.0;
private var jumpSpeed : float = 15.0;
private var gravity : float = 15.0;

private var moveDirection : Vector3 = Vector3.zero;

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
    var controller : CharacterController = GetComponent(CharacterController);
        
        if (Input.GetButton ("Jump")) {
            moveDirection.z = jumpSpeed;
        }
        
    // Apply forward motion
    moveDirection.x = BASE_SPEED;

    // Apply gravity
    moveDirection.z -= gravity * Time.deltaTime;
    
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
}
function OnCollisionEnter(collision : Collision) {
	var name = Application.loadedLevelName;
	SwitchScene.SwitchToLevel(name);
}

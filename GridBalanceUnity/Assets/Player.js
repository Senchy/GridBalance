import System.IO;

private var turbineModifier;
private var pumpModifier;
private var reservoirModifier;
private var moveDirection : Vector3 = Vector3.zero;

var BASE_TURBINE_VALUE = 20;
var BASE_PUMP_VALUE = 20;
var BASE_RESERVOIR_VALUE = 100.0;
var speed = 30;
var maxSpeed = 60;

private var waterLeft;
private var money;
private var WATER_LOSS_PER_SECOND = 5.0;
private var WATER_REGAIN_RATIO = 0.95;
private var timeAlive = 0.0;
private var expectedTime = 60.0;

private var MONEY_PER_SECOND_GENERATING = 100.0;
private var MONEY_PER_RESERVOIR_PERCENT_LEFT = 100.0;
private var MONEY_PER_SECOND_BOOSTING = 250.0;

function Start () 
{
	PlayerInfoHandler.LoadPlayerInfo();
	waterLeft = BASE_RESERVOIR_VALUE;//* reservoirModifier;
}

function Update() 
{
	var controller : CharacterController = GetComponent(CharacterController);
	moveDirection.x = speed;	
	timeAlive += Time.deltaTime;
	
    if (Physics.Raycast(transform.position, -transform.up, 8)) {
        var name = Application.loadedLevelName;
        Debug.Log("Name: " + name);
        SwitchScene.SwitchToLevel(name);
    }

    if(Input.GetKey("a"))
    {
		PlayerInfoHandler.money += parseInt(MONEY_PER_SECOND_BOOSTING * Time.deltaTime);
    	speed = 60;
	}else if(Input.GetKey("s")){
    	speed = 15;
	}else{
		speed = 30;
	}
	
		if(Input.GetKey("space")){
		MoveUp();
    }
	else{
		MoveDown();
    }
	
    controller.Move(moveDirection * Time.deltaTime);
}

function OnGUI()
{
	GUI.Label(Rect(150, 10, 200, 50), "Water Left: " + parseInt(waterLeft));
	//var twoPlacedFloat = parseFloat(timeAlive).toFixed(2);
	GUI.Label(Rect(50, 10, 200, 50), "Time: " + timeAlive.ToString("F2"));
	GUI.Label(Rect(Screen.width - 150, 10, 200, 50), "Money: $" + PlayerInfoHandler.money);
}

function MoveUp()
{
	PlayerInfoHandler.money += parseInt(MONEY_PER_SECOND_GENERATING * Time.deltaTime);
	
	waterLeft -= WATER_LOSS_PER_SECOND * Time.deltaTime;
	moveDirection.z += BASE_TURBINE_VALUE * Time.deltaTime; // insert turbineModifier when it's implemented
	if(moveDirection.z >= maxSpeed)
	{
		moveDirection.z = maxSpeed;
	}
	
}

function MoveDown()
{
	//var move = BASE_PUMP_VALUE * pumpModifier * Time.deltaTime;
	
		waterLeft += WATER_LOSS_PER_SECOND * Time.deltaTime * WATER_REGAIN_RATIO;
		if(waterLeft > BASE_RESERVOIR_VALUE) waterLeft = BASE_RESERVOIR_VALUE;
	moveDirection.z -= BASE_PUMP_VALUE * Time.deltaTime;
	
	if(moveDirection.z <= -maxSpeed)
	{
		moveDirection.z = -maxSpeed;
	}
}
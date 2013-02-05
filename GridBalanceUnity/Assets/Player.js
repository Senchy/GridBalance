import System.IO;

private var turbineModifier;
private var pumpModifier;
private var reservoirModifier;
private var moveDirection : Vector3 = Vector3.zero;

var WATER_TEXTURE : Texture;
var BASE_TURBINE_VALUE = 20;
var BASE_PUMP_VALUE = 20;
var BASE_RESERVOIR_VALUE = 100.0;
var speed = 30;
var maxSpeed = 60;

private var waterLeft;
private var maxWater;
private var money;
private var WATER_LOSS_PER_SECOND = 5.0;
private var WATER_REGAIN_RATIO = 0.10;
private var timeAlive = 0.0;
private var expectedTime = 60.0;

private var MONEY_PER_SECOND_GENERATING = 100.0;
private var MONEY_PER_RESERVOIR_POINT_LEFT = 100.0;
private var MONEY_PER_SECOND_BOOSTING = 250.0;

private var RESERVOIR_WIN_DRAIN_PER_SECOND = 10.0;

private var finished = false;
private var running = false;

function Start () 
{
	PlayerInfoHandler.LoadPlayerInfo();
	PlayerInfoHandler.SavePlayerInfo();
	maxWater = waterLeft = BASE_RESERVOIR_VALUE;//* reservoirModifier;
	
}

function Update() 
{
	if(!finished)
	{
		var controller : CharacterController = GetComponent(CharacterController);
		moveDirection.x = speed;	
		timeAlive += Time.deltaTime;
		
		CheckForWinLoseCollisions();
		CheckForInput();
	    RespondToDirection();
		
	    controller.Move(moveDirection * Time.deltaTime);
    }
    else
    {
    	if(waterLeft > 0)
    	{
    		var drain = RESERVOIR_WIN_DRAIN_PER_SECOND * Time.deltaTime;
    		waterLeft -= drain;
    		
    		PlayerInfoHandler.money += drain * MONEY_PER_RESERVOIR_POINT_LEFT;
    	}
    }
}

function CheckForInput()
{
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
}

function CheckForWinLoseCollisions()
{
	var rayUp : Ray;
	var rayRight : Ray;
	rayUp.origin = rayRight.origin = transform.position;
	rayUp.direction = -transform.up;
	rayRight.direction = transform.right;
    var hit : RaycastHit;
    //if (Physics.Raycast(transform.position, -transform.up, 8))
    if (Physics.Raycast(rayUp, hit, 8) || Physics.Raycast(rayRight, hit, 2)) 
    {
    	if(hit.collider.gameObject.name == "FinishLine")
    	{
    		finished = true;
    	}
    	else
    	{
	        SwitchScene.SwitchToLevel(Application.loadedLevelName);
        }
    }
}

function RespondToDirection()
{	    
	if(moveDirection.z > 0) 
    {
    	PlayerInfoHandler.money += parseInt(MONEY_PER_SECOND_GENERATING * Time.deltaTime);
		waterLeft -= WATER_LOSS_PER_SECOND * Time.deltaTime;
		if(waterLeft < 1) SwitchScene.SwitchToLevel(Application.loadedLevelName);
	}
    else 
    {	
	    waterLeft += WATER_LOSS_PER_SECOND * Time.deltaTime * WATER_REGAIN_RATIO;
		if(waterLeft > maxWater) waterLeft = maxWater;
    }
}

function OnGUI()
{
	
	GUI.DrawTexture(Rect(Screen.width - 150, 120 - ((waterLeft / maxWater) * 100), 100, (waterLeft / maxWater) * 100), WATER_TEXTURE, ScaleMode.StretchToFill, true, 1.0f);
	GUI.Label(Rect(Screen.width - 145, 100, 250, 50), "Water Left: " + parseInt(waterLeft));
	
	GUI.color = new Color(64.0 / 255.0, 64.0 / 255.0, 64.0 / 255.0);
	GUI.Label(Rect(50, 10, 250, 50), "Time: " + timeAlive.ToString("F2"));
	GUI.Label(Rect(Screen.width - 250, 10, 250, 50), "Money: $" + PlayerInfoHandler.money);
	if(finished)
	{
		GUI.Label(Rect(Screen.width / 2, Screen.height / 2, 200, 50), "Congratulations, you won!");
	}
}

function MoveUp()
{	
	moveDirection.z += BASE_TURBINE_VALUE * Time.deltaTime; // insert turbineModifier when it's implemented
	if(moveDirection.z >= maxSpeed)
	{
		moveDirection.z = maxSpeed;
	}
}

function MoveDown()
{
	moveDirection.z -= BASE_PUMP_VALUE * Time.deltaTime;
	
	if(moveDirection.z <= -maxSpeed)
	{
		moveDirection.z = -maxSpeed;
	}
}
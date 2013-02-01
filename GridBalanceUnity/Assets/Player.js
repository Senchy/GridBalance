private var generatorModifier;
private var pumpModifier;
private var reservoirModifier;

private var BASE_GENERATOR_VALUE = 5;
private var BASE_PUMP_VALUE = 5;
private var BASE_RESERVOIR_VALUE = 100;

private var waterLeft;

function Start () 
{
	//Load upgrade info
	
	//waterLeft = BASE_RESERVOIR_VALUE * reservoirModifier;
}

function MoveUp()
{
	var move = BASE_GENERATOR_VALUE * generatorModifier * Time.deltaTime;
}

function MoveDown()
{
	var move = BASE_PUMP_VALUE * pumpModifier * Time.deltaTime;
}

function Update () 
{
}
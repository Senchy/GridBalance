class UpgradeInfoHandler
{
	var effectName;
	var effectValue;
	var educationalDescription;
	var functionalDescription;
	var cost;
	
	static var TURBINE_INFO_LOCATION = (Application.dataPath + "/TurbineInfo.gbu");
	static var RESERVOIR_INFO_LOCATION = (Application.dataPath + "/TurbineInfo.gbu");
	static var PUMP_INFO_LOCATION = (Application.dataPath + "/TurbineInfo.gbu");
	
	function UpgradeInfoHandler(fileLocation : String, level : int)
	{
		var NUM_PARAMS = 4;
	    var sr = new StreamReader(fileLocation);
	    var fileContents = sr.ReadToEnd();
	    sr.Close();
	
	    var lines = fileContents.Split("\n"[0]);
    	
    	effectName = lines[parseInt(0)].Split("-"[0])[1];
    	functionalDescription = lines[parseInt(1)].Split("-"[0])[1];
    	educationalDescription = lines[parseInt(2)].Split("-"[0])[1];
    	
    	effectValue = parseFloat(lines[parseInt(3 + (2 * (level - 1)))].Split("-"[0])[1]);
    	cost = parseInt(lines[parseInt(4 + (2 * (level - 1)))].Split("-"[0])[1]);
    	
    	/*Debug.Log("NAME: " + effectName + "\n");
    	Debug.Log("functionalDescription: " + functionalDescription + "\n");
    	Debug.Log("educationalDescription: " + educationalDescription + "\n");
    	Debug.Log("effectValue: " + effectValue + "\n");
    	Debug.Log("cost: " + cost + "\n");*/
	}

}
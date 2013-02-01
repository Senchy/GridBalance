class PlayerInfoHandler
{
	static var money;
	static var turbineLevel;
	static var pumpLevel;
	static var reservoirLevel;
	
	private static var infoFile = "PlayerInfo.gbu";
	private static var infoFile2 = "PlayerInfo.gbu";
	/*
	 * Loads player information from a text file
	 */
	static function LoadPlayerInfo()
	{
		var NUM_PARAMS = 4;
	    var sr = new StreamReader(Application.dataPath + "/" + infoFile);
	    var fileContents = sr.ReadToEnd();
	    sr.Close();
	
		var lastLevel = null;
	    var lines = fileContents.Split("\n"[0]);
	    

    	money = lines[parseInt(0)].Split(" "[0])[1];
    	turbineLevel = lines[parseInt(1)].Split(" "[0])[1];
    	pumpLevel = lines[parseInt(2)].Split(" "[0])[1];
    	reservoirLevel = lines[parseInt(3)].Split(" "[0])[1];
    	Debug.Log("Monay!: " + money);
    	Debug.Log("turbineModifier: " + turbineLevel);
    	Debug.Log("pumpModifier: " + pumpLevel);
    	Debug.Log("reservoirModifier: " + reservoirLevel);
	}
	
	/*
	 *
	 */
	static function SavePlayerInfo()
	{
		var NUM_PARAMS = 4;
	    var sw = new StreamWriter(Application.dataPath + "/" + infoFile2);
	    
    	Debug.Log("Monay!: " + money);
    	Debug.Log("turbineModifier: " + turbineLevel);
    	Debug.Log("pumpModifier: " + pumpLevel);
    	Debug.Log("reservoirModifier: " + reservoirLevel);
    	
	    sw.Write("Money " + money);
	    sw.Write("TurbineLevel " + turbineLevel);
	    sw.Write("PumpLevel " + pumpLevel);
	    sw.Write("ReservoirLevel " + reservoirLevel);
	    
	    sw.Close();
	}
}
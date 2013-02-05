class PlayerInfoHandler
{
	static var money;
	static var turbineLevel;
	static var pumpLevel;
	static var reservoirLevel;
	
	private static var infoFile = "PlayerInfo.gbu";
	
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
    	
    	money = parseInt(lines[parseInt(0)].Split(" "[0])[1]);
    	turbineLevel = parseInt(lines[parseInt(1)].Split(" "[0])[1]);
    	pumpLevel = parseInt(lines[parseInt(2)].Split(" "[0])[1]);
    	reservoirLevel = parseInt(lines[parseInt(3)].Split(" "[0])[1]);
	}
	
	/*
	 *
	 */
	static function SavePlayerInfo()
	{
		var NUM_PARAMS = 4;
	    var sw = new StreamWriter(Application.dataPath + "/" + infoFile);
	    
	    sw.Write("Money " + "100000"
	    	+ "\nTurbineLevel " + "1"
	    	+ "\nPumpLevel " + "2"
	    	+ "\nReservoirLevel " + "3");
	    sw.Close();
	}
	
	static function GetMoney() { return money; }
}
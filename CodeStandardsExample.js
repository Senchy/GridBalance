//Keep warnings to an absolute minimum (e.g. Cast variables if receiving warnings about types)

//OPTIONAL: Comment out pragma strict if it makes coding easier
//#pragma strict
class CodeStandardsExample//Always start file and class declaration(if any) with a capital
{
	//Should not be assigned to when declared, can be assigned to anywhere else in a js file or inside unity.
	//If assigned to inside unity then declare type (": Type"), otherwise just have "var MyPublicVariable"
	var MyPublicVariable : String;
	
	//Can be accessed/assigned to anywhere in this js file
	private var myPrivateVariable = 3;
	
	//Never assign to this ANYWHERE inside a js file
	var MY_UNITY_ACCESSED_CONST_VAR : int;//Always declare type (": Type")
	
	//Never assign to this ANYWHERE besides when declare (i.e right here)
	private var MY_PRIVATE_CONST_VAR = 5;
	
	/*
	 * My example comment for function
	 */	  
	function MyFunctionExample()//Public by default -No need to declare functions as private or public explicitly
	{
		var myLocalVar = "l";//If a comment is short place it to the right of the relevant line
		
		//If a comment is long place it over multiple lines above the relevant line
		//For example, this is a long comment so I am putting it above this variable on multiple lines
		var otherLocalVar = 2;
	}
};//Always end classes with a semicolon (does not cause errors but if it's not there then files with multiple classes can have problems)
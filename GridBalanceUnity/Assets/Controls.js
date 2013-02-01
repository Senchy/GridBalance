#pragma strict
       
var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 4.0;

private var moveDirection : Vector3 = Vector3.zero;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
        
        if (Input.GetButton ("Jump")) {
            moveDirection.z = jumpSpeed;
        }
        
    // Apply forward motion
    moveDirection.x = speed;

    // Apply gravity
    moveDirection.z -= gravity * Time.deltaTime;
    
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
}

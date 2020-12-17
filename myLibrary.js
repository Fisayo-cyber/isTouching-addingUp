function isTouching(sprite1, sprite2) {
    if (Math.abs(sprite1.x - sprite2.x) < sprite1.width / 2 + sprite2.width / 2 && Math.abs(sprite1.y - sprite2.y) < sprite1.height / 2 + sprite2.height / 2) {
        return true;

    } else {
        return false;
    }
}

function addingUp(num1, num2) {

    return num1 + num2

}
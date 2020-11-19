module.exports = Array.prototype.reIndex = function(myArray) {
    const newArray = [];

    for(let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }

    return newArray;
}

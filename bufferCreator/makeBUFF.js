function bufferThis(input)
{
 var buffer = new Buffer(input);
 return buffer;
}
module.exports = {
    bufferThis: bufferThis
}
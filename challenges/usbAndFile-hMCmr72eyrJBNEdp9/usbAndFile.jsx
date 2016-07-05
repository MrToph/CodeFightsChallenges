function usbAndFile (size, usbs) {
  usbs.sort((a, b) => b - a);
  var i = 0;
  while(size > 0){
    size -= usbs[i++];
  }
  return i;
}

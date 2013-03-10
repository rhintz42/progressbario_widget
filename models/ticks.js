function TicksOrganizer(progressbarContainer, clientProgressbarObj) {
  this.progressbarContainer = progressbarContainer;
  this.group = progressbarContainer.progressbarGroup;

  this.loadDefaultAttributes();
  this.loadUserAttributes(clientProgressbarObj);

  this.tickArray = new Array();

  this.addTicks();
}

TicksOrganizer.prototype.loadDefaultAttributes = function() {
  var progressbarOutlineImgName = this.progressbarContainer.getProgressbarOutlineImgName();
  
  this.tickOrganizerXOffset = this.getTickXOffset(progressbarOutlineImgName);
  this.tickOrganizerYOffset = this.getTickYOffset(progressbarOutlineImgName);
  this.tickOrganizerYMax = this.getTickMaxY(progressbarOutlineImgName);
  this.maxTickWidth = 10
  this.maxTickHeight = 2;
  this.tickStroke = '#666';
  this.fillColor = 'black';
  this.maxStrokeWidth = 2;
  this.tickOrganizerName = 'tick';
  this.numTicks = 10;
}

TicksOrganizer.prototype.loadUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj.tickDetails['tickOrganizerXOffset'])
    this.tickOrganizerXOffset = clientProgressbarObj.tickDetails['tickOrganizerXOffset'];
  
  if(clientProgressbarObj.tickDetails['tickOrganizerYOffset'])
    this.tickOrganizerYOffset = clientProgressbarObj.tickDetails['tickOrganizerYOffset'];
  
  if(clientProgressbarObj.tickDetails['maxTickWidth'])
    this.maxTickWidth = clientProgressbarObj.tickDetails['maxTickWidth'];

  if(clientProgressbarObj.tickDetails['maxTickHeight'])
    this.maxTickHeight = clientProgressbarObj.tickDetails['maxTickHeight'];

  if(clientProgressbarObj.tickDetails['tickStroke'])
    this.tickStroke = clientProgressbarObj.tickDetails['tickStroke'];

  if(clientProgressbarObj.tickDetails['fillColor'])
    this.fillColor = clientProgressbarObj.tickDetails['fillColor'];

  if(clientProgressbarObj.tickDetails['maxStrokeWidth'])
    this.maxStrokeWidth = clientProgressbarObj.tickDetails['maxStrokeWidth'];

  if(clientProgressbarObj.tickDetails['tickOrganizerName'])
    this.tickOrganizerName = clientProgressbarObj.tickDetails['tickOrganizerName'];

}

TicksOrganizer.prototype.addTicks = function() {

  var difference = this.tickOrganizerYMax - this.tickOrganizerYOffset;
  var spacing = difference / (this.numTicks - 1);

  for(var i = 0; i < this.numTicks; i++) {
    var tickObj = new Object;
    tickObj['yOffset'] = (-1*spacing)*i-this.tickOrganizerYOffset;

    this.tickArray[this.tickArray.length] = new Tick(this, tickObj);
  }
}

//function Tick(TicksOrganizer, x, y, width, height, stroke, fill, strokeWidth, name) {
/*
 *  Parameters
 *  Takes an object with any of these keys:
 *    TicksOrganizer
 *    x
 *    y
 *    width
 *    height
 *    stroke
 *    fill
 *    strokeWidth
 *    name
 */
function Tick(tickOrganizer, clientTickObj) {

  this.loadDefaultAttributes(tickOrganizer);
  this.loadUserAttributes(clientTickObj);
  tickOrganizer.group.add(this.tick);
}


Tick.prototype.loadDefaultAttributes = function(tickOrganizer) {
  this.tick = new Kinetic.Rect({
    x: tickOrganizer.tickOrganizerXOffset,
    y: tickOrganizer.tickOrganizerYOffset,
    width: tickOrganizer.maxTickWidth,
    height: tickOrganizer.maxTickHeight,
    stroke: tickOrganizer.tickStroke,
    fill: tickOrganizer.fillColor,
    strokeWidth: tickOrganizer.maxStrokeWidth,
    name: tickOrganizer.tickOrganizerName
  });
}

Tick.prototype.loadUserAttributes = function(clientTickObj) {
  if(clientTickObj['yOffset'])
    this.tick.setY(clientTickObj['yOffset']);
}


TicksOrganizer.prototype.getTickYOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 105*(this.progressbarContainer.progressbarHeight/400);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(this.progressbarContainer.progressbarHeight/400);
  }
  return 0;
}

TicksOrganizer.prototype.getTickMaxY = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 370*(this.progressbarContainer.progressbarHeight/400);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 370*(this.progressbarContainer.progressbarHeight/400);
  }
  return 0;
}

TicksOrganizer.prototype.getTickXOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 95*(this.progressbarContainer.progressbarWidth/250);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 95*(this.progressbarContainer.progressbarWidth/250);
  }
  return 0;
}
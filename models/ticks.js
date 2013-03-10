function TicksOrganizer(progressbar, progressbarContainer, clientProgressbarObj) {
  this.progressbar = progressbar;
  this.progressbarContainer = progressbarContainer;
  this.group = progressbarContainer.progressbarGroup;

  this.loadDefaultAttributes(progressbar);
  this.loadUserAttributes(clientProgressbarObj);

  this.tickArray = new Array();

  this.addTicks();
}

TicksOrganizer.prototype.loadDefaultAttributes = function(progressbar) {
  var progressbarOutlineImgName = this.progressbarContainer.getProgressbarOutlineImgName();
  
  this.tickOrganizerXOffset = this.getTickXOffset(progressbar, progressbarOutlineImgName);
  this.tickOrganizerYOffset = this.getTickYOffset(progressbar, progressbarOutlineImgName);
  this.tickOrganizerYMax = this.getTickMaxY(progressbar, progressbarOutlineImgName);
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


TicksOrganizer.prototype.getTickYOffset = function(progressbar, progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(progressbar.stageHeight/500);
  }
  return 0;
}

TicksOrganizer.prototype.getTickMaxY = function(progressbar, progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 370*(progressbar.stageHeight/500);
  }
  return 0;
}

TicksOrganizer.prototype.getTickXOffset = function(progressbar, progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 95*(progressbar.stageWidth/500);
  }
  return 0;
}
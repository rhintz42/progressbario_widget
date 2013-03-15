
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// PUBLIC METHODS //
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
///////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONSTRUCTOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function TicksOrganizer(progressbarObject, clientTickDetails) {
  this.progressbarObject = progressbarObject;

  this._createDefaultAttributes();
  this._setUserAttributes(clientTickDetails);

  this._createTickObjects();
  
  this._addAndDrawTicks();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype.getFillColor = function() {
  return this.fillColor;
}

TicksOrganizer.prototype.getGroup = function() {
  return this.progressbarObject.getProgressbarGroup();
}

TicksOrganizer.prototype.getMaxStrokeWidth = function() {
  return this.maxStrokeWidth;
}

TicksOrganizer.prototype.getMaxTickWidth = function() {
  return this.maxTickWidth;
}

TicksOrganizer.prototype.getMaxTickHeight = function() {
  return this.maxTickHeight;
}

TicksOrganizer.prototype.getNumTicks = function() {
  return this.numTicks;
}

TicksOrganizer.prototype.getTickMaxY = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 370*(this.progressbarObject.getProgressbarHeight()/400);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 370*(this.progressbarObject.getProgressbarHeight()/400);
  }
  return 0;
}

TicksOrganizer.prototype.getTickOrganizerYMax = function() {
  return this.tickOrganizerYMax;
}

TicksOrganizer.prototype.getTickOrganizerName = function() {
  return this.tickOrganizerName;
}

TicksOrganizer.prototype.getTickOrganizerXOffset = function() {
  return this.tickOrganizerXOffset;
}

TicksOrganizer.prototype.getTickOrganizerYOffset = function() {
  return this.tickOrganizerYOffset;
}

TicksOrganizer.prototype.getTickStroke = function() {
  return this.tickStroke;
}

TicksOrganizer.prototype.getTickYOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 105*(this.progressbarObject.getProgressbarHeight()/400);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(this.progressbarObject.getProgressbarHeight()/400);
  }
  return 0;
}

TicksOrganizer.prototype.getTickXOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    return 95*(this.progressbarObject.getProgressbarWidth()/250);
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    return 95*(this.progressbarObject.getProgressbarWidth()/250);
  }
  return 0;
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD/APPEND METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype.addToGroup = function(obj) {
  var group = this.getGroup();
  group.add(obj);
}

TicksOrganizer.prototype.addToTicksAndRedraw = function(numTicksToAdd) {
  var numTicks = this.getNumTicks();
  var newNumTicks = numTicks + numTicksToAdd;
  this._setTickAndRedraw(newNumTicks);
}

TicksOrganizer.prototype.appendToTickArray = function(obj) {
  this.tickArray[this.tickArray.length] = obj;
}


//-----------------------------------------------------------------------------
// CLEAR METHODS
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// CREATE METHODS
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS
//-----------------------------------------------------------------------------


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// PRIVATE METHODS //
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
///////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS
//-----------------------------------------------------------------------------




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD/APPEND METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype._addAndDrawTicks = function() {

  var difference = this.getTickOrganizerYMax() - this.getTickOrganizerYOffset();
  var spacing = difference / (this.getNumTicks() - 1);

  for(var i = 0; i < this.getNumTicks(); i++) {
    var tickObj = new Object;
    tickObj['yOffset'] = (-1*spacing)*i-this.getTickOrganizerYOffset();

    this.appendToTickArray(new Tick(this, tickObj));
  }
}


//-----------------------------------------------------------------------------
// CLEAR METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype._clearTicks = function() {
  var numTicks = this.getNumTicks();
  for(var i = 0; i < numTicks; i++) {
    this.tickArray[i].removeTick();
  }
  this._clearTicksArray();
}

TicksOrganizer.prototype._clearTicksArray = function() {
  this.tickArray = [];
}


//-----------------------------------------------------------------------------
// CREATE METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype._createDefaultAttributes = function() {
  var progressbarOutlineImgName = this.progressbarObject.getProgressbarOutlineImgName();
  
  this._setTickOrganizerXOffset(this.getTickXOffset(progressbarOutlineImgName));
  this._setTickOrganizerYOffset(this.getTickYOffset(progressbarOutlineImgName));
  this._setTickOrganizerYMax(this.getTickMaxY(progressbarOutlineImgName));
  this._setMaxTickWidth(10);
  this._setMaxTickHeight(1);
  this._setTickStroke('#666');
  this._setFillColor('black');
  this._setMaxStrokeWidth(2);
  this._setTickOrganizerName('tick');
  this._setNumTicks(10);
}

TicksOrganizer.prototype._createTickObjects = function() {
  this.tickArray = new Array();
}


//-----------------------------------------------------------------------------
// SET METHODS
//-----------------------------------------------------------------------------

TicksOrganizer.prototype._setFillColor = function(color) {
  this.fillColor = color;
}

TicksOrganizer.prototype._setMaxStrokeWidth = function(width) {
  this.maxStrokeWidth = width;
}

TicksOrganizer.prototype._setMaxTickHeight = function(height) {
  this.maxTickHeight = height;
}

TicksOrganizer.prototype._setMaxTickWidth = function(width) {
  this.maxTickWidth = width;
}

TicksOrganizer.prototype._setNumTicks = function(num) {
  this.numTicks = num;
}

TicksOrganizer.prototype._setTickAndRedraw = function(numTicks) {
  this._clearTicks();
  this._setNumTicks(numTicks);
  this._addAndDrawTicks();
}

TicksOrganizer.prototype._setTickOrganizerName = function(name) {
  this.tickOrganizerName = name;
}

TicksOrganizer.prototype._setTickOrganizerXOffset = function(offset) {
  this.tickOrganizerXOffset = offset;
}

TicksOrganizer.prototype._setTickOrganizerYMax = function(offset) {
  this.tickOrganizerYMax = offset;
}

TicksOrganizer.prototype._setTickOrganizerYOffset = function(offset) {
  this.tickOrganizerYOffset = offset;
}

TicksOrganizer.prototype._setTickStroke = function(stroke) {
  this.tickStroke = stroke;
}

TicksOrganizer.prototype._setUserAttributes = function(clientTickDetails) {
  if(clientTickDetails == undefined)
    return;

  if(clientTickDetails['tickOrganizerXOffset'])
    this._setTickOrganizerXOffset(clientTickDetails['tickOrganizerXOffset']);
  
  if(clientTickDetails['tickOrganizerYOffset'])
    this._setTickOrganizerYOffset(clientTickDetails['tickOrganizerYOffset']);
  
  if(clientTickDetails['maxTickWidth'])
    this._setMaxTickWidth(clientTickDetails['maxTickWidth']);

  if(clientTickDetails['maxTickHeight'])
    this._setMaxTickHeight(clientTickDetails['maxTickHeight']);

  if(clientTickDetails['tickStroke'])
    this._setTickStroke(clientTickDetails['tickStroke']);

  if(clientTickDetails['fillColor'])
    this._setFillColor(clientTickDetails['fillColor']);

  if(clientTickDetails['maxStrokeWidth'])
    this._setMaxStrokeWidth(clientTickDetails['maxStrokeWidth']);

  if(clientTickDetails['tickOrganizerName'])
    this._setTickOrganizerName(clientTickDetails['tickOrganizerName']);

  if(clientTickDetails['numTicks'])
    this._setNumTicks(clientTickDetails['numTicks']);

}

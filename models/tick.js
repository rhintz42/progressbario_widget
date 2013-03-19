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

function Tick(tickOrganizer, clientTickObj) {
  this._setTickOrganizer(tickOrganizer);
  this._createDefaultAttributes(tickOrganizer);
  this._setUserAttributes(clientTickObj);

  this._addToTickOrganizerGroup(this._getTickObject());
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

Tick.prototype.getColor = function() {
  return this.tick.getFill();
}

Tick.prototype.getDefaultFill = function() {
  return this.tickOrganizer.getFillColor();
}

Tick.prototype.getDefaultFillColor = function() {
  return this.getDefaultFill();
}

Tick.prototype.getDefaultHeight = function() {
  return this.tickOrganizer.getMaxTickHeight();
}

Tick.prototype.getDefaultStrokeWidth = function() {
  return this.tickOrganizer.getMaxStrokeWidth();
}

Tick.prototype.getDefaultWidth = function() {
  return this.tickOrganizer.getMaxTickWidth();
}

Tick.prototype.getDefaultName = function() {
  return this.tickOrganizer.getTickOrganizerName();
}

Tick.prototype.getDefaultStroke = function() {
  return this.tickOrganizer.getTickStroke();
}

Tick.prototype.getDefaultXOffset = function() {
  return this.tickOrganizer.getTickOrganizerXOffset();
}

Tick.prototype.getDefaultYOffset = function() {
  return this.tickOrganizer.getTickOrganizerYOffset();
}

Tick.prototype.getHeight = function() {
  return this.tick.getHeight();
}

Tick.prototype.getName = function() {
  return this.tick.getName();
}

Tick.prototype.getStroke = function() {
  return this.tick.getStroke();
}

Tick.prototype.getStrokeWidth = function() {
  return this.tick.getStrokeWidth();
}

Tick.prototype.getWidth = function() {
  return this.tick.getWidth();
}

Tick.prototype.getXOffset = function() {
  return this.tick.getX();
}

Tick.prototype.getYOffset = function() {
  return this.tick.getY();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------

Tick.prototype.removeTick = function() {
  this.tick.remove();
}


//-----------------------------------------------------------------------------
// SET METHODS
//-----------------------------------------------------------------------------

Tick.prototype.setFill = function(color) {
  return this.tick.setFill(color);
}

Tick.prototype.setHeight = function(height) {
  return this.tick.setHeight(height);
}

Tick.prototype.setName = function(name) {
  return this.tick.setName(name);
}

Tick.prototype.setStroke = function(color) {
  return this.tick.setStroke(color);
}

Tick.prototype.setStrokeWidth = function(width) {
  return this.tick.setStrokeWidth(width);
}

Tick.prototype.setWidth = function(width) {
  return this.tick.setWidth(width);
}

Tick.prototype.setXOffset = function(offset) {
  this.tick.setX(offset);
}

Tick.prototype.setYOffset = function(offset) {
  return this.tick.setY(offset);
}



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
// GET METHODS //
//-----------------------------------------------------------------------------

Tick.prototype._getTickObject = function() {
  return this.tick;
}

Tick.prototype._getTickOrganizer = function() {
  return this.tickOrganizer;
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------

Tick.prototype._addToTickOrganizerGroup = function(tickObj) {
  tickOrganizer = this._getTickOrganizer();
  tickOrganizer.addToGroup(tickObj);
}


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------

Tick.prototype._createDefaultAttributes = function() {
  this.tick = new Kinetic.Rect({
    x: this.getDefaultXOffset(),
    y: this.getDefaultYOffset(),
    width: this.getDefaultWidth(),
    height: this.getDefaultHeight(),
    stroke: this.getDefaultStroke(),
    fill: this.getDefaultFillColor(),
    strokeWidth: this.getDefaultStrokeWidth(),
    name: this.getDefaultName()
  });
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------


Tick.prototype._setTickOrganizer = function(tickOrganizer) {
  this.tickOrganizer = tickOrganizer;
}

Tick.prototype._setUserAttributes = function(clientTickObj) {
  if(clientTickObj['xOffset'])
    this.setXOffset(clientTickObj['xOffset']);
  
  if(clientTickObj['yOffset'])
    this.setYOffset(clientTickObj['yOffset']);
  
  if(clientTickObj['width'])
    this.setWidth(clientTickObj['width']);

  if(clientTickObj['height'])
    this.setHeight(clientTickObj['height']);

  if(clientTickObj['stroke'])
    this.setStroke(clientTickObj['stroke']);

  if(clientTickObj['fill'])
    this.setFill(clientTickObj['fill']);

  if(clientTickObj['strokeWidth'])
    this.setStrokeWidth(clientTickObj['strokeWidth']);

  if(clientTickObj['name'])
    this.setName(clientTickObj['name']);
}
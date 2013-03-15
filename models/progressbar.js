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

function Progressbar(clientProgressbarObj) {
  this._createDefaultAttributes();
  this._setUserAttributes(clientProgressbarObj);
  this._createStageAndLayer();

  this._createSubObjects(clientProgressbarObj);
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

Progressbar.prototype.getClientNumCurrent = function() {
  return this.progressbarContainer.progressbarFilling.getClientNumCurrent();
}

Progressbar.prototype.getClientNumMax = function() {
  return this.progressbarContainer.progressbarFilling.getClientNumMax();
}

Progressbar.prototype.getClientNumMin = function() {
  return this.progressbarContainer.progressbarFilling.getClientNumMin();
}

Progressbar.prototype.getInversePercentComplete = function() {
  return 100 - this.progressbarContainer.progressbarFilling.getCurrentPercent();
}

Progressbar.prototype.getPercentComplete = function() {
  return this.progressbarContainer.progressbarFilling.getCurrentPercent();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//-----------------------------------------------------------------------------
// ADD METHODS
//-----------------------------------------------------------------------------

Progressbar.prototype.addToCurrent = function(clientNum) {
  //ENTER IMPLEMENTATION
}

Progressbar.prototype.addToClientNumCurrent = function(addNum) {
  this.progressbarContainer.progressbarFilling.addToClientNumCurrent(addNum);
  this.messagesContainer.updateMessagesText();
}

Progressbar.prototype.addToStage = function(obj) {
  this.stage.add(obj);
}


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS 
//-----------------------------------------------------------------------------

Progressbar.prototype.setClientNumCurrent = function(clientNum) {
  this.progressbarContainer.progressbarFilling.setClientNumCurrent(clientNum);
  this.messagesContainer.updateMessagesText();
  this.progressbarContainer.drawStage();
}

Progressbar.prototype.setMarginBottomPercent = function(percent) {
  this.bottomMarginPercent = percent;
}

Progressbar.prototype.setMarginLeftPercent = function(percent) {
  this.leftMarginPercent = percent;
}

Progressbar.prototype.setMarginRightPercent = function(percent) {
  this.rightMarginPercent = percent;
}

Progressbar.prototype.setMarginTopPercent = function(percent) {
  this.topMarginPercent = percent;
}

Progressbar.prototype.setMaximumValue = function(clientNum) {
  this.progressbarContainer.progressbarFilling.setClientNumMax(clientNum);
  this.messagesContainer.updateMessagesText();
  this.progressbarContainer.drawStage();
}

Progressbar.prototype.setNumTicks = function(numTicks) {
  //this.
}

Progressbar.prototype.setStageContainerID = function(containerID) {
  this.stageContainerID = containerID;
}

Progressbar.prototype.setStageHeight = function(height) {
  this.stageHeight = height;
}

Progressbar.prototype.setStageWidth = function(width) {
  this.stageWidth = width;
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

Progressbar.prototype.getMarginBottomPercent = function() {
  return this.bottomMarginPercent;
}

Progressbar.prototype.getMarginLeftPercent = function() {
  return this.leftMarginPercent;
}

Progressbar.prototype.getMarginRightPercent = function() {
  return this.rightMarginPercent;
}

Progressbar.prototype.getMarginTopPercent = function() {
  return this.topMarginPercent;
}

Progressbar.prototype.getStageWidth = function() {
  return this.stageWidth;
}

Progressbar.prototype.getStageHeight = function() {
  return this.stageHeight;
}

Progressbar.prototype.getStageContainerID = function() {
  return this.stageContainerID;
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

Progressbar.prototype._createDefaultAttributes = function() {
  this.setStageHeight(500);
  this.setStageWidth(500);
  this.setStageContainerID('container');

  this.setMarginTopPercent(.10);
  this.setMarginBottomPercent(.10);
  this.setMarginRightPercent(0);
  this.setMarginLeftPercent(0);
}

Progressbar.prototype._createStage = function() {
  this.stage = new Kinetic.Stage({
    container: this.getStageContainerID(),
    width: this.getStageWidth(),
    height: this.getStageHeight()
  });
}

Progressbar.prototype._createStageAndLayer = function() {
  this._createStage();
  this._createShapeLayer();
}

Progressbar.prototype._createShapeLayer = function() {
  this.shapesLayer = new Kinetic.Layer();

  this.addToStage(this.shapesLayer);
}

Progressbar.prototype._createSubObjects = function(clientProgressbarObj) {
  this.progressbarContainer = new ProgressbarContainer(this, clientProgressbarObj);

  this.messagesContainer = new MessagesContainer(this, clientProgressbarObj.messages, 0, 0);//0 and 0 are top/left margins
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS 
//-----------------------------------------------------------------------------

Progressbar.prototype._setUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj['stageHeight'])
    this.setStageHeight(clientProgressbarObj['stageHeight']);
  if(clientProgressbarObj['stageWidth'])
    this.setStageWidth(clientProgressbarObj['stageWidth']);
  if(clientProgressbarObj['stageContainerID'])
    this.setStageContainerID(clientProgressbarObj['stageContainerID']);

  if(clientProgressbarObj['topMarginPercent'])
    this.setMarginTopPercent(clientProgressbarObj['topMarginPercent']);
  if(clientProgressbarObj['bottomMarginPercent'])
    this.setMarginBottomPercent(clientProgressbarObj['bottomMarginPercent']);
  if(clientProgressbarObj['rightMarginPercent'])
    this.setMarginRightPercent(clientProgressbarObj['rightMarginPercent']);
  if(clientProgressbarObj['leftMarginPercent'])
    this.setMarginLeftPercent(clientProgressbarObj['leftMarginPercent']);
}
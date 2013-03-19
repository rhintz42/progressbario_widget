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
  this._setDefaultAttributes(clientProgressbarObj);
  this._createStageAndLayer();
  this._createDefaultAttributes();
  this._setUserAttributes(clientProgressbarObj);

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

Progressbar.prototype.setStage = function(stage) {
  this.stage = stage;
}

Progressbar.prototype.setStageContainerID = function(containerID) {
  var stage = this.getStage();
  stage.setContainer(containerID);
}

Progressbar.prototype.setStageHeight = function(height) {
  this.stageHeight = height;
}

Progressbar.prototype.setStageWidth = function(width) {
  this.stageWidth = width;
}

Progressbar.prototype.setUserAttributes = function(ClientProgressbarObj) {
  this._setUserAttributes(ClientProgressbarObj);
  this.progressbarContainer.setUserAttributes(ClientProgressbarObj);
  //this.messagesContainer.setUserAttributes(ClientProgressbarObj.messages);
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

Progressbar.prototype.getDefaultHeight = function() {
  return this.defaultStageHeight;
}

Progressbar.prototype.getDefaultID = function() {
  return this.defaultStageContainerID;
}

Progressbar.prototype.getDefaultWidth = function() {
  return this.defaultStageWidth;
}

Progressbar.prototype.getDefaultMarginBottomPercent = function() {
  return .10;
}

Progressbar.prototype.getDefaultMarginLeftPercent = function() {
  return 0;
}

Progressbar.prototype.getDefaultMarginRightPercent = function() {
  return 0;
}

Progressbar.prototype.getDefaultMarginTopPercent = function() {
  return .10;
}

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

Progressbar.prototype.getStage = function() {
  return this.stage;
}

Progressbar.prototype.getStageWidth = function() {
  var stage = this.getStage();
  return stage.getWidth();
}

Progressbar.prototype.getStageHeight = function() {
  var stage = this.getStage();
  return stage.getHeight();
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
  this.setStageHeight(this.getDefaultHeight());
  this.setStageWidth(this.getDefaultWidth());
  this.setStageContainerID(this.getDefaultID());

  this.setMarginTopPercent(this.getDefaultMarginTopPercent());
  this.setMarginBottomPercent(this.getDefaultMarginBottomPercent());
  this.setMarginRightPercent(this.getDefaultMarginRightPercent());
  this.setMarginLeftPercent(this.getDefaultMarginLeftPercent());
}

Progressbar.prototype._createStage = function() {
  var stage = new Kinetic.Stage({
    container: this.getDefaultID(),
    width: this.getDefaultWidth(),
    height: this.getDefaultHeight()
  });

  this.setStage(stage);
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
  //THESE AREN"T ABLE TO CHANGE
  /*
  if(clientProgressbarObj['stageHeight'])
    this.setStageHeight(clientProgressbarObj['stageHeight']);
  if(clientProgressbarObj['stageWidth'])
    this.setStageWidth(clientProgressbarObj['stageWidth']);
  if(clientProgressbarObj['stageContainerID'])
    this.setStageContainerID(clientProgressbarObj['stageContainerID']);
  */

  if(clientProgressbarObj['topMarginPercent'])
    this.setMarginTopPercent(clientProgressbarObj['topMarginPercent']);
  if(clientProgressbarObj['bottomMarginPercent'])
    this.setMarginBottomPercent(clientProgressbarObj['bottomMarginPercent']);
  if(clientProgressbarObj['rightMarginPercent'])
    this.setMarginRightPercent(clientProgressbarObj['rightMarginPercent']);
  if(clientProgressbarObj['leftMarginPercent'])
    this.setMarginLeftPercent(clientProgressbarObj['leftMarginPercent']);
}

Progressbar.prototype._setDefaultAttributes = function(clientProgressbarObj) {
  this.defaultStageContainerID = 'container';
  this.defaultStageHeight = 500;
  this.defaultStageWidth = 500;

  if(clientProgressbarObj['stageContainerID'])
    this.defaultStageContainerID = clientProgressbarObj['stageContainerID'];

  if(clientProgressbarObj['stageHeight'])
    this.defaultStageHeight = clientProgressbarObj['stageHeight'];

  if(clientProgressbarObj['stageWidth'])
    this.defaultStageWidth = clientProgressbarObj['stageWidth'];
}
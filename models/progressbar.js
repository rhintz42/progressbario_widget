function Progressbar(clientProgressbarObj) {
  this.loadDefaultAttributes();
  this.loadUserAttributes(clientProgressbarObj);
  this.loadStageAndLayer();

  this.progressbarContainer = new ProgressbarContainer(this, clientProgressbarObj);
}

Progressbar.prototype.loadStageAndLayer = function() {
  this.stage = new Kinetic.Stage({
    container: this.getStageContainerID(),
    width: this.getStageWidth(),
    height: this.getStageHeight()
  });

  this.shapesLayer = new Kinetic.Layer();
  
  this.stage.add(this.shapesLayer);
}

Progressbar.prototype.loadDefaultAttributes = function() {
  this.setStageHeight(500);
  this.setStageWidth(500);
  this.setStageContainerID('container');

  this.setTopMarginPercent(.10);
  this.setBottomMarginPercent(.10);
  this.setRightMarginPercent(0);
  this.setLeftMarginPercent(0);
}

Progressbar.prototype.loadUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj['stageHeight'])
    this.setStageHeight(clientProgressbarObj['stageHeight']);
  if(clientProgressbarObj['stageWidth'])
    this.setStageWidth(clientProgressbarObj['stageWidth']);
  if(clientProgressbarObj['stageContainerID'])
    this.setStageContainerID(clientProgressbarObj['stageContainerID']);

  if(clientProgressbarObj['topMarginPercent'])
    this.setTopMarginPercent(clientProgressbarObj['topMarginPercent']);
  if(clientProgressbarObj['bottomMarginPercent'])
    this.setBottomMarginPercent(clientProgressbarObj['bottomMarginPercent']);
  if(clientProgressbarObj['rightMarginPercent'])
    this.setRightMarginPercent(clientProgressbarObj['rightMarginPercent']);
  if(clientProgressbarObj['leftMarginPercent'])
    this.setLeftMarginPercent(clientProgressbarObj['leftMarginPercent']);
}
/*
Progressbar.prototype.setUserAttributes = function(clientProgressbarObj) {
  
  if(clientProgressbarObj['stageHeight'])
    this.setStageHeight(clientProgressbarObj['stageHeight']);
  if(clientProgressbarObj['stageWidth'])
    this.setStageWidth(clientProgressbarObj['stageWidth']);
  if(clientProgressbarObj['stageContainerID'])
    this.setStageContainerID(clientProgressbarObj['stageContainerID']);

  if(clientProgressbarObj['topMarginPercent'])
    this.setTopMarginPercent(clientProgressbarObj['topMarginPercent']);
  if(clientProgressbarObj['bottomMarginPercent'])
    this.setBottomMarginPercent(clientProgressbarObj['bottomMarginPercent']);
  if(clientProgressbarObj['rightMarginPercent'])
    this.setRightMarginPercent(clientProgressbarObj['rightMarginPercent']);
  if(clientProgressbarObj['leftMarginPercent'])
    this.setLeftMarginPercent(clientProgressbarObj['leftMarginPercent']);
  
  CALL OBJECT BELOW THIS (PROGRESSBAR_CONTAINER) SET METHOD WITH CLIENTPROGRESSBAROBJ

}
*/

//-----------------------------------------------------------------
/* SET METHODS */
//-----------------------------------------------------------------
Progressbar.prototype.setStageWidth = function(width) {
  this.stageWidth = width;
}

Progressbar.prototype.setStageHeight = function(height) {
  this.stageHeight = height;
}

Progressbar.prototype.setStageContainerID = function(containerID) {
  this.stageContainerID = containerID;
}

Progressbar.prototype.setTopMarginPercent = function(percent) {
  this.topMarginPercent = percent;
}

Progressbar.prototype.setBottomMarginPercent = function(percent) {
  this.bottomMarginPercent = percent;
}

Progressbar.prototype.setRightMarginPercent = function(percent) {
  this.rightMarginPercent = percent;
}

Progressbar.prototype.setLeftMarginPercent = function(percent) {
  this.leftMarginPercent = percent;
}
//-----------------------------------------------------------------


//-----------------------------------------------------------------
/* GET METHODS */
//-----------------------------------------------------------------
Progressbar.prototype.getStageWidth = function() {
  return this.stageWidth;
}

Progressbar.prototype.getStageHeight = function() {
  return this.stageHeight;
}

Progressbar.prototype.getStageContainerID = function() {
  return this.stageContainerID;
}

Progressbar.prototype.getTopMarginPercent = function() {
  return this.topMarginPercent;
}

Progressbar.prototype.getBottomMarginPercent = function() {
  return this.bottomMarginPercent;
}

Progressbar.prototype.getRightMarginPercent = function() {
  return this.rightMarginPercent;
}

Progressbar.prototype.getLeftMarginPercent = function() {
  return this.leftMarginPercent;
}
//-----------------------------------------------------------------
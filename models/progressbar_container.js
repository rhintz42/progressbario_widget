function ProgressbarContainer(progressbar, clientProgressbarObj) {
	this.progressbar = progressbar;

	this.loadDefaultAttributes();
	this.loadUserAttributes(clientProgressbarObj);
	this.loadVariableSpecificAttributes();

	this.initiateSubObjects(clientProgressbarObj);
}

ProgressbarContainer.prototype.initiateSubObjects = function(clientProgressbarObj) {
  this.progressbarObject = new ProgressbarObject(this.progressbar, this, clientProgressbarObj);
}

ProgressbarContainer.prototype.loadDefaultAttributes = function() {
  var stageWidth = 500;
  var stageHeight = 500;
  var stageContainerID = 'container';

  this.progressbarImgName = 'images/thermometer3.png';
  this.imageObj = new Image();
  this.stageWidth = stageWidth;
  this.stageHeight = stageHeight;
  this.stageContainerID = stageContainerID;
  this.topMarginPercent = .10;
  this.bottomMarginPercent = .10;
}

ProgressbarContainer.prototype.loadUserAttributes = function(clientProgressbarObj) {
  /*
    This should be separated by class
  */
  if(clientProgressbarObj['stageWidth'])
    this.stageWidth = clientProgressbarObj['stageWidth'];
  if(clientProgressbarObj['stageHeight'])
    this.stageHeight = clientProgressbarObj['stageHeight'];
  if(clientProgressbarObj['stageContainerID'])
    this.stageContainerID = clientProgressbarObj['stageContainerID'];
  if(clientProgressbarObj['progressbarImgName'])
    this.progressbarImgName = clientProgressbarObj['progressbarImgName'];

  this.topMarginPercent = .10;
  this.bottomMarginPercent = .10;
}

ProgressbarContainer.prototype.loadVariableSpecificAttributes = function() {
  this.heightVar = 1 - this.topMarginPercent - this.bottomMarginPercent;
  this.progressbarHeight = this.stageHeight*this.heightVar;
  this.progressbarWidth = this.stageWidth*.5;
  this.progressbarYOffset = this.progressbarHeight*-1;
  this.marginForError = 1;
  /*-------------------------------*/
  this.adjustedProgressbarWidthMin = 0;
  this.adjustedProgressbarHeightMax = this.progressbarHeight-this.marginForError*2;
  this.adjustedProgressbarHeightMin = 0-this.marginForError;
  /*-------------------------------*/
  this.beginningProgressbarHeight = this.adjustedProgressbarHeightMax;
}
/*
  These methods should be in the progressbarOutline class
*/

ProgressbarContainer.prototype.getProgressbarOutlineImgName = function() {
	return this.progressbarImgName;
}

ProgressbarContainer.prototype.initializeZIndexes = function() {
  this.progressbarOutline.setZIndex(1);
}
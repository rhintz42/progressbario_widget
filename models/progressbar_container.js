function ProgressbarContainer(progressbarObj) {
	this.loadDefaultAttributes();
	this.loadUserAttributes(progressbarObj);
	this.loadVariableSpecificAttributes();
}

ProgressbarContainer.prototype.loadDefaultAttributes = function() {
  var stageWidth = 500;
  var stageHeight = 500;
  var stageContainerID = 'container';

  this.progressbarImgName = 'images/thermometer3.png';
  this.imageObj = new Image();
  //This is how you initiate new images
  this.stageWidth = stageWidth;
  this.stageHeight = stageHeight;
  this.stageContainerID = stageContainerID;
  this.topMarginPercent = .10;
  this.bottomMarginPercent = .10;
  this.tickDetails = new Object;
  this.progressbarFillDetails = new Object;
  this.progressbarOutlineDetails = new Object;

  this.tickDetails.xOffset = 95;
  this.progressbarFillDetails.clientNumMin = 0;
  this.progressbarFillDetails.clientNumMax = 100;
  this.progressbarFillDetails.clientNumCurrent = 50;
  this.progressbarFillDetails.fillColor = 'red';
  this.progressbarFillDetails.nameID = 'fillRegion';
}
ProgressbarContainer.prototype.loadUserAttributes = function(progressbarObj) {
  /*
    This should be separated by class
  */
  if(progressbarObj['stageWidth'])
    this.stageWidth = progressbarObj['stageWidth'];
  if(progressbarObj['stageHeight'])
    this.stageHeight = progressbarObj['stageHeight'];
  if(progressbarObj['stageContainerID'])
    this.stageContainerID = progressbarObj['stageContainerID'];
  if(progressbarObj['progressbarImgName'])
    this.progressbarImgName = progressbarObj['progressbarImgName'];
  if(progressbarObj.progressbarFillDetails['clientNumMin'])
    this.progressbarFillDetails.clientNumMin = progressbarObj.progressbarFillDetails['clientNumMin'];
  if(progressbarObj.progressbarFillDetails['clientNumMax'])
    this.progressbarFillDetails.clientNumMax = progressbarObj.progressbarFillDetails['clientNumMax'];
  if(progressbarObj.progressbarFillDetails['clientNumCurrent'])
    this.progressbarFillDetails.clientNumCurrent = progressbarObj.progressbarFillDetails['clientNumCurrent'];
  if(progressbarObj.progressbarFillDetails['fillColor'])
    this.progressbarFillDetails.fillColor = progressbarObj.progressbarFillDetails['fillColor'];
  if(progressbarObj.progressbarFillDetails['nameID'])
    this.progressbarFillDetails.nameID = progressbarObj.progressbarFillDetails['nameID'];
  
  this.topMarginPercent = .10;
  this.bottomMarginPercent = .10;
}

ProgressbarContainer.prototype.loadVariableSpecificAttributes = function() {
  this.heightVar = 1 - this.topMarginPercent - this.bottomMarginPercent;
  this.progressbarHeight = this.stageHeight*this.heightVar;
  this.progressbarWidth = this.stageWidth*.5;
  this.progressbarYOffset = this.progressbarHeight*-1;
  this.marginForError = 1;
  this.adjustedProgressbarWidthMin = 0;
  this.adjustedProgressbarHeightMax = this.progressbarHeight-this.marginForError*2;
  this.adjustedProgressbarHeightMin = 0-this.marginForError;
  this.beginningProgressbarHeight = this.adjustedProgressbarHeightMax;
  this.tickDetails.minY = this.getTickMin(this.progressbarImgName);
  this.progressbarFillDetails.fillMin = this.tickDetails.minY;
  this.tickDetails.maxY = this.getTickMax(this.progressbarImgName);
  this.tickDetails.xOffset = this.getTickXOffset(this.progressbarImgName);
}
/*
  These methods should be in the progressbarOutline class
*/
ProgressbarContainer.prototype.getTickMin = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(this.stageHeight/500);
  }
  return 0;
}

ProgressbarContainer.prototype.getTickMax = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 370*(this.stageHeight/500);
  }
  return 0;
}

ProgressbarContainer.prototype.getTickXOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 95*(this.stageWidth/500);
  }
  return 0;
}
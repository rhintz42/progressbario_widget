function ProgressbarContainer(progressbar, clientProgressbarObj) {
	this.progressbar = progressbar;

	this.loadDefaultAttributes();
	this.loadUserAttributes(clientProgressbarObj);
	this.loadVariableSpecificAttributes();

	this.createProgressbarGroup();

	this.loadSubObjects(clientProgressbarObj);

  this.onImageLoad();
}

ProgressbarContainer.prototype.createProgressbarGroup = function() {
	this.progressbarGroup = new Kinetic.Group({
	  x: this.getProgressbarWidth(),
    y: this.getProgressbarHeight()/(1-this.getTopMarginPercent()),//getInverse
    draggable: false
  });

  this.addToShapesLayer(this.progressbarGroup);
}

ProgressbarContainer.prototype.addToShapesLayer = function(group) {
	this.progressbar.shapesLayer.add(group);
}

ProgressbarContainer.prototype.onImageLoad = function() {
	var that = this;
  this.imageObj.onload = function() {
    that.initializeZIndexes();
    that.progressbar.stage.draw();
  };
  this.imageObj.src = this.progressbarImgName;
}

ProgressbarContainer.prototype.loadSubObjects = function(clientProgressbarObj) {
  this.progressbarObject = new ProgressbarObject(this, clientProgressbarObj);
}

ProgressbarContainer.prototype.loadDefaultAttributes = function() {
  this.createImgObj('images/thermometer3.png');
  this.setTopMarginPercent(.10);
  this.setBottomMarginPercent(.10);
}

ProgressbarContainer.prototype.loadUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj['progressbarImgName'])
    this.setProgressbarOutlineImgName(clientProgressbarObj['progressbarImgName']);
}

ProgressbarContainer.prototype.loadVariableSpecificAttributes = function() {
  this.setContainerHeightPercent(1 - this.getTopMarginPercent() - this.getBottomMarginPercent());
  this.setProgressbarHeight(this.progressbar.getStageHeight()*this.getContainerHeightPercent());
  this.setProgressbarWidth(this.progressbar.getStageWidth()*.5);
  this.setProgressbarYOffset(this.getProgressbarHeight()*-1);
  this.setMarginForError(1);
  /*-------------------------------*/
  this.setAdjustedProgressbarWidthMin(0);//Possibly put these in initializeAdjusted...
  this.setAdjustedProgressbarHeightMax(this.getProgressbarHeight()-this.getMarginForError()*2);
  this.setAdjustedProgressbarHeightMin(0-this.getMarginForError());
  /*-------------------------------*/
  this.setBeginningProgressbarHeight(this.getAdjustedProgressbarHeightMax());
}
/*
These methods should be in the progressbarOutline class
*/

ProgressbarContainer.prototype.getProgressbarOutlineImgName = function() {
	return this.progressbarImgName;
}

ProgressbarContainer.prototype.initializeZIndexes = function() {
  this.progressbarObject.progressbarOutline.setZIndex(1);
}

ProgressbarContainer.prototype.createImgObj = function(imgName) {
  this.setProgressbarOutlineImgName('images/thermometer3.png');
  this.imageObj = new Image();
}

//-------------------------------------------------------------------
// GET METHODS
//-------------------------------------------------------------------
ProgressbarContainer.prototype.getTopMarginPercent = function() {
	return this.topMarginPercent;
}

ProgressbarContainer.prototype.getBottomMarginPercent = function() {
	return this.bottomMarginPercent;
}

ProgressbarContainer.prototype.getRightMarginPercent = function() {
	return this.rightMarginPercent;
}

ProgressbarContainer.prototype.getLeftMarginPercent = function() {
	return this.leftMarginPercent;
}

ProgressbarContainer.prototype.getProgressbarOutlineImgName = function() {
	return this.progressbarImgName;
}

ProgressbarContainer.prototype.getProgressbarImgName = function() {
	return this.getProgressbarOutlineImgName();
}

ProgressbarContainer.prototype.getContainerHeightPercent = function() {
	return this.containerHeightPercent;
}

ProgressbarContainer.prototype.getProgressbarHeight = function() {
	return this.progressbarHeight;
}

ProgressbarContainer.prototype.getProgressbarWidth = function() {
	return this.progressbarWidth;
}

ProgressbarContainer.prototype.getProgressbarYOffset = function() {
	return this.progressbarYOffset;
}

ProgressbarContainer.prototype.getMarginForError = function() {
	return this.marginForError;
}

ProgressbarContainer.prototype.getAdjustedProgressbarWidthMin = function() {
	return this.adjustedProgressbarWidthMin;
}

ProgressbarContainer.prototype.getAdjustedProgressbarHeightMax = function() {
	return this.adjustedProgressbarHeightMax;
}

ProgressbarContainer.prototype.getAdjustedProgressbarHeightMin = function() {
	return this.adjustedProgressbarHeightMin;
}

ProgressbarContainer.prototype.getBeginningProgressbarHeight = function() {
	return this.beginningProgressbarHeight;
}


//-------------------------------------------------------------------
// SET METHODS 
//-------------------------------------------------------------------
ProgressbarContainer.prototype.setTopMarginPercent = function(percent) {
	this.topMarginPercent = percent;
}

ProgressbarContainer.prototype.setBottomMarginPercent = function(percent) {
	this.bottomMarginPercent = percent;
}

ProgressbarContainer.prototype.setRightMarginPercent = function(percent) {
	this.rightMarginPercent = percent;
}

ProgressbarContainer.prototype.setLeftMarginPercent = function(percent) {
	this.leftMarginPercent = percent;
}

ProgressbarContainer.prototype.setProgressbarOutlineImgName = function(imgName) {
	this.progressbarImgName = imgName;
}

ProgressbarContainer.prototype.setProgressbarImgName = function(imgName) {
	this.setProgressbarOutlineImgName(imgName);
}

ProgressbarContainer.prototype.setContainerHeightPercent = function(percent) {
	this.containerHeightPercent = percent;
}

ProgressbarContainer.prototype.setProgressbarHeight = function(height) {
	this.progressbarHeight = height;
}

ProgressbarContainer.prototype.setProgressbarWidth = function(width) {
	this.progressbarWidth = width;
}

ProgressbarContainer.prototype.setProgressbarYOffset = function(yOffset) {
	this.progressbarYOffset = yOffset;
}

ProgressbarContainer.prototype.setMarginForError = function(marginForError) {
	this.marginForError = marginForError;
}

ProgressbarContainer.prototype.setAdjustedProgressbarWidthMin = function(widthMin) {
	this.adjustedProgressbarWidthMin = widthMin;
}

ProgressbarContainer.prototype.setAdjustedProgressbarHeightMax = function(heightMax) {
	this.adjustedProgressbarHeightMax = heightMax;
}

ProgressbarContainer.prototype.setAdjustedProgressbarHeightMin = function(heightMin) {
	this.adjustedProgressbarHeightMin = heightMin;
}

ProgressbarContainer.prototype.setBeginningProgressbarHeight = function(height) {
	this.beginningProgressbarHeight = height;
}

function ProgressbarContainer(progressbar, clientProgressbarObj) {
	this.progressbar = progressbar;

	this.loadDefaultAttributes();
	this.loadUserAttributes(clientProgressbarObj);
	this.loadVariableSpecificAttributes();

	this.progressbarGroup = new Kinetic.Group({
    x: this.progressbarWidth,
    y: this.progressbarHeight/(1-this.topMarginPercent),
    draggable: false
  });

  this.progressbar.shapesLayer.add(this.progressbarGroup);

	this.loadSubObjects(clientProgressbarObj);

	var that = this;
  this.imageObj.onload = function() {
    that.initializeZIndexes();
    that.progressbar.stage.draw();
  };
  this.imageObj.src = this.progressbarImgName;
}

ProgressbarContainer.prototype.loadSubObjects = function(clientProgressbarObj) {
  this.progressbarObject = new ProgressbarObject(this.progressbar, this, clientProgressbarObj);
}

ProgressbarContainer.prototype.loadDefaultAttributes = function() {
  this.progressbarImgName = 'images/thermometer3.png';
  this.imageObj = new Image();
  this.topMarginPercent = .10;
  this.bottomMarginPercent = .10;
}

ProgressbarContainer.prototype.loadUserAttributes = function(clientProgressbarObj) {
  /*
    This should be separated by class
  */
  if(clientProgressbarObj['progressbarImgName'])
    this.progressbarImgName = clientProgressbarObj['progressbarImgName'];
}

ProgressbarContainer.prototype.loadVariableSpecificAttributes = function() {
  this.heightVar = 1 - this.topMarginPercent - this.bottomMarginPercent;
  this.progressbarHeight = this.progressbar.stageHeight*this.heightVar;
  this.progressbarWidth = this.progressbar.stageWidth*.5;
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
  this.progressbarObject.progressbarOutline.setZIndex(1);
}
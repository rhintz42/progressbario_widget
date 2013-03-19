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

function ProgressbarContainer(progressbar, clientProgressbarObj) {
	this._setProgressbar(progressbar);

	this._createDefaultAttributes();
	this._setUserAttributes(clientProgressbarObj);
	this._setVariableSpecificAttributes();

	this._createProgressbarGroup();

	this._createSubObjects(clientProgressbarObj);
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// DRAW METHODS //
//-----------------------------------------------------------------------------

ProgressbarContainer.prototype.drawStage = function() {
	this.progressbar.stage.draw();
}


//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

ProgressbarContainer.prototype.getAdjustedProgressbarHeightMax = function() {
	return this.adjustedProgressbarHeightMax;
}

ProgressbarContainer.prototype.getAdjustedProgressbarHeightMin = function() {
	return this.adjustedProgressbarHeightMin;
}

ProgressbarContainer.prototype.getAdjustedProgressbarWidthMin = function() {
	return this.adjustedProgressbarWidthMin;
}

ProgressbarContainer.prototype.getBeginningProgressbarHeight = function() {
	return this.beginningProgressbarHeight;
}

ProgressbarContainer.prototype.getContainerHeightPercent = function() {
	return this.containerHeightPercent;
}

ProgressbarContainer.prototype.getDefaultMarginBottomPercent = function() {
	return .10;
}

ProgressbarContainer.prototype.getDefaultMarginLeftPercent = function() {
	return .10;
}

ProgressbarContainer.prototype.getDefaultMarginRightPercent = function() {
	return .10;
}

ProgressbarContainer.prototype.getDefaultMarginTopPercent = function() {
	return .10;
}

ProgressbarContainer.prototype.getErrorMargin = function() {
	return this.marginForError;
}

ProgressbarContainer.prototype.getProgressbarGroup = function() {
	return this.progressbarGroup;
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

ProgressbarContainer.prototype.getMarginBottomPercent = function() {
	return this.bottomMarginPercent;
}

ProgressbarContainer.prototype.getMarginLeftPercent = function() {
	return this.leftMarginPercent;
}

ProgressbarContainer.prototype.getMarginRightPercent = function() {
	return this.rightMarginPercent;
}

ProgressbarContainer.prototype.getMarginTopPercent = function() {
	return this.topMarginPercent;
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//-----------------------------------------------------------------------------
// ADD METHODS
//-----------------------------------------------------------------------------

ProgressbarContainer.prototype.addToProgressbarGroup = function(obj) {
	this.progressbarGroup.add(obj);
}

ProgressbarContainer.prototype.addToShapesLayer = function(obj) {
	this.progressbar.shapesLayer.add(obj);
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

ProgressbarContainer.prototype.clientSetFillHeight = function(clientNum) {
	this.progressbarObject.clientSetFillHeight(clientNum);
}

ProgressbarContainer.prototype.setAdjustedProgressbarHeightMax = function(heightMax) {
	this.adjustedProgressbarHeightMax = heightMax;
}

ProgressbarContainer.prototype.setAdjustedProgressbarHeightMin = function(heightMin) {
	this.adjustedProgressbarHeightMin = heightMin;
}

ProgressbarContainer.prototype.setAdjustedProgressbarWidthMin = function(widthMin) {
	this.adjustedProgressbarWidthMin = widthMin;
}

ProgressbarContainer.prototype.setBeginningProgressbarHeight = function(height) {
	this.beginningProgressbarHeight = height;
}

ProgressbarContainer.prototype.setContainerHeightPercent = function(percent) {
	this.containerHeightPercent = percent;
}

ProgressbarContainer.prototype.setErrorMargin = function(marginForError) {
	this.marginForError = marginForError;
}

ProgressbarContainer.prototype.setMarginBottomPercent = function(percent) {
	this.bottomMarginPercent = percent;
}

ProgressbarContainer.prototype.setMarginLeftPercent = function(percent) {
	this.leftMarginPercent = percent;
}

ProgressbarContainer.prototype.setMarginRightPercent = function(percent) {
	this.rightMarginPercent = percent;
}

ProgressbarContainer.prototype.setMarginTopPercent = function(percent) {
	this.topMarginPercent = percent;
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

ProgressbarContainer.prototype.setUserAttributes = function(clientProgressbarObj) {
  this._setUserAttributes(clientProgressbarObj);

  this.progressbarObject.setUserAttributes(clientProgressbarObj);
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




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// CREATE METHODS
//-----------------------------------------------------------------------------

ProgressbarContainer.prototype._createDefaultAttributes = function() {
  this.setMarginBottomPercent(this.getDefaultMarginBottomPercent());
  this.setMarginLeftPercent(this.getDefaultMarginLeftPercent());
  this.setMarginRightPercent(this.getDefaultMarginRightPercent());
  this.setMarginTopPercent(this.getDefaultMarginTopPercent());
}

ProgressbarContainer.prototype._createProgressbarGroup = function() {
	this.progressbarGroup = new Kinetic.Group({
	  x: this.getProgressbarWidth(),
    y: this.getProgressbarHeight()/(1-this.getMarginTopPercent()),//getInverse
    draggable: false
  });

  this.addToShapesLayer(this.progressbarGroup);
}

ProgressbarContainer.prototype._createSubObjects = function(clientProgressbarObj) {
  this.progressbarObject = new ProgressbarObject(this, clientProgressbarObj);

  this.progressbarOutline = this.progressbarObject.getProgressbarOutline();
  this.progressbarFilling = this.progressbarObject.getProgressbarFilling();
  this.progressbarTicksOrgainzer = this.progressbarObject.getTicksOrganizer();
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

ProgressbarContainer.prototype._setProgressbar = function(progressbar) {
	this.progressbar = progressbar;
}

ProgressbarContainer.prototype._setUserAttributes = function(clientProgressbarObj) {
	
}

ProgressbarContainer.prototype._setVariableSpecificAttributes = function() {
  this.setContainerHeightPercent(1 - this.getMarginTopPercent() - this.getMarginBottomPercent());
  this.setProgressbarHeight(this.progressbar.getStageHeight()*this.getContainerHeightPercent());
  this.setProgressbarWidth(this.progressbar.getStageWidth()*.5);
  this.setProgressbarYOffset(this.getProgressbarHeight()*-1);
  this.setErrorMargin(1);
  /*-------------------------------*/
  this.setAdjustedProgressbarWidthMin(0);//Possibly put these in initializeAdjusted...
  this.setAdjustedProgressbarHeightMax(this.getProgressbarHeight()-this.getErrorMargin()*2);
  this.setAdjustedProgressbarHeightMin(0-this.getErrorMargin());
  /*-------------------------------*/
  this.setBeginningProgressbarHeight(this.getAdjustedProgressbarHeightMax());
}
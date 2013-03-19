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

function ProgressbarObject(progressbarContainer, clientProgressbarObj) {
  this._setProgressbarContainer(progressbarContainer);

  this._createDefaultAttributes();
  this._setUserAttributes(clientProgressbarObj);

  this._createSubObjects(clientProgressbarObj);

  this._loadImage();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype.getAdjustedProgressbarHeightMax = function() {
  return this.progressbarContainer.getAdjustedProgressbarHeightMax();
}

ProgressbarObject.prototype.getAdjustedProgressbarHeightMin = function() {
  return this.progressbarContainer.getAdjustedProgressbarHeightMin();
}

ProgressbarObject.prototype.getDefaultImageSrc = function() {
  return 'http://progressbar-io.googlecode.com/files/thermometer3.png';
}

ProgressbarObject.prototype.getImageObj = function() {
  return this.imageObj;
}
ProgressbarObject.prototype.getProgressbarContainer = function() {
  return this.progressbarContainer;
}

ProgressbarObject.prototype.getProgressbarFilling = function() {
  return this.progressbarFilling;
}

ProgressbarObject.prototype.getProgressbarGroup = function() {
  return this.progressbarContainer.getProgressbarGroup();
}

ProgressbarObject.prototype.getProgressbarHeight = function() {
  return this.progressbarContainer.getProgressbarHeight();
}

ProgressbarObject.prototype.getProgressbarImgName = function() {
  return this.getProgressbarOutlineImgName();
}

ProgressbarObject.prototype.getProgressbarOutline = function() {
  return this.progressbarOutline;
}

ProgressbarObject.prototype.getProgressbarOutlineImgName = function() {
  return this.progressbarImgName;
}

ProgressbarObject.prototype.getProgressbarTicks = function() {
  return this.getTicksOrganizer();
}

ProgressbarObject.prototype.getProgressbarWidth = function() {
  return this.progressbarContainer.getProgressbarWidth();
}

ProgressbarObject.prototype.getTicksOrganizer = function() {
  return this.ticksOrganizer;
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype.addToProgressbarObjGroup = function(obj) {
  this.progressbarContainer.addToProgressbarGroup(obj);
}

//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// LOAD METHODS //
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype.setProgressbarObject = function(clientPorgressbarObj) {
  this._setUserAttributes(clientPorgressbarObj);
}

ProgressbarObject.prototype._setProgressbarOutline = function(progressbarOutline) {
  this.progressbarOutline = progressbarOutline;
}

ProgressbarObject.prototype.setProgressbarOutlineImgName = function(imgName) {
  this.progressbarImgName = imgName;
}

ProgressbarObject.prototype.setUserAttributes = function(clientProgressbarObj) {
  this._setUserAttributes(clientProgressbarObj);

  this.progressbarFilling.setUserAttributes(clientProgressbarObj.progressbarFillDetails);
  this.ticksOrganizer.setUserAttributes(clientProgressbarObj.tickDetails);
}




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// PUBLIC METHODS //
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
// CREATE METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype._createDefaultAttributes = function() {
  this._createImgObj(this.getDefaultImageSrc());
}

ProgressbarObject.prototype._createImgObj = function(imgName) {
  this.setProgressbarOutlineImgName(imgName);
  this.imageObj = new Image();
}

ProgressbarObject.prototype._createProgressbarFilling = function(clientProgressbarFillDetails) {
  this.progressbarFilling = new ProgressbarFilling(this, clientProgressbarFillDetails);
}

/*This needs to be put into a separate class*/
ProgressbarObject.prototype._createProgressbarOutline = function() {
  
  this.progressbarOutline = new Kinetic.Image({
    x: 0,
    y: this.progressbarContainer.progressbarYOffset,
    image: this.getImageObj(),
    width: this.progressbarContainer.getProgressbarWidth(),
    height: this.progressbarContainer.getProgressbarHeight()
  });

  this.addToProgressbarObjGroup(this.getProgressbarOutline());
  
}

ProgressbarObject.prototype._createProgressbarTicks = function(clientTickDetails) {
  this.ticksOrganizer = new TicksOrganizer(this, clientTickDetails);
}

ProgressbarObject.prototype._createSubObjects = function(clientProgressbarObj) {
  this._createProgressbarOutline();
  this._createProgressbarFilling(clientProgressbarObj.progressbarFillDetails);
  this._createProgressbarTicks(clientProgressbarObj.tickDetails);
}


//-----------------------------------------------------------------------------
// LOAD METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype._loadImage = function() {
  //this.imageObj = new Image();
  var that = this;
  this.imageObj.onload = function() {
    that._loadZIndexes();
    that.progressbarContainer.drawStage();
  };
  this.imageObj.src = this.getProgressbarOutlineImgName();
}

ProgressbarObject.prototype._loadZIndexes = function() {
  this.progressbarOutline.setZIndex(1);
}


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

ProgressbarObject.prototype._setProgressbarContainer = function(progressbarContainer) {
  this.progressbarContainer = progressbarContainer;
}

ProgressbarObject.prototype._setProgressbarFilling = function(progressbarFilling) {
  this.progressbarFilling = progressbarFilling;
}

ProgressbarObject.prototype.setProgressbarImgName = function(imgName) {
  this.setProgressbarOutlineImgName(imgName);
}

ProgressbarObject.prototype._setTicksOrganizer = function(ticksOrganizer) {
  this.ticksOrganizer = ticksOrganizer;
}

ProgressbarObject.prototype._setUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj == undefined)
    return;

  if(clientProgressbarObj['progressbarImgName'])
    this.setProgressbarOutlineImgName(clientProgressbarObj['progressbarImgName']);
}
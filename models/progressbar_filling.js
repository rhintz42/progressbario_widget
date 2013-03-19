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

function ProgressbarFilling(progressbarObject, clientProgressbarFillDetails) {
  this._setProgressbarObject(progressbarObject);
  
  this._createDefaultObjectsAndAttributes();
  this._setUserAttributes(clientProgressbarFillDetails);
  this._setDynamicallyCreatedAttributes();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

ProgressbarFilling.prototype.getClientNumCurrent = function() {
  return this.clientNumCurrent;
}

ProgressbarFilling.prototype.getClientNumFromPercent = function(percent) {
  percent = Math.abs(percent);
  var clientNum = Math.round(this.getClientNumMax()*(percent/100));
  return clientNum;
}

ProgressbarFilling.prototype.getClientNumMax = function() {
  return this.clientNumMax;
}

ProgressbarFilling.prototype.getClientNumMin = function() {
  return this.clientNumMin;
}

ProgressbarFilling.prototype.getClientNumToFillHeight = function(clientHeight) {
  clientHeight = Math.abs(clientHeight)
  clientHeight -= this.getClientNumMin();
  clientHeight *= -1;
  var fillRange = this.getFillMaxYOffset()-this.getFillMinYOffset();
  var clientRange = this.getClientNumMax()-this.getClientNumMin();
  var clientAdjustedHeight = (clientHeight * (fillRange/clientRange)) - this.getFillMinYOffset();
  return clientAdjustedHeight;
}

ProgressbarFilling.prototype.getCurrentPercent = function() {
  return this.getPercentFromClientNum(this.getClientNumCurrent());
}

ProgressbarFilling.prototype.getDefaultClientNumCurrent = function() {
  return 50;
}

ProgressbarFilling.prototype.getDefaultClientNumMax = function() {
  return 100;
}

ProgressbarFilling.prototype.getDefaultClientNumMin = function() {
  return 0;
}

ProgressbarFilling.prototype.getDefaultFillColor = function() {
  return 'red';
}

ProgressbarFilling.prototype.getDefaultFillHeight = function() {
  return 100;
}

ProgressbarFilling.prototype.getDefaultFillName = function() {
  return 'filling';
}

ProgressbarFilling.prototype.getDefaultFillWidth = function() {
  return this.progressbarObject.getProgressbarWidth();
}

ProgressbarFilling.prototype.getDefaultFillXOffset = function() {
  return 0;
}

ProgressbarFilling.prototype.getDefaultFillYOffset = function() {
  return this.progressbarObject.getAdjustedProgressbarHeightMin();
}

ProgressbarFilling.prototype.getDefaultInitialHeight = function() {
  return 0;
}

ProgressbarFilling.prototype.getFillColor = function() {
  return this.fillObj.getFill();
}

ProgressbarFilling.prototype.getFillHeight = function() {
  return this.fillObj.getHeight();
}

ProgressbarFilling.prototype.getFillMaxYOffset = function(progressbarImgName) {
  if(progressbarImgName) {
    return this._getFillMaxYOffsetFromImage(progressbarImgName);
  }
  return this.fillMaxYOffset;
}

ProgressbarFilling.prototype.getFillMinYOffset = function(progressbarImgName) {
  if(progressbarImgName) {
    return this._getFillMinYOffsetFromImage(progressbarImgName);
  }
  return this.fillMinYOffset;
}

ProgressbarFilling.prototype.getFillObject = function() {
  return this.fillObj;
}

ProgressbarFilling.prototype.getFillWidth = function() {
  return this.fillObj.getWidth();
}

ProgressbarFilling.prototype.getHeightToPercent = function(height) {
  height = Math.abs(height)-Math.abs(this.getFillMinYOffset());
  var percent = height/(this.getFillMaxYOffset()-this.getFillMinYOffset())*100;
  return percent;
}

ProgressbarFilling.prototype.getInitialHeight = function() {
  return this.initialHeight;
}

ProgressbarFilling.prototype.getInverseClientNumFromPercent = function(percent) {
  percent = Math.abs(percent);
  var clientNum = this.getClientNumMax() - Math.round(this.getClientNumMax()*(percent/100));
  return clientNum;
}

ProgressbarFilling.prototype.getNameID = function() {
  return this.fillObj.getName();
}

//THINK ABOUT GETTING THE PERCENT FROM THE CLIENT NUMBERS INSTEAD
//CAN WRITE TWO METHODS, GETTING PERCENT FROM HEIGHT AND CLIENT NUMS
//AND CAN COMPARE THOSE NUMBERS TO ONE ANOTHER
ProgressbarFilling.prototype.getPercent = function(height) {
  return this.getHeightToPercent(height);
}

ProgressbarFilling.prototype.getPercentFromClientNum = function(clientNum) {
  clientNum = Math.abs(clientNum);
  var percent = (clientNum-this.getClientNumMin())/this.getClientNumMax()*100;
  return percent;
}

ProgressbarFilling.prototype.getXOffset = function() {
  return this.fillObj.getX();
}

ProgressbarFilling.prototype.getYOffset = function() {
  return this.fillObj.getY();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------

ProgressbarFilling.prototype.addToClientNumCurrent = function(addNum) {
  var currentClientNum = this.getClientNumCurrent();
  var newCurrentClientNum = currentClientNum + addNum;
  this._setClientNumCurrent(newCurrentClientNum);
  this._clientSetFillHeight(this.getClientNumCurrent());
}


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

ProgressbarFilling.prototype.setClientNumCurrent = function(clientNum) {
  this._setClientNumCurrent(clientNum);
  this._clientSetFillHeight(this.getClientNumCurrent())
}


ProgressbarFilling.prototype.setClientNumMax = function(clientNumMax) {
  this._setClientNumMax(clientNumMax);
  this._clientSetFillHeight(this.getClientNumCurrent());
}

ProgressbarFilling.prototype.setUserAttributes = function(clientProgressbarFillDetails) {
  this._setUserAttributes(clientProgressbarFillDetails);
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

ProgressbarFilling.prototype._getFillMaxYOffsetFromImage = function(progressbarImgName) {
  var offset = 0;

  if(progressbarImgName == 'images/thermometer.png') {
    var maxHeight = this.progressbarObject.getProgressbarHeight();
    offset = 397*(maxHeight/400);//This should be determined by group height
  }
  else if(progressbarImgName == 'images/thermometer3.png') {
    var maxHeight = this.progressbarObject.getProgressbarHeight();
    offset = 397*(maxHeight/400);//This should be determined by group height
  }
  else if(progressbarImgName == 'http://progressbar-io.googlecode.com/files/thermometer3.png') {
    var maxHeight = this.progressbarObject.getProgressbarHeight();
    offset = 397*(maxHeight/400);//This should be determined by group height
  }


  return offset;
}

ProgressbarFilling.prototype._getFillMinYOffsetFromImage = function(progressbarImgName) {
  var offset = 0;

  if(progressbarImgName == 'images/thermometer.png') {
    var height = this.progressbarObject.getProgressbarHeight();
    offset = 105*(height/400);
  }
  else if(progressbarImgName == 'images/thermometer3.png') {
    var height = this.progressbarObject.getProgressbarHeight();
    offset = 105*(height/400);
  }
  else if(progressbarImgName == 'http://progressbar-io.googlecode.com/files/thermometer3.png') {
    var height = this.progressbarObject.getProgressbarHeight();
    offset = 105*(height/400);
  }

  return offset;
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

ProgressbarFilling.prototype._createDefaultObjectsAndAttributes = function() {
  this._createFill();

  this._setClientNumMin(this.getDefaultClientNumMin());
  this._setClientNumMax(this.getDefaultClientNumMax());
  this._setClientNumCurrent(this.getDefaultClientNumCurrent());
  this._setInitialHeight(this.getDefaultInitialHeight());
}

ProgressbarFilling.prototype._createFill = function() {
  var progressbarOutlineImgName = this.progressbarObject.getProgressbarOutlineImgName();

  this._setFillMinYOffset(progressbarOutlineImgName);
  this._setFillMaxYOffset(progressbarOutlineImgName);

  this.fillObj = new Kinetic.Rect({
    x: this.getDefaultFillXOffset(),
    y: this.getDefaultFillYOffset(),
    width: this.getDefaultFillWidth(),
    height: this.getDefaultFillHeight(),
    fill: this.getDefaultFillColor(),
    name: this.getDefaultFillName(),
    draggable: false
  });

  this.progressbarObject.addToProgressbarObjGroup(this.getFillObject());
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------
ProgressbarFilling.prototype._clientSetFillHeight = function(clientHeight) {
  this._setFillHeight(this.getClientNumToFillHeight(clientHeight));
}

ProgressbarFilling.prototype._setClientNumCurrent = function(clientNumCurrent) {
  if(clientNumCurrent < this.getClientNumMin()) {
    clientNumCurrent = this.getClientNumMin();
  } else if(clientNumCurrent > this.getClientNumMax()) {
    clientNumCurrent = this.getClientNumMax();
  }

  this.clientNumCurrent = clientNumCurrent;
}

ProgressbarFilling.prototype._setClientNumMax = function(clientNumMax) {
  this.clientNumMax = clientNumMax;
}

ProgressbarFilling.prototype._setClientNumMin = function(clientNumMin) {
  this.clientNumMin = clientNumMin;
}

ProgressbarFilling.prototype._setDynamicallyCreatedAttributes = function() {
  this._setInitialHeight(this.getClientNumCurrent());

  this._clientSetFillHeight(this.getClientNumCurrent());
}

ProgressbarFilling.prototype._setFillColor = function(color) {
  this.fillObj.setFill(color);
}

ProgressbarFilling.prototype._setFillHeight = function(height) {
  height = Math.abs(height);
  var newHeight = height*-1;

  if(height > this.getFillMaxYOffset()) {
    newHeight = this.getFillMaxYOffset()*-1;
  } else if (height < this.getFillMinYOffset()) {
    newHeight = this.getFillMinYOffset()*-1;
  }
  this.fillObj.setHeight(newHeight);
  var a = 0;
}

ProgressbarFilling.prototype._setFillMinYOffset = function(progressbarImgName) {
  this.fillMinYOffset = this.getFillMinYOffset(progressbarImgName);
}

ProgressbarFilling.prototype._setFillMaxYOffset = function(progressbarImgName) {
  var offset = this.getFillMaxYOffset(progressbarImgName);
  this.fillMaxYOffset = this.getFillMaxYOffset(progressbarImgName);
}

ProgressbarFilling.prototype._setFillObject = function(fillObj) {
  this.fillObj = fillObj;
}

ProgressbarFilling.prototype._setFillSize = function(width, height) {
  this.fillObj.setSize(width, height);
}

ProgressbarFilling.prototype._setFillWidth = function(width) {
  this.fillObj.setWidth(width);
}

ProgressbarFilling.prototype._setInitialHeight = function(clientHeight) {
  this.initialHeight = this.getClientNumToFillHeight(clientHeight);
}

ProgressbarFilling.prototype._setName = function(name) {
  this.fillObj.setName(name);
}

ProgressbarFilling.prototype._setProgressbarObject = function(progressbarObject) {
  this.progressbarObject = progressbarObject;
}

ProgressbarFilling.prototype._setUserAttributes = function(clientProgressbarFillDetails) {
  if(clientProgressbarFillDetails == undefined)
    return;
  
  if(clientProgressbarFillDetails['clientNumMin'] >= 0)
    this._setClientNumMin(clientProgressbarFillDetails['clientNumMin']);
  if(clientProgressbarFillDetails['clientNumMax'] >= 0)
    this._setClientNumMax(clientProgressbarFillDetails['clientNumMax']);
  if(clientProgressbarFillDetails['clientNumCurrent'] >= 0)
    this._setClientNumCurrent(clientProgressbarFillDetails['clientNumCurrent']);

  if(clientProgressbarFillDetails['fillColor'])
    this._setFillColor(clientProgressbarFillDetails['fillColor']);
  if(clientProgressbarFillDetails['nameID'])
    this._setName(clientProgressbarFillDetails['nameID']);
  if(clientProgressbarFillDetails['xOffset'])
    this._setXOffset(clientProgressbarFillDetails['xOffset']);
  if(clientProgressbarFillDetails['fillWidth'])
    this._setFillWidth(clientProgressbarFillDetails['fillWidth']);
  if(clientProgressbarFillDetails['yOffset'])
    this._setYOffset(clientProgressbarFillDetails['yOffset']);
  if(clientProgressbarFillDetails['initialHeight'])
    this._setInitialHeight(clientProgressbarFillDetails['initialHeight']);
}

ProgressbarFilling.prototype._setYOffset = function(offset) {
  this._setFillMinYOffset(offset);
}

ProgressbarFilling.prototype._setXOffset = function(offset) {
  this.fillObj.setX(offset);
}

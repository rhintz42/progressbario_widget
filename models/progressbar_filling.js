//function ProgressbarFilling(messagesContainer, groupContainer, x, y, width, initialHeight, fillMax, fillMin, clientMin, clientMax, fill, name) {
function ProgressbarFilling(progressbarObject, clientProgressbarObj) {
  this.progressbarObject = progressbarObject;
  this.progressbarContainer = progressbarObject.progressbarContainer;
  
  this.loadDefaultAttributes();
  this.loadUserAttributes(clientProgressbarObj);
  this.loadDynamicallyCreatedAttributes();

  this.loadFill();
}

ProgressbarFilling.prototype.loadDefaultAttributes = function() {
  this.setClientNumMin(0);
  this.setClientNumMax(100);
  this.setClientNumCurrent(50);
  this.setXOffset(0);
  this.setYOffset(0);
  this.setFillColor('red');
  this.setNameID('filling');
}

ProgressbarFilling.prototype.loadUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj.progressbarFillDetails['clientNumMin'])
    this.setClientNumMin(clientProgressbarObj.progressbarFillDetails['clientNumMin']);
  if(clientProgressbarObj.progressbarFillDetails['clientNumMax'])
    this.setClientNumMax(clientProgressbarObj.progressbarFillDetails['clientNumMax']);
  if(clientProgressbarObj.progressbarFillDetails['clientNumCurrent'])
    this.setClientNumCurrent(clientProgressbarObj.progressbarFillDetails['clientNumCurrent']);

  if(clientProgressbarObj.progressbarFillDetails['fillColor'])
    this.setFillColor(clientProgressbarObj.progressbarFillDetails['fillColor']);
  if(clientProgressbarObj.progressbarFillDetails['nameID'])
    this.setNameID(clientProgressbarObj.progressbarFillDetails['nameID']);  
}

ProgressbarFilling.prototype.loadDynamicallyCreatedAttributes = function() {
  var progressbarOutlineImgName = this.progressbarContainer.getProgressbarOutlineImgName();
  var progressbarContainer = this.progressbarContainer;

  this.setFillMinYOffset(progressbarOutlineImgName);
  this.setFillMaxYOffset(progressbarOutlineImgName);
  this.setInitialHeight(this.getClientNumCurrent());

  this.setXOffset(0);//progressbar.progressbarContainer.adjustedProgressbarWidthMin;
  this.setYOffset(progressbarContainer.adjustedProgressbarHeightMin);
  this.setHeightMax(progressbarContainer.adjustedProgressbarHeightMax);
  this.setHeightMin(progressbarContainer.adjustedProgressbarHeightMin);
}

ProgressbarFilling.prototype.loadFill = function() {
  this.fillObj = new Kinetic.Rect({
    x: this.getXOffset(),
    y: this.getYOffset(),
    width: this.getFillWidth(),
    height: this.getInitialHeight(),
    fill: this.getFillColor(),
    name: this.getNameID(),
    draggable: false
  });

  this.setFillHeight(this.getInitialHeight());
  this.progressbarObject.addToProgressbarObjGroup(this.getFillObject());
}

ProgressbarFilling.prototype.getClientNumToFillHeight = function(clientHeight) {
  clientHeight = Math.abs(clientHeight)*-1;
  var fillRange = this.getFillMaxYOffset()-this.getFillMinYOffset();
  var clientRange = this.getClientNumMax()-this.getClientNumMin();
  var clientAdjustedHeight = (clientHeight * (fillRange/clientRange)) - this.getFillMinYOffset();
  return clientAdjustedHeight;
}

//-------------------------------------------------------------------
/* SET METHODS */
//-------------------------------------------------------------------
ProgressbarFilling.prototype.setFillColor = function(fillColor) {
  this.fillColor = fillColor;
}

ProgressbarFilling.prototype.setNameID = function(nameID) {
  this.nameID = nameID;
}

ProgressbarFilling.prototype.setInitialHeight = function(clientHeight) {
  this.initialHeight = this.getClientNumToFillHeight(clientHeight);
}

ProgressbarFilling.prototype.setXOffset = function(xOffset) {
  this.xOffset = xOffset;
}

ProgressbarFilling.prototype.setYOffset = function(yOffset) {
  this.yOffset = yOffset;
}

ProgressbarFilling.prototype.setHeightMax = function(heightMax) {
  this.heightMax = heightMax;
}

ProgressbarFilling.prototype.setHeightMin = function(heightMin) {
  this.heightMin = heightMin;
}

ProgressbarFilling.prototype.setFillObject = function(fillObj) {
  this.fillObj = fillObj;
}

ProgressbarFilling.prototype.setClientNumCurrent = function(clientNumCurrent) {
  this.clientNumCurrent = clientNumCurrent;
}

ProgressbarFilling.prototype.setClientNumMin = function(clientNumMin) {
  this.clientNumMin = clientNumMin;
}

ProgressbarFilling.prototype.setClientNumMax = function(clientNumMax) {
  this.clientNumMax = clientNumMax;
}

ProgressbarFilling.prototype.setFillSize = function(width, height) {
  this.fillObj.setSize(width, height);
}

ProgressbarFilling.prototype.setFillHeight = function(height) {
  if((height*-1) > this.getFillMaxYOffset()) {
    height = this.getFillMaxYOffset()*-1;
  } else if ((height*-1) < this.getFillMinYOffset()) {
    height = this.getFillMinYOffset()*-1;
  }
  this.setFillSize(this.getFillWidth(), height);
}


ProgressbarFilling.prototype.setFillMinYOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    var maxHeight = this.progressbarContainer.progressbarHeight;
    this.fillMinYOffset = 105*(maxHeight/400);
    return;
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    var maxHeight = this.progressbarContainer.progressbarHeight;
    this.fillMinYOffset = 105*(maxHeight/400);
    return;
  }
  this.fillMinYOffset = 0;
}

ProgressbarFilling.prototype.setFillMaxYOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer.png') {
    var maxHeight = this.progressbarContainer.progressbarHeight;
    this.fillMaxYOffset = 397*(maxHeight/400);//This should be determined by group height
    return;
  }
  if(progressbarImgName == 'images/thermometer3.png') {
    var maxHeight = this.progressbarContainer.progressbarHeight;
    this.fillMaxYOffset = 397*(maxHeight/400);//This should be determined by group height
    return;
  }
  this.fillMaxYOffset = 0;
}

//---------------------------------------------------------------------

//---------------------------------------------------------------------
/* GET METHODS */
//---------------------------------------------------------------------
ProgressbarFilling.prototype.getFillColor = function() {
  return this.fillColor;
}

ProgressbarFilling.prototype.getNameID = function() {
  return this.nameID;
}

ProgressbarFilling.prototype.getFillMinYOffset = function() {
  return this.fillMinYOffset;
}

ProgressbarFilling.prototype.getFillMaxYOffset = function() {
  return this.fillMaxYOffset;
}

ProgressbarFilling.prototype.getFillWidth = function() {
  return this.progressbarContainer.progressbarWidth;
}

ProgressbarFilling.prototype.getInitialHeight = function() {
  return this.initialHeight;
}

ProgressbarFilling.prototype.getXOffset = function() {
  return this.xOffset;
}

ProgressbarFilling.prototype.getYOffset = function() {
  return this.yOffset;
}

ProgressbarFilling.prototype.getHeightMax = function() {
  return this.heightMax;
}

ProgressbarFilling.prototype.getHeightMin = function() {
  return this.heightMin;
}

ProgressbarFilling.prototype.getFillObject = function() {
  return this.fillObj;
}

ProgressbarFilling.prototype.getClientNumCurrent = function() {
  return this.clientNumCurrent;
}

ProgressbarFilling.prototype.getClientNumMin = function() {
  return this.clientNumMin;
}

ProgressbarFilling.prototype.getClientNumMax = function() {
  return this.clientNumMax;
}

ProgressbarFilling.prototype.getPercent = function(height) {
  return this.getHeightToPercent(height);
}

ProgressbarFilling.prototype.getHeightToPercent = function(height) {
  height = Math.abs(height)-Math.abs(this.getFillMinYOffset());
  var percent = height/(this.getFillMaxYOffset()-this.getFillMinYOffset())*100;
  return percent;
}

ProgressbarFilling.prototype.getPercentToClientNum = function(percent) {
  percent = Math.abs(percent);
  var clientNum = Math.round(this.getClientNumMax()*(percent/100));
  return clientNum;
}

ProgressbarFilling.prototype.getInversePercentToClientNum = function(percent) {
  percent = Math.abs(percent);
  var clientNum = this.getClientNumMax() - Math.round(this.getClientNumMax()*(percent/100));
  return clientNum;
}
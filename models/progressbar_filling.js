//function ProgressbarFilling(messagesContainer, groupContainer, x, y, width, initialHeight, fillMax, fillMin, clientMin, clientMax, fill, name) {
function ProgressbarFilling(progressbar, progressbarContainer, clientProgressbarObj) {
  var progressbarGroup = progressbarContainer.progressbarGroup;
  this.progressbarContainer = progressbarContainer;
  this.stage = progressbarGroup.getStage();
  this.layer = progressbarGroup.getLayer();

  this.loadDefaultAttributes();
  this.loadUserAttributes(clientProgressbarObj);
  this.loadDynamicallyCreatedAttributes(progressbar);

  this.fill = new Kinetic.Rect({
    x: this.xOffset,
    y: this.yOffset,
    width: progressbarContainer.progressbarWidth,
    height: this.initialHeight,
    fill: this.fillColor,
    name: this.nameID,
    draggable: false
  });

  this.messageContainer = progressbar.messagesContainer;
  this.setFillHeight(this.initialHeight);

  progressbarGroup.add(this.fill);
  //this.setMessages(this.initialHeight);
}

ProgressbarFilling.prototype.loadDefaultAttributes = function() {
  this.clientNumMin = 0;
  this.clientNumMax = 100;
  this.clientNumCurrent = 50;
  this.xOffset = 0;
  this.yOffset = 0;
  this.fillColor = 'red';
  this.nameID = 'filling';
}

ProgressbarFilling.prototype.loadUserAttributes = function(clientProgressbarObj) {
  if(clientProgressbarObj.progressbarFillDetails['clientNumMin'])
    this.clientNumMin = clientProgressbarObj.progressbarFillDetails['clientNumMin'];
  if(clientProgressbarObj.progressbarFillDetails['clientNumMax'])
    this.clientNumMax = clientProgressbarObj.progressbarFillDetails['clientNumMax'];
  if(clientProgressbarObj.progressbarFillDetails['clientNumCurrent'])
    this.clientNumCurrent = clientProgressbarObj.progressbarFillDetails['clientNumCurrent'];

  if(clientProgressbarObj.progressbarFillDetails['fillColor'])
    this.fillColor = clientProgressbarObj.progressbarFillDetails['fillColor'];
  if(clientProgressbarObj.progressbarFillDetails['nameID'])
    this.nameID = clientProgressbarObj.progressbarFillDetails['nameID'];  
}

ProgressbarFilling.prototype.loadDynamicallyCreatedAttributes = function(progressbar) {
  var progressbarOutlineImgName = this.progressbarContainer.getProgressbarOutlineImgName();
  var progressbarContainer = this.progressbarContainer;

  this.fillMin = this.getFillMin(progressbar, progressbarOutlineImgName);
  this.fillMax = this.getFillMax(progressbar, progressbarOutlineImgName);
  this.initialHeight = this.getClientNumToFillHeight(this.clientNumCurrent);

  this.xOffset = 0;//progressbar.progressbarContainer.adjustedProgressbarWidthMin;
  this.yOffset = progressbarContainer.adjustedProgressbarHeightMin;
  this.heightMax = progressbarContainer.adjustedProgressbarHeightMax;
  this.heightMin = progressbarContainer.adjustedProgressbarHeightMin;
}

ProgressbarFilling.prototype.getClientNumToFillHeight = function(clientHeight) {
  clientHeight = Math.abs(clientHeight)*-1;
  var fillRange = this.fillMax-this.fillMin;
  var clientRange = this.clientNumMax-this.clientNumMin;
  var clientAdjustedHeight = (clientHeight * (fillRange/clientRange)) - this.fillMin;
  return clientAdjustedHeight;
}

ProgressbarFilling.prototype.setFillHeight = function(height) {
  if((height*-1) > this.fillMax) {
    height = this.fillMax*-1;
  } else if ((height*-1) < this.fillMin) {
    height = this.fillMin*-1;
  }

  this.fill.setSize(this.width, height);

  //this.setMessages(height);
}
/*
ProgressbarFilling.prototype.setMessages = function(height) {
  if(this.clientNumMax == undefined) {
    return
  }
  
  this.messageContainer.setMessageText('percentCompleted', Math.round(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesRead', this.percentToClientNum(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesLeft', this.inversePercentToClientNum(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesTotal', this.getClientNumMax());
}
*/

ProgressbarFilling.prototype.getPercent = function(height) {
  return this.heightToPercent(height);
}

ProgressbarFilling.prototype.heightToPercent = function(height) {
  height = Math.abs(height)-Math.abs(this.fillMin);
  var percent = height/(this.fillMax-this.fillMin)*100;
  return percent;
}

ProgressbarFilling.prototype.percentToClientNum = function(percent) {
  percent = Math.abs(percent);
  var clientNum = Math.round(this.clientNumMax*(percent/100));
  return clientNum;
}

ProgressbarFilling.prototype.inversePercentToClientNum = function(percent) {
  percent = Math.abs(percent);
  var clientNum = this.clientNumMax - Math.round(this.clientNumMax*(percent/100));
  return clientNum;
}

ProgressbarFilling.prototype.getClientNumMax = function() {
  return this.clientNumMax;
}

ProgressbarFilling.prototype.getFillMin = function(progressbar, progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(progressbar.stageHeight/500);
  }
  return 0;
}

ProgressbarFilling.prototype.getFillMax = function(progressbar, progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 400*(progressbar.stageHeight/500);
  }
  return 0;
}
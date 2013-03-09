//function ProgressbarFilling(messagesContainer, groupContainer, x, y, width, initialHeight, fillMax, fillMin, clientMin, clientMax, fill, name) {
function ProgressbarFilling(progressbarObj) {
  this.stage = progressbarObj.progressbarGroup.getStage();
  this.layer = progressbarObj.progressbarGroup.getLayer();

  this.clientNumMin = progressbarObj.progressbarFillDetails.clientNumMin;
  this.clientNumMax = progressbarObj.progressbarFillDetails.clientNumMax;
  this.fillMin = progressbarObj.progressbarFillDetails.fillMin;
  this.fillMax = progressbarObj.adjustedProgressbarHeightMax;

  //NEED TO GET INITIAL HEIHGT FROM USER. Put this into another method
  this.initialHeight = this.getClientNumToFillHeight(progressbarObj.progressbarFillDetails.clientNumCurrent);

  this.fill = new Kinetic.Rect({
    x: progressbarObj.adjustedProgressbarWidthMin,
    y: progressbarObj.adjustedProgressbarHeightMin,
    width: progressbarObj.progressbarWidth,
    height: this.initialHeight,
    fill: progressbarObj.progressbarFillDetails.fillColor,
    name: progressbarObj.progressbarFillDetails.nameID,
    draggable: false
  });
  this.messageContainer = progressbarObj.messagesContainer;
  this.setFillHeight(this.initialHeight);

  progressbarObj.progressbarGroup.add(this.fill);

  this.setMessages(this.initialHeight);
}

ProgressbarFilling.prototype.getClientNumToFillHeight = function(clientHeight) {
  clientHeight = Math.abs(clientHeight)*-1;
  var fillRange = this.fillMax-this.fillMin;
  var clientRange = this.clientNumMax-this.clientNumMin;
  var clientAdjustedHeight = (clientHeight * (fillRange/clientRange)) - this.fillMin;
  //clientHeight -= this.fillMin;
  return clientAdjustedHeight;
}

ProgressbarFilling.prototype.setFillHeight = function(height) {
  if((height*-1) > this.fillMax) {
    height = this.fillMax*-1;
  } else if ((height*-1) < this.fillMin) {
    height = this.fillMin*-1;
  }

  this.fill.setSize(this.width, height);

  this.setMessages(height);
}

ProgressbarFilling.prototype.setMessages = function(height) {
  if(this.clientNumMax == undefined) {
    return
  }
  
  this.messageContainer.setMessageText('percentCompleted', Math.round(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesRead', this.percentToClientNum(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesLeft', this.inversePercentToClientNum(this.getPercent(height)));
  this.messageContainer.setMessageText('pagesTotal', this.getClientNumMax());
}

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
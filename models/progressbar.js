function Progressbar(progressbarObj) {
  /*
    1) Should initiate each, separate class with defaults/user attributes
      - All the objects I drew 1 away from the Progressbar object should be initiated
    2) Create Get/Set methods for getting any variable a user needs
      - Put this into a separate class that should be loaded after models/progressbar.js

  */
  this.loadDefaultAttributes();
  this.loadUserAttributes(progressbarObj);
  this.loadVariableSpecificAttributes();

  this.loadStageAndContainers();
  this.loadAdditionalProgressbarAttributes()

  var that = this;
  this.imageObj.onload = function() {
    that.loadProgressbarOutline();

    that.initializeZIndexes();
    that.stage.draw();
  };
  this.imageObj.src = this.progressbarImgName;
}

Progressbar.prototype.loadDefaultAttributes = function() {
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

Progressbar.prototype.loadUserAttributes = function(progressbarObj) {
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

Progressbar.prototype.loadVariableSpecificAttributes = function() {
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
Progressbar.prototype.getTickMin = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 105*(this.stageHeight/500);
  }
  return 0;
}

Progressbar.prototype.getTickMax = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 370*(this.stageHeight/500);
  }
  return 0;
}

Progressbar.prototype.getTickXOffset = function(progressbarImgName) {
  if(progressbarImgName == 'images/thermometer3.png') {
    return 95*(this.stageWidth/500);
  }
  return 0;
}

Progressbar.prototype.loadStageAndContainers = function() {
  this.stage = new Kinetic.Stage({
    container: this.stageContainerID,
    width: this.stageWidth,
    height: this.stageHeight
  });

  this.shapesLayer = new Kinetic.Layer();

  this.progressbarGroup = new Kinetic.Group({
    x: this.progressbarWidth,
    y: this.progressbarHeight/(1-this.topMarginPercent),
    draggable: false
  });
  //CLEAN THIS UP
  this.messagesContainer = new MessagesContainer(this.shapesLayer, 0, this.progressbarHeight/(1-this.topMarginPercent));
  this.message = new Message(this.messagesContainer, 'percentCompleted', 0, this.progressbarHeight*-1, 'Percent Completed', 'Cool Turkey!', 15, 'Calibri', 'blue');
  this.message2 = new Message(this.messagesContainer, 'pagesRead', 0, (this.progressbarHeight-(15*2+20)*1)*-1, 'Pages Read', 'Cool Man', 15, 'Calibri', 'blue');
  this.message3 = new Message(this.messagesContainer, 'pagesLeft', 0, (this.progressbarHeight-(15*2+20)*2)*-1, 'Pages Left', 'Cool Town', 15, 'Calibri', 'blue');
  this.message4 = new Message(this.messagesContainer, 'pagesTotal', 0, (this.progressbarHeight-(15*2+20)*3)*-1, 'Pages Total', 'Meowzers', 15, 'Calibri', 'blue');

  this.shapesLayer.add(this.progressbarGroup);
  this.stage.add(this.shapesLayer);
}

/*This needs to be put into a separate class*/
Progressbar.prototype.loadProgressbarOutline = function() {
  this.progressbarOutline = new Kinetic.Image({
    x: 0,
    y: this.progressbarYOffset,
    image: this.imageObj,
    width: this.progressbarWidth,
    height: this.progressbarHeight
  });

  this.progressbarGroup.add(this.progressbarOutline);
}

Progressbar.prototype.loadAdditionalProgressbarAttributes = function() {
  this.progressbarFill = new ProgressbarFilling(this);
  //this.progressbarFill = new ProgressbarFilling(this.messagesContainer, this.progressbarGroup, 0, this.adjustedProgressbarHeightMin, this.progressbarWidth, 5*-1, this.adjustedProgressbarHeightMax, this.fillMin, 0, 387, 'red', 'fillRectangle');
  
  //this.anchor = new Anchor(this.progressbarGroup, this.progressbarFill, 0, 0, this.progressbarWidth, 10, 100, this.progressbarHeight-this.marginForError, 'top');
  this.ticksOrganizer = new TicksOrganizer(this, 10);
}

Progressbar.prototype.initializeZIndexes = function() {
  this.progressbarOutline.setZIndex(1);
}
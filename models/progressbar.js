function Progressbar(progressbarObj) {
  /*
    1) Should initiate each, separate class with defaults/user attributes
      - All the objects I drew 1 away from the Progressbar object should be initiated
    2) Create Get/Set methods for getting any variable a user needs
      - Put this into a separate class that should be loaded after models/progressbar.js

  */
  
  this.progressbarContainer = new ProgressbarContainer(progressbarObj);

  this.loadStageAndContainers();
  this.loadAdditionalProgressbarAttributes()

  var that = this;
  this.progressbarContainer.imageObj.onload = function() {
    that.loadProgressbarOutline();

    that.initializeZIndexes();
    that.progressbarContainer.stage.draw();
  };
  this.progressbarContainer.imageObj.src = this.progressbarContainer.progressbarImgName;
}

Progressbar.prototype.loadStageAndContainers = function() {
  this.progressbarContainer.stage = new Kinetic.Stage({
    container: this.progressbarContainer.stageContainerID,
    width: this.progressbarContainer.stageWidth,
    height: this.progressbarContainer.stageHeight
  });

  this.progressbarContainer.shapesLayer = new Kinetic.Layer();

  this.progressbarContainer.progressbarGroup = new Kinetic.Group({
    x: this.progressbarContainer.progressbarWidth,
    y: this.progressbarContainer.progressbarHeight/(1-this.progressbarContainer.topMarginPercent),
    draggable: false
  });
  //CLEAN THIS UP
  this.progressbarContainer.messagesContainer = new MessagesContainer(this.progressbarContainer.shapesLayer, 0, this.progressbarContainer.progressbarHeight/(1-this.progressbarContainer.topMarginPercent));
  this.progressbarContainer.message = new Message(this.progressbarContainer.messagesContainer, 'percentCompleted', 0, this.progressbarContainer.progressbarHeight*-1, 'Percent Completed', 'Cool Turkey!', 15, 'Calibri', 'blue');
  this.progressbarContainer.message2 = new Message(this.progressbarContainer.messagesContainer, 'pagesRead', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*1)*-1, 'Pages Read', 'Cool Man', 15, 'Calibri', 'blue');
  this.progressbarContainer.message3 = new Message(this.progressbarContainer.messagesContainer, 'pagesLeft', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*2)*-1, 'Pages Left', 'Cool Town', 15, 'Calibri', 'blue');
  this.progressbarContainer.message4 = new Message(this.progressbarContainer.messagesContainer, 'pagesTotal', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*3)*-1, 'Pages Total', 'Meowzers', 15, 'Calibri', 'blue');

  this.progressbarContainer.shapesLayer.add(this.progressbarContainer.progressbarGroup);
  this.progressbarContainer.stage.add(this.progressbarContainer.shapesLayer);
}

/*This needs to be put into a separate class*/
Progressbar.prototype.loadProgressbarOutline = function() {
  this.progressbarOutline = new Kinetic.Image({
    x: 0,
    y: this.progressbarContainer.progressbarYOffset,
    image: this.progressbarContainer.imageObj,
    width: this.progressbarContainer.progressbarWidth,
    height: this.progressbarContainer.progressbarHeight
  });

  this.progressbarContainer.progressbarGroup.add(this.progressbarOutline);
}

Progressbar.prototype.loadAdditionalProgressbarAttributes = function() {
  this.progressbarFill = new ProgressbarFilling(this.progressbarContainer);
  //this.progressbarFill = new ProgressbarFilling(this.messagesContainer, this.progressbarGroup, 0, this.adjustedProgressbarHeightMin, this.progressbarWidth, 5*-1, this.adjustedProgressbarHeightMax, this.fillMin, 0, 387, 'red', 'fillRectangle');
  
  //this.anchor = new Anchor(this.progressbarGroup, this.progressbarFill, 0, 0, this.progressbarWidth, 10, 100, this.progressbarHeight-this.marginForError, 'top');
  this.ticksOrganizer = new TicksOrganizer(this.progressbarContainer, 10);
}

Progressbar.prototype.initializeZIndexes = function() {
  this.progressbarOutline.setZIndex(1);
}
function Progressbar(clientProgressbarObj) {
  /*
    1) Should initiate each, separate class with defaults/user attributes
      - All the objects I drew 1 away from the Progressbar object should be initiated
    2) Create Get/Set methods for getting any variable a user needs
      - Put this into a separate class that should be loaded after models/progressbar.js

  */

  this.progressbarContainer = new ProgressbarContainer(this, clientProgressbarObj);

  this.loadStageAndContainers();
  this.loadAdditionalProgressbarObjects(clientProgressbarObj);

  var that = this;
  this.progressbarContainer.imageObj.onload = function() {
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
  this.messagesContainer = new MessagesContainer(this.progressbarContainer.shapesLayer, 0, this.progressbarContainer.progressbarHeight/(1-this.progressbarContainer.topMarginPercent));
  this.message = new Message(this.messagesContainer, 'percentCompleted', 0, this.progressbarContainer.progressbarHeight*-1, 'Percent Completed', 'Cool Turkey!', 15, 'Calibri', 'blue');
  this.message2 = new Message(this.messagesContainer, 'pagesRead', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*1)*-1, 'Pages Read', 'Cool Man', 15, 'Calibri', 'blue');
  this.message3 = new Message(this.messagesContainer, 'pagesLeft', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*2)*-1, 'Pages Left', 'Cool Town', 15, 'Calibri', 'blue');
  this.message4 = new Message(this.messagesContainer, 'pagesTotal', 0, (this.progressbarContainer.progressbarHeight-(15*2+20)*3)*-1, 'Pages Total', 'Meowzers', 15, 'Calibri', 'blue');

  this.progressbarContainer.shapesLayer.add(this.progressbarContainer.progressbarGroup);
  this.progressbarContainer.stage.add(this.progressbarContainer.shapesLayer);
}

Progressbar.prototype.loadAdditionalProgressbarObjects = function(clientProgressbarObj) {
  this.loadProgressbarOutline();
  this.loadProgressbarFilling(clientProgressbarObj);
  this.loadProgressbarTicks(clientProgressbarObj);
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

Progressbar.prototype.loadProgressbarFilling = function(clientProgressbarObj) {
  this.progressbarFilling = new ProgressbarFilling(this, clientProgressbarObj);
}

Progressbar.prototype.loadProgressbarTicks = function(clientProgressbarObj) {
  this.ticksOrganizer = new TicksOrganizer(this, clientProgressbarObj);
}

Progressbar.prototype.initializeZIndexes = function() {
  this.progressbarOutline.setZIndex(1);
}
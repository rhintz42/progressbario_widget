function ProgressbarObject(progressbarContainer, clientProgressbarObj) {
	this.progressbarContainer = progressbarContainer;

	this.initiateSubObjects(clientProgressbarObj);
}

/*This needs to be put into a separate class*/
ProgressbarObject.prototype.loadProgressbarOutline = function() {
  
  this.progressbarOutline = new Kinetic.Image({
    x: 0,
    y: this.progressbarContainer.progressbarYOffset,
    image: this.progressbarContainer.imageObj,
    width: this.progressbarContainer.progressbarWidth,
    height: this.progressbarContainer.progressbarHeight
  });

  this.progressbarContainer.progressbarGroup.add(this.progressbarOutline);
  
}

ProgressbarObject.prototype.loadProgressbarFilling = function(clientProgressbarObj) {
  this.progressbarFilling = new ProgressbarFilling(this, clientProgressbarObj);
}

ProgressbarObject.prototype.loadProgressbarTicks = function(clientProgressbarObj) {
  this.ticksOrganizer = new TicksOrganizer(this.progressbarContainer, clientProgressbarObj);
}

ProgressbarObject.prototype.initiateSubObjects = function(clientProgressbarObj) {
  this.loadProgressbarOutline();
  this.loadProgressbarFilling(clientProgressbarObj);
  this.loadProgressbarTicks(clientProgressbarObj);
}
/*
ProgressbarObject.prototype.setProgressbarObject(clientProgressbarObj) {

}
*/

//---------------------------------------------------------------------
/* GET METHODS */
//---------------------------------------------------------------------
ProgressbarObject.prototype.getProgressbarContainer = function() {
  return this.progressbarContainer;
}

ProgressbarObject.prototype.getProgressbarGroup = function() {
  return this.progressbarContainer.progressbarGroup;
}

ProgressbarObject.prototype.getProgressbarOutline = function() {
  return this.progressbarOutline;
}

ProgressbarObject.prototype.getProgressbarFilling = function() {
  return this.progressbarFilling;
}

ProgressbarObject.prototype.getTicksOrganizer = function() {
  return this.ticksOrganizer;
}

ProgressbarObject.prototype.getProgressbarTicks = function() {
  return this.getTicksOrganizer();
}

//-------------------------------------------------------------------
/* ADD METHODS */
//-------------------------------------------------------------------
ProgressbarObject.prototype.addToProgressbarObjGroup = function(obj) {
  var progressbarGroup = this.getProgressbarGroup();
  progressbarGroup.add(obj);
}
function TicksOrganizer(progressbar, numTicks) {
  this.group = progressbar.progressbarGroup;

  this.tickArray = new Array();
  this.minY = progressbar.tickDetails.minY;
  this.maxY = progressbar.tickDetails.maxY;
  this.xOffset = progressbar.tickDetails.xOffset;
  
  this.addTicks(numTicks);
}

TicksOrganizer.prototype.defaultTickParam = function() {
  var tick_param = new Object();
  tick_param['TicksOrganizer'] = this;
  tick_param['x'] = this.xOffset;
  tick_param['y'] = this.minY;
  tick_param['width'] = 10;
  tick_param['height'] = 2;
  tick_param['stroke'] = '#666';
  tick_param['fill'] = 'black';
  tick_param['strokeWidth'] = 2;
  tick_param['name'] = 'tick';

  return tick_param;
}

TicksOrganizer.prototype.addTicks = function(numTicks) {
  var tick_param = this.defaultTickParam();

  var difference = this.maxY - this.minY;
  var spacing = difference / (numTicks-1);

  for(var i = 0; i < numTicks; i++) {
    tick_param['y'] = (-1*spacing)*i-this.minY;
    this.tickArray[this.tickArray.length] = new Tick(tick_param);
  }
}

//function Tick(TicksOrganizer, x, y, width, height, stroke, fill, strokeWidth, name) {
/*
 *  Parameters
 *  Takes an object with any of these keys:
 *    TicksOrganizer
 *    x
 *    y
 *    width
 *    height
 *    stroke
 *    fill
 *    strokeWidth
 *    name
 */
function Tick(tick_param) {
  this.tick = new Kinetic.Rect({
    x: tick_param['x'],
    y: tick_param['y'],
    width: tick_param['width'],
    height: tick_param['height'],
    stroke: tick_param['stroke'],
    fill: tick_param['fill'],
    strokeWidth: tick_param['strokeWidth'],
    name: tick_param['name']
  });

  tick_param['TicksOrganizer'].group.add(this.tick);
}
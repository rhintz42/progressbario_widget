function Anchor(group, objToModify, x, y, width, height, beginningHeight, maxHeight, name) {
  this.stage = group.getStage();
  this.layer = group.getLayer();

  this.anchor = new Kinetic.Rect({
    x: x,
    y: y,
    width: width,
    height: height,
    stroke: '#666',
    fill: '#ddd',
    strokeWidth: 2,
    name: name,
    draggable: true,
    dragOnTop: false
  });

  this.objToModify = objToModify;
  this.beginningHeight = beginningHeight;
  this.maxHeight = maxHeight;
  this.lastX = x;
  this.lastY = y;
  this.initial_x = this.anchor.getX();
  this.anchor.setY(beginningHeight*-1);
  this.addAnchorOnEvents(group);
  group.add(this.anchor);

  this.update();

  this.anchor.moveToTop();
}

Anchor.prototype.addAnchorOnEvents = function (group) {
  var that = this;
  this.anchor.on('dragmove', function() {
    var layer = this.getLayer();
    that.update();
    layer.draw();
  });
  this.anchor.on('mousedown touchstart', function() {
    var layer = this.getLayer();
    group.setDraggable(false);
    this.moveToTop();
  });
  this.anchor.on('dragend', function() {
    var layer = this.getLayer();
    group.setDraggable(true);
    layer.draw();
  });
  this.anchor.on('mouseover', function() {
    var layer = this.getLayer();
    document.body.style.cursor = 'pointer';
    this.setStrokeWidth(4);
    layer.draw();
  });
  this.anchor.on('mouseout', function() {
    var layer = this.getLayer();
    document.body.style.cursor = 'default';
    this.setStrokeWidth(2);
    layer.draw();
  });
}

//THIS FUNCTION NEEDS TO BE CLEANED UP!!!
Anchor.prototype.update = function() {
  var group = this.anchor.getParent();

  var top = group.get('.top')[0];

  var rectArray = group.get('Rect');
  var rect = group.get('Rect')[0];

  if(rect.attrs.name != 'fillrectangle') {
    for(var i = 0; i < rectArray.length; i++) {
      if(rectArray[i].attrs.name == 'fillRectangle') {
        rect = rectArray[i];
        break;
      }
    }
  }

  var anchorX = this.anchor.getX();
  var anchorY = this.anchor.getY();

  // update anchor positions
  switch (this.anchor.getName()) {
    case 'top':
      var a = this.initial_x;
      top.setX(a);
      if(top.getY() < this.maxHeight*-1) {
        top.setY(-this.maxHeight);
        break;
      }
      if(top.getY() > 0) {
        top.setY(0);
        break;
      }
      break;
  }

  //$("#other").html(top.getY() * -1);

  var yMin = rect.getY()+rect.getHeight();

  var width = rect.getWidth();
  var yDif = top.getY() - rect.getHeight();

  var height = yMin + yDif;

  this.objToModify.setFillHeight(height);
  this.anchor.setY(this.objToModify.fill.getHeight());
}
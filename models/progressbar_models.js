function update(activeAnchor) {
    var group = activeAnchor.getParent();

    var top = group.get('.top')[0];

    var rectArray = group.get('Rect');
    var rect = group.get('Rect')[0];

    //var at = rect.attrs;
    //var name = rect.attrs.name;
    if(rect.attrs.name != 'fillrectangle') {
      for(var i = 0; i < rectArray.length; i++) {
        if(rectArray[i].attrs.name == 'fillRectangle') {
          rect = rectArray[i];
          break;
        }
      }
    }

    var anchorX = activeAnchor.getX();
    var anchorY = activeAnchor.getY();

    // update anchor positions
    switch (activeAnchor.getName()) {
      case 'top':
        var a = top.initial_x;
        //var b = rect.getZ();
        top.setX(a);
        if(top.getY() < top.maxHeight*-1) {
          top.setY(-top.maxHeight);
          break;
        }
        if(top.getY() > 0) {
          top.setY(0);
          break;
        }
        break;
    }

    $("#other").html(top.getY() * -1);

    yMin = rect.getY()+rect.getHeight();
    rect.setPosition(top.getPosition());

    var width = rect.getWidth();
    var height = yMin - top.getY();

    //writeMessage(top.ml, height);
    var h = top.getPercent();
    top.heightMessageLayer.setText(h);
    rect.setSize(rect.getWidth(), height);
  }

function addAnchor(group, x, y, width, height, beginningHeight, maxHeight, name) {
  var stage = group.getStage();
  var layer = group.getLayer();

  var anchor = new Kinetic.Rect({
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
  anchor.beginningHeight = beginningHeight;
  anchor.maxHeight = maxHeight;

  anchor.getPercent = function() {
    var height = anchor.getY() * -1;
    var percent = Math.round(height/anchor.maxHeight*100);
    return percent;
  }

  anchor.on('dragmove', function() {
    update(this);
    layer.draw();
  });
  anchor.on('mousedown touchstart', function() {
    group.setDraggable(false);
    this.moveToTop();
    //writeMessage(messageLayer, "Hello");
  });
  anchor.on('dragend', function() {
    group.setDraggable(true);
    layer.draw();
  });
  // add hover styling
  anchor.on('mouseover', function() {
    var layer = this.getLayer();
    document.body.style.cursor = 'pointer';
    this.setStrokeWidth(4);
    layer.draw();
  });
  anchor.on('mouseout', function() {
    var layer = this.getLayer();
    document.body.style.cursor = 'default';
    this.setStrokeWidth(2);
    layer.draw();
  });

  anchor.heightMessageLabel = new Kinetic.Text({
    x: (group.getWidth() / 2) - 150,
    y: -175,
    text: "Percent Complete",
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green'
  });

  anchor.heightMessageLayer = new Kinetic.Text({
    x: group.getWidth() / 2,
    y: -150,
    text: anchor.getY(),
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green'
  });

  group.add(anchor.heightMessageLayer);
  group.add(anchor.heightMessageLabel);

  anchor.initial_x = anchor.getX();

  group.add(anchor);

  anchor.setY(beginningHeight*-1);
  update(anchor);

  anchor.moveToTop();
}

function addFillRectangle(group, x, y, width, height, fill, name) {
	var stage = group.getStage();
	var layer = group.getLayer();

	var rect = new Kinetic.Rect({
		x: x,
    y: y,
    width: width,
    height: height,
    fill: fill,
    name: name,
    draggable: false
	});

	group.add(rect);
}

function addBoundaryRectangle(group, x, y, width, height, fill, name) {
	var stage = group.getStage();
	var layer = group.getLayer();

	var rect = new Kinetic.Rect({
		x: x,
    y: y,
    width: width,
    height: height,
    fill: fill,
    draggable: false
	});

	group.add(rect);

	rect.setZIndex(2);
}

function addTicks(group) {
  var stage = group.getStage();
  var layer = group.getLayer();

  var tick1 = new Kinetic.Rect({
    x: 0,
    y: -50,
    width: 10,
    height: 2,
    stroke: '#666',
    fill: 'black',
    strokeWidth: 2,
    name: "tick"
  });

  var tick2 = new Kinetic.Rect({
    x: 0,
    y: -20,
    width: 10,
    height: 2,
    stroke: '#666',
    fill: 'black',
    strokeWidth: 2,
    name: "tick"
  });

  group.add(tick1);
  group.add(tick2);

  tick1.moveToTop();
}


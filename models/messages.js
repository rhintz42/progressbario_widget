function MessagesContainer(shapesLayer, x, y) {
	this.messagesMap = {};
	this.messageGroup = new Kinetic.Group({
		x: x,
		y: y,
		draggable: false
	});

	shapesLayer.add(this.messageGroup);
}

function Message(messagesContainer, name, x, y, title, initialText, fontSize, fontFamily, fill) {
	this.mes = new Kinetic.Text({
		x: x,
		y: y+fontSize,
		text: initialText,
		fontSize: fontSize,
		fontFamily: fontFamily,
		fill: fill
	});

	this.messageLabel = new Kinetic.Text({
		x: x,
  	y: y,
  	text: title,
  	fontSize: fontSize,
  	fontFamily: fontFamily,
  	fill: fill
	})

	if(messagesContainer.messagesMap[name] == null) {
  	messagesContainer.messagesMap[name] = this.mes;
  }

  messagesContainer.messageGroup.add(this.messageLabel);
  messagesContainer.messageGroup.add(messagesContainer.messagesMap[name]);
}

MessagesContainer.prototype.setMessageText = function(name, text) {
	if(this.messagesMap[name]) {
		this.messagesMap[name].setText(text);
	}
}
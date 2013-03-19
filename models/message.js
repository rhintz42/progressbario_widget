//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// PUBLIC METHODS //
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
///////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONSTRUCTOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function Message(messagesContainer, messageDetails, yOffset) {
	this._setMessagesContainer(messagesContainer);
	this._setYOffset(yOffset);

	this._createDefaultAttributes();

	this._setUserAttributes(messageDetails);
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

Message.prototype.getMessageText = function() {
	return this.message.getText();
}

Message.prototype.getMessageFontColor = function() {
	return this.message.getFill();
}

Message.prototype.getMessageFontFamily = function() {
	return this.message.getFontFamily();
}

Message.prototype.getMessageFontSize = function() {
	return this.message.getFontSize();
}

Message.prototype.getMessageLabelFontColor = function() {
	return this.messageLabel.getFill();
}

Message.prototype.getMessageLabelFontFamily = function() {
	return this.messageLabel.getFontFamily();
}

Message.prototype.getMessageLabelFontSize = function() {
	return this.messageLabel.getFontSize();
}

Message.prototype.getMessageLabelText = function() {
	return this.messageLabel.getText();
}

Message.prototype.getMessageLabelXOffset = function() {
	return this.messageLabel.getX();
}

Message.prototype.getMessageLabelYOffset = function() {
	return this.messageLabel.getY();
}
Message.prototype.getMessageXOffset = function() {
	return this.message.getX();
}

Message.prototype.getMessageYOffset = function() {
	return this.message.getY();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//-----------------------------------------------------------------------------
// ADD METHODS
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//----------------------------------------------------------------------
// SET METHODS
//----------------------------------------------------------------------

Message.prototype.setMessageText = function(text) {
	this.message.setText(text);
}

Message.prototype.setMessageFontColor = function(color) {
	this.message.setFill(color);
}

Message.prototype.setMessageFontFamily = function(fontFamily) {
	this.message.setFontFamily(fontFamily);
}

Message.prototype.setMessageFontSize = function(size) {
	this.message.setFontSize(size);
}

Message.prototype.setMessageLabelFontColor = function(color) {
	this.messageLabel.setFill(color);
}

Message.prototype.setMessageLabelFontFamily = function(fontFamily) {
	this.messageLabel.setFontFamily(fontFamily);
}

Message.prototype.setMessageLabelFontSize = function(size) {
	this.messageLabel.setFontSize(size);
}

Message.prototype.setMessageLabelText = function(text) {
	this.messageLabel.setText(text);
}

Message.prototype.setMessageLabelXOffset = function(offset) {
	this.messageLabel.setX(offset);
}

Message.prototype.setMessageLabelYOffset = function(offset) {
	this.messageLabel.setY(offset);
}

Message.prototype.setMessageText = function(text) {
	this.message.setText(text);
}

Message.prototype.setMessageXOffset = function(offset) {
	this.message.setX(offset);
}

Message.prototype.setMessageYOffset = function(offset) {
	this.message.setY(offset);
}




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// PRIVATE METHODS //
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
///////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// ADD METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// CREATE METHODS
//-----------------------------------------------------------------------------

Message.prototype._createDefaultAttributes = function() {
	this._createDefaultMessage();
	this._createDefaultMessageLabel();
}

Message.prototype._createDefaultMessage = function() {
	var defaultFontSize = this.messagesContainer.getMessageDefaultFontSize();
	
	this.message = new Kinetic.Text({
		x: this.messagesContainer.getMessageDefaultMarginTop(),
		y: this.messagesContainer.getMessageDefaultMarginLeft()+defaultFontSize,
		text: this.messagesContainer.getMessageDefaultText(),
		fontSize: defaultFontSize,
		fontFamily: this.messagesContainer.getMessageDefaultFontFamily(),
		fill: this.messagesContainer.getMessageDefaultFontColor()
	});
	this.messagesContainer.messageGroup.add(this.message);
}

Message.prototype._createDefaultMessageLabel = function() {
	this.messageLabel = new Kinetic.Text({
		x: this.messagesContainer.getMessageDefaultMarginTop(),
		y: this.messagesContainer.getMessageDefaultMarginLeft(),
		text: this.messagesContainer.getMessageDefaultLabelText(),
		fontSize: this.messagesContainer.getMessageDefaultFontSize(),
		fontFamily: this.messagesContainer.getMessageDefaultFontFamily(),
		fill: this.messagesContainer.getMessageDefaultFontColor()
	});

	this.messagesContainer.messageGroup.add(this.messageLabel);
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

Message.prototype._setMessagesContainer = function(messagesContainer) {
	this.messagesContainer = messagesContainer
}

Message.prototype._setUserAttributes = function(messageDetails) {
	if(messageDetails == undefined)
		return
	//Possibly just call the set methods with the var and see if it's undefined in there
	if(messageDetails['fontSize'] !== undefined) {
		this.setMessageFontSize(messageDetails['fontSize']);
		this.setMessageLabelFontSize(messageDetails['fontSize']);
	}
	if(messageDetails['x'] !== undefined) {
		this.setMessageXOffset(messageDetails['x']);
		this.setMessageLabelXOffset(messageDetails['x']);
	}
	if(messageDetails['y'] !== undefined) {
		this.setMessageLabelYOffset(messageDetails['y']+this.yOffset);
		this.setMessageYOffset(messageDetails['y']+this.getMessageLabelFontSize()+ this.yOffset);
	}
	if(messageDetails['initialText'] !== undefined) {
		this.setMessageText(messageDetails['initialText']);
	}
	if(messageDetails['fontFamily'] !== undefined) {
		this.setMessageFontFamily(messageDetails['fontFamily']);
		this.setMessageLabelFontFamily(messageDetails['fontFamily']);
	}
	if(messageDetails['title'] !== undefined) {
		this.setMessageLabelText(messageDetails['title']);
	}
	if(messageDetails['fontColor'] !== undefined) {
		this.setMessageFontColor(messageDetails['fontColor']);
		this.setMessageLabelFontColor(messageDetails['fontColor']);
	}
}

Message.prototype._setYOffset = function(yOffset) {
	this.yOffset = yOffset;
}
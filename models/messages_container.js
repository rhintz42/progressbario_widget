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

function MessagesContainer(progressbar, clientMessages) {
	this._setProgressbar(progressbar);

	this._createDefaultAttributes();

	this._createMapAndMessageGroup();

	this._createInitialClientMessages(clientMessages);
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ACCESSOR METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//-----------------------------------------------------------------------------
// GET METHODS //
//-----------------------------------------------------------------------------

MessagesContainer.prototype.getDefaultFontColor = function() {
	return 'black';
}

MessagesContainer.prototype.getDefaultFontFamily = function() {
	return 'Calibri';
}

MessagesContainer.prototype.getDefaultMarginBottom = function() {
	return 10;
}

MessagesContainer.prototype.getDefaultMarginLeft = function() {
	return 10;
}

MessagesContainer.prototype.getDefaultMarginRight = function() {
	return 10;
}

MessagesContainer.prototype.getDefaultMarginTop = function() {
	return 10;
}

MessagesContainer.prototype.getDefaultRecommendedSizeConverter = function() {
	return 16/500;
}

MessagesContainer.prototype.getMessageDefaultFontColor = function() {
	return this.defaultFontColor;
}

MessagesContainer.prototype.getMessageDefaultFontFamily = function() {
	return this.defaultFontFamily;
}

MessagesContainer.prototype.getMessageDefaultFontSize = function() {
	return this.defaultFontSize;
}

MessagesContainer.prototype.getMessageDefaultLabelText = function() {
	return this.getMessageDefaultTextLabel();
}

MessagesContainer.prototype.getMessageDefaultMarginBottom = function() {
	return this.defaultMarginBottom;
}

MessagesContainer.prototype.getMessageDefaultMarginLeft = function() {
	return this.defaultMarginLeft;
}

MessagesContainer.prototype.getMessageDefaultMarginRight = function() {
	return this.defaultMarginRight;
}

MessagesContainer.prototype.getMessageDefaultMarginTop = function() {
	return this.defaultMarginTop;
}

MessagesContainer.prototype.getMessageDefaultText = function() {
	return 'Default Text';
}

MessagesContainer.prototype.getMessageDefaultTextLabel = function() {
	return 'Default Label';
}

MessagesContainer.prototype.getMessagesMap = function() {
	return this.messagesMap;
}

MessagesContainer.prototype.getMessageText = function(name) {
	return (this.nameToCallback[name])(this);
}

MessagesContainer.prototype.getRecommendedFontSize = function() {
	var size = Math.max(this.progressbar.getStageWidth(), this.progressbar.getStageHeight());
	return size*this.getDefaultRecommendedSizeConverter();
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MODIFIER METHODS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//-----------------------------------------------------------------------------
// ADD METHODS
//-----------------------------------------------------------------------------

MessagesContainer.prototype.addMessage = function(messageDetails, currentYOffset) {
	if(messageDetails && messageDetails['name']) {
		messageDetails['initialText'] = Math.round(this.getMessageText(messageDetails['name']));

		this.messagesMap[messageDetails['name']] = new Message(this, messageDetails, currentYOffset);
	}
}


//-----------------------------------------------------------------------------
// CREATE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS 
//-----------------------------------------------------------------------------


MessagesContainer.prototype.setMessageDefaultFontColor = function(color) {
	this.defaultFontColor = color;
}

MessagesContainer.prototype.setMessageDefaultFontFamily = function(fontFamily) {
	this.defaultFontFamily = fontFamily;
}

MessagesContainer.prototype.setMessageDefaultFontSize = function(size) {
	this.defaultFontSize = size;
}

MessagesContainer.prototype.setMessageDefaultMarginBottom = function(margin) {
	this.defaultMarginBottom = margin;
}

MessagesContainer.prototype.setMessageDefaultMarginLeft = function(margin) {
	this.defaultMarginLeft = margin;
}

MessagesContainer.prototype.setMessageDefaultMarginRight = function(margin) {
	this.defaultMarginRight = margin;
}

MessagesContainer.prototype.setMessageDefaultMarginTop = function(margin) {
	this.defaultMarginTop = margin;
}

MessagesContainer.prototype.setMessageText = function(name, text) {
	if(this.messagesMap[name]) {
		this.messagesMap[name].setMessageText(text);
	}
}

MessagesContainer.prototype.updateMessagesText = function() {
	for(messageName in this.messagesMap) {
		this.messagesMap[messageName].setMessageText(Math.round(this.getMessageText(messageName)));
	}
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

MessagesContainer.prototype._createDefaultAttributes = function() {
	this.setMessageDefaultMarginTop(this.getDefaultMarginTop());
	this.setMessageDefaultMarginBottom(this.getDefaultMarginBottom());
	this.setMessageDefaultMarginLeft(this.getDefaultMarginLeft());
	this.setMessageDefaultMarginRight(this.getDefaultMarginRight());
	this.setMessageDefaultFontSize(this.getRecommendedFontSize());
	this.setMessageDefaultFontFamily(this.getDefaultFontFamily());
	this.setMessageDefaultFontColor(this.getDefaultFontColor());

	this.nameToCallback = {};
	this.nameToCallback['percentComplete'] = function(that) {
		var a = that.progressbar.getPercentComplete();
		return a;
	};
	this.nameToCallback['inversePercentComplete'] = function(that) {
		var a = that.progressbar.getInversePercentComplete();
		return a;
	};
	this.nameToCallback['clientNumMax'] = function(that) {
		var a = that.progressbar.getClientNumMax();
		return a;
	};
	this.nameToCallback['clientNumMin'] = function(that) {
		var a = that.progressbar.getClientNumMin();
		return a;
	};
	this.nameToCallback['clientNumCurrent'] = function(that) {
		var a = that.progressbar.getClientNumCurrent();
		return a;
	}
}

MessagesContainer.prototype._createInitialClientMessages = function(clientMessages) {
	if(clientMessages == undefined)
		return;
	var currentYOffset = 0;
	for(var i = 0; i < clientMessages.length; i++) {
		if(clientMessages[i] != undefined) {
			this.addMessage(clientMessages[i], currentYOffset);
			currentYOffset += clientMessages[i]['fontSize']*2;
		}
	}
}

MessagesContainer.prototype._createMapAndMessageGroup = function() {
	this.messagesMap = {};
	this.messageGroup = new Kinetic.Group({
		x: this.progressbar.getTopMarginPercent,
		y: this.progressbar.getLeftMarginPercent,
		draggable: false
	});

	this.progressbar.shapesLayer.add(this.messageGroup);
}


//-----------------------------------------------------------------------------
// REMOVE METHODS //
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SET METHODS //
//-----------------------------------------------------------------------------

MessagesContainer.prototype._setProgressbar = function(progressbar) {
	this.progressbar = progressbar;
}
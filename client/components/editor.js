Template.editor.rendered = function() {
  this._editor = new Pen('#editor-canvas');
};

Template.editor.destroyed = function() {
  this._editor.destroy();
};

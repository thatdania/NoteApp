(function(exports){
  function SingleNoteView(note){
      this.unonote = note
  }

  SingleNoteView.prototype.htmlize = function(){
    return "<li><div>" + this.unonote + "</div></li>"
  }

exports.SingleNoteView = SingleNoteView
})(this);

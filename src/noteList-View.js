(function(exports){

  function NoteListView(noteList){
    this.viewlist = noteList
  }

  NoteListView.prototype.html = function(){
    var unhashlist = this.viewlist.list
    var html = unhashlist.map(function(noteObject){
      return "<li><div> " + noteObject.note.slice(0,20) + " </div></li>"
    });
    var final = "<ul>" + html.join('') + "</ul>"
    return final
  };



exports.NoteListView = NoteListView
})(this);

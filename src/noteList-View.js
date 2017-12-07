(function(exports){

  function NoteListView(noteList){
    this.viewlist = noteList
  }

  NoteListView.prototype.html = function(){
    var htmlist = [];
    var unhashlist = this.viewlist.list
    for(var i = 0; i < unhashlist.length; i++){
        htmlist.push("<li><div> " + unhashlist[i].note + " </div></li>")
    }
    return htmlist.join(' ');
  };



exports.NoteListView = NoteListView
})(this);

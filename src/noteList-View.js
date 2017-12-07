(function(exports){

  function NoteListView(noteList){
    this.viewlist = noteList
  }

  NoteListView.prototype.html = function(){
    var htmlist = [];
    var unhashlist = this.viewlist.list
    for(var i = 0; i < unhashlist.length; i++){
        htmlist.push("<li><div> " + unhashlist[i].note.substring(0,20) + " </div></li>")
    }
    var x =  htmlist.join(' ');
    console.log(x)
    return x
  };



exports.NoteListView = NoteListView
})(this);

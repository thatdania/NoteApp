(function(exports){
  function NoteController(noteList){
    this.controlist = noteList
  };

  NoteController.prototype.addingNote = function(note){
    var note = new Note(note)
    var unhash = this.controlist.list
    unhash.push(note)
  };

  NoteController.prototype.changeshtml = function(){
  var noteListView = new NoteListView(this.controlist);
  var render = noteListView.html()
  var final = document.getElementById('app');
  final.innerHTML = render;
  console.log(final)
}

exports.NoteController = NoteController
})(this);

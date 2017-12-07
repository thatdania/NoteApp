(function(exports){

  function NoteList(){
    this.list = []
  }

  NoteList.prototype.addnote = function(string){
    var note = new Note(string)
    return this.list.push(note)
  };

  NoteList.prototype.returnallnotes = function(){
    return this.list
  }

exports.NoteList = NoteList
})(this);

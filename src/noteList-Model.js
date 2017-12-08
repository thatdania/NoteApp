(function(exports){

  function NoteList(){
    this.list = []
    this.number = 0
  }

  NoteList.prototype.addnote = function(string){
    this.number += 1
    var note = new Note(string, this.number)
    return this.list.push(note)
  };

  NoteList.prototype.returnallnotes = function(){
    return this.list
  }

exports.NoteList = NoteList
})(this);

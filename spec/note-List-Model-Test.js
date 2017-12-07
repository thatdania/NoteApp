(function(exports){
  var noteList = new NoteList();

  function NoteListisanArray(){
    var describe = "NoteList is an Array"
    assert.isObjectType(describe, noteList.list, []);
  };

  function NoteListStoresNote(){
    var describe = "NoteList stores Notes"
    noteList.addnote('hello')
    assert.isTrue(describe, noteList.list[0], 'hello' )
  };

  function NoteListReturnsAllNote(){
   var describe = "NoteList returns all Notes"
   assert.isTrue(describe, noteList.returnallnotes(), 'hello')
  };

NoteListisanArray();
NoteListStoresNote();
NoteListReturnsAllNote();
})(this);

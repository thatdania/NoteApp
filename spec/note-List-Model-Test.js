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

  function NoteListCanAddAUniqueAnId(){
  var describe = "NoteList can add a unique id"
  noteList.addnote('hello')
  noteList.addnote('bye')
  console.log(noteList.list[1])
  assert.isTrue(describe, noteList.list[1].id, 2)


  };

NoteListisanArray();
NoteListStoresNote();
NoteListReturnsAllNote();
NoteListCanAddAUniqueAnId();
})(this);

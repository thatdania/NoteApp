(function(exports){
  var note = new Note('string', 0)

function NoteModelCanBeInstantiated(){
  var describe = "String is an instant of note"
  assert.isTrue(describe, note.text === 'string')
};

function NoteModelCanStoreNote(){
  var describe = "Note model can store note"
  assert.isTrue(describe, note.store() === 'string');
};

function NoteModelCanHaveAnId(){
  var describe = 'Note can have an id'
  assert.isTrue(describe, note.id === 0)
};


NoteModelCanBeInstantiated();
NoteModelCanStoreNote();
NoteModelCanHaveAnId();
})(this);


// function testNoteTextProperty() {
//   var note = new Note('string');
//   var describe = 'Text is a property!'
//   assert.isTrue(describe, note.text === 'string');
// };

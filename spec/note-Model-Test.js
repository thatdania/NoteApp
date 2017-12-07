(function(exports){
  var note = new Note('string')

function NoteModelCanBeInstantiated(){
  var describe = "String is an instant of note"
  assert.isTrue(describe, note.text === 'string')
};

function NoteModelCanStoreNote(){
  var describe = "Note model can store note"
  assert.isTrue(describe, note.store() === 'string');
};





NoteModelCanBeInstantiated();
NoteModelCanStoreNote()
})(this);


// function testNoteTextProperty() {
//   var note = new Note('string');
//   var describe = 'Text is a property!'
//   assert.isTrue(describe, note.text === 'string');
// };

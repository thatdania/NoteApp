(function(exports){



  function NoteDouble(string, id){
    this.note = string
    this.id = id
  };

  function NoteListDouble(){
    this.list = []
  };

  NoteListDouble.prototype = {
    addnote: function(string){
    var noteDouble= new NoteDouble(string, 1);
    this.list.push(noteDouble)
    },

    returnallnotes: function(){
      return this.list
      }
  };

  function NoteListViewDouble(notelistDouble){
      this.viewlist = notelistDouble
  }

  NoteListViewDouble.prototype = {
    html: function(){
    return "<li><div>hello</div></liv>"
  }};

var noteListViewDouble = new NoteListViewDouble
var notelistDouble = new NoteListDouble();
var noteController = new NoteController(notelistDouble)

  function NoteControllerTakesInNoteList(){
    var describe = "NoteController takes in NoteList"
    notelistDouble.addnote('hello')
    assert.isTrue(describe, noteController.controlist, ['hello'])
  };

  function NoteControllerChangesHTML(){
    var describe = "NoteController can change html"
    notelistDouble.returnallnotes();
    noteController.changeshtml();
    assert.isEqual(describe, document.getElementById('app').innerHTML, '<ul><li><div><a href="#1"> hello </a></div></li></ul>')

  }

NoteControllerTakesInNoteList();
NoteControllerChangesHTML();
})(this);

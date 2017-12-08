(function(exports){



  function NoteDouble(string){
    this.note = string
  };

  function NoteListDouble(){
    this.list = []
  };

  NoteListDouble.prototype = {
    addnote: function(string){
    var noteDouble= new NoteDouble(string);
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
    assert.isEqual(describe, document.getElementById('app').innerHTML, "<ul><li><div> hello </div></li></ul>")

  }

NoteControllerTakesInNoteList();
NoteControllerChangesHTML();
})(this);

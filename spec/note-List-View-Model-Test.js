(function(exports){

  function NoteListDouble(){
    this.list = []
  };

  function NoteDouble(string){
    this.note = string
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

  var notelistDouble = new NoteListDouble
  var notelistView = new NoteListView(notelistDouble)

  function noteListViewtakesnoteListArray(){
    var describe = "NoteListView takes in NoteList"
    notelistDouble.addnote('hello')
    notelistDouble.returnallnotes();
    assert.isTrue(describe, notelistView.viewlist, ['hello'])
  };

  function noteListViewreturnsStringasHTML(){
    var describe = "NoteListView reutns string as HTML"
    notelistDouble.addnote('hello')
    notelistDouble.returnallnotes();
    assert.isTrue(describe, notelistView.html(),"<li><div>hello</div></li>")
  };

noteListViewtakesnoteListArray();
noteListViewreturnsStringasHTML();
})(this);

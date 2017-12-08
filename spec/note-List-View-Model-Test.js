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


  function noteListViewtakesnoteListArray(){
    var notelistDouble = new NoteListDouble
    var notelistView = new NoteListView(notelistDouble)
    var describe = "NoteListView takes in NoteList"
    notelistDouble.addnote('sillybutbillykadoodles')
    notelistDouble.returnallnotes();
    assert.isTrue(describe, notelistView.viewlist, ['sillybutbillykadoodles'])
  };

  function noteListViewreturnsStringasHTML(){
    var notelistDouble = new NoteListDouble
    var notelistView = new NoteListView(notelistDouble)
    notelistDouble.addnote("sillybutbillykadoodles")
    var describe = "NoteListView returns string as HTML"
    assert.isEqual(describe, notelistView.html(),"<ul><li><div> sillybutbillykadoodl </div></li></ul>")
  };

  function noteListViewreturnsnonote(){
    var describe = "NoteListView returns string as HTML"
    var notelistDouble = new NoteListDouble
    var notelistView = new NoteListView(notelistDouble)
    console.log(notelistView.html())
    assert.isEqual(describe, notelistView.html(),"<ul></ul>")
  };

noteListViewtakesnoteListArray();
noteListViewreturnsStringasHTML();
noteListViewreturnsnonote();
})(this);

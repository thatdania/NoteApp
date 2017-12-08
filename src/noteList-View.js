(function(exports){

  function NoteListView(noteList){
    this.viewlist = noteList
  }

  NoteListView.prototype.html = function(){
    var unhashlist = this.viewlist.list
    console.log(unhashlist)
    var html = unhashlist.map(function(noteObject){
      return "<li><div><a href=" + "'#" + noteObject.id + "'" + "> " + noteObject.note.slice(0,20) + " </a></div></li>"
    });
    var final = "<ul>" + html.join('') + "</ul>"
    return final
  };



exports.NoteListView = NoteListView
})(this);


// <ul><li><div><a href="#1"> hello </a></div></li></ul>
// <ul><li><div><a href= '#1'> hello </a></div></li></ul>


// <ul><li><div><a href="#1"> hello </a></div></li></ul>
// <ul><li><div><a href= '#1'> hello </a></div></li></ul>

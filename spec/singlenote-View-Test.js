(function(exports){

   function NoteDouble(string){
     this.note = string
   };
   //
   var noteDouble = new NoteDouble('hello')
   var singlenote = new SingleNoteView(noteDouble)

   function singleNoteTakesnote(){
     describe = "SingleNote takes from Note"
     assert.isTrue(describe, singlenote.unonote, 'hello')
   }

   function singleNotereturnshmtl(){
     describe = "SingleNote takes note and gives html version"
     assert.isTrue(describe, singlenote.htmlize(), "<li><div> hello </div></li>")
   }






singleNoteTakesnote();
singleNotereturnshmtl();
})(this);

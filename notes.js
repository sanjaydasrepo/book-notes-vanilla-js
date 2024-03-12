function saveNote() {
  let bookName = document.getElementById('bookName').value;
  let noteText = document.getElementById('noteText').value;

  if (bookName && noteText) {
    alert(`Note saved for book "${bookName}".`);
    // Code to save note to MongoDB (not implemented in this example)
  }
}
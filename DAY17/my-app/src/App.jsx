import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);

  // Add Note
  function addNote() {
    

    setLoadingAdd(true);

    setTimeout(() => {
      setNotes([...notes, inputNote]);
      setInputNote("");
      setLoadingAdd(false);
    }, 800);
  }

  // Delete Note
  function deleteNote(noteToDelete) {
    const updatedNotes = notes.filter((note) => note !== noteToDelete);
    setNotes(updatedNotes);
  }

  // Start Editing
  function startEdit(index) {
    setEditIndex(index);
    setEditText(notes[index]);
  }

  // Save Edited Note
  function saveEdit(index) {
    

    setLoadingSave(true);

    setTimeout(() => {
      const updatedNotes = [...notes];
      updatedNotes[index] = editText;

      setNotes(updatedNotes);
      setEditIndex(null);
      setEditText("");
      setLoadingSave(false);
    }, 800);
  }

  // Filter Notes for Search
  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div
      className={
        darkMode
          ? "min-h-screen w-full bg-black text-white transition-all duration-500"
          : "min-h-screen w-full bg-white text-black transition-all duration-500"
      }
    >
      {/* Top Bar */}
      <header
        className={
          darkMode
            ? "h-16 flex items-center justify-between px-6 gap-6 bg-gray-900 transition-all duration-500"
            : "h-16 flex items-center justify-between px-6 gap-6 bg-gray-100 transition-all duration-500"
        }
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl cursor-pointer hover:scale-110 transition duration-300">
            ☰
          </span>
          <span className="text-xl font-semibold">🟨 Keep</span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
        />

        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:scale-110 transition duration-300">
            ⟳
          </span>
          <span className="cursor-pointer hover:scale-110 transition duration-300">
            ⚙️
          </span>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-500 hover:scale-105 transition duration-300"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300">
            P
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={
            darkMode
              ? "w-60 pt-4 bg-gray-900 min-h-screen transition-all duration-500"
              : "w-60 pt-4 bg-gray-50 min-h-screen transition-all duration-500"
          }
        >
          <div className="px-6 py-3 hover:bg-yellow-200 hover:text-black cursor-pointer transition duration-300 rounded-lg">
            💡 Notes
          </div>
          <div className="px-6 py-3 hover:bg-yellow-200 hover:text-black cursor-pointer transition duration-300 rounded-lg">
            ⏰ Reminders
          </div>
          <div className="px-6 py-3 hover:bg-yellow-200 hover:text-black cursor-pointer transition duration-300 rounded-lg">
            ✏️ Edit labels
          </div>
          <div className="px-6 py-3 hover:bg-yellow-200 hover:text-black cursor-pointer transition duration-300 rounded-lg">
            📦 Archive
          </div>
          <div className="px-6 py-3 hover:bg-yellow-200 hover:text-black cursor-pointer transition duration-300 rounded-lg">
            🗑 Bin
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 flex flex-col items-center p-6">
          {/* Input box */}
          <div
            className={
              darkMode
                ? "w-[600px] rounded-lg px-4 py-3 flex items-center gap-4 bg-gray-800 shadow transition duration-300 hover:shadow-xl"
                : "w-[600px] rounded-lg px-4 py-3 flex items-center gap-4 bg-gray-200 shadow transition duration-300 hover:shadow-xl"
            }
          >
            <input
              type="text"
              placeholder="Take a note..."
              value={inputNote}
              onChange={(e) => setInputNote(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            />

            <button
              onClick={addNote}
              disabled={loadingAdd}
              className="text-black font-semibold bg-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:scale-105 transition duration-300"
            >
              {loadingAdd ? "Adding..." : "Add note"}
            </button>
          </div>

          {/* Notes list */}
          <div className="w-[600px] mt-6 grid gap-4">
            {filteredNotes.map((note, index) => (
              <div
                key={index}
                className={
                  darkMode
                    ? "flex justify-between items-center p-4 rounded-lg shadow bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    : "flex justify-between items-center p-4 rounded-lg shadow bg-blue-100 hover:shadow-xl hover:scale-[1.02] transition duration-300"
                }
              >
                {editIndex === index ? (
                  <>
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    />

                    <button
                      onClick={() => saveEdit(index)}
                      disabled={loadingSave}
                      className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-300"
                    >
                      {loadingSave ? "Saving..." : "Save"}
                    </button>
                  </>
                ) : (
                  <>
                    <span className="font-medium">{note}</span>

                    <div className="flex gap-3">
                      <button
                        onClick={() => deleteNote(note)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition duration-300"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => startEdit(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300"
                      >
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {filteredNotes.length === 0 && (
              <p className="text-gray-500 text-center mt-6">
                No notes found
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

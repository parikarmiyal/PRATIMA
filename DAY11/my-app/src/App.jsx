import React, { useState } from "react";
function App() {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState("");
  const handlechange = (event) => {
    setnewtask(event.target.value);
  }
  const addtask = () => {
    settodolist([...todolist, newtask]);
  }
  return (
    <div className="h-screen w-screen bg-white text-black">

      {/* Top Bar */}
      <header className="h-16 flex items-center justify-between px-6 gap-18">
        <div className="flex items-center gap-4">
          <span className="text-2xl">☰</span>
          <span className="text-xl font-semibold">🟨 Keep</span>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="flex-1  px-4 py-2 rounded-lg bg-blue-200 text-black"

        />

        <div className="flex items-center gap-4">
          <span>⟳</span>
          <span>⚙️</span>
          <div className="w-8 h-8 rounded-full bg-green-600 text-black flex items-center justify-center">
            P
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex justify-between">

        {/* Sidebar */}
        <aside className="w-60 pt-4">
          <div className="px-6 py-3 ">
            💡 Notes
          </div>
          <div className="px-6 py-3 ">
            ⏰ Reminders
          </div>
          <div className="px-6 py-3 ">
            ✏️ Edit labels
          </div>
          <div className="px-6 py-3 ">
            📦 Archive
          </div>
          <div className="px-8 py-3">
             🗑   Bin
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 flex flex-col items-center mt-10">

          {/* Input box */}
          <div className="w-150  rounded-lg px-4 py-3 flex items-center gap-4">
            <input
              type="text"
              placeholder="Take a note..."
              onChange={handlechange}
              className="flex-1  px-4 py-2 rounded-lg bg-blue-200 text-black"
            />
            <button
              onClick={addtask}
              className="text-blue-200 font-semibold"
            >
              Add note
            </button>
          </div>

          {/* Notes list (BELOW input) */}
          <div className="w-1/2 mt-10 px-10 grid grid-rows gap-4  text-black">
            {todolist.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow bg-white"
              >
                {item}
              </div>

            ))}
          </div>

        </main>


      </div>
    </div>
  );
}

export default App;

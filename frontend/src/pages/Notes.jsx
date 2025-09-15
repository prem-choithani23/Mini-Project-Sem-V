const Notes = () => {
  const notes = [
    { title: "Math Note", subject: "Mathematics", content: "Learn algebra basics." },
    { title: "Science Note", subject: "Science", content: "Study chemical reactions." },
  ];

  return (
      <div className="p-8 bg-gray-100 min-h-screen">
        {notes.map((note, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h2 className="text-xl font-bold mb-2">{note.title}</h2>
              <p className="text-gray-600 mb-1">{note.subject}</p>
              <p className="text-gray-800">{note.content}</p>
            </div>
        ))}
      </div>
  );
};

export default Notes;

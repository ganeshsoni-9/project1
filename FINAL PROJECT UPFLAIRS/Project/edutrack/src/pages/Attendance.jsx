// src/pages/Attendance.jsx
import { useEffect, useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    // Create 120 students
    const initial = [
      "Hemesh Mishra",
      "Ganesh Soni",
      "Chandraprakash",
      "Kuldeep Sunda",
      "Mohit Saini",
      ...Array.from({ length: 115 }, (_, i) => `Student ${i + 6}`),
    ];
    setStudents(initial);

    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    if (stored[date]) {
      setAttendance(stored[date]);
    } else {
      const defaultAttendance = {};
      initial.forEach((name) => {
        defaultAttendance[name] = false;
      });
      setAttendance(defaultAttendance);
    }
  }, [date]);

  const handleCheckboxChange = (studentName) => {
    const updated = {
      ...attendance,
      [studentName]: !attendance[studentName],
    };
    setAttendance(updated);

    const allData = JSON.parse(localStorage.getItem("attendance")) || {};
    allData[date] = updated;
    localStorage.setItem("attendance", JSON.stringify(allData));
  };

  return (
    <div style={{ padding: "30px", color: "#fff" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Attendance</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "6px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        {students.map((student, idx) => (
          <label
            key={idx}
            style={{
              backgroundColor: attendance[student] ? "#18df46ff" : "#9e1722ff",
              padding: "10px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={attendance[student] || false}
              onChange={() => handleCheckboxChange(student)}
            />
            {student}
          </label>
        ))}
      </div>
    </div>
  );
}


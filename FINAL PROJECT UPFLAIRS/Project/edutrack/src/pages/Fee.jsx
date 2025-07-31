import React, { useEffect, useState } from "react";

export default function Fee() {
  const [students, setStudents] = useState([]);
  const [feePaid, setFeePaid] = useState([]);
  const feePerStudent = 85000; // You can change this

  useEffect(() => {
    const allStudents = [
      "Hemesh Mishra",
      "Ganesh Soni",
      "Chandraprakash",
      "Kuldeep Sunda",
      "Mohit Saini",
      ...Array.from({ length: 115 }, (_, i) => `Student ${i + 6}`),
    ];
    setStudents(allStudents);

    const feeData = JSON.parse(localStorage.getItem("feeData")) || [];
    setFeePaid(feeData.map((s) => s.name));
  }, []);

  const toggleFeeStatus = (name) => {
    let updatedFee;
    if (feePaid.includes(name)) {
      updatedFee = feePaid.filter((n) => n !== name);
    } else {
      updatedFee = [...feePaid, name];
    }

    setFeePaid(updatedFee);
    const feeDataToStore = updatedFee.map((name) => ({ name }));
    localStorage.setItem("feeData", JSON.stringify(feeDataToStore));
  };

  const totalPaid = feePaid.length * feePerStudent;
  const pendingAmount = (students.length - feePaid.length) * feePerStudent;

  return (
    <div style={{ padding: "30px", color: "#fff" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Fee Management</h2>

      {/* Top Summary Boxes */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
        <div style={summaryBox("#28a745")}>
          <p style={labelStyle}>Total Students</p>
          <h3 style={valueStyle}>{students.length}</h3>
        </div>
        <div style={summaryBox("#17a2b8")}>
          <p style={labelStyle}>Fee Paid</p>
          <h3 style={valueStyle}>{feePaid.length}</h3>
        </div>
        <div style={summaryBox("#ffc107")}>
          <p style={labelStyle}>Total Fee Collected</p>
          <h3 style={valueStyle}>₹ {totalPaid}</h3>
        </div>
        <div style={summaryBox("#dc3545")}>
          <p style={labelStyle}>Pending Amount</p>
          <h3 style={valueStyle}>₹ {pendingAmount}</h3>
        </div>
      </div>

      {/* List of Students */}
      <div>
        {students.map((name) => {
          const isPaid = feePaid.includes(name);
          const pending = isPaid ? 0 : feePerStudent;

          return (
            <div
              key={name}
              style={{
                backgroundColor: "#1e1e1e",
                color: "#fff",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{name}</strong>
                <p style={{ margin: 0, fontSize: "14px", color: "#bbb" }}>
                  Pending: ₹ {pending}
                </p>
              </div>

              <button
                onClick={() => toggleFeeStatus(name)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: isPaid ? "#28a745" : "#dc3545",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {isPaid ? "Paid" : "Unpaid"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div style={{
        marginTop: "40px",
        padding: "15px",
        borderTop: "1px solid #444",
        fontSize: "14px",
        color: "#ccc",
        textAlign: "center"
      }}>
        <em>Note: At our institution, only full advance fee payment is accepted for educational services.</em>
      </div>
    </div>
  );
}

// 🔧 Styles
const summaryBox = (bg) => ({
  backgroundColor: bg,
  padding: "20px",
  borderRadius: "10px",
  flex: "1 1 200px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
});

const labelStyle = {
  margin: 0,
  fontSize: "16px",
};

const valueStyle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "bold",
};

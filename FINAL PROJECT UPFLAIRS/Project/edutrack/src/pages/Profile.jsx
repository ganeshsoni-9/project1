export default function Profile() {
  const users = [
    {
      name: "HEMESH MISHRA",
      email: "mishrahemesh87@gmail.com",
      mobile: "9784222501",
      role: "Admin",
    },
    {
      name: "GANESH SONI",
      email: "ganeshsonirmg18@gmail.com",
      mobile: "8078623915",
      role: "Co-Admin",
    },
    {
      name: "KULDEEP SUNDA",
      email: "kuldeepsunda787@gmail.com",
      mobile: "7627030694",
      role: "Co-Admin",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>
        Profile
      </h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2a2a2a",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #4caf50",
            }}
          >
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user:", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>ثبت‌نام</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
};

export default Register;

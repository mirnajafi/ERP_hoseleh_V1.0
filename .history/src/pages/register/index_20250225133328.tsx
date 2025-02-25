import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user:", formData);
    // اینجا می‌تونی درخواست API برای ثبت‌نام رو ارسال کنی
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>ثبت‌نام</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="username" placeholder="نام کاربری" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="ایمیل" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="رمز عبور" value={formData.password} onChange={handleChange} required />
        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
};

export default Register;

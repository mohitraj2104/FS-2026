import { useRef } from 'react'

export default function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // console.log('Username:', username);
    // console.log('Password:', password);
    //local Storage
    localStorage.setItem('username',username);
    localStorage.setItem('password',password);
    //Session Storage
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('password',password);
    alert('Login successful!');
  };
  //delete account
  const handleDelete = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    alert('Account deleted successfully!');
  }
  return (
    <div>
        <section id="login">
        <h1>This is Login Section</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" ref={usernameRef} /><br />
          <br />
          <br />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <button onClick={handleDelete}>delete account</button>
      </section>
    </div>
  )
}

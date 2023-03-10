export default function LoginPage() {
    return (
        <form className="login">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button >Login</button>
        </form>
    );
}
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo Chef claude" />
      <h1>Chef Claude</h1>
    </header>
  );
}

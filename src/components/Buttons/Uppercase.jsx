export default function Uppercase() {
  function isUppercase() {
    document.body.classList == ""
      ? document.body.classList.toggle("uppercase")
      : document.body.classList.remove("uppercase");
  }

  return <button onClick={isUppercase}>Aa</button>;
}

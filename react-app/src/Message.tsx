function Message() {
  //JSX - JavaScript XML
  //dynamically change
  const name = "World";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hellooooooooo;</h1>;
}

export default Message;

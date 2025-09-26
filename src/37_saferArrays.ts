// Make a log message function which accepts message array and prevents this parameter from mutating inside the function

const messagesReq = ["devrat"];
function logMessagesFun(messages: readonly string[]) {
  console.log(messages);
  messages.push("dev");//makes our array safer by preventing such mutating codes
  messages[0] = "eee";
}

// Use generic way of achieving the above behavior and make your array safer
function logMessagesFunTwo(messages: ReadonlyArray<string>) {
  console.log(messages);
  messages.push("dev");
  messages[0] = "eee";
}

logMessagesFun(messagesReq);
logMessagesFunTwo(messagesReq);

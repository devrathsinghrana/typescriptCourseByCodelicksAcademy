function scheduleWork() {
  Promise.resolve().then(() => console.log("#1 - m1"));
  Promise.resolve().then(() => console.log("#1 - m2"));
  setTimeout(() => console.log("#1 - t1"), 0);
  setTimeout(() => {
    Promise.resolve().then(() => console.log("#1 - m3"));
    Promise.resolve().then(() => console.log("#1 - m4"));
    Promise.resolve().then(() => console.log("#1 - m5"));
    setTimeout(() => console.log("#1 - t2"), 0);
    Promise.resolve().then(() =>
      Promise.resolve().then(() => console.log("#1 - m6"))
    );
  }, 0);
  setTimeout(() => console.log("#1 - t3"), 0);
  setTimeout(() => console.log("#1 - t4"), 0);
  Promise.resolve().then(() => console.log("#1 - m7"));
  console.log("Main thread #1 ended");
}

function scheduleWorkAgain() {
  Promise.resolve().then(() => console.log("#2 - m1"));
  Promise.resolve().then(() => console.log("#2 - m2"));
  setTimeout(() => console.log("#2 - t1"), 0);
  setTimeout(() => {
    Promise.resolve().then(() => console.log("#2 - m3"));
    Promise.resolve().then(() => console.log("#2 - m4"));
    Promise.resolve().then(() => console.log("#2 - m5"));
    setTimeout(() => console.log("#2 - t2"), 0);
    Promise.resolve().then(() =>
      Promise.resolve().then(() => console.log("#2 - m6"))
    );
  }, 0);
  setTimeout(() => console.log("#2 - t3"), 0);
  setTimeout(() => console.log("#2 - t4"), 0);
  Promise.resolve().then(() => console.log("#2 - m7"));
  console.log("Main thread #2 ended");
}

const btn = document.querySelector("#btn");
btn?.addEventListener("click", scheduleWork);
btn?.addEventListener("click", scheduleWorkAgain);
document.querySelector("#btn-programmatic")?.addEventListener("click", () => {
  (btn as HTMLButtonElement)?.click();
});

// Explain how output differs when #btn is clicked and when #btn-programmatic is clicked

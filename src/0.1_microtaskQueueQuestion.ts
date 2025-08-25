function scheduledWork() {
  Promise.resolve().then(() => console.log("m1"));
  Promise.resolve().then(() => console.log("m2"));
  setTimeout(() => console.log("t1"), 0);
  setTimeout(() => {
    Promise.resolve().then(() => console.log("m3"));
    Promise.resolve().then(() => console.log("m4"));
    Promise.resolve().then(() => console.log("m5"));
    setTimeout(() => console.log("t2"), 0);
    Promise.resolve().then(() => console.log("m6"));
  }, 0);
  setTimeout(() => console.log("t3"), 0);
  setTimeout(() => console.log("t4"), 0);
  Promise.resolve().then(() => console.log("m7"));
}

scheduledWork();
// What is the order of the console logs?
/*
O/P
m1
m2
m7
t1
m3
m4
m5
m6
t3
t4
t2 - this is at last because it is pushed in task queue after this callback is invoked but before invoking this callback t3 and t4 are already in task queue so they will be executed first after this callback is invoked then t2 will be executed

*/

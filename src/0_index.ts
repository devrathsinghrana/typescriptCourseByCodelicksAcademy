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

/*
=== DETAILED BREAKDOWN: How queues and stack are populated when #btn is clicked ===

INITIAL STATE:
Call Stack: []
Microtask Queue: []
Task Queue: [scheduleWork(), scheduleWorkAgain()] - both the event listeners for #btn are waiting in the task queue

When #btn is clicked:
Call Stack: [scheduleWork()]
Microtask Queue: []
Task Queue: [scheduleWorkAgain()] - second listener is still waiting

When scheduleWork() runs:
Main thread #1 ended is printed immediately as it's synchronous

Call Stack: [scheduleWork()]
Microtask Queue: [#1-m1, #1-m2, #1-m7] - three microtasks queued
Task Queue: [scheduleWorkAgain(), #1-t1,   
setTimeout(() => {
    Promise.resolve().then(() => console.log("#1 - m3"));
    Promise.resolve().then(() => console.log("#1 - m4"));
    Promise.resolve().then(() => console.log("#1 - m5"));
    setTimeout(() => console.log("#1 - t2"), 0);
    Promise.resolve().then(() =>
      Promise.resolve().then(() => console.log("#1 - m6"))
    );
  }, 0),
  #1-t3, 
  #1-t4
  ] - 4 macro tasks queued in which one is nested

Now call stack is empty after scheduleWork() completes:
Call Stack: []
Microtask Queue: [#1-m1, #1-m2, #1-m7]
Task Queue: [scheduleWorkAgain(), #1-t1, nested-#1-timeout, #1-t3, #1-t4]

Since call stack is empty, microtasks are processed next till it is exhausted before moving to task queue:
#1-m1 is printed
Call Stack: [#1-m1]
Microtask Queue: [#1-m2, #1-m7]
Task Queue: [scheduleWorkAgain(), #1-t1, nested-#1-timeout, #1-t3, #1-t4]
Call Stack: []
#1-m2 is printed
Call Stack: [#1-m2]
Microtask Queue: [#1-m7]
Task Queue: [scheduleWorkAgain(), #1-t1, nested-#1-timeout, #1-t3, #1-t4]
Call Stack: []
#1-m7 is printed
Call Stack: [#1-m7]
Microtask Queue: []
Task Queue: [scheduleWorkAgain(), #1-t1, nested-#1-timeout, #1-t3, #1-t4]
Call Stack: []
Microtask Queue: []
Task Queue: [scheduleWorkAgain(), #1-t1, nested-#1-timeout, #1-t3, #1-t4]

Now task queue is processed next:
Call Stack: [scheduleWorkAgain()]
Microtask Queue: []
Task Queue: [#1-t1, nested-#1-timeout, #1-t3, #1-t4]

When scheduleWorkAgain() runs:
Main thread #2 ended is printed immediately as it's synchronous

And rest of the code populates the queues in similar manner as explained above for scheduleWork()

Then again after scheduleWorkAgain() completes:
Call stack is empty then  microtasks are processed completely followed by tasks

So, we get the following final output in order:

Main thread #1 ended
#1 - m1
#1 - m2
#1 - m7
Main thread #2 ended
#2 - m1
#2 - m2
#2 - m7
#1 - t1
#1 - m3
#1 - m4
#1 - m5
#1 - m6
#1 - t3
#1 - t4
#2 - t1
#2 - m3
#2 - m4
#2 - m5
#2 - m6
#2 - t3
#2 - t4
#1 - t2
#2 - t2
*/

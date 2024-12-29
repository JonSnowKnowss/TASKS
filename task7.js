// Q: Create a promise that resolves after 2 seconds with the message "Promise resolved!". Log the message to the console when it resolves.

/* A Promise in JavaScript is like a promise made by a function to do something in the future.It can either:
Resolve: This means the task completed successfully.
Reject: This means the task failed. 

Promise States:
Pending: The promise is still in progress.
Fulfilled: The promise has successfully completed.
Rejected: The promise has failed.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

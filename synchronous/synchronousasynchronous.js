
// Synchronous
// ----------------
        // * in operation time keep the order step by step
        // * single thread,first execution has any time delay.it it effect entire execution
        // * Synchronous is a blocking architecture,
        //  so the execution of each operation depends on completing the one before it
        //  Each task requires an answer before moving on to the next iteration.


// Asynchronous
// -----------------
        // * in operation time not keep the order
        // * Asynchronous is a non-blocking architecture,
        //  so the execution of one task isn't dependent on another.
        //  Tasks can run simultaneously
        // * multithread-if first operation has any time delay,it not effect others
        // // *eg--
// setTimeOut()
// setTimeInterval()
// DOM Events(document object model)
// fetch()
// xmlHttp


// javascript processed by javascript engine
// javascript is a synchronous
// some times js behaveir like asynchronous with the help of webApi,call back queue, call stack
// javascript can be used both sides(frontend and backend)
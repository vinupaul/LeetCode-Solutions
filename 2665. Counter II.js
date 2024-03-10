var createCounter = function(init) {
    let object = {
    increment: function() {
            return init++;
    },
    reset: function() {
        return init;
    },
    decrement: function() {
        return init--;
    },
 
};
return object
};



 const counter = createCounter(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4
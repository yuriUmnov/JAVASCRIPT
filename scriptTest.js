const user = {
    firstName: 'Bob'
};

const fetchUrl = function(url) {
    console.log(`fetching ${url}... by ${this.firstName}`);
}

function debounce(callback, delay) {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const fetching = debounce(fetchUrl.bind(user), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
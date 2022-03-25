define([], function () {
    return {
        getData: function (key) {
            return JSON.parse(localStorage.getItem(key));
        },
        setData: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
});

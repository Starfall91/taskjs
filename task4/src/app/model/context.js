define([
    'storage/localStorage'
], function (storage) {
    const key = 'current_item';

    return {
        setContext: function (id) {
            storage.setData(key, id);
        },
        getContext: function () {
            return storage.getData(key);
        }
    }
});

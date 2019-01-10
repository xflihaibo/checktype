(function() {
    var root = (typeof self == 'object' && self.self === self && self) || (typeof global == 'object' && global.global === global && global) || this || {};

    var typeCheck = function(obj) {
        if (obj instanceof typeCheck) return obj;
        if (!(this instanceof typeCheck)) return new typeCheck(obj);
        this.typeCheckwrapped = obj;
    };
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = typeCheck;
        }
        exports.typeCheck = typeCheck;
    } else {
        root.typeCheck = typeCheck;
    }

    const typeOfFun = function(value) {
        return Object.prototype.toString
            .call(value)
            .slice(8, -1)
            .toLowerCase();
    };

    const requiredFun = function(value, type) {
        let objType = {
            object: function(value) {
                return JSON.stringify(value) !== '{}';
            },
            array: function(value) {
                return value.length > 0;
            }
        };

        return objType[type](value);
    };

    // typeCheck version.
    typeCheck.VERSION = '1.0.0';

    typeCheck.init = function() {
        let type = typeOfFun(arguments[0]);
        switch (arguments.length) {
            case 1:
                return type;
            case 2:
                return type === arguments[1];
            case 3:
                return type === arguments[1] && requiredFun(arguments[0], type);
            default:
                break;
        }
    };
})();

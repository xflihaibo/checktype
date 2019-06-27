/**
 *  @file 类型检测主要文件
 * @Author  SilenceLi
 * @version                          1.0
 * @since   2019-06-27T15:26:02+0800
 */
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

    // typeCheck version.
    typeCheck.VERSION = '1.0.0';

    /**
     * [typeOfFun 返回数据类型全小写]
     * @Author   Slience
     * @version                           1.0
     * @param    {string}                 value  [ 判断数据类型的传入参数]
     * @return   {string}                       [返回数据类型值]
     */
    const typeOfFun = function(value) {
        return Object.prototype.toString
            .call(value)
            .slice(8, -1)
            .toLowerCase();
    };

    /**
     * [requiredFun 返回数据类型]
     * @Author   Slience
     * @version                           1.0
     * @param    {object}                 value  [ 判断数据类型的传入参数]
     * @param    {string}                 type  [ 数据类型名称]
     * @param    {boolean}                 bool  [ 判断传入的数据类型 是否是 true 或者 false
     * ]
     * @return   {string}                       [返回数据类型值]
     */
    const requiredFun = function(value, type, bool) {
        if (type == 'array' || type == 'object') {
            let objType = {
                object: function(value) {
                    return Object.keys(value).length > 0;
                },
                array: function(value) {
                    return value.length > 0;
                }
            };
            return objType[type](value);
        } else {
            //严格模式 string ‘ ’和 number为0是 都为false
            if ((!bool && type == 'string') || (!bool && type == 'number')) {
                return value != '';
            }
            return Boolean(value);
        }
    };

    /**
     * [typeCheck 返回数据类型]
     * @Author   Slience
     * @version                           1.0
     * @param    {number}                 value  [ 判断数据类型的传入参数]
     * @return   {string|boolean}                       [返回数据类型值]
     */
    typeCheck.init = function() {
        let type = typeOfFun(arguments[0]);
        let oldType = arguments[1] ? arguments[1].replace(/\s+/g, '').toLowerCase() : '';
        switch (arguments.length) {
            case 1:
                return type;
            case 2:
                return type === oldType;
            case 3:
                return type === oldType && requiredFun(arguments[0], type, arguments[2]);
            default:
                break;
        }
    };
})();

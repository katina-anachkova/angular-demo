var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = '';
    }
    Melon.prototype.getElementIndex = function () {
        return this.elementIndex;
    };
    Melon.prototype.toString = function () {
        var result = "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index:").concat(this.elementIndex, "\n");
        return result;
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        _this.element = 'Fire';
        return _this;
    }
    return Firemelon;
}(Melon));
var MelolemonMelon = /** @class */ (function (_super) {
    __extends(MelolemonMelon, _super);
    function MelolemonMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        _this.element = 'Water';
        _this.elementCount = 0;
        return _this;
    }
    MelolemonMelon.prototype.morph = function () {
        this.element = this.elements[this.elementCount];
        this.elementCount++;
        if (this.elementCount >= this.elements.length) {
            this.elementCount = 0;
        }
    };
    return MelolemonMelon;
}(Watermelon));
var watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());

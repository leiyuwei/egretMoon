var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
;
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sprite;
}(egret.Sprite));
__reflect(Sprite.prototype, "Sprite");
;
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shape;
}(egret.Shape));
__reflect(Shape.prototype, "Shape");
;
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObject;
}(egret.DisplayObject));
__reflect(DisplayObject.prototype, "DisplayObject");
;
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObjectContainer;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjectContainer.prototype, "DisplayObjectContainer");
;
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Point;
}(egret.Point));
__reflect(Point.prototype, "Point");
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(egret.Rectangle));
__reflect(Rectangle.prototype, "Rectangle");
;
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bitmap;
}(egret.Bitmap));
__reflect(Bitmap.prototype, "Bitmap");
;
var BitmapData = (function (_super) {
    __extends(BitmapData, _super);
    function BitmapData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BitmapData;
}(egret.BitmapData));
__reflect(BitmapData.prototype, "BitmapData");
;
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stage;
}(egret.Stage));
__reflect(Stage.prototype, "Stage");
;
var Tween = (function (_super) {
    __extends(Tween, _super);
    function Tween() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tween;
}(egret.Tween));
__reflect(Tween.prototype, "Tween");
;
//----------------------------------------------
var trace = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    moon.showLog.getIns().logMessage(str);
};
var traceSimple = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    moon.showLog.getIns().log(str);
};
//----------------------------------------------
var moon;
(function (moon) {
    var FONT = (function () {
        function FONT() {
        }
        FONT.fontName = "黑体";
        return FONT;
    }());
    moon.FONT = FONT;
    __reflect(FONT.prototype, "moon.FONT");
    var Const = (function () {
        function Const() {
        }
        /**布局 横版*/
        Const.HORIZONTAL = "horizontal";
        /**布局 竖版*/
        Const.VERTICAL = "vertical";
        /**形状 方块*/
        Const.SHAPE_RECT = "shape rect";
        /**形状 圆角方块*/
        Const.SHAPE_RECT_ROUND = "shape rect round";
        /**形状 圆块*/
        Const.SHAPE_CIRCLE = "shape circle";
        return Const;
    }());
    moon.Const = Const;
    __reflect(Const.prototype, "moon.Const");
    /**颜色 */
    var Color = (function () {
        function Color() {
        }
        Object.defineProperty(Color, "random", {
            get: function () { return Math.random() * 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "white", {
            get: function () { return 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "black", {
            get: function () { return 0X000000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "gray", {
            get: function () { return 0X666666; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "red", {
            get: function () { return 0XFF0000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "green", {
            get: function () { return 0X00FF00; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "bule", {
            get: function () { return 0X0000FF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinNormal", {
            get: function () { return 0X15191C; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinDown", {
            get: function () { return 0X999999; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "titleBackground", {
            get: function () { return 0X20262B; },
            enumerable: true,
            configurable: true
        });
        ;
        return Color;
    }());
    moon.Color = Color;
    __reflect(Color.prototype, "moon.Color");
    /**皮肤 */
    var Skin = (function () {
        function Skin() {
        }
        Object.defineProperty(Skin, "randomRect", {
            get: function () { return moon.MoonUI.getRect(60, 60, moon.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "randomCircle", {
            get: function () { return moon.MoonUI.getCircle(50, moon.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointNormal", {
            /**默认点 */
            get: function () { return moon.MoonUI.getCircle(6, moon.Color.black); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointDown", {
            get: function () { return moon.MoonUI.getCircle(6, moon.Color.gray); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonNormal", {
            /**默认按钮 */
            get: function () { return moon.MoonUI.getRect(60, 60, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonDown", {
            get: function () { return moon.MoonUI.getRect(60, 60, moon.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOff", {
            /**默认单选框 */
            get: function () { return moon.MoonUI.getRadioCircle(moon.Color.white, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOn", {
            get: function () { return moon.MoonUI.getRadioCircle(moon.Color.white, moon.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOff", {
            /**默认复选框 */
            get: function () { return moon.MoonUI.getCheckBoxRect(moon.Color.white, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOn", {
            get: function () { return moon.MoonUI.getCheckBoxRect(moon.Color.white, moon.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOff", {
            /**默认开关 */
            get: function () { return moon.MoonUI.getSwitch(moon.Color.skinNormal, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOn", {
            get: function () { return moon.MoonUI.getSwitch(moon.Color.skinNormal, moon.Color.white, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "progressBackground", {
            /**默认进度条 */
            get: function () { return moon.MoonUI.getRect(300, 20, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "progressValue", {
            get: function () { return moon.MoonUI.getRect(300, 20, moon.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBackground", {
            /**默认滑动器 */
            get: function () { return moon.MoonUI.getRect(300, 10, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderValue", {
            get: function () { return moon.MoonUI.getRect(300, 10, moon.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBar", {
            get: function () { return moon.MoonUI.getCircle(15, moon.Color.white); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "scrollBar", {
            /**默认滚动条 */
            get: function () { return moon.MoonUI.getRect(10, 10, moon.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Skin.getRodatioButton = function (label) {
            var btn = new BasicButton(moon.Skin.radioOff, moon.Skin.radioOn);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.labelColor = moon.Color.black;
            btn.setLabelPoint(40, 0);
            return btn;
        };
        Skin.getCheckBox = function (label) {
            var skins = [moon.Skin.checkBoxOff, moon.Skin.checkBoxOff, moon.Skin.checkBoxOn, moon.Skin.checkBoxOn];
            var btn = new moon.MoreSkinButton(skins);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.toggleSwitch = true;
            btn.labelColor = moon.Color.black;
            btn.setLabelPoint(50, 2);
            return btn;
        };
        return Skin;
    }());
    moon.Skin = Skin;
    __reflect(Skin.prototype, "moon.Skin");
    /**
     * ...
     * 默认参数x轴,y轴,w宽,h高,r半径,c颜色,ew圆角宽,eh圆家高
     * @author vinson
     */
    var MoonUI = (function () {
        function MoonUI() {
        }
        Object.defineProperty(MoonUI, "randomColor", {
            /**得到随机色*/
            get: function () {
                return Math.random() * 0XFFFFFF;
            },
            enumerable: true,
            configurable: true
        });
        /**得到矩形*/
        MoonUI.getRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
            return s;
        };
        /**得到矩形和一个X*/
        MoonUI.getRectAndX = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = this.getRect(w, h, c, x, y);
            var l1 = new Sprite;
            l1.graphics.lineStyle(0.1);
            l1.graphics.moveTo(0, 0);
            l1.graphics.lineTo(w, h);
            var l2 = new Sprite;
            l2.graphics.lineStyle(0.1);
            l2.graphics.moveTo(w, 0);
            l2.graphics.lineTo(0, h);
            s.addChild(l1);
            s.addChild(l2);
            return s;
        };
        /**得到圆角矩形*/
        MoonUI.getRoundRect = function (w, h, c, ew, eh, x, y) {
            if (c === void 0) { c = 0; }
            if (ew === void 0) { ew = 5; }
            if (eh === void 0) { eh = 5; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRoundRect(x, y, w, h, ew, eh);
            s.graphics.endFill();
            return s;
        };
        /**得到圆形*/
        MoonUI.getCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawCircle(x, y, r);
            s.graphics.endFill();
            return s;
        };
        /**得到多边形,side边数,rotation角度*/
        MoonUI.getPolygon = function (side, r, c, rotation) {
            if (side === void 0) { side = 3; }
            if (r === void 0) { r = 10; }
            if (c === void 0) { c = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite;
            s.rotation = rotation;
            s.graphics.beginFill(c);
            for (var i = 0; i <= side; i++) {
                var lineX = Math.cos((i * (360 / side) * Math.PI / 180)) * r;
                var lineY = Math.sin((i * (360 / side) * Math.PI / 180)) * r;
                if (i == 0)
                    s.graphics.moveTo(lineX, lineY);
                else
                    s.graphics.lineTo(lineX, lineY);
            }
            s.graphics.endFill();
            return s;
        };
        /**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
        MoonUI.getArrowRoundRect = function (w, h, rc, pc, rotation) {
            if (pc === void 0) { pc = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, rc));
            var p = this.getPolygon(3, w / 3, pc, 30 + rotation);
            p.x = s.width >> 1;
            p.y = s.height >> 1;
            s.addChild(p);
            return s;
        };
        /**得到滚动条的bar*/
        MoonUI.getScrollLineBar = function (w, h, c) {
            var s = new Sprite;
            var _h = h / 3;
            for (var i = 0; i < 3; i++) {
                var r = this.getRect(w, 1, c, 0, i * _h);
                s.addChild(r);
            }
            return s;
        };
        /**得到圆角矩形-加*/
        MoonUI.getAddRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r1 = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            var r2 = this.getRect(2, h / 2, 0, w / 2 - 1, h / 4);
            s.addChild(r1);
            s.addChild(r2);
            return s;
        };
        /**得到圆角矩形-减*/
        MoonUI.getRemoveRoundRect = function (w, h, c) {
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            s.addChild(r);
            return s;
        };
        /**得到带文字的圆角方形*/
        MoonUI.getRoundRectText = function (w, h, c, str) {
            if (str === void 0) { str = "click"; }
            var s = new Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var text = new TextField;
            text.text = str;
            text.x = (s.width - text.width) >> 1;
            text.y = (s.height - text.height) >> 1;
            s.addChild(text);
            return s;
        };
        /**得到矩形-switchButton bc背景颜色，gc钩选的颜色,type为0是没有钩为1是有钩*/
        MoonUI.getSwitch = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var node = moon.MoonUI.getRoundRect(80, 50, bc, 60, 60);
            node.addChild(moon.MoonUI.getCircle(22, gc, type == 0 ? 25 : 55, 25));
            return node;
        };
        /**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
        MoonUI.getCheckBoxRect = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getRect(40, 40, bc));
            if (type == 1) {
                var r = new Sprite;
                r.graphics.beginFill(gc);
                r.graphics.moveTo(0, 20);
                r.graphics.lineTo(20, 36);
                r.graphics.lineTo(44, 8);
                r.graphics.lineTo(36, 0);
                r.graphics.lineTo(20, 18);
                r.graphics.lineTo(12, 8);
                r.graphics.lineTo(0, 20);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
        MoonUI.getRadioCircle = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new Sprite;
            s.addChild(this.getCircle(16, bc, 16, 16));
            s.graphics.lineStyle(1, 0);
            if (type == 1) {
                var r = this.getCircle(8, gc, 16, 16);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-网格
         * rect.x是x轴数量
         * rect.y是y轴数量
         * rect.width是网格宽
         * rect.height是网格高
         * lc网格线颜色
         * */
        MoonUI.getGridding = function (rect, lc) {
            if (lc === void 0) { lc = 0; }
            var s = new Sprite;
            s.graphics.lineStyle(0.1, lc);
            var disx = rect.width / rect.x;
            var disy = rect.height / rect.y;
            for (var i = 0; i < rect.x; i++) {
                s.graphics.moveTo(0, i * disy);
                s.graphics.lineTo(rect.width, i * disy);
            }
            for (i = 0; i < rect.y; i++) {
                s.graphics.moveTo(i * disx, 0);
                s.graphics.lineTo(i * disx, rect.height);
            }
            return s;
        };
        return MoonUI;
    }());
    moon.MoonUI = MoonUI;
    __reflect(MoonUI.prototype, "moon.MoonUI");
    //--------------
    var showLog = (function () {
        function showLog() {
        }
        showLog.getIns = function () {
            if (this.instance == null) {
                this.instance = new showLog();
            }
            return this.instance;
        };
        showLog.prototype.init = function (stage) {
            var txt = (new Label).textField;
            txt.textAlign = egret.HorizontalAlign.LEFT;
            stage.addChild(txt);
            this.txtSimple = txt;
            var txt = (new Label).textField;
            txt.size = 25;
            stage.addChild(txt);
            this.txtMessage = txt;
        };
        /**每次都覆盖上一次信息 */
        showLog.prototype.log = function (value) {
            this.txtSimple.text = value;
        };
        /**显示所有信息 */
        showLog.prototype.logMessage = function (value) {
            this.txtMessage.appendText(value + "\n");
        };
        showLog.prototype.setLogColor = function (color) {
            this.txtSimple.textColor = color;
        };
        showLog.prototype.setLogMessageColor = function (color) {
            this.txtMessage.textColor = color;
        };
        return showLog;
    }());
    moon.showLog = showLog;
    __reflect(showLog.prototype, "moon.showLog");
    var TipsManager = (function () {
        function TipsManager() {
            this.bgName = "tips_png"; //TIPS的背景图片
        }
        TipsManager.getIns = function () {
            if (this.instance == null) {
                this.instance = new TipsManager();
            }
            return this.instance;
        };
        TipsManager.prototype.init = function (stage) {
            this.stage = stage;
        };
        TipsManager.prototype.simpleTips = function (value, pos) {
            if (this.tipsView == null) {
                this.tipsView = new moon.BasicTips(this.bgName);
                this.tipsView.setValue(value);
                this.stage.addChild(this.tipsView);
                this.setPosition(pos);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
            }
        };
        TipsManager.prototype.setPosition = function (pos) {
            if (pos) {
                this.tipsView.x = pos.x - (this.tipsView.width >> 1);
                this.tipsView.y = pos.y - this.tipsView.height * 2;
                if (this.tipsView.y < 0) {
                    this.tipsView.y = pos.y;
                }
                if ((this.tipsView.y + this.tipsView.height) > this.stage.stageHeight) {
                    this.tipsView.y = pos.y - (this.tipsView.height + 50);
                }
                if (this.tipsView.x < 0) {
                    this.tipsView.x = pos.x + 50;
                }
                if ((this.tipsView.x + this.tipsView.width) > this.stage.stageWidth) {
                    this.tipsView.x = pos.x - (this.tipsView.width + 50);
                }
            }
        };
        TipsManager.prototype.removeTips = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
            var parent = this.tipsView.parent;
            if (parent != null) {
                parent.removeChild(this.tipsView);
                this.tipsView = null;
            }
        };
        return TipsManager;
    }());
    moon.TipsManager = TipsManager;
    __reflect(TipsManager.prototype, "moon.TipsManager");
    var MoonEvent = (function (_super) {
        __extends(MoonEvent, _super);
        function MoonEvent(type, data, currentTarget) {
            if (type === void 0) { type = ""; }
            if (data === void 0) { data = null; }
            if (currentTarget === void 0) { currentTarget = null; }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.data = data;
            _this.currentTarget = currentTarget;
            return _this;
        }
        //button event
        MoonEvent.MOUSE_OVER = "event-over";
        MoonEvent.MOUSE_OUT = "event-out";
        MoonEvent.MOUSE_DOWN = "event-down";
        MoonEvent.MOUSE_MOVE = "event-move";
        MoonEvent.MOUSE_UP = "event-up";
        MoonEvent.CLICK = "event-click";
        //tabbar event
        MoonEvent.CHANGE = "change";
        MoonEvent.COMPLETE = "complete";
        MoonEvent.RENDER_COMPLETE = "render complete";
        MoonEvent.UPDATE = "update";
        MoonEvent.START = "start";
        MoonEvent.MOVE = "move";
        MoonEvent.OVER = "over";
        MoonEvent.PAUSE = "pause";
        MoonEvent.OPEN = "open";
        MoonEvent.CLOSE = "close";
        return MoonEvent;
    }(egret.EventDispatcher));
    moon.MoonEvent = MoonEvent;
    __reflect(MoonEvent.prototype, "moon.MoonEvent");
    var MoonDisplayObject = (function (_super) {
        __extends(MoonDisplayObject, _super);
        function MoonDisplayObject() {
            var _this = _super.call(this) || this;
            _this._type = Const.SHAPE_RECT;
            _this._color = 0;
            _this.display = new Sprite;
            _this.bg = new Sprite;
            return _this;
        }
        Object.defineProperty(MoonDisplayObject.prototype, "type", {
            get: function () { return this._type; },
            set: function (value) { this._type = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "color", {
            get: function () { return this._color; },
            set: function (value) { this._color = value; this._data.c = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "data", {
            /**{w:1,h:1,r:1,c:1,ew:1,eh:1} */
            set: function (value) { this._data = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        MoonDisplayObject.prototype.draw = function () {
            this.display.graphics.clear();
            this.display = this.getDisplay(this._data);
            this.addChild(this.display);
            this.setPosition();
        };
        MoonDisplayObject.prototype.setPosition = function () {
            if (this._hasBg && this.type != Const.SHAPE_CIRCLE) {
                this.display.x = (this.bg.width - this.display.width) >> 1;
                this.display.y = (this.bg.height - this.display.height) >> 1;
            }
        };
        MoonDisplayObject.prototype.setBackground = function (color, side) {
            if (side === void 0) { side = 1; }
            this._hasBg = true;
            var d = this._data;
            var o = {};
            for (var i in d) {
                o[i] = d[i];
            }
            o.c = color;
            if (o.w)
                o.w = o.w + side * 2;
            if (o.h)
                o.h = o.h + side * 2;
            if (o.r)
                o.r = o.r + side;
            this.bg.graphics.clear();
            this.bg = this.getDisplay(o);
            this.addChildAt(this.bg, 0);
            this.setPosition();
        };
        MoonDisplayObject.prototype.getDisplay = function (o) {
            switch (this.type) {
                case Const.SHAPE_RECT:
                    return MoonUI.getRect(o.w, o.h, o.c);
                case Const.SHAPE_RECT_ROUND:
                    return MoonUI.getRoundRect(o.w, o.h, o.c, o.ew, o.eh);
                case Const.SHAPE_CIRCLE:
                    return MoonUI.getCircle(o.r, o.c);
            }
        };
        return MoonDisplayObject;
    }(Sprite));
    moon.MoonDisplayObject = MoonDisplayObject;
    __reflect(MoonDisplayObject.prototype, "moon.MoonDisplayObject");
    var MoonContainer = (function (_super) {
        __extends(MoonContainer, _super);
        function MoonContainer() {
            var _this = _super.call(this) || this;
            _this.dataEvent = new Object;
            _this.init();
            _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            return _this;
        }
        MoonContainer.prototype.addToStage = function () {
            this.render();
        };
        /**加载到舞台之前调用 */
        MoonContainer.prototype.init = function () {
        };
        /**加载到舞台之后调用 */
        MoonContainer.prototype.render = function () {
            this.stageWidth = this.stage.stageWidth;
            this.stageHeight = this.stage.stageHeight;
        };
        /**发布事件*/
        MoonContainer.prototype.dispEvent = function (type, data, dataType) {
            if (data === void 0) { data = null; }
            if (dataType === void 0) { dataType = null; }
            if (this.dataEvent) {
                var fun = this.dataEvent[type];
                if (fun != null) {
                    var moonEvent = new MoonEvent;
                    moonEvent.currentTarget = this;
                    moonEvent.data = data;
                    moonEvent.type = type;
                    moonEvent.dataType = dataType;
                    if (fun["this"]) {
                        fun.apply(fun["this"], [moonEvent]);
                    }
                    else {
                        fun(moonEvent);
                    }
                }
            }
        };
        /**帧听事件*/
        MoonContainer.prototype.addEvent = function (type, listener, thisObj) {
            if (thisObj === void 0) { thisObj = null; }
            if (this.dataEvent && this.dataEvent[type] == null) {
                listener["this"] = thisObj;
                this.dataEvent[type] = listener;
            }
        };
        /**删除事件*/
        MoonContainer.prototype.removeEvent = function (type, listener) {
            if (this.dataEvent && this.dataEvent[type]) {
                delete this.dataEvent[type];
            }
        };
        /**把自己从父级删除*/
        MoonContainer.prototype.removeFromParent = function (value) {
            if (value === void 0) { value = false; }
            var _parent = this.parent;
            if (value)
                this.dispose();
            if (_parent && _parent.contains(this))
                _parent.removeChild(this);
            _parent = null;
        };
        /**删除所有的*/
        MoonContainer.prototype.removeChildAll = function (beginIndex, endIndex, dispose) {
            if (beginIndex === void 0) { beginIndex = 0; }
            if (endIndex === void 0) { endIndex = 2147483647; }
            if (dispose === void 0) { dispose = false; }
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildIndex(beginIndex, dispose);
        };
        /**删除index层的*/
        MoonContainer.prototype.removeChildIndex = function (beginIndex, dispose) {
            if (beginIndex >= 0 || beginIndex < this.numChildren) {
                var basicContent = this.getChildAt(beginIndex);
                if (basicContent instanceof MoonContainer) {
                    basicContent.removeFromParent(dispose);
                }
                else {
                    var display = this.getChildAt(beginIndex);
                    if (display.parent)
                        display.parent.removeChild(display);
                }
            }
        };
        /**销毁*/
        MoonContainer.prototype.dispose = function () {
            this.removeChildAll(0, -1, true);
            this.dataEvent = null;
        };
        return MoonContainer;
    }(DisplayObjectContainer));
    moon.MoonContainer = MoonContainer;
    __reflect(MoonContainer.prototype, "moon.MoonContainer");
    var BasicView = (function (_super) {
        __extends(BasicView, _super);
        function BasicView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicView.prototype.createText = function (x, y, s) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (s === void 0) { s = ""; }
            var text = (new Label).textField;
            text.x = x;
            text.y = y;
            text.text = s;
            this.addChild(text);
            return text;
        };
        BasicView.prototype.createRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = moon.MoonUI.getRect(w, h, c, x, y);
            this.addChild(sprite);
            return sprite;
        };
        BasicView.prototype.createCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = moon.MoonUI.getCircle(r, c, x, y);
            this.addChild(sprite);
            return sprite;
        };
        BasicView.prototype.createRectBySprite = function (s, w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            s.graphics.clear();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
        };
        BasicView.prototype.createBackground = function (c) {
            if (c === void 0) { c = 0; }
            return this.createRect(this.stageWidth, this.stageHeight, c);
        };
        return BasicView;
    }(MoonContainer));
    moon.BasicView = BasicView;
    __reflect(BasicView.prototype, "moon.BasicView");
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameView.prototype.play = function () {
            egret.startTick(this.loop, this);
        };
        GameView.prototype.stop = function () {
            egret.stopTick(this.loop, this);
        };
        GameView.prototype.loop = function (n) {
            traceSimple(n);
            return true;
        };
        return GameView;
    }(BasicView));
    moon.GameView = GameView;
    __reflect(GameView.prototype, "moon.GameView");
    var MapHorizontalHouse = (function (_super) {
        __extends(MapHorizontalHouse, _super);
        function MapHorizontalHouse(rect, house, color) {
            if (color === void 0) { color = -1; }
            var _this = _super.call(this) || this;
            _this.rect = rect;
            _this.house = house;
            _this.color = color;
            return _this;
        }
        MapHorizontalHouse.prototype.render = function () {
            var house = this.house;
            var bg = moon.MoonUI.getRect(this.rect.width, this.rect.height);
            bg.alpha = 0.1;
            this.addChild(bg);
            var count = this.rect.width / house.width;
            var prevx = 0;
            for (var i = 0; i < count; i++) {
                var color = this.color == -1 ? Math.random() * 0XFFFFFF : this.color;
                var width = house.width + Math.random() * house.x;
                var height = house.height + Math.random() * house.y;
                var rect = moon.MoonUI.getRect(width, height, color);
                this.addChild(rect);
                rect.y = this.rect.height - rect.height;
                rect.x = prevx;
                prevx = rect.x + rect.width;
            }
        };
        return MapHorizontalHouse;
    }(MoonContainer));
    moon.MapHorizontalHouse = MapHorizontalHouse;
    __reflect(MapHorizontalHouse.prototype, "moon.MapHorizontalHouse");
    /**九宫格*/
    var Scale9Image = (function (_super) {
        __extends(Scale9Image, _super);
        function Scale9Image(name, rect) {
            if (rect === void 0) { rect = null; }
            var _this = _super.call(this) || this;
            _this.texture = RES.getRes(name);
            _this.scale9Grid = rect || new Rectangle(8, 8, 2, 2);
            return _this;
        }
        return Scale9Image;
    }(Bitmap));
    moon.Scale9Image = Scale9Image;
    __reflect(Scale9Image.prototype, "moon.Scale9Image");
    var BasicTips = (function (_super) {
        __extends(BasicTips, _super);
        function BasicTips(skinName) {
            var _this = _super.call(this) || this;
            _this.side = 14; //文字离边框的距离
            _this.lineSpacing = 4; //行间距
            _this.image = new Scale9Image(skinName);
            _this.addChild(_this.image);
            _this.text = (new Label).textField;
            _this.text.textAlign = egret.HorizontalAlign.CENTER;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.lineSpacing = _this.lineSpacing;
            _this.addChild(_this.text);
            return _this;
        }
        /**设置普通文字*/
        BasicTips.prototype.setValue = function (value) {
            this.text.text = value;
            this.setCenter();
        };
        /**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
        BasicTips.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setCenter();
        };
        BasicTips.prototype.setCenter = function () {
            var image = this.image;
            var text = this.text;
            var side = this.side;
            var w = text.width + side;
            var h = text.height + side;
            image.width = w;
            image.height = h;
            text.x = text.y = side >> 1;
        };
        return BasicTips;
    }(MoonContainer));
    moon.BasicTips = BasicTips;
    __reflect(BasicTips.prototype, "moon.BasicTips");
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(str, c) {
            if (str === void 0) { str = ""; }
            if (c === void 0) { c = 0XFFFFFF; }
            var _this = _super.call(this) || this;
            _this.text = new TextField;
            _this.text.textAlign = egret.HorizontalAlign.LEFT;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.text = str;
            _this.text.textColor = c;
            _this.text.fontFamily = moon.FONT.fontName;
            _this.addChild(_this.text);
            return _this;
        }
        Object.defineProperty(Label.prototype, "textField", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(MoonContainer));
    moon.Label = Label;
    __reflect(Label.prototype, "moon.Label");
    var BasicButton = (function (_super) {
        __extends(BasicButton, _super);
        function BasicButton(normal, down) {
            if (normal === void 0) { normal = null; }
            if (down === void 0) { down = null; }
            var _this = _super.call(this) || this;
            /**皮肤大小随字体大小变化 */
            _this.skinAutoScale = true;
            _this.statusNormal = normal || Skin.buttonNormal;
            _this.statusDown = down || Skin.buttonDown;
            _this.skinContainer = new DisplayObjectContainer;
            _this.addChild(_this.skinContainer);
            _this.updateSkin(_this.statusNormal);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            _this.touchEnabled = true;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            return _this;
        }
        BasicButton.prototype.setLabelPoint = function (x, y) {
            this.text.anchorOffsetX = 0;
            this.text.anchorOffsetY = 0;
            this.text.x = x;
            this.text.y = y;
        };
        Object.defineProperty(BasicButton.prototype, "labelCircle", {
            set: function (value) {
                this.text.text = value;
                this.skinAutoScale = false;
                this.text.x = this.text.y = 0;
                this.text.anchorOffsetX = this.text.textWidth >> 1;
                this.text.anchorOffsetY = this.text.textHeight >> 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "labelColor", {
            set: function (value) {
                this.text.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "label", {
            get: function () {
                return this.text.text;
            },
            set: function (value) {
                this.text.text = value;
                var width = this.text.width + 20;
                this.setSkinSize();
                this.setTextPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textFild", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        /**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
        BasicButton.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setSkinSize();
            this.setTextPosition();
        };
        BasicButton.prototype.setSkinNormal = function () {
            this.updateSkin(this.statusNormal);
        };
        BasicButton.prototype.setSkinDown = function () {
            this.updateSkin(this.statusDown);
        };
        BasicButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusDown);
            }
            else {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusNormal);
            }
        };
        Object.defineProperty(BasicButton.prototype, "textWidth", {
            get: function () {
                return this.text.width + 20;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textHeight", {
            get: function () {
                return this.text.height + 20;
            },
            enumerable: true,
            configurable: true
        });
        BasicButton.prototype.setSkinSize = function () {
            if (this.skinAutoScale && this.text.text != "") {
                var scale = this.textWidth / this.statusNormal.width;
                if (this.statusNormal instanceof Bitmap) {
                    this.statusNormal.width = this.textWidth;
                    this.statusDown.width = this.textWidth;
                }
                else {
                    this.statusNormal.scaleX = this.statusDown.scaleX = scale;
                }
                var height = this.textHeight;
                if (height >= this.statusNormal.height) {
                    scale = height / this.statusNormal.height;
                    if (this.statusNormal instanceof Bitmap) {
                        this.statusNormal.height = this.textHeight;
                        this.statusDown.height = this.textHeight;
                    }
                    else {
                        this.statusNormal.scaleY = this.statusDown.scaleY = scale;
                    }
                }
            }
        };
        BasicButton.prototype.setTextPosition = function () {
            this.text.anchorOffsetX = this.text.width >> 1;
            this.text.anchorOffsetY = this.text.height >> 1;
            if (this.textWidth > this.statusNormal.width)
                this.text.x = this.textWidth >> 1;
            else
                this.text.x = this.statusNormal.width >> 1;
            if (this.textHeight > this.statusNormal.height)
                this.text.y = this.textHeight >> 1;
            else
                this.text.y = this.statusNormal.height >> 1;
        };
        BasicButton.prototype.updateSkin = function (skin) {
            this.skinContainer.removeChildren();
            this.skinContainer.addChild(skin);
        };
        BasicButton.prototype.dispose = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            if (this.stage)
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
            _super.prototype.dispose.call(this);
        };
        return BasicButton;
    }(MoonContainer));
    moon.BasicButton = BasicButton;
    __reflect(BasicButton.prototype, "moon.BasicButton");
    /**类似多个皮肤按钮,构造函数的参数必须大于2个且必须是2的次方
     * 使用四个皮肤就可以模拟ToggleSwitch了
    */
    var MoreSkinButton = (function (_super) {
        __extends(MoreSkinButton, _super);
        function MoreSkinButton(skins) {
            var _this = _super.call(this, skins[0], skins[1]) || this;
            _this._currentPage = 0;
            _this.skins = skins;
            return _this;
        }
        Object.defineProperty(MoreSkinButton.prototype, "currentPage", {
            get: function () {
                return this._currentPage;
            },
            set: function (value) {
                value = value * 2 == this.skins.length ? 0 : value;
                this._currentPage = value;
                this.statusNormal = this.skins[value * 2];
                this.statusDown = this.skins[(value * 2) + 1];
                this.setSkinSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoreSkinButton.prototype, "toggleSwitch", {
            set: function (value) {
                this._toggleSwitch = value;
            },
            enumerable: true,
            configurable: true
        });
        MoreSkinButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_END) {
                if (this._toggleSwitch) {
                    this.currentPage = 1 - this.currentPage;
                }
            }
            _super.prototype.onTouch.call(this, e);
        };
        return MoreSkinButton;
    }(BasicButton));
    moon.MoreSkinButton = MoreSkinButton;
    __reflect(MoreSkinButton.prototype, "moon.MoreSkinButton");
    /**基础的组件类*/
    var BasicBar = (function (_super) {
        __extends(BasicBar, _super);
        function BasicBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = [];
            _this.index = 0;
            return _this;
        }
        BasicBar.prototype.addItem = function (item) {
            this.items.push(item);
        };
        BasicBar.prototype.removeItem = function (item) {
            var index = this.items.indexOf(item);
            if (index >= 0)
                this.items.splice(index, 1);
        };
        BasicBar.prototype.hasItem = function (index) {
            return this.items.length > 0 && (index >= 0 || index < this.items.length);
        };
        BasicBar.prototype.getItem = function (index) {
            return this.items[index];
        };
        BasicBar.prototype.getNextItem = function () {
            return this.items[this.index++];
        };
        BasicBar.prototype.reset = function () {
            this.index = 0;
        };
        BasicBar.prototype.update = function () {
        };
        /**销毁*/
        BasicBar.prototype.dispose = function () {
            this.reset();
            while (this.hasItem(this.index)) {
                var item = this.getItem(this.index);
                this.removeItem(item);
                if (item instanceof MoonContainer) {
                    item.removeFromParent(true);
                }
            }
        };
        return BasicBar;
    }(BasicView));
    moon.BasicBar = BasicBar;
    __reflect(BasicBar.prototype, "moon.BasicBar", ["moon.IItem"]);
    /***进度条 */
    var ProgressBar = (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar(bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            var _this = _super.call(this) || this;
            _this._value = 0;
            _this.setSkin(bg, value);
            _this.addChild(_this.skinBg);
            _this.addChild(_this.skinValue);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            return _this;
        }
        ProgressBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.progressBackground;
            this.skinValue = value || Skin.progressValue;
        };
        Object.defineProperty(ProgressBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**值只能是0－1之间 */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v;
                this._value = v;
                this.skinValue.scaleX = v;
            },
            enumerable: true,
            configurable: true
        });
        ProgressBar.prototype.showText = function (v, x, y) {
            if (x === void 0) { x = -1; }
            if (y === void 0) { y = -1; }
            this.text.text = v;
            if (x == -1)
                this.text.x = (this.skinBg.width - this.text.width) >> 1;
            else
                this.text.x = x;
            if (y == -1)
                this.text.y = this.skinBg.height + 5;
            else
                this.text.y = y;
        };
        return ProgressBar;
    }(MoonContainer));
    moon.ProgressBar = ProgressBar;
    __reflect(ProgressBar.prototype, "moon.ProgressBar");
    /***滑动器 */
    var SliderBar = (function (_super) {
        __extends(SliderBar, _super);
        function SliderBar(bg, value, bar) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            if (bar === void 0) { bar = null; }
            var _this = _super.call(this, bg, value) || this;
            _this.skinBar = bar || Skin.sliderBar;
            _this.addChild(_this.skinBar);
            _this.skinBar.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            _this.skinBar.touchEnabled = true;
            _this.layout();
            _this.value = 1;
            return _this;
        }
        SliderBar.prototype.setSkin = function (bg, value) {
            if (bg === void 0) { bg = null; }
            if (value === void 0) { value = null; }
            this.skinBg = bg || Skin.sliderBackground;
            this.skinValue = value || Skin.sliderValue;
        };
        SliderBar.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(MoonEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX, e.stageY);
                    this.dispEvent(MoonEvent.MOVE);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.dispEvent(MoonEvent.OVER);
                    break;
            }
        };
        SliderBar.prototype.moveDo = function (x, y) {
            var p = this.globalToLocal(x, y);
            var v;
            if (this.type == Const.HORIZONTAL)
                v = p.x / this.skinValue.width;
            else
                v = -p.y / this.skinValue.width;
            this.value = v;
        };
        Object.defineProperty(SliderBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**值只能是0－1之间 */
            set: function (v) {
                v = v < 0 ? 0 : v > 1 ? 1 : v;
                this._value = v;
                this.skinValue.scaleX = v;
                if (this.type == Const.HORIZONTAL)
                    this.skinBar.x = this.skinValue.width * v;
                else
                    this.skinBar.y = -this.skinValue.width * v;
            },
            enumerable: true,
            configurable: true
        });
        /**横竖版布局，默认是横版布局 */
        SliderBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.HORIZONTAL; }
            if (interval === void 0) { interval = 0; }
            this.type = type;
            if (type == Const.VERTICAL) {
                var angle = -90;
                this.skinBar.x = this.skinValue.height >> 1;
            }
            else {
                var angle = 0;
                this.skinBar.y = this.skinValue.height >> 1;
            }
            this.skinBg.rotation = angle;
            this.skinValue.rotation = angle;
        };
        return SliderBar;
    }(ProgressBar));
    moon.SliderBar = SliderBar;
    __reflect(SliderBar.prototype, "moon.SliderBar", ["moon.ILayout"]);
    /***滚动条 */
    var ScrollBar = (function (_super) {
        __extends(ScrollBar, _super);
        function ScrollBar(bar) {
            if (bar === void 0) { bar = null; }
            var _this = _super.call(this) || this;
            _this.skinBar = bar || Skin.scrollBar;
            _this.skinBar.alpha = 0;
            _this.addChild(_this.skinBar);
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
            _this.touchEnabled = true;
            _this.startPos = new Point;
            _this.stPos = new Point;
            _this.setSize();
            _this.layout();
            return _this;
        }
        ScrollBar.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.stPos.x = e.stageX;
                    this.stPos.y = e.stageY;
                    this.startPos.x = e.stageX - this._target.x;
                    this.startPos.y = e.stageY - this._target.y;
                    this.hideShow(1);
                    this.startTime = egret.getTimer();
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX, e.stageY);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.hideShow(0);
                    this.timeMove(e.stageX, e.stageY);
                    break;
            }
        };
        ScrollBar.prototype.timeMove = function (x, y) {
            //缓动动画
        };
        ScrollBar.prototype.hideShow = function (alpha) {
            Tween.removeTweens(this.skinBar);
            if (alpha == 1) {
                this.skinBar.alpha = 1;
            }
            var tw = Tween.get(this.skinBar);
            tw.to({ alpha: alpha }, 1500);
        };
        ScrollBar.prototype.moveDo = function (x, y) {
            if (this.type == Const.VERTICAL) {
                this.canMoveY(y);
            }
            else if (this.type == Const.HORIZONTAL) {
                this.canMoveX(x);
            }
        };
        ScrollBar.prototype.canMoveX = function (x) {
            var dis = this.maskRect.width - this._target.width;
            var xx = x - this.startPos.x;
            if (xx > dis && xx < 0) {
                this._target.x = xx;
                this.skinBar.x = -xx / (this._target.width - this.maskRect.width) * (this.maskRect.width - this.skinBar.width);
            }
        };
        ScrollBar.prototype.canMoveY = function (y) {
            var dis = this.maskRect.height - this._target.height;
            var yy = y - this.startPos.y;
            if (yy > dis && yy < 0) {
                this._target.y = yy;
                this.skinBar.y = -yy / (this._target.height - this.maskRect.height) * (this.maskRect.height - this.skinBar.height);
            }
        };
        ScrollBar.prototype.setMask = function () {
            if (this.maskRect != null && this._target != null) {
                this._target.mask = this.maskRect;
            }
        };
        ScrollBar.prototype.setSkinBarPos = function () {
            this.skinBar.x = this.skinBar.y = 0;
            if (this.type == Const.VERTICAL) {
                this.skinBar.x = this.maskRect.width - this.skinBar.width;
            }
            else if (this.type == Const.HORIZONTAL) {
                this.skinBar.y = this.maskRect.height - this.skinBar.height;
            }
        };
        ScrollBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.VERTICAL; }
            if (interval === void 0) { interval = 0; }
            this.type = type;
            this.setSkinBarPos();
        };
        ScrollBar.prototype.setSize = function (w, h) {
            if (w === void 0) { w = 200; }
            if (h === void 0) { h = 200; }
            this.maskRect = MoonUI.getRect(w, h);
            this.addChild(this.maskRect);
            this.setMask();
            this.setSkinBarPos();
        };
        Object.defineProperty(ScrollBar.prototype, "target", {
            set: function (value) {
                this._target = value;
                this.addChildAt(this._target, 0);
                this.setMask();
            },
            enumerable: true,
            configurable: true
        });
        return ScrollBar;
    }(MoonContainer));
    moon.ScrollBar = ScrollBar;
    __reflect(ScrollBar.prototype, "moon.ScrollBar", ["moon.ILayout"]);
    /**复选框按钮 */
    var CheckBoxBar = (function (_super) {
        __extends(CheckBoxBar, _super);
        function CheckBoxBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckBoxBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getCheckBox(label);
            else
                item.label = label;
            this.addItem(item);
        };
        CheckBoxBar.prototype.addItem = function (item) {
            _super.prototype.addItem.call(this, item);
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.addChild(item);
        };
        CheckBoxBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            item.removeFromParent(true);
        };
        CheckBoxBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.dispEvent(moon.MoonEvent.CHANGE);
        };
        /**布局 type类型为横或竖，interval为对象间的间隔*/
        CheckBoxBar.prototype.layout = function (type, interval) {
            if (type === void 0) { type = Const.VERTICAL; }
            if (interval === void 0) { interval = 50; }
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (type == Const.VERTICAL)
                    item.y = interval * i;
                else
                    item.x = interval * i;
            }
        };
        Object.defineProperty(CheckBoxBar.prototype, "selectIndexs", {
            get: function () {
                var nums = [];
                for (var i = 0; i < this.items.length; i++) {
                    var btn = this.items[i];
                    if (btn.currentPage == 1)
                        nums.push(i);
                }
                return nums;
            },
            enumerable: true,
            configurable: true
        });
        return CheckBoxBar;
    }(BasicBar));
    moon.CheckBoxBar = CheckBoxBar;
    __reflect(CheckBoxBar.prototype, "moon.CheckBoxBar", ["moon.ILayout"]);
    /**单选框按钮 */
    var RadioButtonBar = (function (_super) {
        __extends(RadioButtonBar, _super);
        function RadioButtonBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAutoLayout = false;
            return _this;
        }
        RadioButtonBar.prototype.addItemLabel = function (label, item) {
            if (item === void 0) { item = null; }
            if (item == null)
                item = Skin.getRodatioButton(label);
            else
                item.label = label;
            this.addItem(item);
        };
        RadioButtonBar.prototype.render = function () {
            this.update();
        };
        RadioButtonBar.prototype.update = function () {
            var item;
            if (this.isAutoLayout == true) {
                for (var i = 0; i < this.items.length; i++) {
                    item = this.items[i];
                    item.x = (item.width + 10) * i;
                }
            }
        };
        RadioButtonBar.prototype.onClick = function (e) {
            var item = e.currentTarget;
            this.selectIndex = this.items.indexOf(item);
            this.dispEvent(moon.MoonEvent.CHANGE);
        };
        Object.defineProperty(RadioButtonBar.prototype, "selectIndex", {
            get: function () {
                return this._selectIndex;
            },
            set: function (index) {
                this._selectIndex = index;
                var item = this.items[index];
                this.items.map(setSkinNormal, this);
                function setSkinNormal(i) {
                    i.setSkinNormal();
                }
                item.setSkinDown();
            },
            enumerable: true,
            configurable: true
        });
        return RadioButtonBar;
    }(CheckBoxBar));
    moon.RadioButtonBar = RadioButtonBar;
    __reflect(RadioButtonBar.prototype, "moon.RadioButtonBar");
    /**面板 */
    var PanelBar = (function (_super) {
        __extends(PanelBar, _super);
        function PanelBar(pWidth, pHeight) {
            if (pWidth === void 0) { pWidth = 0; }
            if (pHeight === void 0) { pHeight = 0; }
            var _this = _super.call(this) || this;
            _this.titleHeight = 60;
            _this.pWidth = pWidth;
            _this.pHeight = pWidth;
            _this.titleBg = new Sprite;
            _this.containerBg = new Sprite;
            _this.title = (new Label).textField;
            _this.container = new MoonContainer;
            return _this;
        }
        /**加载到舞台之后调用 */
        PanelBar.prototype.render = function () {
            if (this.pWidth == 0 && this.pWidth == 0) {
                _super.prototype.render.call(this);
            }
            else {
                this.stageWidth = this.pWidth;
                this.stageHeight = this.pHeight;
            }
            this.createRectBySprite(this.titleBg, this.stageWidth, this.titleHeight, moon.Color.titleBackground);
            this.createRectBySprite(this.containerBg, this.stageWidth, this.stageHeight - this.titleHeight, moon.Color.white, 0, this.titleHeight);
            this.addChild(this.titleBg);
            this.addChild(this.containerBg);
            this.title.anchorOffsetX = this.title.textWidth >> 1;
            this.title.anchorOffsetY = this.title.textHeight >> 1;
            this.title.x = this.stageWidth >> 1;
            this.title.y = this.titleHeight >> 1;
            this.addChild(this.title);
            this.container.y = this.titleHeight;
            this.addChild(this.container);
            this.containerMask = this.createRect(this.stageWidth, this.stageHeight - this.titleHeight, moon.Color.white, 0, this.titleHeight);
            this.container.mask = this.containerMask;
            this.dispEvent(MoonEvent.RENDER_COMPLETE);
        };
        PanelBar.prototype.addItem = function (item, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.prototype.addItem.call(this, item);
            if (x != 0)
                item.x = x;
            if (y != 0)
                item.y = y;
            this.container.addChild(item);
        };
        PanelBar.prototype.removeItem = function (item) {
            _super.prototype.removeItem.call(this, item);
            if (this.container.contains(item))
                this.container.removeChild(item);
        };
        Object.defineProperty(PanelBar.prototype, "label", {
            get: function () {
                return this.title.text;
            },
            set: function (value) {
                this.title.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorTop", {
            set: function (c) {
                var w = this.titleBg.width, h = this.titleBg.height;
                this.createRectBySprite(this.titleBg, w, h, c);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "colorBottom", {
            set: function (c) {
                var w = this.containerBg.width, h = this.containerBg.height;
                this.createRectBySprite(this.containerBg, w, h, c, 0, this.titleHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelBar.prototype, "windowRect", {
            get: function () {
                var rect = new Rectangle(0, 0, this.stageWidth, this.stageHeight);
                return rect;
            },
            enumerable: true,
            configurable: true
        });
        PanelBar.prototype.removeAll = function () {
            this.container.dispose();
        };
        return PanelBar;
    }(BasicBar));
    moon.PanelBar = PanelBar;
    __reflect(PanelBar.prototype, "moon.PanelBar");
    /**多个面板管理 */
    var PanelMoreManager = (function (_super) {
        __extends(PanelMoreManager, _super);
        function PanelMoreManager() {
            var _this = _super.call(this) || this;
            _this.radioButton = new RadioButtonBar;
            _this.currentPage = 0;
            _this.posStartX = 0;
            _this.moveItems = [];
            _this.container = new MoonContainer;
            _this.addChild(_this.container);
            _this.radioButton.isAutoLayout = true;
            return _this;
        }
        PanelMoreManager.prototype.open = function () {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.close = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        PanelMoreManager.prototype.update = function () {
            this.container.removeChildren();
            var itemW;
            var itemH;
            if (this.items.length > 0) {
                var item = this.items[0];
                this.container.addChild(item);
                itemW = item.windowRect.width;
                itemH = item.windowRect.height;
                this.panelWidth = itemW;
            }
            var len = this.items.length;
            for (var i = 0; i < len; i++) {
                var btn = new BasicButton(moon.Skin.pointNormal, moon.Skin.pointDown);
                this.radioButton.addItem(btn);
            }
            btn = this.radioButton.getItem(0);
            btn.setSkinDown();
            this.radioButton.x = (itemW - len * 22) >> 1;
            this.radioButton.y = itemH - 20;
            this.addChild(this.radioButton);
        };
        PanelMoreManager.prototype.render = function () {
            this.update();
            if (this.items.length > 1) {
                this.open();
            }
        };
        PanelMoreManager.prototype.onTouch = function (e) {
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.posStartX = e.stageX;
                    this.dispEvent(MoonEvent.START);
                    break;
                case egret.TouchEvent.TOUCH_MOVE:
                    this.moveDo(e.stageX);
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.moveEnd(e.stageX);
                    break;
            }
        };
        PanelMoreManager.prototype.moveDo = function (x) {
            var disx = x - this.posStartX;
            if (Math.abs(disx) > 20) {
                if (this.moveItems.length == 0) {
                    var item = this.items[this.currentPage];
                    var width = this.panelWidth;
                    this.moveItems.push(item);
                    if (this.currentPage == 0) {
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                    else if (this.currentPage == this.items.length - 1) {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                    }
                    else {
                        item = this.items[this.currentPage - 1];
                        this.container.addChild(item);
                        item.x = -width;
                        this.moveItems.push(item);
                        item = this.items[this.currentPage + 1];
                        this.container.addChild(item);
                        item.x = width;
                        this.moveItems.push(item);
                    }
                }
                var boo1 = (this.currentPage == 0 && disx > 0);
                var boo2 = ((this.currentPage == this.items.length - 1) && disx < 0);
                if (!boo1 && !boo2) {
                    this.container.x = disx;
                }
            }
        };
        PanelMoreManager.prototype.moveEnd = function (x) {
            if (this.container.x == 0) {
                this.backCall(0);
                return;
            }
            var disx = x - this.posStartX;
            var tw = egret.Tween.get(this.container);
            var currX = this.panelWidth;
            var turnDis = this.panelWidth >> 2;
            //至少滑动窗口宽的四分之一才可以算翻页
            if (Math.abs(disx) > turnDis) {
                currX = this.panelWidth;
                currX *= disx > 0 ? 1 : -1;
            }
            else {
                disx = 0;
                currX = 0;
            }
            var time = 200;
            tw.to({ x: currX }, time);
            tw.call(this.backCall, this, [disx]);
        };
        /**结束翻页后的回调函数 */
        PanelMoreManager.prototype.backCall = function (disx) {
            if (disx > 0) {
                this.currentPage--;
                this.currentPage = this.currentPage < 0 ? 0 : this.currentPage;
            }
            else if (disx < 0) {
                this.currentPage++;
                this.currentPage = this.currentPage == this.items.length ? this.items.length - 1 : this.currentPage;
            }
            this.container.removeChildren();
            var item = this.items[this.currentPage];
            item.x = 0;
            this.container.addChild(item);
            this.radioButton.selectIndex = this.currentPage;
            this.moveItems.length = 0;
            this.container.x = 0;
            this.dispEvent(MoonEvent.OVER);
        };
        /**销毁*/
        PanelMoreManager.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.close();
        };
        return PanelMoreManager;
    }(BasicBar));
    moon.PanelMoreManager = PanelMoreManager;
    __reflect(PanelMoreManager.prototype, "moon.PanelMoreManager", ["moon.IOnoff"]);
})(moon || (moon = {}));
//# sourceMappingURL=MoonTheme.js.map
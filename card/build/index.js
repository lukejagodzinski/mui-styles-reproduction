"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/styles");
var useDefaultStyles = styles_1.makeStyles({
    card: {
        padding: 10,
        background: "orange",
        borderRadius: 10
    }
}, { name: "DefaultStyles", index: 0 });
var Card = function (props) {
    var defaultClasses = useDefaultStyles();
    return (React.createElement("div", { className: [defaultClasses.card, props.classes.card].join(" ") }, "CARD"));
};
exports.default = Card;
//# sourceMappingURL=index.js.map
/**
 * skylark-ui-rteditor - The skylark rteditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-rteditor/
 * @license MIT
 */
define(["skylark-utils-dom/noder","skylark-utils-dom/query","../Toolbar","../RichEditor","../Button"],function(t,e,i,o,r){var a=r.inherit({});return a.prototype.type="",a.prototype.disableTag="pre, table",a.prototype.command=function(t){return this.editor.editable.list(this.type,t,this.disableTag)},a});
//# sourceMappingURL=../sourcemaps/buttons/ListButton.js.map
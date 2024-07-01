'use strict';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = ":root{--selectionColor:#e1f2ff;--inlineSelectionColor:#d4ecff;--bg-light:#eff2f5;--grayText:#707684;--color-dark:#1d202b;--color-active-icon:#388ae5;--color-gray-border:hsla(240,3%,79%,.48);--content-width:850px;--narrow-mode-right-padding:50px;--toolbox-buttons-size:26px;--toolbox-buttons-size--mobile:36px;--icon-size:20px;--icon-size--mobile:28px;--block-padding-vertical:0.4em;--color-line-gray:#eff0f1;--overlay-pane:{ position:absolute; background-color:#FFFFFF; border:1px solid #E8E8EB; box-shadow:0 3px 15px -3px rgba(13,20,33,.13) ; border-radius:6px; z-index:2; &--left-oriented { &::before { left:15px; margin-left:0; } } &--right-oriented { &::before { left:auto; right:15px; margin-left:0; } } };--button-focused:{ box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08) ; background:rgba(34,186,255,.08) !important; };--button-active:{ background:rgba(56,138,229,.1) ; color:var(--color-active-icon); };--button-disabled:{ color:var(--grayText); cursor:default; pointer-events:none; };--toolbox-button:{ color:var(--color-dark); cursor:pointer; width:var(--toolbox-buttons-size); height:var(--toolbox-buttons-size); border-radius:7px; display:inline-flex; justify-content:center; align-items:center; user-select:none; @media (--mobile){ width:var(--toolbox-buttons-size--mobile); height:var(--toolbox-buttons-size--mobile); } @media (--can-hover) { &:hover { background-color:var(--bg-light); } } &--active { background-color:var(--bg-light); animation:bounceIn 0.75s 1; animation-fill-mode:forwards; } };--toolbar-button:{ display:inline-flex; align-items:center; justify-content:center; padding:6px 1px; border-radius:3px; cursor:pointer; border:0; outline:none; background-color:transparent; vertical-align:bottom; color:inherit; margin:0; svg { width:var(--icon-size); height:var(--icon-size); @media (--mobile) { width:var(--icon-size--mobile); height:var(--icon-size--mobile); } } @media (--can-hover) { &:hover { background-color:var(--bg-light); } } &--active { color:var(--color-active-icon); } &--focused { @apply --button-focused; &-animated { animation-name:buttonClicked; animation-duration:250ms; } } };--tool-icon:{ display:inline-flex; width:var(--toolbox-buttons-size); height:var(--toolbox-buttons-size); box-shadow:0 0 0 1px var(--color-gray-border); border-radius:5px; align-items:center; justify-content:center; background:#fff; box-sizing:content-box; flex-shrink:0; margin-right:10px; svg { width:var(--icon-size); height:var(--icon-size); } @media (--mobile) { width:var(--toolbox-buttons-size--mobile); height:var(--toolbox-buttons-size--mobile); border-radius:8px; svg { width:var(--icon-size--mobile); height:var(--icon-size--mobile); } } }}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{animation:fade-in .3s ease;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:var(--selectionColor)}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{margin:0 auto;max-width:var(--content-width);position:relative;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{border:solid var(--color-active-icon);border-width:1px 1px 0 0;content:\"\";height:8px;left:-20px;margin-top:-1px;position:absolute;top:100%;transform:rotate(45deg);transform-origin:right;width:8px}.ce-block--drop-target .ce-block__content:after{background:repeating-linear-gradient(90deg,var(--color-active-icon),var(--color-active-icon) 1px,#fff 1px,#fff 6px);color:var(--color-active-icon);content:\"\";height:1px;position:absolute;top:100%;width:100%}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (width >= 651px){.codex-editor--narrow .ce-block--focused{margin-right:calc(var(--narrow-mode-right-padding)*-1);padding-right:var(--narrow-mode-right-padding)}}";
styleInject(css_248z$d);

function baseBlock(props) {
    return "<div class=\"ce-block\"><div class=\"ce-block__content\">".concat(props, "</div></div>");
}
function make(tagName, classNames, attributes) {
    var _a;
    if (classNames === void 0) { classNames = null; }
    if (attributes === void 0) { attributes = {}; }
    var el = document.createElement(tagName);
    if (Array.isArray(classNames)) {
        (_a = el.classList).add.apply(_a, classNames);
    }
    else if (classNames) {
        el.classList.add(classNames);
    }
    for (var attrName in attributes) {
        el[attrName] = attributes[attrName];
    }
    return el;
}

var css_248z$c = ".tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size);height:100%;margin-top:var(--toolbox-icon-size);position:relative;width:100%}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left:1px solid var(--color-border);grid-template-columns:100% var(--cell-size)}.tc-wrap .tc-row:after{display:none}}.tc-table{border-top:1px solid var(--color-border);display:grid;font-size:14px;height:100%;line-height:1.4;position:relative;width:100%}.tc-table:after{content:\"\";height:100%;left:calc(var(--cell-size)*-1);position:absolute;top:0;width:calc(var(--cell-size))}.tc-table:before{content:\"\";height:var(--toolbox-aiming-field-size);left:0;position:absolute;top:calc(var(--toolbox-aiming-field-size)*-1);width:100%}.tc-table--heading .tc-row:first-child{border-bottom:2px solid var(--color-border);font-weight:600}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{color:var(--color-text-secondary);content:attr(heading)}.tc-table--heading .tc-row:first-child:after{border-bottom:2px solid var(--color-border);bottom:-2px}.tc-add-column,.tc-add-row{color:var(--color-text-secondary);display:flex}@media print{.tc-add{display:none}}.tc-add-column{border-top:1px solid var(--color-border);justify-content:center;padding:4px 0}@media print{.tc-add-column{display:none}}.tc-add-row{align-items:center;height:var(--cell-size);padding-left:4px;position:relative}.tc-add-row:before{content:\"\";height:100%;position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size)}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{cursor:pointer;transition:0s;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{background-color:var(--color-background);transition:background-color .1s ease}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{background-color:var(--color-background);transition:.1s}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative}.tc-row,.tc-row:after{border-bottom:1px solid var(--color-border)}.tc-row:after{bottom:-1px;content:\"\";height:100%;pointer-events:none;position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size)}.tc-row--selected,.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);line-break:normal;outline:none;overflow:hidden;padding:6px 12px}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}";
styleInject(css_248z$c);

function table(_a) {
    var data = _a.data;
    var item = "<div class=\"cdx-block tc-wrap tc-wrap--readonly\">\n            <div class=\"tc-table\">\n              ".concat(data.content.map(function (row) {
        return "<div class=\"tc-row\">".concat(row.map(function (cell) {
            return "<div class=\"tc-cell\">".concat(cell, "</div>");
        }).join(''), "</div>");
    }).join(''), "\n            </div>\n          </div>");
    return baseBlock(item);
}

var css_248z$b = ".ce-delimiter{line-height:1.6em;text-align:center;width:100%}.ce-delimiter:before{content:\"***\";display:inline-block;font-size:30px;height:30px;letter-spacing:.2em;line-height:65px}";
styleInject(css_248z$b);

function delimiter() {
    return '<div class="ce-delimiter ce-block"></div>';
}

var css_248z$a = ".ce-header{line-height:1.25em;margin:0;outline:none;padding:.6em 0 3px}.ce-header div,.ce-header p{margin:0!important;padding:0!important}.ce-header[contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);cursor:text;display:none;font-weight:400;position:absolute}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}";
styleInject(css_248z$a);

function header(_a) {
    var data = _a.data;
    var anchor = data.anchor, level = data.level, text = data.text;
    var item = "<h".concat(level, " class=\"ce-header\" id=\"").concat(anchor, "\">").concat(text, "</h").concat(level, ">");
    return baseBlock(item);
}

var css_248z$9 = ".cdx-nested-list{counter-reset:item;list-style:none;margin:0;outline:none;padding:0}.cdx-nested-list__item{display:flex;line-height:1.6em;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-children,.cdx-nested-list__item-content{flex-basis:100%}.cdx-nested-list__item-content{white-space:pre-wrap;word-break:break-word}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,\".\") \". \"}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:\"•\"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}";
styleInject(css_248z$9);

function nestedList(_a) {
    var data = _a.data;
    var listStyle = data.style === 'unordered' ? 'ul' : 'ol';
    var recursor = function (items, listStyle) {
        var list = items.map(function (item) {
            if (!item.content && !item.items) {
                return "<li>".concat(item, "</li>");
            }
            var list = '';
            if (item.items) {
                list = recursor(item.items, listStyle);
            }
            return "<li class=\"cdx-nested-list__item\">\n                <div class=\"cdx-nested-list__item-body\">\n                  <div class=\"cdx-nested-list__item-content\">".concat(item.content || '', "</div>\n                  ").concat(list, "\n                </div>\n              </li>");
        });
        return "<".concat(listStyle, " class=\"cdx-nested-list cdx-block cdx-nested-list--ordered\">").concat(list.join(''), "</").concat(listStyle, ">");
    };
    var listStart = recursor(data.items, listStyle);
    return baseBlock(listStart);
}
/*

function liftToVue(element) {
  return {
    template: "<div></div>",
    mounted() {
      this.$el.replaceWith(element);
    },
  };
}
const utils = {
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  },
};

const listRender = (items) => {
  interface ListItem {
    content: string;
    items: ListItem[];
  }
  const { data } = items;
  const CSS = {
    baseBlock: "cdx-block",
    wrapper: "cdx-nested-list",
    wrapperOrdered: "cdx-nested-list--ordered",
    wrapperUnordered: "cdx-nested-list--unordered",
    item: "cdx-nested-list__item",
    itemBody: "cdx-nested-list__item-body",
    itemContent: "cdx-nested-list__item-content",
    itemChildren: "cdx-nested-list__item-children",
    settingsWrapper: "cdx-nested-list__settings",
    settingsButton: "cdx-settings-button",
    settingsButtonActive: "cdx-settings-button--active",
  };
  function makeListWrapper(style: string, classes: string[] = []) {
    const tag = style === "ordered" ? "ol" : "ul";
    const styleClass =
      style === "ordered" ? CSS.wrapperOrdered : CSS.wrapperUnordered;
    classes.push(styleClass);
    return utils.make(tag, [CSS.wrapper, ...classes]);
  }
  function addChildrenList(parentItem: HTMLElement, items: ListItem[]) {
    const itemBody = parentItem.querySelector(`.${CSS.itemBody}`);
    const sublistWrapper = makeListWrapper(data.style, [CSS.itemChildren]);
    appendItems(items, sublistWrapper);

    itemBody.appendChild(sublistWrapper);
  }
  function createItem(content: string, items: ListItem[] = []): HTMLElement {
    const itemWrapper = utils.make("li", CSS.item);
    const itemBody = utils.make("div", CSS.itemBody);
    const itemContent = utils.make("div", CSS.itemContent, {
      innerHTML: content,
      contentEditable: false,
    });
    itemBody.appendChild(itemContent);
    itemWrapper.appendChild(itemBody);
    /!**
     * Append children if we have some
     *!/
    if (items && items.length > 0) {
      addChildrenList(itemWrapper, items);
    }

    return itemWrapper;
  }
  function appendItems(items: ListItem[], parentItem: HTMLElement): void {
    items.forEach((item) => {
      const itemEl = createItem(item.content, item.items);
      parentItem.appendChild(itemEl);
    });
  }
  const wrapper = makeListWrapper(data.style, [CSS.baseBlock]);

  if (data.items.length) {
    appendItems(data.items, wrapper);
  } else {
    appendItems(
      [
        {
          content: "",
          items: [],
        },
      ],
      wrapper
    );
  }
  return wrapper;
}; */

var css_248z$8 = ".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before,.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}";
styleInject(css_248z$8);

function paragraph(_a) {
    var data = _a.data;
    var paragraphAlign = data.alignment || data.align || 'inherit';
    var item = "<p class=\"ce-paragraph cdx-block\" style=\"text-align:".concat(paragraphAlign, "\">").concat(data.text, "</p>");
    return baseBlock(item);
}

var css_248z$7 = ".cdx-alert{border-radius:5px;margin-bottom:10px;padding:10px;position:relative}.cdx-alert-primary{background-color:#ebf8ff;border:1px solid #4299e1;color:#2b6cb0}.cdx-alert-secondary{background-color:#f7fafc;border:1px solid #cbd5e0;color:#222731}.cdx-alert-info{background-color:#e6fdff;border:1px solid #4cd4ce;color:#00727c}.cdx-alert-success{background-color:#f0fff4;border:1px solid #68d391;color:#2f855a}.cdx-alert-warning{background-color:#fffaf0;border:1px solid #ed8936;color:#c05621}.cdx-alert-danger{background-color:#fff5f5;border:1px solid #fc8181;color:#c53030}.cdx-alert-light{background-color:#fff;border:1px solid #edf2f7;color:#1a202c}.cdx-alert-dark{background-color:#2d3748;border:1px solid #1a202c;color:#d3d3d3}.cdx-alert__message{outline:none}.cdx-alert [contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0;position:absolute}.cdx-alert [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-alert [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.ce-popover__item[data-item-name=alert-primary] .ce-popover__item-icon svg #background{fill:#ebf8ff;stroke:#4299e1}.ce-popover__item[data-item-name=alert-primary] .ce-popover__item-icon svg #content{fill:#2b6cb0}.ce-popover__item[data-item-name=alert-secondary] .ce-popover__item-icon svg #background{fill:#f7fafc;stroke:#cbd5e0}.ce-popover__item[data-item-name=alert-secondary] .ce-popover__item-icon svg #content{fill:#222731}.ce-popover__item[data-item-name=alert-info] .ce-popover__item-icon svg #background{fill:#e6fdff;stroke:#4cd4ce}.ce-popover__item[data-item-name=alert-info] .ce-popover__item-icon svg #content{fill:#00727c}.ce-popover__item[data-item-name=alert-success] .ce-popover__item-icon svg #background{fill:#f0fff4;stroke:#68d391}.ce-popover__item[data-item-name=alert-success] .ce-popover__item-icon svg #content{fill:#2f855a}.ce-popover__item[data-item-name=alert-warning] .ce-popover__item-icon svg #background{fill:#fffaf0;stroke:#ed8936}.ce-popover__item[data-item-name=alert-warning] .ce-popover__item-icon svg #content{fill:#c05621}.ce-popover__item[data-item-name=alert-danger] .ce-popover__item-icon svg #background{fill:#fff5f5;stroke:#fc8181}.ce-popover__item[data-item-name=alert-danger] .ce-popover__item-icon svg #content{fill:#c53030}.ce-popover__item[data-item-name=alert-light] .ce-popover__item-icon svg #background{fill:#fff;stroke:#edf2f7}.ce-popover__item[data-item-name=alert-light] .ce-popover__item-icon svg #content{fill:#1a202c}.ce-popover__item[data-item-name=alert-dark] .ce-popover__item-icon svg #background{fill:#2d3748;stroke:#1a202c}.ce-popover__item[data-item-name=alert-dark] .ce-popover__item-icon svg #content{fill:#d3d3d3}";
styleInject(css_248z$7);

function alert(_a) {
    var data = _a.data;
    var item = "\n        <div class=\"cdx-alert cdx-alert-".concat(data.type, "\">\n            <div class=\"cdx-alert__message\">\n                ").concat(data.message, "\n            </div>\n        </div>\n    ");
    return baseBlock(item);
}

var css_248z$6 = ".cdx-checklist{--padding:5px;--color-border:#d0d0d0;--color-border-hover:#b5b5b5;--color-bg-checked:#388ae5;--color-bg-checked-hover:#307cd1;--color-tick:#fff}.cdx-checklist__item{box-sizing:content-box;display:flex}.cdx-checklist__item-text{flex-grow:1;outline:none;padding:var(--padding) 0}.cdx-checklist__item-checkbox{background:#fff;border:1px solid var(--color-border);border-radius:50%;cursor:pointer;display:inline-block;flex-shrink:0;height:20px;margin:var(--padding);margin-left:0;margin-right:7px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:20px}.cdx-checklist__item-checkbox:hover{border-color:var(--color-border-hover)}.cdx-checklist__item-checkbox:after{background:transparent;border:2px solid var(--color-tick);border-right:none;border-top:none;content:\"\";height:4px;left:4px;opacity:0;position:absolute;top:5px;transform:rotate(-45deg);width:9px}.cdx-checklist__item--checked span{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-checklist__item--checked span:hover{background:var(--color-bg-checked-hover)}.cdx-checklist__item--checked span:after{opacity:1}";
styleInject(css_248z$6);

function checklist(_a) {
    var data = _a.data;
    var item = "\n        <div class=\"cdx-block cdx-checklist\">\n            ".concat(data.items.map(function (i) {
        return "<div class=\"cdx-checklist__item ".concat(i.checked ? 'cdx-checklist__item--checked' : '', "\">\n                    <span class=\"cdx-checklist__item-checkbox\" ></span>\n                    <div class=\"cdx-checklist__item-text\" contenteditable=\"false\">\n                        ").concat(i.text, "\n                    </div>\n                </div>");
    }).join(''), "\n        </div>\n    ");
    return baseBlock(item);
}

var css_248z$5 = ".ce-code__textarea{word-wrap:normal;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;color:#41314e;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6em;min-height:200px;overflow-x:auto;resize:vertical;white-space:pre;width:100%}";
styleInject(css_248z$5);

function code(_a) {
    var data = _a.data;
    var item = "\n        <div class=\"cdx-block ce-code\">\n            <textarea class=\"ce-code__textarea cdx-input\" placeholder=\"Enter a code\" disabled=\"\">\n                ".concat(data.code, "\n            </textarea>\n        </div>\n    ");
    return baseBlock(item);
}

var css_248z$4 = ".image-tool{--bg-color:#cdd1e0;--front-color:#388ae5;--border-color:#e8e8eb}.image-tool__image{border-radius:3px;margin-bottom:10px;overflow:hidden;justify-content:center;display:flex}.image-tool__image-picture{display:flex;max-width:100%;vertical-align:bottom}.image-tool__image-preloader{background-color:var(--bg-color);background-position:50%;background-size:cover;border-radius:50%;height:50px;margin:auto;position:relative;width:50px}.image-tool__image-preloader:after{animation:image-preloader-spin 2s linear infinite;border:2px solid var(--bg-color);border-radius:50%;border-top-color:var(--front-color);box-sizing:border-box;content:\"\";height:60px;left:50%;margin-left:-30px;margin-top:-30px;position:absolute;top:50%;width:60px;z-index:3}.image-tool__caption[contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);display:none;font-weight:400;position:absolute!important}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before,^.image-tool--empty__caption,^.image-tool--empty__image,^.image-tool--loading__caption{display:none}.image-tool .cdx-button{align-items:center;display:flex;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,^.image-tool--filled__image-preloader{display:none}^.image-tool--loading__image{background-color:#fff;border:1px solid var(--border-color);display:flex;min-height:200px}.image-tool--loading .cdx-button,^.image-tool--loading__image-picture{display:none}^.image-tool--withBorder__image{border:1px solid var(--border-color)}^.image-tool--withBackground__image{background:var(--bg-color);padding:15px}^.image-tool--withBackground__image-picture{margin:0 auto;max-width:60%}^.image-tool--stretched__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
styleInject(css_248z$4);

function image(_a) {
    var data = _a.data;
    var stretched = data.stretched ? 'image-tool--stretched' : '';
    var border = data.withBorder ? 'image-tool--withBorder' : '';
    var background = data.withBackground ? 'image-tool--withBackground' : '';
    var item = "\n        <div class=\"cdx-block image-tool image-tool--filled ".concat(stretched, " ").concat(border, " ").concat(background, "\">\n            <div class=\"image-tool__image\">\n                <img class=\"image-tool__image-picture\" \n                    src=\"").concat(data.url, "\" \n                    alt=\"").concat(data.alt || '', "\" \n                >\n            </div>\n            <div class=\"cdx-input image-tool__caption\" contenteditable=\"false\" data-placeholder=\"Caption\">\n                ").concat(data.caption, "\n            </div>\n        </div>\n    ");
    return baseBlock(item);
}

var css_248z$3 = ".link-tool{position:relative}.link-tool__input{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E\");background-position:10px;background-repeat:no-repeat;overflow:hidden;padding-left:38px;text-overflow:ellipsis;white-space:nowrap}.link-tool__input-holder{position:relative}^^.link-tool__input-holder--error{background-color:#fff3f6;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23E09393' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23E09393' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E\");border-color:#f3e0e0;box-shadow:inset 0 1px 3px 0 rgba(146,62,62,.05);color:#a95a5a}.link-tool__input[contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0;position:absolute}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{background-color:#f4f5f7;box-shadow:inset 0 1px 3px 0 rgba(102,85,107,.04);height:100%;position:absolute;width:0;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;display:block;padding:25px;text-decoration:none!important}.link-tool__content:after{clear:both;content:\"\";display:table}.link-tool__content--rendered{animation:link-in .45s cubic-bezier(.215,.61,.355,1) 1;background:#fff;border:1px solid hsla(240,3%,79%,.48);border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.1);will-change:filter}.link-tool__content--rendered:hover{box-shadow:0 0 3px rgba(0,0,0,.16)}.link-tool__image{background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:3px;float:right;height:65px;margin:0 0 0 30px;width:65px}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}+^.link-tool__title__anchor{margin-top:25px}.link-tool__description{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:15px;line-height:1.55em;margin:0 0 20px;overflow:hidden}.link-tool__anchor{border:0!important;color:#888!important;display:block;font-size:15px;line-height:1em;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}";
styleInject(css_248z$3);

var CSS$2 = {
    baseClass: 'cdx-block',
    input: 'cdx-input',
    container: 'link-tool',
    inputEl: 'link-tool__input',
    inputHolder: 'link-tool__input-holder',
    inputError: 'link-tool__input-holder--error',
    linkContent: 'link-tool__content',
    linkContentRendered: 'link-tool__content--rendered',
    linkImage: 'link-tool__image',
    linkTitle: 'link-tool__title',
    linkDescription: 'link-tool__description',
    linkText: 'link-tool__anchor',
    progress: 'link-tool__progress',
    progressLoading: 'link-tool__progress--loading',
    progressLoaded: 'link-tool__progress--loaded',
};
function linkTool(_a) {
    var data = _a.data;
    var nodes = {
        wrapper: make('div', CSS$2.baseClass),
        container: make('div', CSS$2.container),
        linkImage: make('div', CSS$2.linkImage),
        linkTitle: make('div', CSS$2.linkTitle),
        linkDescription: make('p', CSS$2.linkDescription),
        linkText: make('span', CSS$2.linkText),
        linkContent: make('a', CSS$2.linkContent, {
            target: '_blank',
            rel: 'nofollow noindex noreferrer',
        }),
    };
    nodes.container.appendChild(nodes.linkContent);
    /**
     * If Tool already has data, render link preview, otherwise insert input
     */
    if (Object.keys(data.meta).length) {
        nodes.container.appendChild(nodes.linkContent);
        showLinkPreview(data.meta, data.link, nodes);
    }
    nodes.wrapper.appendChild(nodes.container);
    var trueWrapper = make('div');
    trueWrapper.appendChild(nodes.wrapper);
    return baseBlock(trueWrapper.innerHTML);
}
function showLinkPreview(_a, link, nodes) {
    var image = _a.image, title = _a.title, description = _a.description;
    if (image && image.url) {
        nodes.linkImage.style.backgroundImage = "url(".concat(image.url, ")");
        nodes.linkContent.appendChild(nodes.linkImage);
    }
    if (title) {
        nodes.linkTitle.textContent = title;
        nodes.linkContent.appendChild(nodes.linkTitle);
    }
    if (description) {
        nodes.linkDescription.textContent = description;
        nodes.linkContent.appendChild(nodes.linkDescription);
    }
    nodes.linkContent.classList.add(CSS$2.linkContentRendered);
    nodes.linkContent.setAttribute('href', link);
    nodes.linkContent.appendChild(nodes.linkText);
    try {
        nodes.linkText.textContent = (new URL(link)).hostname;
    }
    catch (e) {
        nodes.linkText.textContent = link;
    }
}

var css_248z$2 = ".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{margin-bottom:10px;min-height:158px}.cdx-quote [contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0;position:absolute}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}";
styleInject(css_248z$2);

var CSS$1 = {
    baseClass: 'cdx-block',
    wrapper: 'cdx-quote',
    text: 'cdx-quote__text',
    input: 'cdx-input',
    caption: 'cdx-quote__caption',
};
function quote(_a) {
    var data = _a.data;
    var wrapper = make('div');
    var container = make('blockquote', [CSS$1.baseClass, CSS$1.wrapper]);
    var quote = make('div', [CSS$1.input, CSS$1.text], {
        innerHTML: data.text,
    });
    var caption = make('div', [CSS$1.input, CSS$1.caption], {
        innerHTML: data.caption,
    });
    container.appendChild(quote);
    container.appendChild(caption);
    wrapper.appendChild(container);
    return baseBlock(wrapper.innerHTML);
}

function raw(_a) {
    var data = _a.data;
    return baseBlock(data.html);
}

var css_248z$1 = ".cdx-warning{position:relative}@media (min-width:736px){.cdx-warning{padding-left:36px}}.cdx-warning [contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0;position:absolute}.cdx-warning [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Crect width='14' height='14' x='5' y='5' stroke='%23000' stroke-width='2' rx='4'/%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-width='2' d='M12 9v3M12 15.02v-.01'/%3E%3C/svg%3E\");background-size:24px 24px;content:\"\";height:24px;left:0;margin-top:8px;position:absolute;width:24px}@media (max-width:735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}";
styleInject(css_248z$1);

function warning(_a) {
    var data = _a.data;
    return baseBlock("\n        <div class=\"cdx-block cdx-warning\">\n            <div class=\"cdx-input cdx-warning__title\">\n                ".concat(data.title, "\n            </div>\n            <div class=\"cdx-input cdx-warning__message\">\n                ").concat(data.message, "\n            </div>\n        </div>"));
}

var css_248z = "^.embed-tool--loading__caption{display:none}^.embed-tool--loading__preloader{display:block}^.embed-tool--loading__content{display:none}.embed-tool__preloader{border:1px solid #e6e9eb;border-radius:5px;box-sizing:border-box;display:none;height:200px;position:relative}.embed-tool__preloader:before{animation:embed-preloader-spin 2s linear infinite;border:2px solid #cdd1e0;border-radius:50%;border-top-color:#388ae5;box-sizing:border-box;content:\"\";height:30px;left:50%;margin-left:-15px;margin-top:-25px;position:absolute;top:50%;width:30px;z-index:3}.embed-tool__url{bottom:20px;color:#7b7e89;font-size:11px;left:50%;max-width:250px;overflow:hidden;position:absolute;text-overflow:ellipsis;transform:translateX(-50%);white-space:nowrap}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{color:#707684;content:attr(data-placeholder);font-weight:400;opacity:0;position:absolute}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
styleInject(css_248z);

/* eslint-disable no-useless-escape */
var Services = {
    vimeo: {
        regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
        embedUrl: 'https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0',
        html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
        height: 320,
        width: 580,
    },
    youtube: {
        regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
        embedUrl: 'https://www.youtube.com/embed/<%= remote_id %>',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
        id: function (_a) {
            var id = _a[0], params = _a[1];
            if (!params && id) {
                return id;
            }
            var paramsMap = {
                start: 'start',
                end: 'end',
                t: 'start',
                // eslint-disable-next-line camelcase
                time_continue: 'start',
                list: 'list',
            };
            params = params.slice(1)
                .split('&')
                .map(function (param) {
                var _a = param.split('='), name = _a[0], value = _a[1];
                if (!id && name === 'v') {
                    id = value;
                    return null;
                }
                if (!paramsMap[name]) {
                    return null;
                }
                if (value === 'LL'
                    || value.startsWith('RDMM')
                    || value.startsWith('FL')) {
                    return null;
                }
                return "".concat(paramsMap[name], "=").concat(value);
            })
                .filter(function (param) { return !!param; });
            return id + '?' + params.join('&');
        },
    },
    coub: {
        regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
        embedUrl: 'https://coub.com/embed/<%= remote_id %>',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
    },
    vine: {
        regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
        embedUrl: 'https://vine.co/v/<%= remote_id %>/embed/simple/',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
    },
    imgur: {
        regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
        embedUrl: 'http://imgur.com/<%= remote_id %>/embed',
        html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
        height: 500,
        width: 540,
    },
    gfycat: {
        regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
        embedUrl: 'https://gfycat.com/ifr/<%= remote_id %>',
        html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
        height: 436,
        width: 580,
    },
    'twitch-channel': {
        regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
        embedUrl: 'https://player.twitch.tv/?channel=<%= remote_id %>',
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600,
    },
    'twitch-video': {
        regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
        embedUrl: 'https://player.twitch.tv/?video=v<%= remote_id %>',
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600,
    },
    'yandex-music-album': {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
        embedUrl: 'https://music\.yandex\.ru/iframe/#album/<%= remote_id %>/',
        html: '<iframe frameborder=\"0\" style=\"border:none;width:540px;height:400px;\" style=\"width:100%;\" height=\"400\"></iframe>',
        height: 400,
        width: 540,
    },
    'yandex-music-track': {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
        embedUrl: 'https://music\.yandex\.ru/iframe/#track/<%= remote_id %>/',
        html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
        height: 100,
        width: 540,
        id: function (ids) { return ids.join('/'); },
    },
    'yandex-music-playlist': {
        regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
        embedUrl: 'https://music\.yandex\.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/',
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
        height: 400,
        width: 540,
        id: function (ids) { return ids.join('/'); },
    },
    codepen: {
        regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
        embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
        html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
        height: 300,
        width: 600,
        id: function (ids) { return ids.join('/embed/'); },
    },
    instagram: {
        regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
        embedUrl: 'https://www.instagram.com/p/<%= remote_id %>/embed',
        html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 505,
        width: 400,
    },
    twitter: {
        regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,
        embedUrl: 'https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>',
        html: '<iframe width="300" height="650" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 650,
        width: 300,
        id: function (ids) { return ids.join('/status/'); },
    },
    pinterest: {
        regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
        embedUrl: 'https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>',
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
        id: function (ids) {
            return ids[1];
        },
    },
    facebook: {
        regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500',
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
        id: function (ids) {
            return ids.join('/');
        },
    },
    aparat: {
        regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
        embedUrl: 'https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame',
        html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 300,
        width: 600,
    },
    miro: {
        regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
        embedUrl: 'https://miro.com/app/live-embed/<%= remote_id %>',
        html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>',
    }
};

/* eslint-disable @typescript-eslint/ban-ts-comment */
var CSS = {
    baseClass: 'cdx-block',
    container: 'embed-tool',
    containerLoading: 'embed-tool--loading',
    preloader: 'embed-tool__preloader',
    caption: 'embed-tool__caption',
    url: 'embed-tool__url',
    content: 'embed-tool__content',
};
function embed(_a) {
    var data = _a.data;
    var html = Services[data.service].html;
    var container = make('div', [CSS.baseClass, CSS.container, CSS.containerLoading]);
    var caption = make('div', [CSS.caption], {
        contentEditable: false,
    });
    var template = make('template');
    caption.innerHTML = data.caption || '';
    template.innerHTML = html;
    // @ts-ignore
    template.content.firstChild.setAttribute('src', data.embed);
    // @ts-ignore
    template.content.firstChild.classList.add(CSS.content);
    // const embedIsReady = this.embedIsReady(container);
    // @ts-ignore
    container.appendChild(template.content.firstChild);
    container.appendChild(caption);
    // embedIsReady
    //   .then(() => {
    //     container.classList.remove(this.CSS.containerLoading);
    //   });
    var wrapper = make('div');
    wrapper.appendChild(container);
    return baseBlock(wrapper.innerHTML);
}

var transformBlocks = {
    alert: alert,
    checklist: checklist,
    code: code,
    delimiter: delimiter,
    header: header,
    image: image,
    LinkTool: linkTool,
    list: nestedList,
    paragraph: paragraph,
    quote: quote,
    raw: raw,
    table: table,
    warning: warning,
    embed: embed,
};

var parser = function (plugins) {
    if (plugins === void 0) { plugins = {}; }
    var parsers = Object.assign({}, transformBlocks, plugins);
    return {
        parse: function (_a) {
            var blocks = _a.blocks;
            return blocks.map(function (block) {
                if (!parsers[block.type]) {
                    debugger;
                }
                return parsers[block.type]
                    ? parsers[block.type](block)
                    : 'Sorry, not realized yet';
            }).join('');
        },
        parseOne: function (block) {
            return parsers[block.type]
                ? parsers[block.type](block)
                : 'Sorry, not realized yet';
        },
    };
};

module.exports = parser;

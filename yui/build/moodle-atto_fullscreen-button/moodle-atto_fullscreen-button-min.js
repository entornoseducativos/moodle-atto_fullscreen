YUI.add("moodle-atto_fullscreen-button",function(e,t){var n="fullscreen",r=!1;e.namespace("M.atto_fullscreen").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(!this.get("enablebutton"))return;var t=this.addButton({icon:"e/fullscreen",callback:this._toggle}),n=this.get("host");t.set("title",M.util.get_string("pluginname","atto_fullscreen")),this._background=e.Node.create('<div style="position: relative"></div>'),n.on("pluginsloaded",function(t,n){this._setFullscreen(n),this.toolbar.after("click",e.bind(this._fitToScreen,this)),e.on("windowresize",e.bind(this._fitToScreen,this))},this,t),n.editor.on("blur",function(e,t){this._setFullscreen(t)},this,t)},disableButtons:function(){return this},_toggle:function(e){e.preventDefault();var t=this.buttons[n];t.getData(r)?(this.unHighlightButtons(n),this._setFullscreen(t)):(this.highlightButtons(n),this._setFullscreen(t,!0))},_fitToScreen:function(){var e=this.buttons[n];if(!e.getData(r))return;var t=this.get("host"),i,s=t.editor.hasAttribute("hidden")||t.editor.getComputedStyle("display")==="none";this._background.setStyles({left:-t.editor.get("winWidth")/2,height:t.editor.get("winHeight"),width:t.editor.get("winWidth")}),window.scrollTo(this._background.getX(),this._background.getY()),t._wrapper.setStyles({maxWidth:"100%",width:"100%",top:0}),t.editor.show(),i=parseFloat(t.editor.getComputedStyle("height"))+t.editor.get("winHeight")-parseFloat(t._wrapper.getComputedStyle("height")),t.editor.setStyles({height:i,maxHeight:i}),i=parseFloat(i)+20,t.textarea.setStyles({padding:t.editor.getComputedStyle("padding"),margin:t.editor.getComputedStyle("margin"),width:t.editor.getComputedStyle("width"),height:i,maxHeight:i,top:t.editor.getY()-t.toolbar.getY()}),t.textarea.setStyle("margin-bottom",parseFloat(t.editor.getComputedStyle("margin-bottom"))+20),t.toolbar.ancestor().ancestor().all(".CodeMirror-wrap").setStyles({padding:t.textarea.getStyle("padding"),margin:t.textarea.getStyle("margin"),left:t.textarea.getStyle("left"),top:t.textarea.getStyle("top"),height:parseFloat(t.textarea.getStyle("height"))-20,maxHeight:parseFloat(t.textarea.getStyle("maxHeight"))-20,position:"fixed",width:t.textarea.getStyle("width")});if(s){if(t.textarea.hasAttribute("hidden")||t.textarea.getComputedStyle("display")==="none")this._background.setStyles({padding:t._wrapper.getComputedStyle("padding"),margin:t._wrapper.getComputedStyle("margin"),height:t._wrapper.getComputedStyle("height"),width:t._wrapper.getComputedStyle("width")}),window.scrollTo(this._background.getX(),this._background.getY());this.editor.hide()}},_setFullscreen:function(t,n){var i=this.get("host");n?(e.one("body").setStyle("overflow","hidden"),this._editorStyle={minHeight:i.editor.getStyle("min-height"),height:i.editor.getStyle("height")},e.one("body").insertBefore(this._background,i._wrapper),i._wrapper.setStyles({position:"fixed",top:"0px",left:"0px",scroll:"auto"}),e.one("body").addClass("atto-fullscreen"),i.textarea.setStyles({position:"fixed",overflow:"auto",left:0}),i._wrapper.setStyles({left:0,position:"fixed"})):(e.one("body").setStyle("overflow","inherit"),this._background.remove(),this._editorStyle&&(i.editor.removeAttribute("style"),i.editor.setStyles(this._editorStyle),i.textarea.getComputedStyle("display")==="none"?(i.textarea.removeAttribute("style"),i.textarea.setStyle("display","none")):i.textarea.removeAttribute("style"),i.toolbar.ancestor().ancestor().all(".CodeMirror-wrap").removeAttribute("style").setStyles(this._editorStyle)),i._wrapper.removeAttribute("style"),e.one("body").removeClass("atto-fullscreen"),i.textarea.setStyle("width",this.toolbar.getComputedStyle("width"))),t.setData(r,!!n),this._fitToScreen()}},{ATTRS:{enablebutton:{value:!1}}})},"@VERSION@",{requires:["event-resize","moodle-editor_atto-plugin"]});

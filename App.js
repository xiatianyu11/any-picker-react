import React, { Component } from 'react';
window.$=require('./AnyPicker/anypicker')

class App extends Component{
componentDidMount() {
    console.log($.fn)
    $("#ip-ios-2").AnyPicker(
        {
          mode: "datetime",
          vAlign: "top",
          animationDuration: 300,
          dateTimeFormat: "yyyy年MM月dd日",
          onBeforeHidePicker: function () {
            console.log("onBeforeHidePicker")
          },
          setOutput:  function (date) {
            console.log(this);
            $(this.elem).val(date)
          },
          onShowPicker: function () {
            console.log(this)
            var $overlaySelector = $(this.tmp.overlaySelector);
            var $oRelativeTo = $((this.setting.relativeTo === null) ? this.setting.inputElement : this.setting.relativeTo),
            $oAPCont = $overlaySelector.find(".ap-cont"),
            iTop = $oRelativeTo.offset().top + $oRelativeTo.outerHeight(),
            ileft = $oRelativeTo.offset().left + $oRelativeTo.outerWidth() - $oRelativeTo.innerWidth();
            console.log($oRelativeTo.offset().top);
            if($.CF.compareStrings(this.setting.vAlign, "top"))
              $oAPCont.css({"top": 0, "left": ileft, margin: 0, transform: `translateY(${iTop}px)`});
          },
          theme: "iOS" // "Default", "iOS", "Android", "Windows"
        });
  }

  render() {
  
    return (<div><button >click</button><br /><input type="text" id="ip-ios-2" readOnly /></div>);
  }
}
export default App;

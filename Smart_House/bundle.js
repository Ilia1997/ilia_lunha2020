(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let SmartHouse = require("./smart_house");

// toogle class for main page
$(document).ready(function () {
  $(".main_btn_bg").click(function (event) {
    $(".main_btn_bg, #sidebar,.title,.tit_h1, .head_content_wrap ").toggleClass(
      "active"
    );
    $("body").toggleClass("lock");
  });
});

class Light extends SmartHouse {
  //dn for delete()
  dn = {
    dn1: ".light_del_btn_item",
    dn2: ".light_comp",
  };
  //tn for turnOnAndTurnOff()
  tn = {
    tn1: ".switch_l",
    tn2: ".switch_l span",
    tn3: ".light_info p",
    tn4: "Світильник",
  };
}
class Jalousie extends SmartHouse {
  //dn for delete()
  dn = {
    dn1: ".jalousie_del_btn_item",
    dn2: ".jalousie_comp",
  };
  //tn for turnOnAndTurnOff()
  tn = {
    tn1: ".switch_j",
    tn2: ".switch_j span",
    tn3: ".jalousie_info p",
    tn4: "Жалюзі",
  };
  // Overriding turnOnAndTurnOff()
  turnOnAndTurnOff() {
    let tn1 = this.tn.tn1;
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn4 = this.tn.tn4;
    $(tn1).click(function () {
      if ($(tn2).css("background-color") == "rgb(204, 204, 204)") {
        $(tn3).text(tn4 + " відкриті");
      } else if ($(tn2).css("background-color") == "rgb(33, 150, 243)") {
        $(tn3).text(tn4 + " закриті");
      }
    });
  }
}
class Warm extends SmartHouse {
  //dn for delete()
  dn = {
    dn1: ".warm_del_btn_item",
    dn2: ".warm_comp",
  };
  //tn for turnOnAndTurnOff()
  tn = {
    tn1: ".switch_w",
    tn2: ".switch_w span",
    tn3: ".warm_info p",
    tn4: "Обігрів",
  };
}

class Tv extends SmartHouse {
  //dn for delete()
  dn = {
    dn1: ".tv_del_btn_item",
    dn2: ".tv_comp",
  };
  //tn for turnOnAndTurnOff()
  tn = {
    tn1: ".switch_tv",
    tn2: ".switch_tv span",
    tn3: ".tv_info p",
    tn4: "Телевізор",
  };
  // creating new func for additional parameters Tv class

  whatchParam() {
    $(".tv_func_icon").click(function () {
      $(".tv_func_icon, .tv_comp,.tv_comp_items").toggleClass("active");
      if (
        $(".switch_tv span").css("background-color") == "rgb(204, 204, 204)"
      ) {
        $(".switch_tv span")[0].click();
      }
    });
    $(".list_of_chanel_wrap").click(function () {
      $(".show_tv_chan, .list_of_chanel_wrap").toggleClass("active");
    });
    $(".search_of_chanel_wrap").click(function () {
      $(".search_info").toggleClass("active");
      setTimeout(function () {
        $("#anim").text("Нових каналів не знайдено");
        $(".loader").css("display", "none");
      }, 6000);
    });
    $(".setting_of_chanel_wrap").click(function () {
      $(".show_tv_set").toggleClass("active");
      let date = new Date();

      $(".date_ch input[type='date']").val(
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
      );
    });
  }
  // creating new func for view tv channels
  seeChannel() {
    $(document).on("click", ".all_chan li", function (e) {
      let lc = $(e.target)[0];
      const textChan = $(lc).text();

      $(".channel_on_text p").text("Ви дивитесь " + textChan);
      $(".channel_photo").css(
        "background",
        "url(./img/" + textChan + ".jpg) no-repeat center top/ cover"
      );
    });
  }
  // creating new func for sound change
  changeSound() {
    $(".slidecontainer input").on("input", function () {
      $("#sound_2").text($(".slidecontainer input").val() + "%");
    });
  }
  // creating new func for change wi-fi state
  changeWifiState() {
    this.tn.tn1 = ".switch_wifi";
    this.tn.tn2 = ".switch_wifi span";
    this.tn.tn3 = "#wifi_state";
    this.tn.tn4 = "Wi-fi";
    return this.turnOnAndTurnOff();
  }
  // creating new func for change economy mode state
  changeEconomyModeState() {
    this.tn.tn1 = ".switch_eco";
    this.tn.tn2 = ".switch_eco span";
    this.tn.tn3 = "#eco_state";
    this.tn.tn4 = "Економ режим";
    return this.turnOnAndTurnOff();
  }
  // creating new func for change state li items with id = state
  changeStateLiItems() {
    $(document).on("click", "#state li", function (e) {
      let elem = $(e.target)[0];
      const className = $(elem).parent().attr("class");
      $("." + className)
        .children()
        .removeClass("active");
      $(this).addClass("active");
    });
  }

  // creating new func for show all settings
  showSetting() {
    $(document).on("click", ".all_set li", function (e) {
      let elem = $(e.target)[0];
      const textChan = $(elem).text();
      const idElem = $(elem).attr("id");

      $(".channel_set_text p").text("Ви налаштовуєте " + textChan);
      $(".channel_show_set").children().css("display", "none");
      $("." + idElem).css("display", "flex");
    });
  }
  // Overriding delete()
  delete() {
    let dn1 = this.dn.dn1;
    let dn2 = this.dn.dn2;

    $(dn1).click(function () {
      $(dn2).remove();
      $(".tv_comp_items").css("display", "none");
    });
  }
}

// сreate classes and activate methods
const light = new Light();
light.turnOnAndTurnOff();
light.delete();
const jalousie = new Jalousie();
jalousie.turnOnAndTurnOff();
jalousie.delete();
const warm = new Warm();
warm.turnOnAndTurnOff();
warm.delete();
const tv = new Tv();
tv.turnOnAndTurnOff();
tv.delete();
tv.whatchParam();
tv.seeChannel();
tv.changeSound();
tv.changeWifiState();
tv.changeStateLiItems();
tv.showSetting();
tv.changeEconomyModeState();

const sh = new SmartHouse();
sh.create();

},{"./smart_house":2}],2:[function(require,module,exports){
class SmartHouse {
  // func for turn on and turn off switches
  turnOnAndTurnOff() {
    let tn1 = this.tn.tn1;
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn4 = this.tn.tn4;
    $(tn1).click(function () {
      if ($(tn2).css("background-color") === "rgb(204, 204, 204)") {
        $(tn3).text(tn4 + " ввімкнено");
      } else if ($(tn2).css("background-color") === "rgb(33, 150, 243)") {
        $(tn3).text(tn4 + " вимкнено");
      }
    });
  }
  //func for create new items

  create() {
    let val;
    let h = 1;

    $(".add_new_comp").click(function () {
      $(".in_add").val("");
      $(".add_new_comp_form").css("display", "flex");
    });
    $(".subm_btn, .subm_btn_del").click(function () {
      $(".add_new_comp_form").css("display", "none");
    });

    $("html").on("click", ".subm_btn", function () {
      val = $(".in_add").val();

      $(".wrap").append(
        ' <div class="some_comp ' +
          h +
          '">' +
          '<div class="name_wrap">' +
          '<div class="name_lgh">' +
          "<h1>" +
          val +
          "</h1>" +
          "</div>" +
          '<div class="some_info' +
          h +
          '">' +
          "<p>" +
          val +
          " вимкнено</p>" +
          "</div>" +
          "</div>" +
          '<div class="light_btn">' +
          '<div class="light_btn_item">' +
          '<label class="switch_s' +
          h +
          '">' +
          '<input type="checkbox" />' +
          '<span id="ssi" class="slider round"></span>' +
          "</label>" +
          "</div>" +
          "</div>" +
          '<div class="light_del_btn">' +
          '<div class="some_del_btn_item" ></div>' +
          "</div>" +
          "</div>"
      );
      $(".switch_s" + h).css({
        position: "relative",
        display: "inline-block",
        width: "60px",
        height: "34px",
      });
      $(".switch_s" + h + " input").css({
        display: "none",
      });
      $(".some_info" + h).css({
        "font-size": "15px",
        color: "#e0e5ea",
        "padding-left": "3px",
      });
      // func for update new items
      $(document).on("click", "span", function (e) {
        let lc = $(e.target).parent()[0];
        let labelClName = $(lc).attr("class");

        $("." + labelClName).click(function () {
          let g = $(this).parent().parent().parent()[0];
          let comonentName = $(g).find("h1").text();

          let className = $(g).attr("class");

          var numEl = parseInt(className.match(/\d+/));

          if (
            $(".switch_s" + numEl + " span").css("background-color") ==
            "rgb(204, 204, 204)"
          ) {
            $(".some_info" + numEl + " p").text(comonentName + " ввімкнено");
          } else if (
            $(".switch_s" + numEl + " span").css("background-color") ==
            "rgb(33, 150, 243)"
          ) {
            $(".some_info" + numEl + " p").text(comonentName + " вимкнено");
          }
        });
      });
      // func for delete new items
      $("html").on("click", ".some_del_btn_item", function () {
        $(this).parent().parent().remove();
      });

      h++;
    });
    // func to create new items by clicking 'Enter' on input
    $(".in_add").keydown(function (event) {
      if (event.which === 13) {
        $(".subm_btn")[0].click();
      }
    });
  }
  delete() {
    let dn1 = this.dn.dn1;
    let dn2 = this.dn.dn2;

    $(dn1).click(function () {
      $(dn2).remove();
    });
  }
}

module.exports = SmartHouse;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNjcmlwdC5qcyIsInNtYXJ0X2hvdXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IFNtYXJ0SG91c2UgPSByZXF1aXJlKFwiLi9zbWFydF9ob3VzZVwiKTtcclxuXHJcbi8vIHRvb2dsZSBjbGFzcyBmb3IgbWFpbiBwYWdlXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLm1haW5fYnRuX2JnXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgJChcIi5tYWluX2J0bl9iZywgI3NpZGViYXIsLnRpdGxlLC50aXRfaDEsIC5oZWFkX2NvbnRlbnRfd3JhcCBcIikudG9nZ2xlQ2xhc3MoXHJcbiAgICAgIFwiYWN0aXZlXCJcclxuICAgICk7XHJcbiAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImxvY2tcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY2xhc3MgTGlnaHQgZXh0ZW5kcyBTbWFydEhvdXNlIHtcclxuICAvL2RuIGZvciBkZWxldGUoKVxyXG4gIGRuID0ge1xyXG4gICAgZG4xOiBcIi5saWdodF9kZWxfYnRuX2l0ZW1cIixcclxuICAgIGRuMjogXCIubGlnaHRfY29tcFwiLFxyXG4gIH07XHJcbiAgLy90biBmb3IgdHVybk9uQW5kVHVybk9mZigpXHJcbiAgdG4gPSB7XHJcbiAgICB0bjE6IFwiLnN3aXRjaF9sXCIsXHJcbiAgICB0bjI6IFwiLnN3aXRjaF9sIHNwYW5cIixcclxuICAgIHRuMzogXCIubGlnaHRfaW5mbyBwXCIsXHJcbiAgICB0bjQ6IFwi0KHQstGW0YLQuNC70YzQvdC40LpcIixcclxuICB9O1xyXG59XHJcbmNsYXNzIEphbG91c2llIGV4dGVuZHMgU21hcnRIb3VzZSB7XHJcbiAgLy9kbiBmb3IgZGVsZXRlKClcclxuICBkbiA9IHtcclxuICAgIGRuMTogXCIuamFsb3VzaWVfZGVsX2J0bl9pdGVtXCIsXHJcbiAgICBkbjI6IFwiLmphbG91c2llX2NvbXBcIixcclxuICB9O1xyXG4gIC8vdG4gZm9yIHR1cm5PbkFuZFR1cm5PZmYoKVxyXG4gIHRuID0ge1xyXG4gICAgdG4xOiBcIi5zd2l0Y2hfalwiLFxyXG4gICAgdG4yOiBcIi5zd2l0Y2hfaiBzcGFuXCIsXHJcbiAgICB0bjM6IFwiLmphbG91c2llX2luZm8gcFwiLFxyXG4gICAgdG40OiBcItCW0LDQu9GO0LfRllwiLFxyXG4gIH07XHJcbiAgLy8gT3ZlcnJpZGluZyB0dXJuT25BbmRUdXJuT2ZmKClcclxuICB0dXJuT25BbmRUdXJuT2ZmKCkge1xyXG4gICAgbGV0IHRuMSA9IHRoaXMudG4udG4xO1xyXG4gICAgbGV0IHRuMiA9IHRoaXMudG4udG4yO1xyXG4gICAgbGV0IHRuMyA9IHRoaXMudG4udG4zO1xyXG4gICAgbGV0IHRuNCA9IHRoaXMudG4udG40O1xyXG4gICAgJCh0bjEpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodG4yKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpID09IFwicmdiKDIwNCwgMjA0LCAyMDQpXCIpIHtcclxuICAgICAgICAkKHRuMykudGV4dCh0bjQgKyBcIiDQstGW0LTQutGA0LjRgtGWXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCQodG4yKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpID09IFwicmdiKDMzLCAxNTAsIDI0MylcIikge1xyXG4gICAgICAgICQodG4zKS50ZXh0KHRuNCArIFwiINC30LDQutGA0LjRgtGWXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuY2xhc3MgV2FybSBleHRlbmRzIFNtYXJ0SG91c2Uge1xyXG4gIC8vZG4gZm9yIGRlbGV0ZSgpXHJcbiAgZG4gPSB7XHJcbiAgICBkbjE6IFwiLndhcm1fZGVsX2J0bl9pdGVtXCIsXHJcbiAgICBkbjI6IFwiLndhcm1fY29tcFwiLFxyXG4gIH07XHJcbiAgLy90biBmb3IgdHVybk9uQW5kVHVybk9mZigpXHJcbiAgdG4gPSB7XHJcbiAgICB0bjE6IFwiLnN3aXRjaF93XCIsXHJcbiAgICB0bjI6IFwiLnN3aXRjaF93IHNwYW5cIixcclxuICAgIHRuMzogXCIud2FybV9pbmZvIHBcIixcclxuICAgIHRuNDogXCLQntCx0ZbQs9GA0ZbQslwiLFxyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIFR2IGV4dGVuZHMgU21hcnRIb3VzZSB7XHJcbiAgLy9kbiBmb3IgZGVsZXRlKClcclxuICBkbiA9IHtcclxuICAgIGRuMTogXCIudHZfZGVsX2J0bl9pdGVtXCIsXHJcbiAgICBkbjI6IFwiLnR2X2NvbXBcIixcclxuICB9O1xyXG4gIC8vdG4gZm9yIHR1cm5PbkFuZFR1cm5PZmYoKVxyXG4gIHRuID0ge1xyXG4gICAgdG4xOiBcIi5zd2l0Y2hfdHZcIixcclxuICAgIHRuMjogXCIuc3dpdGNoX3R2IHNwYW5cIixcclxuICAgIHRuMzogXCIudHZfaW5mbyBwXCIsXHJcbiAgICB0bjQ6IFwi0KLQtdC70LXQstGW0LfQvtGAXCIsXHJcbiAgfTtcclxuICAvLyBjcmVhdGluZyBuZXcgZnVuYyBmb3IgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIFR2IGNsYXNzXHJcblxyXG4gIHdoYXRjaFBhcmFtKCkge1xyXG4gICAgJChcIi50dl9mdW5jX2ljb25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnR2X2Z1bmNfaWNvbiwgLnR2X2NvbXAsLnR2X2NvbXBfaXRlbXNcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAkKFwiLnN3aXRjaF90diBzcGFuXCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIikgPT0gXCJyZ2IoMjA0LCAyMDQsIDIwNClcIlxyXG4gICAgICApIHtcclxuICAgICAgICAkKFwiLnN3aXRjaF90diBzcGFuXCIpWzBdLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5saXN0X29mX2NoYW5lbF93cmFwXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5zaG93X3R2X2NoYW4sIC5saXN0X29mX2NoYW5lbF93cmFwXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNlYXJjaF9vZl9jaGFuZWxfd3JhcFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuc2VhcmNoX2luZm9cIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjYW5pbVwiKS50ZXh0KFwi0J3QvtCy0LjRhSDQutCw0L3QsNC70ZbQsiDQvdC1INC30L3QsNC50LTQtdC90L5cIik7XHJcbiAgICAgICAgJChcIi5sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIH0sIDYwMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNldHRpbmdfb2ZfY2hhbmVsX3dyYXBcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnNob3dfdHZfc2V0XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAkKFwiLmRhdGVfY2ggaW5wdXRbdHlwZT0nZGF0ZSddXCIpLnZhbChcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGRhdGUuZ2V0TW9udGgoKSArIFwiLVwiICsgZGF0ZS5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBjcmVhdGluZyBuZXcgZnVuYyBmb3IgdmlldyB0diBjaGFubmVsc1xyXG4gIHNlZUNoYW5uZWwoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbF9jaGFuIGxpXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCBsYyA9ICQoZS50YXJnZXQpWzBdO1xyXG4gICAgICBjb25zdCB0ZXh0Q2hhbiA9ICQobGMpLnRleHQoKTtcclxuXHJcbiAgICAgICQoXCIuY2hhbm5lbF9vbl90ZXh0IHBcIikudGV4dChcItCS0Lgg0LTQuNCy0LjRgtC10YHRjCBcIiArIHRleHRDaGFuKTtcclxuICAgICAgJChcIi5jaGFubmVsX3Bob3RvXCIpLmNzcyhcclxuICAgICAgICBcImJhY2tncm91bmRcIixcclxuICAgICAgICBcInVybCguL2ltZy9cIiArIHRleHRDaGFuICsgXCIuanBnKSBuby1yZXBlYXQgY2VudGVyIHRvcC8gY292ZXJcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIGNyZWF0aW5nIG5ldyBmdW5jIGZvciBzb3VuZCBjaGFuZ2VcclxuICBjaGFuZ2VTb3VuZCgpIHtcclxuICAgICQoXCIuc2xpZGVjb250YWluZXIgaW5wdXRcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjc291bmRfMlwiKS50ZXh0KCQoXCIuc2xpZGVjb250YWluZXIgaW5wdXRcIikudmFsKCkgKyBcIiVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gY3JlYXRpbmcgbmV3IGZ1bmMgZm9yIGNoYW5nZSB3aS1maSBzdGF0ZVxyXG4gIGNoYW5nZVdpZmlTdGF0ZSgpIHtcclxuICAgIHRoaXMudG4udG4xID0gXCIuc3dpdGNoX3dpZmlcIjtcclxuICAgIHRoaXMudG4udG4yID0gXCIuc3dpdGNoX3dpZmkgc3BhblwiO1xyXG4gICAgdGhpcy50bi50bjMgPSBcIiN3aWZpX3N0YXRlXCI7XHJcbiAgICB0aGlzLnRuLnRuNCA9IFwiV2ktZmlcIjtcclxuICAgIHJldHVybiB0aGlzLnR1cm5PbkFuZFR1cm5PZmYoKTtcclxuICB9XHJcbiAgLy8gY3JlYXRpbmcgbmV3IGZ1bmMgZm9yIGNoYW5nZSBlY29ub215IG1vZGUgc3RhdGVcclxuICBjaGFuZ2VFY29ub215TW9kZVN0YXRlKCkge1xyXG4gICAgdGhpcy50bi50bjEgPSBcIi5zd2l0Y2hfZWNvXCI7XHJcbiAgICB0aGlzLnRuLnRuMiA9IFwiLnN3aXRjaF9lY28gc3BhblwiO1xyXG4gICAgdGhpcy50bi50bjMgPSBcIiNlY29fc3RhdGVcIjtcclxuICAgIHRoaXMudG4udG40ID0gXCLQldC60L7QvdC+0Lwg0YDQtdC20LjQvFwiO1xyXG4gICAgcmV0dXJuIHRoaXMudHVybk9uQW5kVHVybk9mZigpO1xyXG4gIH1cclxuICAvLyBjcmVhdGluZyBuZXcgZnVuYyBmb3IgY2hhbmdlIHN0YXRlIGxpIGl0ZW1zIHdpdGggaWQgPSBzdGF0ZVxyXG4gIGNoYW5nZVN0YXRlTGlJdGVtcygpIHtcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIjc3RhdGUgbGlcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IGVsZW0gPSAkKGUudGFyZ2V0KVswXTtcclxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJChlbGVtKS5wYXJlbnQoKS5hdHRyKFwiY2xhc3NcIik7XHJcbiAgICAgICQoXCIuXCIgKyBjbGFzc05hbWUpXHJcbiAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0aW5nIG5ldyBmdW5jIGZvciBzaG93IGFsbCBzZXR0aW5nc1xyXG4gIHNob3dTZXR0aW5nKCkge1xyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxfc2V0IGxpXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCBlbGVtID0gJChlLnRhcmdldClbMF07XHJcbiAgICAgIGNvbnN0IHRleHRDaGFuID0gJChlbGVtKS50ZXh0KCk7XHJcbiAgICAgIGNvbnN0IGlkRWxlbSA9ICQoZWxlbSkuYXR0cihcImlkXCIpO1xyXG5cclxuICAgICAgJChcIi5jaGFubmVsX3NldF90ZXh0IHBcIikudGV4dChcItCS0Lgg0L3QsNC70LDRiNGC0L7QstGD0ZTRgtC1IFwiICsgdGV4dENoYW4pO1xyXG4gICAgICAkKFwiLmNoYW5uZWxfc2hvd19zZXRcIikuY2hpbGRyZW4oKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5cIiArIGlkRWxlbSkuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gT3ZlcnJpZGluZyBkZWxldGUoKVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGxldCBkbjEgPSB0aGlzLmRuLmRuMTtcclxuICAgIGxldCBkbjIgPSB0aGlzLmRuLmRuMjtcclxuXHJcbiAgICAkKGRuMSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGRuMikucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIudHZfY29tcF9pdGVtc1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8g0YFyZWF0ZSBjbGFzc2VzIGFuZCBhY3RpdmF0ZSBtZXRob2RzXHJcbmNvbnN0IGxpZ2h0ID0gbmV3IExpZ2h0KCk7XHJcbmxpZ2h0LnR1cm5PbkFuZFR1cm5PZmYoKTtcclxubGlnaHQuZGVsZXRlKCk7XHJcbmNvbnN0IGphbG91c2llID0gbmV3IEphbG91c2llKCk7XHJcbmphbG91c2llLnR1cm5PbkFuZFR1cm5PZmYoKTtcclxuamFsb3VzaWUuZGVsZXRlKCk7XHJcbmNvbnN0IHdhcm0gPSBuZXcgV2FybSgpO1xyXG53YXJtLnR1cm5PbkFuZFR1cm5PZmYoKTtcclxud2FybS5kZWxldGUoKTtcclxuY29uc3QgdHYgPSBuZXcgVHYoKTtcclxudHYudHVybk9uQW5kVHVybk9mZigpO1xyXG50di5kZWxldGUoKTtcclxudHYud2hhdGNoUGFyYW0oKTtcclxudHYuc2VlQ2hhbm5lbCgpO1xyXG50di5jaGFuZ2VTb3VuZCgpO1xyXG50di5jaGFuZ2VXaWZpU3RhdGUoKTtcclxudHYuY2hhbmdlU3RhdGVMaUl0ZW1zKCk7XHJcbnR2LnNob3dTZXR0aW5nKCk7XHJcbnR2LmNoYW5nZUVjb25vbXlNb2RlU3RhdGUoKTtcclxuXHJcbmNvbnN0IHNoID0gbmV3IFNtYXJ0SG91c2UoKTtcclxuc2guY3JlYXRlKCk7XHJcbiIsImNsYXNzIFNtYXJ0SG91c2Uge1xyXG4gIC8vIGZ1bmMgZm9yIHR1cm4gb24gYW5kIHR1cm4gb2ZmIHN3aXRjaGVzXHJcbiAgdHVybk9uQW5kVHVybk9mZigpIHtcclxuICAgIGxldCB0bjEgPSB0aGlzLnRuLnRuMTtcclxuICAgIGxldCB0bjIgPSB0aGlzLnRuLnRuMjtcclxuICAgIGxldCB0bjMgPSB0aGlzLnRuLnRuMztcclxuICAgIGxldCB0bjQgPSB0aGlzLnRuLnRuNDtcclxuICAgICQodG4xKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRuMikuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSA9PT0gXCJyZ2IoMjA0LCAyMDQsIDIwNClcIikge1xyXG4gICAgICAgICQodG4zKS50ZXh0KHRuNCArIFwiINCy0LLRltC80LrQvdC10L3QvlwiKTtcclxuICAgICAgfSBlbHNlIGlmICgkKHRuMikuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSA9PT0gXCJyZ2IoMzMsIDE1MCwgMjQzKVwiKSB7XHJcbiAgICAgICAgJCh0bjMpLnRleHQodG40ICsgXCIg0LLQuNC80LrQvdC10L3QvlwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vZnVuYyBmb3IgY3JlYXRlIG5ldyBpdGVtc1xyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgbGV0IGggPSAxO1xyXG5cclxuICAgICQoXCIuYWRkX25ld19jb21wXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5pbl9hZGRcIikudmFsKFwiXCIpO1xyXG4gICAgICAkKFwiLmFkZF9uZXdfY29tcF9mb3JtXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLnN1Ym1fYnRuLCAuc3VibV9idG5fZGVsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5hZGRfbmV3X2NvbXBfZm9ybVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJodG1sXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3VibV9idG5cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YWwgPSAkKFwiLmluX2FkZFwiKS52YWwoKTtcclxuXHJcbiAgICAgICQoXCIud3JhcFwiKS5hcHBlbmQoXHJcbiAgICAgICAgJyA8ZGl2IGNsYXNzPVwic29tZV9jb21wICcgK1xyXG4gICAgICAgICAgaCArXHJcbiAgICAgICAgICAnXCI+JyArXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm5hbWVfd3JhcFwiPicgK1xyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJuYW1lX2xnaFwiPicgK1xyXG4gICAgICAgICAgXCI8aDE+XCIgK1xyXG4gICAgICAgICAgdmFsICtcclxuICAgICAgICAgIFwiPC9oMT5cIiArXHJcbiAgICAgICAgICBcIjwvZGl2PlwiICtcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwic29tZV9pbmZvJyArXHJcbiAgICAgICAgICBoICtcclxuICAgICAgICAgICdcIj4nICtcclxuICAgICAgICAgIFwiPHA+XCIgK1xyXG4gICAgICAgICAgdmFsICtcclxuICAgICAgICAgIFwiINCy0LjQvNC60L3QtdC90L48L3A+XCIgK1xyXG4gICAgICAgICAgXCI8L2Rpdj5cIiArXHJcbiAgICAgICAgICBcIjwvZGl2PlwiICtcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGlnaHRfYnRuXCI+JyArXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImxpZ2h0X2J0bl9pdGVtXCI+JyArXHJcbiAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwic3dpdGNoX3MnICtcclxuICAgICAgICAgIGggK1xyXG4gICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPicgK1xyXG4gICAgICAgICAgJzxzcGFuIGlkPVwic3NpXCIgY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICBcIjwvbGFiZWw+XCIgK1xyXG4gICAgICAgICAgXCI8L2Rpdj5cIiArXHJcbiAgICAgICAgICBcIjwvZGl2PlwiICtcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGlnaHRfZGVsX2J0blwiPicgK1xyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJzb21lX2RlbF9idG5faXRlbVwiID48L2Rpdj4nICtcclxuICAgICAgICAgIFwiPC9kaXY+XCIgK1xyXG4gICAgICAgICAgXCI8L2Rpdj5cIlxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLnN3aXRjaF9zXCIgKyBoKS5jc3Moe1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB3aWR0aDogXCI2MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIuc3dpdGNoX3NcIiArIGggKyBcIiBpbnB1dFwiKS5jc3Moe1xyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIi5zb21lX2luZm9cIiArIGgpLmNzcyh7XHJcbiAgICAgICAgXCJmb250LXNpemVcIjogXCIxNXB4XCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2UwZTVlYVwiLFxyXG4gICAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiM3B4XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBmdW5jIGZvciB1cGRhdGUgbmV3IGl0ZW1zXHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJzcGFuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGxjID0gJChlLnRhcmdldCkucGFyZW50KClbMF07XHJcbiAgICAgICAgbGV0IGxhYmVsQ2xOYW1lID0gJChsYykuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuICAgICAgICAkKFwiLlwiICsgbGFiZWxDbE5hbWUpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGxldCBnID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcclxuICAgICAgICAgIGxldCBjb21vbmVudE5hbWUgPSAkKGcpLmZpbmQoXCJoMVwiKS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICQoZykuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuICAgICAgICAgIHZhciBudW1FbCA9IHBhcnNlSW50KGNsYXNzTmFtZS5tYXRjaCgvXFxkKy8pKTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICQoXCIuc3dpdGNoX3NcIiArIG51bUVsICsgXCIgc3BhblwiKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpID09XHJcbiAgICAgICAgICAgIFwicmdiKDIwNCwgMjA0LCAyMDQpXCJcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiLnNvbWVfaW5mb1wiICsgbnVtRWwgKyBcIiBwXCIpLnRleHQoY29tb25lbnROYW1lICsgXCIg0LLQstGW0LzQutC90LXQvdC+XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgJChcIi5zd2l0Y2hfc1wiICsgbnVtRWwgKyBcIiBzcGFuXCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIikgPT1cclxuICAgICAgICAgICAgXCJyZ2IoMzMsIDE1MCwgMjQzKVwiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIi5zb21lX2luZm9cIiArIG51bUVsICsgXCIgcFwiKS50ZXh0KGNvbW9uZW50TmFtZSArIFwiINCy0LjQvNC60L3QtdC90L5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBmdW5jIGZvciBkZWxldGUgbmV3IGl0ZW1zXHJcbiAgICAgICQoXCJodG1sXCIpLm9uKFwiY2xpY2tcIiwgXCIuc29tZV9kZWxfYnRuX2l0ZW1cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaCsrO1xyXG4gICAgfSk7XHJcbiAgICAvLyBmdW5jIHRvIGNyZWF0ZSBuZXcgaXRlbXMgYnkgY2xpY2tpbmcgJ0VudGVyJyBvbiBpbnB1dFxyXG4gICAgJChcIi5pbl9hZGRcIikua2V5ZG93bihmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxMykge1xyXG4gICAgICAgICQoXCIuc3VibV9idG5cIilbMF0uY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGxldCBkbjEgPSB0aGlzLmRuLmRuMTtcclxuICAgIGxldCBkbjIgPSB0aGlzLmRuLmRuMjtcclxuXHJcbiAgICAkKGRuMSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGRuMikucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU21hcnRIb3VzZTtcclxuIl19

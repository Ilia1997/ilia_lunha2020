(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class LocalStorageUtil {
  constructor() {
    this.keyName = "btns";
  }

  getBtns() {
    const btnLocalStorage = localStorage.getItem(this.keyName);

    if (btnLocalStorage !== null) {
      return JSON.parse(btnLocalStorage);
    }
    return [];
  }
  setBtns(id) {
    let btn = this.getBtns();
    let pushBtn = false;
    const index = btn.indexOf(id);
    if (index === -1) {
      btn.push(id);
      pushBtn = true;
    } else {
      btn.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(btn));

    return { pushBtn, btn };
  }
}

module.exports = LocalStorageUtil;

},{}],2:[function(require,module,exports){
// impart all modules
const LocalStorageUtil = require("./localStorageUtil");
const SmartHouse = require("./smart_house");
const Tv = require("./tv");

const fn1 = ".switch_wifi";
const fn2 = ".switch_wifi span";
const fn3 = "#wifi_state";
const fn4 = "Wi-fi вімкнуто";
const fn5 = "Wi-fi вимкнуто";
const fn6 = "tv_d_wifi";
const fn7 = "tv_d_wifi_1";

const en1 = ".switch_eco";
const en2 = ".switch_eco span";
const en3 = "#eco_state";
const en4 = "Економ режим вімкнуто";
const en5 = "Економ режим вимкнуто";
const en6 = "tv_d_en";
const en7 = "tv_d_en_1";

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
    tn4: "Світильник вімкнено",
    tn5: "Світильник вимкнено",
  };
  rn = {
    rn1: "light_a",
    rn2: "light",
    rn3: "light_a_1",
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
    tn4: "Жалюзі відкриті",
    tn5: "Жалюзі закриті",
  };

  rn = {
    rn1: "jal_b",
    rn2: "jalousie",
    rn3: "jal_b_1",
  };
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
    tn4: "Обігрів вімкнено",
    tn5: "Обігрів вимкнено",
  };
  rn = {
    rn1: "warm_c",
    rn2: "warm",
    rn3: "warm_c_1",
  };
}

const light = new Light();
light.delete();
const jalousie = new Jalousie();
jalousie.delete();
const warm = new Warm();
warm.delete();
const tv = new Tv();
tv.delete();
tv.whatchParam();
tv.seeChannel();
tv.changeSound();
tv.changeStateLiItems();
tv.showSetting();
const sh = new SmartHouse();
sh.create();
const localStorageUtil = new LocalStorageUtil();
// func for main button
$(".main_btn_bg").click(function (event) {
  $(".main_btn_bg, #sidebar,.title,.tit_h1, .head_content_wrap ").toggleClass(
    "active"
  );

  // for localStorage work
  let array_obj = [light, jalousie, warm, tv];

  for (let i in array_obj) {
    let tn1 = array_obj[i].tn.tn1;
    let tn2 = array_obj[i].tn.tn2;
    let ln3 = array_obj[i].rn.rn3;

    let array = localStorageUtil.getBtns();
    console.log(array);
    for (let t in array) {
      console.log(array[t]);
      if (array[t] === ln3) {
        $(tn1 + " input").attr("checked", "checked");

        array_obj[i].turnOn();
        $(tn2).attr("id", ln3);
      }
    }
    for (let r in array) {
      if (array[r] === fn7) {
        $(fn1 + " input").attr("checked", "checked");
        if ($(fn2).css("background-color") == "rgb(33, 150, 243)") {
          $(fn3).text(fn4);
        }
        $(fn2).attr("id", fn7);
      }
    }

    for (let eco in array) {
      if (array[eco] === en7) {
        $(en1 + " input").attr("checked", "checked");
        if ($(en2).css("background-color") == "rgb(33, 150, 243)") {
          $(en3).text(en4);
        }
        $(en2).attr("id", en7);
      }
    }
  }
  $("body").toggleClass("lock");
});
// click on check box
$(document).on("click", function (e) {
  let elem = $(e.target)[0];
  console.log(elem);

  let array_obj = [light, jalousie, warm, tv];
  for (let i in array_obj) {
    let ln1 = array_obj[i].rn.rn1;
    let ln3 = array_obj[i].rn.rn3;

    if ($(elem).attr("id") === ln1) {
      array_obj[i].turnOn();
      $(elem).attr("id", ln3);
      localStorageUtil.setBtns($(elem).attr("id"));
    } else if ($(elem).attr("id") === ln3) {
      array_obj[i].turnOff();

      localStorageUtil.setBtns($(elem).attr("id"));
      $(elem).attr("id", ln1);
    }
  }
  if ($(elem).attr("id") === fn6) {
    tv.changeWifiTurnOn(fn4);

    $(elem).attr("id", fn7);
    localStorageUtil.setBtns($(elem).attr("id"));
  } else if ($(elem).attr("id") === fn7) {
    tv.changeWifiTurnOff(fn5);
    localStorageUtil.setBtns($(elem).attr("id"));
    $(elem).attr("id", fn6);
  } else if ($(elem).attr("id") === en6) {
    tv.changeEcoTurnOn(en4);
    $(elem).attr("id", en7);
    localStorageUtil.setBtns($(elem).attr("id"));
  } else if ($(elem).attr("id") === en7) {
    tv.changeEcoTurnOff(en5);
    localStorageUtil.setBtns($(elem).attr("id"));
    $(elem).attr("id", en6);
  }
});

},{"./localStorageUtil":1,"./smart_house":3,"./tv":4}],3:[function(require,module,exports){
class SmartHouse {
  // func for turn on and turn off switches
  turnOn() {
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn4 = this.tn.tn4;
    console.log("m1on");
    if ($(tn2).css("background-color") == "rgb(204, 204, 204)") {
      $(tn3).text(tn4);
    }
  }

  turnOff() {
    let tn1 = this.tn.tn1;
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn5 = this.tn.tn5;
    console.log("m2off");
    if ($(tn2).css("background-color") == "rgb(33, 150, 243)") {
      $(tn3).text(tn5);
    }
    $(tn1 + " input").attr("checked", "1");
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

},{}],4:[function(require,module,exports){
const SmartHouse = require("./smart_house");

const fn1 = ".switch_wifi";
const fn2 = ".switch_wifi span";
const fn3 = "#wifi_state";

const en1 = ".switch_eco";
const en2 = ".switch_eco span";
const en3 = "#eco_state";

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
    tn4: "Телевізор вімкнено",
    tn5: "Телевізор вимкнено",
  };

  rn = {
    rn1: "tv_d",
    rn2: "tv",
    rn3: "tv_d_1",
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
  // func for change wi-fi state
  changeWifiTurnOff(info) {
    console.log("m2off");
    if ($(fn2).css("background-color") == "rgb(33, 150, 243)") {
      $(fn3).text(info);
    }
    $(fn1 + " input").attr("checked", "1");
  }
  //  func for change wi-fi state
  changeWifiTurnOn(info) {
    console.log("m1on");
    if ($(fn2).css("background-color") == "rgb(204, 204, 204)") {
      $(fn3).text(info);
    }
  }
  // func for change economy mode state
  changeEcoTurnOff(info) {
    console.log("m2off");
    if ($(en2).css("background-color") == "rgb(33, 150, 243)") {
      $(en3).text(info);
    }
    $(en1 + " input").attr("checked", "1");
  }

  changeEcoTurnOn(info) {
    console.log("m1on");
    if ($(en2).css("background-color") == "rgb(204, 204, 204)") {
      $(en3).text(info);
    }
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
      console.log(idElem);

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
module.exports = Tv;

},{"./smart_house":3}]},{},[2]);

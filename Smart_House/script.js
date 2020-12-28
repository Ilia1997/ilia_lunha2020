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

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

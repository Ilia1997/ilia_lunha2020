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

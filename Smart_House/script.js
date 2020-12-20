$(document).ready(function () {
  $(".main_btn_bg").click(function (event) {
    $(".main_btn_bg, #sidebar,.title,.tit_h1, .head_content_wrap ").toggleClass(
      "active"
    );
    $("body").toggleClass("lock");
  });
});

class SmartHouse {
  turnOnAndTurnOff() {
    let tn1 = this.tn.tn1;
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn4 = this.tn.tn4;
    $(tn1).click(function (event) {
      if ($(tn2).css("background-color") == "rgb(204, 204, 204)") {
        $(tn3).text(tn4 + " ввімкнено");
      } else if ($(tn2).css("background-color") == "rgb(33, 150, 243)") {
        $(tn3).text(tn4 + " вимкнено");
      }
    });
  }

  create() {
    let val;
    let h = 1;
    $(document).ready(function () {
      $(".add_new_comp").click(function (event) {
        $(".in_add").val("");
        $(".add_new_comp_form").css("display", "flex");
      });
      $(".subm_btn, .subm_btn_del").click(function (event) {
        $(".add_new_comp_form").css("display", "none");
      });
    });

    $("html").on("click", ".subm_btn", function (event) {
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

      $(document).on("click", "span", function (e) {
        let lc = $(e.target).parent()[0];
        let labelClName = $(lc).attr("class");

        $("." + labelClName).click(function (event) {
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
      $(document).ready(function () {
        $("html").on("click", ".some_del_btn_item", function (event) {
          $(this).parent().parent().remove();
        });
      });
      h++;
    });
  }
  delete() {
    let dn1 = this.dn.dn1;
    let dn2 = this.dn.dn2;
    $(document).ready(function () {
      $(dn1).click(function (event) {
        $(dn2).remove();
      });
    });
  }
}

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
  turnOnAndTurnOff() {
    let tn1 = this.tn.tn1;
    let tn2 = this.tn.tn2;
    let tn3 = this.tn.tn3;
    let tn4 = this.tn.tn4;
    $(tn1).click(function (event) {
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

  whatchParam() {
    $(document).ready(function () {
      $(".tv_func_icon").click(function (event) {
        $(".tv_func_icon, .tv_comp,.tv_comp_items").toggleClass("active");
        if (
          $(".switch_tv span").css("background-color") == "rgb(204, 204, 204)"
        ) {
          $(".switch_tv span")[0].click();
        }
      });
      $(".list_of_chanel_wrap").click(function (event) {
        $(".show_tv_chan, .list_of_chanel_wrap").toggleClass("active");
      });
      $(".search_of_chanel_wrap").click(function (event) {
        $(".search_info").toggleClass("active");
      });
    });
  }
  seeChannel() {
    $(document).on("click", "li", function (e) {
      let lc = $(e.target)[0];
      const textChan = $(lc).text();

      $(".channel_on_text p").text("Ви дивитесь " + textChan);
      $(".channel_photo").css(
        "background",
        "url(./img/" + textChan + ".jpg) no-repeat center top/ cover"
      );
      // let labelClName = $(lc).attr("class");channel_photo
      // console.log(labelClName);
    });
  }
}

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

const sh = new SmartHouse();
sh.create();

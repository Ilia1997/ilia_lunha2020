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

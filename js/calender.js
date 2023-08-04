$(function () {
  // .sec3 - pc/tablet
  $(".multi-select-calendar").pignoseCalendar({
    multiple: true,
    select: onSelectHandler,
    minDate: moment().format("YYYY-MM-DD"), // 지난날짜 선택 못함
  });
  function onSelectHandler(date, context) {
    var $element = context.element;
    var $calendar = context.calendar;
    var $box = $element.siblings(".box").show();
    var text = "선택하신 날짜 :  ";

    if (date[0] !== null) {
      text += date[0].format("YYYY-MM-DD");
    }

    if (date[0] !== null && date[1] !== null) {
      text += " ~ ";
    } else if (date[0] === null && date[1] == null) {
      text += "nothing";
    }

    if (date[1] !== null) {
      text += date[1].format("YYYY-MM-DD");
    }

    $box.text(text);
  }
});

var userData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self_Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

function daily(){
	userData.filter(function (element) {
	  $("." + element.title + " ." + "hours").text(
		element.timeframes.daily.current + "hrs"
	  );
	  $("." + element.title + " ." + "prev_hours").text(
		"Last Week - " + element.timeframes.daily.previous + "hrs"
	  );
	});
	
}

function weekly(){
	userData.filter(function (element) {
		$("." + element.title + " ." + "hours").text(
		  element.timeframes.weekly.current + "hrs"
		);
		$("." + element.title + " ." + "prev_hours").text(
		  "Last Week - " + element.timeframes.weekly.previous + "hrs"
		);
	  });
}

function monthly(){
	userData.filter(function (element) {
		$("." + element.title + " ." + "hours").text(
		  element.timeframes.monthly.current + "hrs"
		);
		$("." + element.title + " ." + "prev_hours").text(
		  "Last Week - " + element.timeframes.monthly.previous + "hrs"
		);
	  });
}

daily();
$(".daily").css("color", "white");


$(".daily").click(function (e) {
  daily();
  $(".weekly").css("color", "hsl(236, 100%, 87%)");
  $(".monthly").css("color", "hsl(236, 100%, 87%)");
  $(".daily").css("color", "white");
});

$(".weekly").click(function (e) {
  weekly();
  $(".weekly").css("color", "white");
  $(".monthly").css("color", "hsl(236, 100%, 87%)");
  $(".daily").css("color", "hsl(236, 100%, 87%)");


});

$(".monthly").click(function (e) {
  monthly();
  $(".weekly").css("color", "hsl(236, 100%, 87%)");
  $(".monthly").css("color", "white");
  $(".daily").css("color", "hsl(236, 100%, 87%)");

});

$(".fa-solid").hover(function () {
	console.log("sssssss");
		$(".grid_content").removeClass("grid_hower");
	}, function () {
		$(".grid_content").addClass("grid_hower");
	}
);

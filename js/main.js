$(function () {
 $(".header__slider").slick({
  infinite: true,
  fade: true,
  asNavFor: ".slider-dots"
 });

 $(".slider-dots").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: ".header__slider"
 });

 $(".surf-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-map",
  responsive: [
   {
    breakpoint: 1150,
    settings: {
     slidesToShow: 3
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2
    }
   },
   {
    breakpoint: 415,
    settings: {
     slidesToShow: 1,
     arrows:false,
    }
   }
  ]
 });

 $(".slider-map").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".surf-slider",
  focusOnSelect: true,
  responsive: [
   {
    breakpoint: 680,
    settings: {
     slidesToShow: 3
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2
    }
   },
   {
    breakpoint: 415,
    settings: {
     slidesToShow: 1,
    }
   }
  ]
 });

 $(".holder__slider, .shop__slider ").slick({
  infinite: true,
  fade: true
 });

 $(
  '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/icons/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/icons/minus.svg" alt=""></div></div>'
 ).insertAfter(".quantity input");
 $(".quantity").each(function () {
  var spinner = $(this),
   input = spinner.find('input[type="number"]'),
   btnUp = spinner.find(".quantity-up"),
   btnDown = spinner.find(".quantity-down"),
   min = input.attr("min"),
   max = input.attr("max");

  btnUp.click(function () {
   var oldValue = parseFloat(input.val());
   if (oldValue >= max) {
    var newVal = oldValue;
   } else {
    var newVal = oldValue + 1;
   }
   spinner.find("input").val(newVal);
   spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
   var oldValue = parseFloat(input.val());
   if (oldValue <= min) {
    var newVal = oldValue;
   } else {
    var newVal = oldValue - 1;
   }
   spinner.find("input").val(newVal);
   spinner.find("input").trigger("change");
  });
 });

 $(".quantity-button").on("click", function () {
  let summ =
   $(".nights").val() * $(".summ").data("nights") +
   ($(".guests").val() - 1) * $(".summ").data("guests");
  $(".summ").html("$" + summ);
 });

 let summ =
  $(".nights").val() * $(".summ").data("nights") +
  ($(".guests").val() - 1) * $(".summ").data("guests");
 $(".summ").html("$" + summ);

 $(".surfboard-box__circle").on("click", function () {
  $(this).toggleClass("active");
 });

 $(".ham").on("click", function () {
  $(this).toggleClass("active");
  $(".menu").toggleClass("active");
  $(".header__end").toggleClass("active");
  $(".logo").toggleClass("active");
 });

 new WOW().init();
});

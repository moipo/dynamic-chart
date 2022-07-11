 //$('body').append('<a ref="http://google.com">Перейти в гугл</a>');
jQuery("document").ready(function(){ //
//  $('body').append('<a href="http://google.com">Перейти в гугл</a>');
  //$('p').remove();
//  var a;
//  a = $('p').clone();
//  alert(a)
  //$("#first_row").on("change", function(){
    //var ans = Number($("#first_row").val()) + Number($("#second_row").val());
    //$("#answer").html($("#first_row").val());
    //alert($("#first_row").val());
  //$("#buttoncreatetask").on("click", function(){
  //  $(".task").clone().insertAfter(this);

  // $("#first_row").change(function(){
  //   var a = $("#first_row").val()
  //     if (a > 50){
  //       alert("значение больше 50")
  //     } else if (a < 50) {
  //       alert("значение меньше 50")
  //     }
  //a = $.ajax('https://api.vk.com/method/wall.get?access_token=3e2b6e7d3e2b6e7d3e2b6e7dff3e567fa533e2b3e2b6e7d5c87d522c6655600d3791d18&v=5.131&domain=mem_archive');

  // setTimeout(function(){
  //    $("#answer").html('8');
  // },10);
  // setTimeout(function(){
  //    $("#answer").html('6');
  // },20);
  // setTimeout(function(){
  //    $("#answer").html('32');
  // },2000);
  // setTimeout(function(){
  //    $("#answer").html('53');
  // },4000);


  //    $(".task").clone().insertAfter(".task");
  // },500);
  // setTimeout(function(){
  //    $(".task").clone().insertAfter(".task");
  // },2000);
  // setTimeout(function(){
  //    $(".task").clone().insertAfter(".task");
  // },4000);
  // $("#is").on("change",function(){
  //   alert(5);
  //   //$(".par one").append($(".par one").val());
  // })
  // $(".two").on("change",function(){
  //   $(".two").html('32');
  //   alert($(".two").val());
  //   //$(".two").html($(".two").val());
  //
  //
  // })



//  $(".two").on("change",function(){
//    $("#slv2").html($(".two").val());
//  })



  //$(".par").on("change",function(){

//  })


  var
    canvasPlot = document.getElementById('canvas_plot'),
    ctx = canvasPlot.getContext('2d');

    //code

   // ctx.fillStyle = 'orange';
   // var x = 50, y = 50;
   // ctx.fillRect(50,50,300,200) //позиции по x y (y идёт вниз в кэнве), длина , ширина.
   //
   // setInterval(function(){
   //   ctx.fillRect(x++,y++,300,200);
   // }, 5);








    const canvasPlotWidth = canvasPlot.clientWidth;
    const canvasPlotHeight = canvasPlot.clientHeight;

  //  console.log(canvasPlotWidth, canvasPlotHeight);

    const scaleX = 20;    //масштаб в минус
    const scaleY = 20;    //
    const shiftNames = 5;

    const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
    const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;

    ctx.font = '${Math.round{scaleX / 2}px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    //рисуем сетку
    ctx.beginPath();
    ctx.strokeStyle = '#f5f0e8';

    for (let i = 0; i <= canvasPlotWidth; i = i + scaleX){
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvasPlotHeight);

      ctx.fillText((i-xAxis) / scaleX, i + shiftNames, yAxis + shiftNames);
    }

    for (let i = 0; i <= canvasPlotHeight; i= i + scaleY) {
      ctx.moveTo(0, i);
      ctx.lineTo(canvasPlotWidth, i);

      ctx.fillText((yAxis-i) / scaleY, xAxis + shiftNames, i + shiftNames);
    }
    //console.log(canvasPlotWidth, canvasPlotHeight);
    ctx.stroke();
    ctx.closePath();




    //Рисуем главные оси

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.moveTo(xAxis, 0);
    ctx.lineTo(xAxis, canvasPlotHeight);
    ctx.fillText('y', xAxis+20, 0)

    ctx.moveTo(0, yAxis);
    ctx.lineTo(canvasPlotWidth, yAxis);
    ctx.fillText('x', canvasPlotWidth-20, yAxis-20);

    ctx.stroke();
    ctx.closePath();


  //   for (let i = 0; i <= canvasPlotWidth; i+=0.01) { // float
  //     const x = (i - xAxis) / scaleX;
  //     const y =  2*Math.sin(3.54+0.5*x)+Math.pow(1.1,x)+Math.exp(0.1*x);    // формула (радианы)
  //   ctx.fillRect(x*scaleX + xAxis, yAxis - scaleY * y, 4, 4);
  // }


    $(".par").on("change",function(){


    //    ctx.fillStyle = "#9ebaa4"; // цвет внутри форм
    //    ctx.fillRect(0, 0, canvasPlotWidth, canvasPlotHeight);
      //  ctx.fillStyle = "#9ebaa4";
    //  ctx.stroke();
    //  ctx.closePath();
    //  document.getElementById("canvas_plot").style.property.background = "#000000";

      ctx.font = '${Math.round{scaleX / 2}px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      var k = Number($(".one").val());
      $("#slv1").html(k);

      var l = Number($(".two").val());
      $("#slv2").html(l);

      var m = Number($(".three").val());
      $("#slv3").html(m);

      var n= Number($(".four").val());
      $("#slv4").html(n);

      var p = Number($(".five").val());
      $("#slv5").html(p);



      // document.getElementById("first_form").submit();
      // document.getElementTagName("first_form").submit();
      // document.getElementById("#first_form").submit();
      // document.getElementTagName("#first_form").submit();
      // document.form.submit()
      // document.getElementById("first_form").submit();
      // document.getElementById("hiddenbutton").click();
      // document.getElementById("#hiddenbutton").click();
      // this.form.submit();
      // $('input[type=submit]').hide();
      //
      //
      // const first_form = document.ElementById("first_form");
      // myForm.addEventListener("change", function(){
      //   document.getElementById("first_form").submit();
      //   document.getElementTagName("first_form").submit();
      //   document.getElementById("#first_form").submit();
      //   document.getElementTagName("#first_form").submit();
      //   document.form.submit()
      //   document.getElementById("first_form").submit();
      //   document.getElementById("hiddenbutton").click();
      //   document.getElementById("#hiddenbutton").click();
      //   this.form.submit();
      // });


      ctx.beginPath();
      ctx.fillStyle = '#9ebaa4'; // ничего
      ctx.fillRect(0, 0, canvasPlotWidth, canvasPlotHeight);
      ctx.stroke();
      ctx.closePath();

      //рисуем сетку
      //document.getElementById("canvas_plot").style.property.background-color = "blue";

    //  $("#canvas_plot").clone().insertAfter(this);

    //  a = $("#canvas_plot").clone();
    //  $('#canvas_plot').remove();
    //  $('.five').append('a')
      //a.insertAfter(this)


      ctx.beginPath();
    //  ctx.moveTo(0, 0);
      ctx.strokeStyle = '#f5f0e8'; //цвет сетки

      for (let i = 0; i <= canvasPlotWidth; i = i + scaleX){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasPlotHeight);
        ctx.fillStyle = "#000000"
        ctx.fillText((i-xAxis) / scaleX, i + shiftNames, yAxis + shiftNames);
      }

      for (let i = 0; i <= canvasPlotHeight; i= i + scaleY) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvasPlotWidth, i);

        ctx.fillText((yAxis-i) / scaleY, xAxis + shiftNames, i + shiftNames);
      }
      ctx.fillStyle = "#9ebaa4"
      //console.log(canvasPlotWidth, canvasPlotHeight);
      ctx.stroke();
      ctx.closePath();




      //Рисуем главные оси

      ctx.beginPath();
      ctx.strokeStyle = '#000000'; // цвет линий
      ctx.moveTo(xAxis, 0);
      ctx.lineTo(xAxis, canvasPlotHeight);
      ctx.fillStyle = "#000000"
      ctx.fillText('y', xAxis+20, 0)

      ctx.moveTo(0, yAxis);
      ctx.lineTo(canvasPlotWidth, yAxis);
      ctx.fillText('x', canvasPlotWidth-20, yAxis-20);
      ctx.fillStyle = "#9ebaa4"

      ctx.stroke();
      ctx.closePath();




      // strokestyle != fillstyle. График и фон одного цвета т.к. прямоугольники
      ctx.fillStyle = "#FF0000";

    for (let i = 0; i <= canvasPlotWidth; i+=0.01) { // float
      const x = (i - xAxis) / scaleX;
      //const y = k * x + l;
      const y =  k*Math.sin(l+m*x)+Math.pow(n,x)+Math.exp(p*x);    // формула (радианы)
      //const y =  k*Math.sin(l+m*x)+Math.pow(n,x)+Math.exp(p*x);

      ctx.fillRect(x*scaleX + xAxis, yAxis - scaleY * y, 4, 4);
    }
    ctx.fillStyle = "#000000";


    })







    //
    // const first_form = document.ElementById("first_form");
    // myForm.addEventListener("change", function(){
    //   document.getElementById("first_form").submit();
    //   document.getElementTagName("first_form").submit();
    //   document.getElementById("#first_form").submit();
    //   document.getElementTagName("#first_form").submit();
    //   document.form.submit()
    //   document.getElementById("first_form").submit();
    //   document.getElementById("hiddenbutton").click();
    //   document.getElementById("#hiddenbutton").click();
    //   this.form.submit();
    // });
    //












});     //

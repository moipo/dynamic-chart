 //$('body').append('<a ref="http://google.com">Перейти в гугл</a>');
jQuery("document").ready(function(){ //
  var k1 = 0;
  var l1 = 0;
  var m1 = 0;
  var n1 = 0;
  var p1 = 0;

  var k2;
  var l2;
  var m2;
  var n2;
  var p2;

  var rsk;
  var rsl;
  var rsm;   //remember state
  var rsn;
  var rsp;



  var
    canvasPlot = document.getElementById('canvas_plot'),
    ctx = canvasPlot.getContext('2d');









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



    $(".par").on("change",async function(){



      k2 = Number($(".one").val());
      $("#slv1").html(k2);

      l2 = Number($(".two").val());
      $("#slv2").html(l2);

      m2 = Number($(".three").val());
      $("#slv3").html(m2);

      n2= Number($(".four").val());
      $("#slv4").html(n2);

      p2 = Number($(".five").val());
      $("#slv5").html(p2);



      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      function compare_and_change_locally(a,b)
      {
        if (a < b)
        {
            a += 1
        }
        else if (a > b)
        {
          a -= 1;
        }
        return a;
      }

    function foo(k1_f,l1_f,m1_f,n1_f,p1_f,k2,l2,m2,n2,p2)
    {
      k1 = compare_and_change_locally(k1_f,k2);
      l1 = compare_and_change_locally(l1_f,l2);
      m1 = compare_and_change_locally(m1_f,m2);
      n1 = compare_and_change_locally(n1_f,n2);
      p1 = compare_and_change_locally(p1_f,p2);
    }

    for (let i = 0; i < 100+1; i++)
    {

      ctx.font = '${Math.round{scaleX / 2}px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';





      ctx.beginPath();
      ctx.fillStyle = '#9ebaa4'; // ничего
      ctx.fillRect(0, 0, canvasPlotWidth, canvasPlotHeight);
      ctx.stroke();
      ctx.closePath();


      ctx.beginPath();
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
      const y =  0.1*k1*Math.sin(0.1*l1+0.1*m1*x)+0.5 * Math.pow(n1,x)+Math.exp(0.1*p1*x * 0.1);    // формула (радианы)
      //const y =  k*Math.sin(l+m*x)+Math.pow(n,x)+Math.exp(p*x);

      ctx.fillRect(x*scaleX + xAxis, yAxis - scaleY * y, 4, 4);
    }
    ctx.fillStyle = "#000000";


    foo(k1,l1,m1,n1,p1,k2,l2,m2,n2,p2);
    console.log(k1,l1,m1,n1,p1,k2,l2,m2,n2,p2);
    if ( k1 == k2 && l1 == l2 && m1 == m2 && n1 == n2 && p1 == p2)
    {
      break;
    }
    await sleep(40);
}

    k1 = Number($(".one").val());
    $("#slv1").html(k1);

    l1 = Number($(".two").val());
    $("#slv2").html(l1);

    m1 = Number($(".three").val());
    $("#slv3").html(m1);

    n1= Number($(".four").val());
    $("#slv4").html(n1);

    p1 = Number($(".five").val());
    $("#slv5").html(p1);

    })



















async function myfunc()
{
  k2 = Number($(".one").val());
  $("#slv1").html(k2);

  l2 = Number($(".two").val());
  $("#slv2").html(l2);

  m2 = Number($(".three").val());
  $("#slv3").html(m2);

  n2= Number($(".four").val());
  $("#slv4").html(n2);

  p2 = Number($(".five").val());
  $("#slv5").html(p2);



  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function compare_and_change_locally(a,b)
  {
    if (a < b)
    {
        a += 1
    }
    else if (a > b)
    {
      a -= 1;
    }
    return a;
  }

  function foo(k1_f,l1_f,m1_f,n1_f,p1_f,k2,l2,m2,n2,p2)
  {
  k1 = compare_and_change_locally(k1_f,k2);
  l1 = compare_and_change_locally(l1_f,l2);
  m1 = compare_and_change_locally(m1_f,m2);
  n1 = compare_and_change_locally(n1_f,n2);
  p1 = compare_and_change_locally(p1_f,p2);
  }

  for (let i = 0; i < 100+1; i++)
  {

  ctx.font = '${Math.round{scaleX / 2}px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';





  ctx.beginPath();
  ctx.fillStyle = '#9ebaa4'; // ничего
  ctx.fillRect(0, 0, canvasPlotWidth, canvasPlotHeight);
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
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
  const y =  0.1*k1*Math.sin(0.1*l1+0.1*m1*x)+0.5 * Math.pow(n1,x)+Math.exp(0.1*p1*x * 0.1);    // формула (радианы)
  //const y =  k*Math.sin(l+m*x)+Math.pow(n,x)+Math.exp(p*x);

  ctx.fillRect(x*scaleX + xAxis, yAxis - scaleY * y, 4, 4);
  }
  ctx.fillStyle = "#000000";


  foo(k1,l1,m1,n1,p1,k2,l2,m2,n2,p2);
  console.log(k1,l1,m1,n1,p1,k2,l2,m2,n2,p2);
  if ( k1 == k2 && l1 == l2 && m1 == m2 && n1 == n2 && p1 == p2)
  {
    break;
  }

  await sleep(10);
  }

  k1 = Number($(".one").val());
  $("#slv1").html(k1);

  l1 = Number($(".two").val());
  $("#slv2").html(l1);

  m1 = Number($(".three").val());
  $("#slv3").html(m1);

  n1= Number($(".four").val());
  $("#slv4").html(n1);

  p1 = Number($(".five").val());
  $("#slv5").html(p1);
}








    $("#pk_submit").click( function(){

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      console.log("the button was clicked")
      $.ajax({ // ajax запрос отсылается на конкретный сервер, что не удобно, т.к. мы не знаем домен
        url: "/get_data",   // надо было писать url : "/get_data", а не полный адрес с доменом и протоколом.
        type : 'get',  // для И для get И для post Запроса необходимо передавать csrf token
        data : {received_id : Number($("#received_id").val()), csrfmiddlewaretoken: '{{ csrf_token }}'},
        success : async function(response){
          console.log(response.p1,response.p2,response.p3,response.p4,response.p5);
          //await sleep(100)
          document.querySelector('input[name="slv1"]').value = response.p1;
          document.querySelector('input[name="slv2"]').value = response.p2;
          document.querySelector('input[name="slv3"]').value = response.p3;
          document.querySelector('input[name="slv4"]').value = response.p4;
          document.querySelector('input[name="slv5"]').value = response.p5;
          myfunc();
        }
      })
    })










});     //

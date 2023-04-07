var globnomvop='';
var globkolvop='';
function createXMLHttp()
  {
   if	(typeof XMLHttpRequest != "undefined")
      { // для браузеров аля Mozilla
       return new XMLHttpRequest();
      }
      else if (window.ActiveXObject)
          { // для Internet Explorer (all versions)
             var aVersions = [
             "MSXML2.XMLHttp.5.0",
             "MSXML2.XMLHttp.4.0",
             "MSXML2.XMLHttp.3.0",
             "MSXML2.XMLHttp",
             "Microsoft.XMLHttp"
             ];
           for (var i = 0; i < aVersions.length; i++)
               {
                 try
                    {
                     var oXmlHttp = new ActiveXObject(aVersions[i]);
                     return oXmlHttp;
                     }
                      catch (oError) {}
               }
          throw new Error("Невозможно создать объект XMLHttp.");
         }
  }

xmlHttp = createXMLHttp();
	function process(x,k)
	{

           if (xmlHttp)
	    {
	        try
	        {


                    if(x==1)
                           {
                            
							document.getElementById("loader").style.display = "inline";
                            document.getElementById("div1").style.display = "none";
                            var data1 = document.getElementById("input_1").value;
	                        var data2 = document.getElementById("input_2").value;
                            var params="data1="+data1+"&data2="+data2;
                            }
                    if(x==2)
                           {
                            document.getElementById("loader").style.display = "inline";
                            document.getElementById("div1").style.display = "none";
                            var params="data3=0";
                            }

                    if((x==3)&&(document.getElementById("jet").style.display=="none"))//Отправление вопроса с вариантами ответов
                           {
                            document.getElementById("zagruzka").disabled="disabled";//Активное кнопка загрузка
                            document.getElementById("zagr").innerHTML="<span style='font-family:Tahoma;font-size:10px;'>Идет сохранение вопроса на сервер</span><img src='/foto/autocomplete_indicator.gif'>";
                            var params1='';
                            var arr = new Array();
                            var prr=new Array();
                            var b=document.getElementsByTagName("textarea").length;
                            //alert(b);
                            for(i=0;i<b-2;i++)
                                {
                                 arr[i] = document.getElementById("otvet"+i).value;
                                 if(document.getElementById("pr"+i).checked==true)
                                    {
                                     prr[i]=1;
                                    }
                                     else
                                         {
                                          prr[i]=0;
                                          }
                                 params1=params1+"&otvet["+i+"]="+arr[i]+"&pr["+i+"]="+prr[i];
                                 }
                            params1=params1+"&kolichotvet="+i;
                            var data4 = document.getElementById("vopros").value;
                            var id_test = document.getElementById("id_test").value;

                            var nb = document.getElementById("nb").value;
                            var title_bileta=document.getElementById("title_bileta").value;
                            var nomvoprosa = document.getElementById("nomvoprosa").innerHTML;
                            var podskaz = document.getElementById("podskaz").value;
                            var logikazapisi=document.getElementById("logikazapisi").value;
                            var logikazaimg=document.getElementById("logikaimg").value;
                            //alert(podskaz);
                            var params="data4="+data4+"&id_test="+id_test+"&nb="+nb+"&nomvoprosa="+nomvoprosa+"&podskaz="+podskaz+"&logikazapisi="+logikazapisi+"&logikazaimg="+logikazaimg+"&title_bileta="+title_bileta;
                            //alert(params);
                            //alert(params1);
                            params=params+params1;
                            //alert(params);
                            
                            }

                      if((x==3)&&(document.getElementById("jet").style.display=="inline"))//Отправление вопроса с вариантами ответов
                           {
                            document.getElementById("zagruzka").disabled="disabled";//Активное кнопка загрузка
                            document.getElementById("zagr").innerHTML="<span style='font-family:Tahoma;font-size:10px;'>Идет сохранение вопроса на сервер</span><img src='/foto/autocomplete_indicator.gif'>";
                            var params1='';
                            var b=document.getElementsByTagName("textarea").length;
                            var i=b-2;
                            //alert(b);
                            
                            var data10 = document.getElementById("vopros").value;
                            var id_test = document.getElementById("id_test").value;
                            var otvetodin=document.getElementById("otvetodin").value;
                            var nb = document.getElementById("nb").value;
                            var title_bileta=document.getElementById("title_bileta").value;
                            var nomvoprosa = document.getElementById("nomvoprosa").innerHTML;
                            var podskaz = document.getElementById("podskaz").value;
                            var logikazapisi=document.getElementById("logikazapisi").value;
                            var logikazaimg=document.getElementById("logikaimg").value;
                            //alert(podskaz);
                            var params="data10="+data10+"&id_test="+id_test+"&nb="+nb+"&nomvoprosa="+nomvoprosa+"&podskaz="+podskaz+"&logikazapisi="+logikazapisi+"&logikazaimg="+logikazaimg+"&kolichotvet="+i+"&otvetodin="+otvetodin+"&title_bileta="+title_bileta;
                            //alert(params);
                            //alert(params1);
                             
                            //alert(params);
                            }



                    if(x==4)//Выбор номера вопроса
                       {
                        if(document.getElementById("knopka_pred").value==document.getElementById("vop"+k).innerHTML)//если не повторный щелчек по кнопке
                            {
                             
                            return
                             document.getElementById("maxvopros").value="";
                            //alert(document.getElementById("knopka_pred").value);
                            //alert(t);
                            //alert(document.getElementById("logikazapisi").value);
                            }
                             
                        if(document.getElementById("maxvopros").value==13)
                            {
                              document.getElementById("maxvopros").value="";
                             }
                        //Определяю логику новая запись или редактирование
                        //document.getElementById("vopros").style.backgroundPosition="center center";

                        document.getElementById("vopros").value='';//Очищаю поле вопроса
                                    document.getElementById("podskaz").value='';//Очищаю поле подсказка
                        document.getElementById("otvetodin").value='';            
                        var b=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<b-2;i++)
                                       {
                                        document.getElementById("otvet"+i).value='';//Очищаю варианты ответов
                                        document.getElementById("pr"+i).checked=false;// Очищаю галки
                                       }
                        document.getElementById("vopros").style.backgroundImage ="url(https://www.testw.ru/foto/autocomplete_indicator.gif)";
                        document.getElementById("podskaz").style.backgroundImage ="url(https://www.testw.ru/foto/autocomplete_indicator.gif)";
                        document.getElementById("imgfr").innerHTML="<img src='/foto/autocomplete_indicator.gif'>";
                        var c=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<c-2;i++)
                                       {
                                        document.getElementById("otvet"+i).style.backgroundImage ="url(https://www.testw.ru/foto/autocomplete_indicator.gif)";

                                       }


                        

                         //alert(document.getElementById("logikaimg").value);
                         //alert(document.getElementById("vop"+k).innerHTML);
                         var t=document.getElementById("vop"+k).className;
                             if(t=="nomvib1")
                                {
                                  document.getElementById("logikazapisi").value='1';
                                 }
                                  else
                                     {
                                      document.getElementById("logikazapisi").value='0';
                                      }
                            //alert(t);


                        var knopka_pred=document.getElementById("knopka_pred").value;
                       
                         document.getElementById("knopka_pred").value=document.getElementById("vop"+k).innerHTML;
                                   
                        //document.getElementById("vop"+k).className="nomvib";
                        globnomvop=k;
                        //document.getElementById("nomvoprosa").innerHTML=k;//Устанавливю номер вопроса

                        var id_test = document.getElementById("id_test").value;
                        var nb = document.getElementById("nb").value;
                        var params="knopka_pred="+knopka_pred+"&id_test="+id_test+"&nb="+nb+"&nomvop="+k;
                       //alert(params);
                      }
                    

                   


                    xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                    
                    
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }
	}

function asad(k)
     {
       globkolvop=k.value;
       
      }
    
function processjh(x,k)
	{

           if (xmlHttp)
	    {
	        try
	        {
                         
                         if(globkolvop>k.value)//Подсчитываем количество вопросов 
                            {
                              globkolvop=globkolvop-k.value;
                              document.getElementById("kolvoprosov").innerHTML=document.getElementById("kolvoprosov").innerHTML-globkolvop;
                              
                              }
                               else
                                   {
                                    globkolvop=k.value-globkolvop;
                                    document.getElementById("kolvoprosov").innerHTML=document.getElementById("kolvoprosov").innerHTML*1+globkolvop;
                                    }

                         k.style.color='red';
                         //alert(globkolvop);
                         //alert(k.options[k.selectedIndex].value);
                         var params="id_examtest="+x+"&kol_vop="+k.value;
                         //alert(params);
                         //return;
                 xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                    
                  k.style.color='black';  
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }
	    
            var objSel = document.getElementById("mySelectId");//Формируем список количества допускаемых ошибок
            var jh=document.getElementById("kolvoprosov").innerHTML*1;
            var selind=objSel.options[objSel.selectedIndex].value;
            
            if(selind>jh)
               {
                objSel.options.length=0;
                for(j=0; j<=document.getElementById("kolvoprosov").innerHTML; j++)
                   {
                    objSel.options[j] = new Option(j, j);
                   }
                 processjhkl(document.getElementById("id_exam_save").value,0);
                 alert("Внимание! Количество допускаемых ошибок сбросилось. Установите этот параметр заново.");
                }
                 else
                     {
                       objSel.options.length=0;
                       for(j=0; j<=document.getElementById("kolvoprosov").innerHTML; j++)
                           {
                            objSel.options[j] = new Option(j, j);
                            if(j==selind)
                               {
                                objSel.options[j].selected=true;
                       
                                 }
                            }         
                     }
                
        }       


function processjhkl(x,k)
	{

           if (xmlHttp)
	    {
	        try
	        {
                         
                         
                         //k.style.color='red';
                         //alert(globkolvop);
                         //alert(k.options[k.selectedIndex].value);
                         var params="id_exam="+x+"&ochib_exam="+k.value;
                         //alert(params);
                         //return;
                 xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                    
                  //k.style.color='black';  
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }
	
        
                
        }       


function processaddkategor()
	{
          document.getElementById("kategor_d").value=$.trim(document.getElementById("kategor_d").value);
          if(document.getElementById("kategor_d").value=="")
		{
		  
                  alert('Поле пустое!')
                  $("#kategor_d").focus();
                  return false;					 
		 } 

         if (xmlHttp)
	    {
	        try
	        {
                         
                         
                         //k.style.color='red';
                         //alert(globkolvop);
                         //alert(k.options[k.selectedIndex].value);
                         var params="imy="+document.getElementById("kategor_d").value;
                         //alert(params);
                         //return;
                 xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                document.getElementById("dkat").innerHTML="<img src='/foto/autocomplete_indicator.gif'>";    
                  //k.style.color='black';  
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }
	
        
                
        }    		
	
function processadddolg()
	{
          document.getElementById("dolg_d").value=$.trim(document.getElementById("dolg_d").value);
          if(document.getElementById("dolg_d").value=="")
		{
		  
                  alert('Поле пустое!')
                  $("#dolg_d").focus();
                  return false;					 
		 } 

         if (xmlHttp)
	    {
	        try
	        {
                         
                         
                         
                         var params="dolg="+document.getElementById("dolg_d").value;
                         
                 xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                document.getElementById("dkat").innerHTML="<img src='/foto/autocomplete_indicator.gif'>";    
                    
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }
	
        
                
        }    	

	
function processjhklmzx(vopros,otvet,moyotvet,ident,sledvopros)
	{
         

         if (xmlHttp)
	    {
	        try
	        {
                      var now = new Date();
                      var god=now.getFullYear();
                      var mesyc=(now.getMonth()+1);
                      var den=now.getDate()
                      var chas=now.getHours();
                      var minut=now.getMinutes()
                      var secund=now.getSeconds();   
                      //alert(vopros);   
                      //alert(pravotvet);
                      //alert(nepravotv);   
                     if(vopros!=0000)
                         {
                          var params="vopros="+vopros+"&otvet="+otvet+"&moyotvet="+moyotvet+"&id_moyrezultexam="+ident+"&den="+den+"&mesyc="+mesyc+"&god="+god+"&chas="+chas+"&minut="+minut+"&secund="+secund+"&sledvopros="+sledvopros;
                         }
                          else
                              {
                                alert("dd");
                                var params="vopros="+vopros+"&kol_ochib="+otvet+"&kolich_dop_ochib="+moyotvet+"&den="+den+"&mesyc="+mesyc+"&god="+god+"&chas="+chas+"&minut="+minut+"&secund="+secund+"&id_rez="+ident; 
                               }
                    xmlHttp.open("POST", "form.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                    xmlHttp.onreadystatechange = data_obr;
	            xmlHttp.send(params);
                    
                    
                    
	        }
	        

                catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    }

         //alert(den,mesyc,god,chas,minut,secund);
         //alert(mesyc);  
	
        
                
        }      
function data_obr()
	{
	    if (xmlHttp)
	    {
	        if(xmlHttp.readyState == 4)
	        {
	          if(xmlHttp.status==200)
        	        {
                         respos=xmlHttp.responseText;
                         //alert(respos);
                         if ((respos!="Не верный пользователь или пароль")&&(respos!="s")&&(respos[0]!="1")&&(respos[0]!="2")&&(respos[0]!="3")&&(respos[0]!="4")&&(respos[0]!="5"))  //Вход в сессию
                             {
                               //alert(respos);
                               respos="<table><tr><td>Пользователь: <span style='font-weight:bold'><a href='registraciy.html'>"+xmlHttp.responseText+"</a></span></td><td><form><input type='button' id='closs' value='Выход' onclick=\"process(2);\"></form></td></tr></table>";
                               //document.location.href = "https://www.testw.ru/moytest.html";
                               document.getElementById("loader").style.display = "none";
                               document.getElementById("div1").style.display = "inline";
                               document.getElementById("input_3").style.display = "inline";
                               document.getElementById("div1").innerHTML=respos;
                             
                              }
                         if (respos=="Не верный пользователь или пароль")
                                   {
                                      document.getElementById("loader").style.display = "none";
                                      document.getElementById("div1").style.display = "inline";
                                      alert("Не верный пользователь или пароль");
                                    }
                         if (respos=="s")//Выход из сессии
                                   {
                                      respos="<table><tr><td><form><span class=navig1>Пользователь:</span><input type='text' name='user_p' class='vvod'  size='10' maxlength='10' id='input_1'></td><td align='right'><span class=navig1>Пароль:</span><input type='password' name='pass_p' class='vvod'  size='10' maxlength='10' id='input_2'><input type='button' value='Вход' onclick=\"process(1);\" ></form></td></tr></table>";
                                      document.getElementById("loader").style.display = "none";
                                      document.getElementById("div1").innerHTML=respos;
                                      document.getElementById("div1").style.display = "inline";
                                      document.getElementById("input_3").style.display = "none";
                                      srem=location.href;
                                      //alert(sr);
                                      f='';
                                      for(i=0;i<srem.length;i++)
                                           {
                                             if(srem[i]!='?')
                                                {
                                                 
                                                 f=f+srem[i];
                                                 //alert(srem[i])
                                                 }
                                                 else
                                                     {break;
                                                      }

                                            }
                                      // alert(f);
                                      if((f=="https://www.testw.ru/moytest.html")||(f=="https://www.testw.ru/moytestreg.html")||(f=="https://www.testw.ru/voprostreg.html")||(f=="https://www.testw.ru/moytestvibor.html")||(f=="https://www.testw.ru/moytestotvet.html")||(f=="https://www.testw.ru/registraciy.html"))
                                          {
                                            if(f=="https://www.testw.ru/registraciy.html")
                                                {
                                                  document.location.href = "https://www.testw.ru/registraciy.html";
                                                 }
                                                  else
                                                      {
                                                       document.location.href = "https://www.testw.ru/index.html";
                                                       }
                                           }
                                    }
                          if (respos[0]=="1")
      
                                   {
                                     //alert(document.getElementById("knopka_pred").value);
                                    //alert(document.getElementById("vop"+k).innerHTML);

                                  if(!document.getElementById("vop"+k))
                                      {
                                      document.getElementById("knopka_pred").value='';
                                      }
                                     else
                                        {
                                          document.getElementById("knopka_pred").value=document.getElementById("vop"+k).innerHTML
                                        }
                                     //Устанавливаем цвета кнопок панели выбора вопросов
                                     document.getElementById("logikaimg").value="";
                                     var war;
                                     var m;
                                      var vo=new Array();
                                                     for(k=2;k<respos.length;k++)
                                                           {
                                                            war='';
                                                            m="1";
                                                            for(j=k;j<respos.length;j++)
                                                                {
                                                                 if((respos[j]==";")||(respos[j]=="|"))
                                                                     {

                                                                      break;
                                                                      }
                                                                 //alert(respos[j]);
                                                                 war=war+respos[j]

                                                                 k++;
                                                                 }


                                                           if(respos[k]=="|")
                                                                {
                                                                 break;
                                                                 }
                                                             vo[vo.length]=war;
                                                            }

                                    for(i=0;i<vo.length;i++)
                                         {
                                           //alert(vo[i]);
                                           document.getElementById("vop"+vo[i]).className="nomvib1";
                                           m=vo[i]*1;
                                           m=m+1;
                                          }

                                    //alert(m);
                                    if(document.getElementById("vop"+m))
                                       {
                                        document.getElementById("vop"+m).className="nomvib";//устанавливаю фон последнего не существующего номера
                                        document.getElementById("knopka_pred").value=document.getElementById("vop"+m).innerHTML;
                                        }
                                         else
                                             {

                                              document.getElementById("maxvopros").value=m;
                                              }

                                    if(document.getElementById("kolich_vopros_test").value>=m)
                                       {
                                        document.getElementById("nomvoprosa").innerHTML=m;//Устанавливаю номер вопроса
                                        document.getElementById("zagruzka").disabled="";//Активное кнопка загрузка
                                        }
                                         else
                                             {
                                               //Делаем не активным поля
                                                document.getElementById("vopros").disabled="disabled";//НЕ Активное поле вопроса
                                                document.getElementById("podskaz").disabled="disabled";//НЕ Активное поле подсказка
                                                document.getElementById("otvetodin").disabled="disabled";;
                                                 document.getElementById("zagruzka").disabled="disabled";//Активное кнопка загрузка
                                                if(document.getElementById("userfile"))
                                                   {
                                                    document.getElementById("userfile").disabled="disabled";//Не Активное поле ввода файла изображения
                                                    document.getElementById("upload").disabled="disabled";//НЕ Активное кнопки ввода
                                                    }
                                               var c=document.getElementsByTagName("textarea").length;

                                               for(i=0;i<c-2;i++)
                                                    {
                                                     document.getElementById("otvet"+i).disabled="disabled";//Активное поле варианты ответов
                                                     document.getElementById("pr"+i).disabled="disabled";// Активное поле галки
                                                    }
                                                 //Окончание активных полей
                                            }
                                    //alert(document.getElementById("kolich_vopros_test").value);
                                    //document.getElementById("zagr").innerHTML=respos;
                                    document.getElementById("vopros").value='';//Очищаю поле вопроса
                                    document.getElementById("podskaz").value='';//Очищаю поле подсказка
                                    document.getElementById("otvetodin").value='';
                                    var b=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<b-2;i++)
                                       {
                                        document.getElementById("otvet"+i).value='';//Очищаю варианты ответов
                                        document.getElementById("pr"+i).checked=false;// Очищаю галки
                                        document.getElementById("nadp"+i).innerHTML="неправильный";
                                        document.getElementById("nadp"+i).style.color="red";
                                       }
                                    document.getElementById("logikazapisi").value='0';//Устанавливаю логику записи
                                    if(document.getElementById("imgzagruz"))//Очищаем поле загрузки изображения
                                        {
                                         document.getElementById("imgzagruz").innerHTML="";
                                         }

                                   if(document.getElementById("imgfr"))//Очищаем поле изображения
                                      {
                                       document.getElementById("imgfr").innerHTML="";
                                      }

                            document.getElementById("zagr").innerHTML="";
                            
                            var qw = document.location.search;//Определяю адрес страницы
                            document.location.href = "https:/voprostreg.html"+qw+"#nnn";//Перевожу страницу на верх
                            }
                           if (respos[0]=="2")
                                   {
                                    //alert(respos);
                                    document.getElementById("logikaimg").value="";



                                    //Делаем активным поля
                                    document.getElementById("vopros").disabled="";//Активное поле вопроса
                                    document.getElementById("podskaz").disabled="";//Активное поле подсказка
                                    document.getElementById("zagruzka").disabled="";//Активное кнопка загрузка
                                    document.getElementById("otvetodin").disabled="";
                                    if(document.getElementById("userfile"))
                                       {
                                         document.getElementById("userfile").disabled="";//Активное поле ввода файла изображения
                                         document.getElementById("upload").disabled="";//Активное кнопки ввода
                                       }
                                    var c=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<c-2;i++)
                                       {
                                        document.getElementById("otvet"+i).disabled="";//Активное поле варианты ответов
                                        document.getElementById("pr"+i).disabled="";// Активное поле галки
                                       }
                                     //Окончание активных полей


                                    var knopka_pred='';
                                    //alert(respos);
                                    var cvetpredknopki='';
                                    var vopros='';
                                    var podskaz='';
                                    var imgfr='';
                                    var title_bileta='';
                                    for(j=3;j<respos.length;j++)//Определяю номер предидущей кнопки которую нужно изменить
                                           {
                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           knopka_pred=knopka_pred+respos[j]//Определяю номер предидущей кнопки которую нужно изменить

                                           }

                                    for(j;j<respos.length;j++)//Определяю цвет предидущей кнопки которую нужно изменить
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           cvetpredknopki=respos[j];//Определяю номер предидущей кнопки которую нужно изменить

                                           }


                                       for(j;j<respos.length;j++)//Определяю текст вопроса
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           vopros=vopros+respos[j];//Определяю текст вопроса

                                           }
                                      document.getElementById("vopros").value=vopros;//Заполнение поле вопроса
                                      document.getElementById("vopros").style.backgroundImage ="url(https://www.testw.ru/foto/vopros.gif)";


                                     for(j;j<respos.length;j++)//Определяю изображение
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           imgfr=imgfr+respos[j];//Определяю изображение

                                           }
                                      document.getElementById("imgfr").innerHTML=imgfr;//Заполнение поле изображения
                                      //alert(imgfr);

                                     for(j;j<respos.length;j++)//Определяю текст подсказки
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           podskaz=podskaz+respos[j];//Определяю текст подсказки

                                           }
                                      document.getElementById("podskaz").value=podskaz;//Заполнение поля подсказка
                                      document.getElementById("podskaz").style.backgroundImage ="url(https://www.testw.ru/foto/podskaz.gif)";
                                                      
                                      for(j;j<respos.length;j++)//Определяю TITLE
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           title_bileta=title_bileta+respos[j];//Определяю TITLE

                                           }
                                       document.getElementById("title_bileta").value=title_bileta;//Заполнение поля подсказка

                                      //Определение вариантов ответов с признаком првельный или нет
                                      var q=0;
                                      var otveti=new Array();//массив с вариантами ответов
                                      var pravi=new Array(); //массив с признаками
                                      var otvet='';//переменная для составления ответа
                                      var prav='';//Переменная для составления признака
                                      for(k=j;k<respos.length;k++)
                                          {
                                            otvet='';
                                            prav='';
                                            for(o=k;o<respos.length;o++)//Определяю текст варианта ответа
                                                {

                                                 if(respos[o]=="|")
                                                    {
                                                     k++;
                                                     break;

                                                     }
                                                  k++;
                                                  //alert(respos[j]);
                                                  otvet=otvet+respos[o];//Определяю текст варианта ответа

                                                 }
                                            
                                            for(h=k;h<respos.length;h++)//Определяю признак ответа (правельный ответ или нет)
                                                {
                                                 //alert(respos[h]);
                                                 if(respos[h]=="|")
                                                    {

                                                     break;

                                                     }
                                                  k++;
                                                  //alert(respos[j]);
                                                  prav=prav+respos[h];//Определяю признак ответа

                                                 }

                                            otveti[q]=otvet;
                                            pravi[q]=prav;
                                            //alert(otveti[q]);
                                            //alert(pravi[q]);
                                            q++;
                                           }
                                        //Конец определения ответов с признаками




                                     if(globnomvop!=knopka_pred)
                                         {
                                          if((cvetpredknopki=="1")&&(knopka_pred))
                                              {

                                               document.getElementById("vop"+knopka_pred).className="nomvib1";
                                               }
                                          if((cvetpredknopki=="0")&&(knopka_pred))
                                              {

                                              document.getElementById("vop"+knopka_pred).className="nomvop";
                                              }
                                          }


                                    if((respos[0]=="2")&&(respos[1]=="0"))
                                        {
                                         document.getElementById("jet").style.display = "none"; 
                                         document.getElementById("jer").style.display = "inline";
                                         document.getElementById("tre").checked=true;
                                         document.getElementById("tre1").checked=false;
                                         var b=document.getElementsByTagName("textarea").length;
                                         //alert(b);
                                         for(i=0;i<b-2;i++)//Вывод вариантов ответов и признаков правельности
                                           {
                                            document.getElementById("otvet"+i).style.backgroundImage ="url(https://www.testw.ru/foto/variantotveta.gif)";
                                            if(otveti[i]!=undefined)
                                               {
                                                document.getElementById("otvet"+i).value=otveti[i];

                                               }
                                                else
                                                    {
                                                     document.getElementById("otvet"+i).value='';
                                                     }
                                            //alert(pravi[i]);
                                            if(pravi[i]==1)
                                               {
                                                document.getElementById("pr"+i).checked="true";
                                                document.getElementById("nadp"+i).innerHTML="правильный";
                                                document.getElementById("nadp"+i).style.color="green";
                                               }
                                                else
                                                  {
                                                   document.getElementById("pr"+i).checked=false;
                                                   document.getElementById("nadp"+i).innerHTML="неправильный";
                                                   document.getElementById("nadp"+i).style.color="red";
                                                   }
                                             }
                                         }
                                          else
                                              {
                                               var b=document.getElementsByTagName("textarea").length;
                                         
                                               for(i=0;i<b-2;i++)
                                                      {
                                                        document.getElementById("nadp"+i).innerHTML="неправильный";
                                                        document.getElementById("nadp"+i).style.color="red";
                                                        document.getElementById("otvet"+i).style.backgroundImage ="url(https://www.testw.ru/foto/variantotveta.gif)";
                                                       }
                                               document.getElementById("jet").style.display = "inline"; 
                                               document.getElementById("jer").style.display = "none";
                                               document.getElementById("tre").checked=false;
                                               document.getElementById("tre1").checked=true;
                                               document.getElementById("otvetodin").value=otvet;
                                               
                                               }
                                     document.getElementById("nomvoprosa").innerHTML=globnomvop;//Устанавливю номер вопроса
                                     document.getElementById("vop"+globnomvop).className="nomvib";
                                     
                                     
                                    }
                                
								if(respos[0]=="4")
								    {
                                     //alert(respos);
									 var k;
									 k=respos.length;
									 respos=respos.substr(1, k);
									 //alert(respos);
									 if(respos!='')
                                                                            {
                                                                             document.getElementById("kategor_test1").innerHTML=respos;
									     document.getElementById("dkat").innerHTML="<span style='color:green'>Категория добавлена!</span>";
                                                                             }
                                                                              else
                                                                                  {
                                                                                    document.getElementById("dkat").innerHTML="<span style='color:red'>Такая категория уже есть!</span>";
                                                                                   }
									 setTimeout('$("#dkat").slideToggle(250)', 1500);
									 setTimeout('add_v_dkat()', 1600);
									 }
                        
							if(respos[0]=="5")
								    {
                                                                         //alert(respos);
									 var k;
									 k=respos.length;
									 respos=respos.substr(1, k);
									 //alert(respos);
									 if(respos!='')
                                                                            {
                                                                             document.getElementById("dolg1").innerHTML=respos;
									     document.getElementById("dkat").innerHTML="<span style='color:green'>Группа добавлена!</span>";
                                                                             }
                                                                              else
                                                                                  {
                                                                                    document.getElementById("dkat").innerHTML="<span style='color:red'>Такая группа уже есть!</span>";
                                                                                   }
									 setTimeout('$("#dkat").slideToggle(250)', 1500);
									 setTimeout('add_v_ddolg()', 1600);
									 }
alert(respos);
						}
	        }

	    }
 
}

function add_v_dkat()
     {
      document.getElementById("dkat").innerHTML="<div>Добавить категорию</div><div style=\"float:left;padding-right:10px;\"><input type=\"text\" name=\"kategor_dop\" class=\"vvod\" size=\"50\" maxlength=\"50\" id=\"kategor_d\" style=\"width:380px;\"></div><div style=\"padding-top:5px;float:left\"><input type=\"button\" value=\"    Ok    \" onclick=\"processaddkategor()\" class=\"vvod2\"></div>";
	  }
function add_v_ddolg()
     {
      document.getElementById("dkat").innerHTML="<div>Добавить группу</div><div style=\"float:left;padding-right:10px;\"><input type=\"text\" name=\"kategor_dop\" class=\"vvod\" size=\"50\" maxlength=\"50\" id=\"dolg_d\" style=\"width:380px;\"></div><div style=\"padding-top:5px;float:left\"><input type=\"button\" value=\"    Ok    \" onclick=\"processadddolg()\" class=\"vvod2\"></div>";
     }


function visi(j)
     {

      if(j==1)
         {

              document.getElementById("input_4").style.display = "inline";
              document.getElementById("input_5").style.display = "none";
              document.getElementById("zagol").innerHTML="Новый тест";

         }
      if(j==2)
         {

              document.getElementById("input_4").style.display = "none";
              document.getElementById("input_5").style.display = "inline";
              document.getElementById("zagol").innerHTML="Список тестов";
         }
      }

function prover_nazv(k)
            {
             k.nazv_test.value=trim(k.nazv_test.value);
             k.vibor_kategor.value=trim(k.vibor_kategor.value);
             k.opisanie_test.value=trim(k.opisanie_test.value);
             //alert(k.kategor_test.value);
             if((k.nazv_test.value=="")||(k.kategor_test.value=="")||(k.opisanie_test.value==""))
                {
                 alert("Не заполненны обязательные поля!!!")
                  return false
                 }

             }

function prover_fam(k)
            {
             k.fam.value=trim(k.fam.value);
             
             //alert(k.kategor_test.value);
             if(k.fam.value=="")
                {
                 alert("Не заполненны обязательные поля!!!")
                  return false
                 }

             }

function prover_imy(k)
            {
             k.imy.value=trim(k.imy.value);
             
             //alert(k.kategor_test.value);
             if(k.imy.value=="")
                {
                 alert("Не заполненны обязательные поля!!!")
                  return false
                 }

             }

function gotoNewLocation(nazv,nb,id_test,kolich_var,kolich_vopros_test)
            {
              window.document.location.href = "https://www.testw.ru/voprostreg.html?nazv_test="+nazv+"&nb="+nb+"&id_test="+id_test+"&kolich_var="+kolich_var+"&kolich_vopros_test="+kolich_vopros_test;
             }

function gotoNewLocat(id_test,nb)
            {
              window.document.location.href = "https://www.testw.ru/moytestotvet.html?nb="+nb+"&id_test="+id_test;
             }

function gotoNewLocatut(id_test,nb)
            {
              window.document.location.href = "https://www.testw.ru/moytestotvet.html?nb="+nb+"&id_test="+id_test+"&po=1";
             }

function gotoNewLocatutar(kategor_test)
            {
              window.document.location.href = "https://www.testw.ru/testobh.html?kategor_test="+kategor_test;
             }


function chekk(k,n)
           {
            for(i=0;i<document.getElementsByTagName("input").length;i++)
               {
                if(document.getElementsByTagName("input")[i].type == "checkbox")
                  {
                 document.getElementsByTagName("input")[i].checked=false;
                 
                  }
                }
             for(i=0;i<n;i++)
                 {
                  document.getElementById("nadp"+i).innerHTML="неправильный";
                  document.getElementById("nadp"+i).style.color="red";
                 }

             document.getElementById("pr"+k).checked=true;
             document.getElementById("nadp"+k).innerHTML="правильный";
             document.getElementById("nadp"+k).style.color="green";
             document.getElementById("podskaz").value=document.getElementById("otvet"+k).value;
             process(3);

             }

function sax(k)
           {
            if(k==1)
               {
                document.getElementById("jet").style.display = "inline";
                document.getElementById("jer").style.display = "none";
               //alert(k); 
               }
                else
                    {
                     document.getElementById("jer").style.display = "inline";
                     document.getElementById("jet").style.display = "none";
                     }
            }

//Функция выбора значение из select
function rmline(el)
           {
           //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='Выбор категории')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/moytest.html?filtr_k="+el.options[el.selectedIndex].value;
			  // }
            }

function rmlinerez(el,a)
           {
           
               document.location.href = "https://www.testw.ru/moyghurnal.html?filtr_er="+el.options[el.selectedIndex].value+"&id_fam="+a;
			  
            }
function rmlinerezotv(el,a,b,c,d)
           {
           
               document.location.href = "https://www.testw.ru/moyghurnal_exam.html?filtr_otvet_er="+el.options[el.selectedIndex].value+"&id_exam="+a+"&fam="+b+"&nazv_exam="+c+"&id_fam="+d;
			  
            }

function rmlineexe(el,a)
           {
           //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='Выбор категории')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/moyexamred.html?filtr_k="+el.options[el.selectedIndex].value+"&id_exam="+a;
			  // }
            }

function ferd(a,b)
           {
            if (document.forms["newexam1"].panelrez[0].checked)
              {
                c=1;
              }
               else
                  {
                   c=0;
                  }
            if (document.forms["newexam1"].panelvopotvet[0].checked)
              {
                d=1;
              }
               else
                  {
                   d=0;
                  }
             if (document.forms["newexam1"].odinchelh[0].checked)
              {
                e=1;
              }
               else
                  {
                   e=0;
                  }
            if (document.forms["newexam1"].rezotvetov[0].checked)
              {
                f=1;
              }
               else
                  {
                   f=0;
                  }

           if(document.getElementById("exam1").value=='')
               {
                alert('Заполните поле: Название экзамена');
                return;
                }
            
            document.location.href = "https://www.testw.ru/moyexamred.html?&nazv_exam="+document.getElementById("exam1").value+"&id_test="+a+"&id_exam="+b+"&panelrez="+c+"&panelvopotvet="+d+"&odinchelh="+e+"&rezotvetov="+f+"&insert=1";
			  
            }

function del_exam(a,b)
{  
 if (confirm("Удалить тест из экзамена")) 
    {
     
     document.location.href = "https://www.testw.ru/moyexamred.html?nazv_exam="+document.getElementById("exam1").value+"&id_dell_test="+a+"&id_exam="+b;
     }
      else
          {
           return false; 
           }    
}


function rmlinedolg(el)
           {
           
               document.location.href = "https://www.testw.ru/moysotrudniki.html?filtr_d="+el.options[el.selectedIndex].value;
			  
            }

function rmlinedolgnf(el)
           {
           
               document.location.href = "https://www.testw.ru/moyexamsdat.html?filtr_d_sd="+el.options[el.selectedIndex].value;
			  
            }			
// Убирает пробельные символы слева
function ltrim(f) {
	var ptrn = /\s*((\S+\s*)*)/;
	return f.replace(ptrn, "$1");
}
// Убирает пробельные символы справа
function rtrim(f) {
	var ptrn = /((\s*\S+)*)\s*/;
	return f.replace(ptrn, "$1");
}
// Убирает пробельные символы с обоих концов
function trim(f) {
	return ltrim(rtrim(f));
}
function fokus_p()
      {
	    //alert('kkk');
		$("#name_fio").focus();
	    //$("#name_fio").val("Задерищенко")
	   }
function vib_region(el)
           {
           //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='Выбор категории')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/region.html?id_regiona="+el.options[el.selectedIndex].value;
			  // }
            }

function full_screen_smil() { // вся магия после загрузки страницы
	                            //$('a#go').click( function(event){ // ловим клик по ссылки с id="go"
		                  //event.preventDefault(); // выключаем стандартную роль элемента
 
	 $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	             function()
						           { // после выполнения предъидущей анимации
				                   $('#modal_form_smil') 
					               .css('display', 'block') // убираем у модального окна display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		//});
	                               });
                            }
function close_full_screen_smil()
        {
		  $('#modal_form_smil')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				});
			
	      
		 }
		 
function smil_ch(el)
           {
            //alert(el.options[el.selectedIndex].value);
		   //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='Выбор категории')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/mmpi.html?id_test=258&id_smil="+el.options[el.selectedIndex].value;
			  // }
            }
function full_screen_rabota(m) { // вся магия после загрузки страницы
	                            //$('a#go').click( function(event){ // ловим клик по ссылки с id="go"
		                  //event.preventDefault(); // выключаем стандартную роль элемента
 
	 $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	             function()
						           { // после выполнения предъидущей анимации
				                   $('#modal_form') 
					               .css('display', 'block') // убираем у модального окна display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		//});
	                               });
							if(m==2)
   {
     $("#kod").val("2");
     $("#full_screen_zagol").html('Форма добавления обучающей организации');
	 //$("#io").html('Информация о организации:');
	 $("#n0").css("display", "inline"); 
	 $("#n1").css("display", "none");
	}  
 if(m==1)
   {
     $("#kod").val("1");
     $("#full_screen_zagol").html('Форма добавления ЧОП');
	 //$("#io").html('Информация о организации:');
	 $("#n0").css("display", "inline");
	 $("#n1").css("display", "none"); 
	}
if(m==3)
   {
     $("#kod").val("3");
     $("#full_screen_zagol").html('Резюме соискателя работы');
	 //$("#io").html('Текст объявления');
	 $("#n0").css("display", "none"); 
	 $("#n1").css("display", "inline");
	}		
							}

function close_full_screen()
        {
		  $('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				});
	
	      
		 }
function full_screen_vk() { // вся магия после загрузки страницы
	                            //$('a#go').click( function(event){ // ловим клик по ссылки с id="go"
		                  //event.preventDefault(); // выключаем стандартную роль элемента
     
	 $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	             function()
						           { // после выполнения предъидущей анимации
				                   $('#modal_form_vk') 
					               .css('display', 'block') // убираем у модального окна display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		//});
	                               });
                            VK.Widgets.Group("vk", {mode: 0, width: "220", height: "400", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 73054351);
							}
function close_full_screen_vk()
        {
		  $('#modal_form_vk')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				});
			
	      
		 }
function full_screen_robokassa() { // вся магия после загрузки страницы
	                            //$('a#go').click( function(event){ // ловим клик по ссылки с id="go"
		                  //event.preventDefault(); // выключаем стандартную роль элемента
                          
	 $('#overlay_robokassa').fadeIn(400, // сначала плавно показываем темную подложку
		 	             function()
						           { // после выполнения предъидущей анимации
				                   $('#modal_form_robokassa') 
					               .css('display', 'block') // убираем у модального окна display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		                           $( '#email' ).focus();
		//});
	                               });
                              //$( '#email' ).focus();
							  //alert('dd');
							}
function close_full_screen_robokassa()
        {
		  $('#modal_form_robokassa')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay_robokassa').fadeOut(400); // скрываем подложку
				});
			
	      
		 }
		 
function robokassa_xeh(x,y,z,v,c)
       {
         var r = /.+@.+\..+/i;        
		 if (!r.test(document.getElementById('email').value))
			 {
	              alert('Введите адрес электронной почты!');
				  $( '#email' ).focus();
				  return false 
	             }
		//alert(user_obyvl)
         if (xmlHttp)
	    {
	        try
	        {
                                                    
						   //document.getElementById("vopros").innerHTML="<div style='text-align:center'><div><img src=/foto/loader.gif></div></div>";   
						   var params="mrh_login="+x+"&out_summ="+y+"&inv_id="+z+"&Shp_1="+v+"&Shp_2="+c;
						   //alert(params);
                                                   //return false;
						   //globdelkategor='gyugygu';
						   //return false;
						        
                xmlHttp.open("POST", "robokassa_xeh.php", true);
	            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", "charset=windows-1251");

                xmlHttp.onreadystatechange = data_obr_robokassa;
	            xmlHttp.send(params);
                    
                    
                    
	        }
	        

         catch (e)
	        {
	            alert("Не удалось соединиться с сервером:\n" + e.toString());
	        }
	    } 
       }
	   
function data_obr_robokassa()
	{
	    if (xmlHttp)
	    {
	        if(xmlHttp.readyState == 4)
	        {
	         //alert(xmlHttp.status);
                 respos=xmlHttp.responseText;
				 //alert(respos); 
                 if(xmlHttp.status==200)
        	        {
                      //document.getElementById("vopros").innerHTML=respos;
					  //alert(respos);
					  document.getElementById('sign').value=respos;
					  document.getElementById('shp_email').value=document.getElementById('email').value;
					  //alert(document.getElementById('sign').value);
					  //alert('dd');
					  close_full_screen_robokassa();
					  document.getElementById('form-robokassa').submit();
					 }
					
					
			}
		}
	}



var globnomvop='';
var globkolvop='';
function createXMLHttp()
  {
   if	(typeof XMLHttpRequest != "undefined")
      { // ��� ��������� ��� Mozilla
       return new XMLHttpRequest();
      }
      else if (window.ActiveXObject)
          { // ��� Internet Explorer (all versions)
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
          throw new Error("���������� ������� ������ XMLHttp.");
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

                    if((x==3)&&(document.getElementById("jet").style.display=="none"))//����������� ������� � ���������� �������
                           {
                            document.getElementById("zagruzka").disabled="disabled";//�������� ������ ��������
                            document.getElementById("zagr").innerHTML="<span style='font-family:Tahoma;font-size:10px;'>���� ���������� ������� �� ������</span><img src='/foto/autocomplete_indicator.gif'>";
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

                      if((x==3)&&(document.getElementById("jet").style.display=="inline"))//����������� ������� � ���������� �������
                           {
                            document.getElementById("zagruzka").disabled="disabled";//�������� ������ ��������
                            document.getElementById("zagr").innerHTML="<span style='font-family:Tahoma;font-size:10px;'>���� ���������� ������� �� ������</span><img src='/foto/autocomplete_indicator.gif'>";
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



                    if(x==4)//����� ������ �������
                       {
                        if(document.getElementById("knopka_pred").value==document.getElementById("vop"+k).innerHTML)//���� �� ��������� ������ �� ������
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
                        //��������� ������ ����� ������ ��� ��������������
                        //document.getElementById("vopros").style.backgroundPosition="center center";

                        document.getElementById("vopros").value='';//������ ���� �������
                                    document.getElementById("podskaz").value='';//������ ���� ���������
                        document.getElementById("otvetodin").value='';            
                        var b=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<b-2;i++)
                                       {
                                        document.getElementById("otvet"+i).value='';//������ �������� �������
                                        document.getElementById("pr"+i).checked=false;// ������ �����
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
                        //document.getElementById("nomvoprosa").innerHTML=k;//����������� ����� �������

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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
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
                         
                         if(globkolvop>k.value)//������������ ���������� �������� 
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
	        }
	    }
	    
            var objSel = document.getElementById("mySelectId");//��������� ������ ���������� ����������� ������
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
                 alert("��������! ���������� ����������� ������ ����������. ���������� ���� �������� ������.");
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
	        }
	    }
	
        
                
        }       


function processaddkategor()
	{
          document.getElementById("kategor_d").value=$.trim(document.getElementById("kategor_d").value);
          if(document.getElementById("kategor_d").value=="")
		{
		  
                  alert('���� ������!')
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
	        }
	    }
	
        
                
        }    		
	
function processadddolg()
	{
          document.getElementById("dolg_d").value=$.trim(document.getElementById("dolg_d").value);
          if(document.getElementById("dolg_d").value=="")
		{
		  
                  alert('���� ������!')
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
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
                         if ((respos!="�� ������ ������������ ��� ������")&&(respos!="s")&&(respos[0]!="1")&&(respos[0]!="2")&&(respos[0]!="3")&&(respos[0]!="4")&&(respos[0]!="5"))  //���� � ������
                             {
                               //alert(respos);
                               respos="<table><tr><td>������������: <span style='font-weight:bold'><a href='registraciy.html'>"+xmlHttp.responseText+"</a></span></td><td><form><input type='button' id='closs' value='�����' onclick=\"process(2);\"></form></td></tr></table>";
                               //document.location.href = "https://www.testw.ru/moytest.html";
                               document.getElementById("loader").style.display = "none";
                               document.getElementById("div1").style.display = "inline";
                               document.getElementById("input_3").style.display = "inline";
                               document.getElementById("div1").innerHTML=respos;
                             
                              }
                         if (respos=="�� ������ ������������ ��� ������")
                                   {
                                      document.getElementById("loader").style.display = "none";
                                      document.getElementById("div1").style.display = "inline";
                                      alert("�� ������ ������������ ��� ������");
                                    }
                         if (respos=="s")//����� �� ������
                                   {
                                      respos="<table><tr><td><form><span class=navig1>������������:</span><input type='text' name='user_p' class='vvod'  size='10' maxlength='10' id='input_1'></td><td align='right'><span class=navig1>������:</span><input type='password' name='pass_p' class='vvod'  size='10' maxlength='10' id='input_2'><input type='button' value='����' onclick=\"process(1);\" ></form></td></tr></table>";
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
                                     //������������� ����� ������ ������ ������ ��������
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
                                        document.getElementById("vop"+m).className="nomvib";//������������ ��� ���������� �� ������������� ������
                                        document.getElementById("knopka_pred").value=document.getElementById("vop"+m).innerHTML;
                                        }
                                         else
                                             {

                                              document.getElementById("maxvopros").value=m;
                                              }

                                    if(document.getElementById("kolich_vopros_test").value>=m)
                                       {
                                        document.getElementById("nomvoprosa").innerHTML=m;//������������ ����� �������
                                        document.getElementById("zagruzka").disabled="";//�������� ������ ��������
                                        }
                                         else
                                             {
                                               //������ �� �������� ����
                                                document.getElementById("vopros").disabled="disabled";//�� �������� ���� �������
                                                document.getElementById("podskaz").disabled="disabled";//�� �������� ���� ���������
                                                document.getElementById("otvetodin").disabled="disabled";;
                                                 document.getElementById("zagruzka").disabled="disabled";//�������� ������ ��������
                                                if(document.getElementById("userfile"))
                                                   {
                                                    document.getElementById("userfile").disabled="disabled";//�� �������� ���� ����� ����� �����������
                                                    document.getElementById("upload").disabled="disabled";//�� �������� ������ �����
                                                    }
                                               var c=document.getElementsByTagName("textarea").length;

                                               for(i=0;i<c-2;i++)
                                                    {
                                                     document.getElementById("otvet"+i).disabled="disabled";//�������� ���� �������� �������
                                                     document.getElementById("pr"+i).disabled="disabled";// �������� ���� �����
                                                    }
                                                 //��������� �������� �����
                                            }
                                    //alert(document.getElementById("kolich_vopros_test").value);
                                    //document.getElementById("zagr").innerHTML=respos;
                                    document.getElementById("vopros").value='';//������ ���� �������
                                    document.getElementById("podskaz").value='';//������ ���� ���������
                                    document.getElementById("otvetodin").value='';
                                    var b=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<b-2;i++)
                                       {
                                        document.getElementById("otvet"+i).value='';//������ �������� �������
                                        document.getElementById("pr"+i).checked=false;// ������ �����
                                        document.getElementById("nadp"+i).innerHTML="������������";
                                        document.getElementById("nadp"+i).style.color="red";
                                       }
                                    document.getElementById("logikazapisi").value='0';//������������ ������ ������
                                    if(document.getElementById("imgzagruz"))//������� ���� �������� �����������
                                        {
                                         document.getElementById("imgzagruz").innerHTML="";
                                         }

                                   if(document.getElementById("imgfr"))//������� ���� �����������
                                      {
                                       document.getElementById("imgfr").innerHTML="";
                                      }

                            document.getElementById("zagr").innerHTML="";
                            
                            var qw = document.location.search;//��������� ����� ��������
                            document.location.href = "https:/voprostreg.html"+qw+"#nnn";//�������� �������� �� ����
                            }
                           if (respos[0]=="2")
                                   {
                                    //alert(respos);
                                    document.getElementById("logikaimg").value="";



                                    //������ �������� ����
                                    document.getElementById("vopros").disabled="";//�������� ���� �������
                                    document.getElementById("podskaz").disabled="";//�������� ���� ���������
                                    document.getElementById("zagruzka").disabled="";//�������� ������ ��������
                                    document.getElementById("otvetodin").disabled="";
                                    if(document.getElementById("userfile"))
                                       {
                                         document.getElementById("userfile").disabled="";//�������� ���� ����� ����� �����������
                                         document.getElementById("upload").disabled="";//�������� ������ �����
                                       }
                                    var c=document.getElementsByTagName("textarea").length;

                                    for(i=0;i<c-2;i++)
                                       {
                                        document.getElementById("otvet"+i).disabled="";//�������� ���� �������� �������
                                        document.getElementById("pr"+i).disabled="";// �������� ���� �����
                                       }
                                     //��������� �������� �����


                                    var knopka_pred='';
                                    //alert(respos);
                                    var cvetpredknopki='';
                                    var vopros='';
                                    var podskaz='';
                                    var imgfr='';
                                    var title_bileta='';
                                    for(j=3;j<respos.length;j++)//��������� ����� ���������� ������ ������� ����� ��������
                                           {
                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           knopka_pred=knopka_pred+respos[j]//��������� ����� ���������� ������ ������� ����� ��������

                                           }

                                    for(j;j<respos.length;j++)//��������� ���� ���������� ������ ������� ����� ��������
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           cvetpredknopki=respos[j];//��������� ����� ���������� ������ ������� ����� ��������

                                           }


                                       for(j;j<respos.length;j++)//��������� ����� �������
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           vopros=vopros+respos[j];//��������� ����� �������

                                           }
                                      document.getElementById("vopros").value=vopros;//���������� ���� �������
                                      document.getElementById("vopros").style.backgroundImage ="url(https://www.testw.ru/foto/vopros.gif)";


                                     for(j;j<respos.length;j++)//��������� �����������
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           imgfr=imgfr+respos[j];//��������� �����������

                                           }
                                      document.getElementById("imgfr").innerHTML=imgfr;//���������� ���� �����������
                                      //alert(imgfr);

                                     for(j;j<respos.length;j++)//��������� ����� ���������
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           podskaz=podskaz+respos[j];//��������� ����� ���������

                                           }
                                      document.getElementById("podskaz").value=podskaz;//���������� ���� ���������
                                      document.getElementById("podskaz").style.backgroundImage ="url(https://www.testw.ru/foto/podskaz.gif)";
                                                      
                                      for(j;j<respos.length;j++)//��������� TITLE
                                           {

                                            if(respos[j]=="|")
                                                 {
                                                  j++;
                                                  break;

                                                  }
                                           //alert(respos[j]);
                                           title_bileta=title_bileta+respos[j];//��������� TITLE

                                           }
                                       document.getElementById("title_bileta").value=title_bileta;//���������� ���� ���������

                                      //����������� ��������� ������� � ��������� ��������� ��� ���
                                      var q=0;
                                      var otveti=new Array();//������ � ���������� �������
                                      var pravi=new Array(); //������ � ����������
                                      var otvet='';//���������� ��� ����������� ������
                                      var prav='';//���������� ��� ����������� ��������
                                      for(k=j;k<respos.length;k++)
                                          {
                                            otvet='';
                                            prav='';
                                            for(o=k;o<respos.length;o++)//��������� ����� �������� ������
                                                {

                                                 if(respos[o]=="|")
                                                    {
                                                     k++;
                                                     break;

                                                     }
                                                  k++;
                                                  //alert(respos[j]);
                                                  otvet=otvet+respos[o];//��������� ����� �������� ������

                                                 }
                                            
                                            for(h=k;h<respos.length;h++)//��������� ������� ������ (���������� ����� ��� ���)
                                                {
                                                 //alert(respos[h]);
                                                 if(respos[h]=="|")
                                                    {

                                                     break;

                                                     }
                                                  k++;
                                                  //alert(respos[j]);
                                                  prav=prav+respos[h];//��������� ������� ������

                                                 }

                                            otveti[q]=otvet;
                                            pravi[q]=prav;
                                            //alert(otveti[q]);
                                            //alert(pravi[q]);
                                            q++;
                                           }
                                        //����� ����������� ������� � ����������




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
                                         for(i=0;i<b-2;i++)//����� ��������� ������� � ��������� ������������
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
                                                document.getElementById("nadp"+i).innerHTML="����������";
                                                document.getElementById("nadp"+i).style.color="green";
                                               }
                                                else
                                                  {
                                                   document.getElementById("pr"+i).checked=false;
                                                   document.getElementById("nadp"+i).innerHTML="������������";
                                                   document.getElementById("nadp"+i).style.color="red";
                                                   }
                                             }
                                         }
                                          else
                                              {
                                               var b=document.getElementsByTagName("textarea").length;
                                         
                                               for(i=0;i<b-2;i++)
                                                      {
                                                        document.getElementById("nadp"+i).innerHTML="������������";
                                                        document.getElementById("nadp"+i).style.color="red";
                                                        document.getElementById("otvet"+i).style.backgroundImage ="url(https://www.testw.ru/foto/variantotveta.gif)";
                                                       }
                                               document.getElementById("jet").style.display = "inline"; 
                                               document.getElementById("jer").style.display = "none";
                                               document.getElementById("tre").checked=false;
                                               document.getElementById("tre1").checked=true;
                                               document.getElementById("otvetodin").value=otvet;
                                               
                                               }
                                     document.getElementById("nomvoprosa").innerHTML=globnomvop;//����������� ����� �������
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
									     document.getElementById("dkat").innerHTML="<span style='color:green'>��������� ���������!</span>";
                                                                             }
                                                                              else
                                                                                  {
                                                                                    document.getElementById("dkat").innerHTML="<span style='color:red'>����� ��������� ��� ����!</span>";
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
									     document.getElementById("dkat").innerHTML="<span style='color:green'>������ ���������!</span>";
                                                                             }
                                                                              else
                                                                                  {
                                                                                    document.getElementById("dkat").innerHTML="<span style='color:red'>����� ������ ��� ����!</span>";
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
      document.getElementById("dkat").innerHTML="<div>�������� ���������</div><div style=\"float:left;padding-right:10px;\"><input type=\"text\" name=\"kategor_dop\" class=\"vvod\" size=\"50\" maxlength=\"50\" id=\"kategor_d\" style=\"width:380px;\"></div><div style=\"padding-top:5px;float:left\"><input type=\"button\" value=\"    Ok    \" onclick=\"processaddkategor()\" class=\"vvod2\"></div>";
	  }
function add_v_ddolg()
     {
      document.getElementById("dkat").innerHTML="<div>�������� ������</div><div style=\"float:left;padding-right:10px;\"><input type=\"text\" name=\"kategor_dop\" class=\"vvod\" size=\"50\" maxlength=\"50\" id=\"dolg_d\" style=\"width:380px;\"></div><div style=\"padding-top:5px;float:left\"><input type=\"button\" value=\"    Ok    \" onclick=\"processadddolg()\" class=\"vvod2\"></div>";
     }


function visi(j)
     {

      if(j==1)
         {

              document.getElementById("input_4").style.display = "inline";
              document.getElementById("input_5").style.display = "none";
              document.getElementById("zagol").innerHTML="����� ����";

         }
      if(j==2)
         {

              document.getElementById("input_4").style.display = "none";
              document.getElementById("input_5").style.display = "inline";
              document.getElementById("zagol").innerHTML="������ ������";
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
                 alert("�� ���������� ������������ ����!!!")
                  return false
                 }

             }

function prover_fam(k)
            {
             k.fam.value=trim(k.fam.value);
             
             //alert(k.kategor_test.value);
             if(k.fam.value=="")
                {
                 alert("�� ���������� ������������ ����!!!")
                  return false
                 }

             }

function prover_imy(k)
            {
             k.imy.value=trim(k.imy.value);
             
             //alert(k.kategor_test.value);
             if(k.imy.value=="")
                {
                 alert("�� ���������� ������������ ����!!!")
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
                  document.getElementById("nadp"+i).innerHTML="������������";
                  document.getElementById("nadp"+i).style.color="red";
                 }

             document.getElementById("pr"+k).checked=true;
             document.getElementById("nadp"+k).innerHTML="����������";
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

//������� ������ �������� �� select
function rmline(el)
           {
           //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='����� ���������')
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
		   //if(!el.options[el.selectedIndex].value!='����� ���������')
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
                alert('��������� ����: �������� ��������');
                return;
                }
            
            document.location.href = "https://www.testw.ru/moyexamred.html?&nazv_exam="+document.getElementById("exam1").value+"&id_test="+a+"&id_exam="+b+"&panelrez="+c+"&panelvopotvet="+d+"&odinchelh="+e+"&rezotvetov="+f+"&insert=1";
			  
            }

function del_exam(a,b)
{  
 if (confirm("������� ���� �� ��������")) 
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
// ������� ���������� ������� �����
function ltrim(f) {
	var ptrn = /\s*((\S+\s*)*)/;
	return f.replace(ptrn, "$1");
}
// ������� ���������� ������� ������
function rtrim(f) {
	var ptrn = /((\s*\S+)*)\s*/;
	return f.replace(ptrn, "$1");
}
// ������� ���������� ������� � ����� ������
function trim(f) {
	return ltrim(rtrim(f));
}
function fokus_p()
      {
	    //alert('kkk');
		$("#name_fio").focus();
	    //$("#name_fio").val("�����������")
	   }
function vib_region(el)
           {
           //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='����� ���������')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/region.html?id_regiona="+el.options[el.selectedIndex].value;
			  // }
            }

function full_screen_smil() { // ��� ����� ����� �������� ��������
	                            //$('a#go').click( function(event){ // ����� ���� �� ������ � id="go"
		                  //event.preventDefault(); // ��������� ����������� ���� ��������
 
	 $('#overlay').fadeIn(400, // ������� ������ ���������� ������ ��������
		 	             function()
						           { // ����� ���������� ����������� ��������
				                   $('#modal_form_smil') 
					               .css('display', 'block') // ������� � ���������� ���� display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // ������ ���������� ������������ ������������ �� ���������� ����
		//});
	                               });
                            }
function close_full_screen_smil()
        {
		  $('#modal_form_smil')
			.animate({opacity: 0, top: '45%'}, 200,  // ������ ������ ������������ �� 0 � ������������ ������� ���� �����
				function(){ // ����� ��������
					$(this).css('display', 'none'); // ������ ��� display: none;
					$('#overlay').fadeOut(400); // �������� ��������
				});
			
	      
		 }
		 
function smil_ch(el)
           {
            //alert(el.options[el.selectedIndex].value);
		   //alert(el.options[el.selectedIndex].value);
		   //if(!el.options[el.selectedIndex].value!='����� ���������')
           //   {
               //alert(el.options[el.selectedIndex].value);
               //document.getElementById("example2").value=el.options[el.selectedIndex].value;
               document.location.href = "https://www.testw.ru/mmpi.html?id_test=258&id_smil="+el.options[el.selectedIndex].value;
			  // }
            }
function full_screen_rabota(m) { // ��� ����� ����� �������� ��������
	                            //$('a#go').click( function(event){ // ����� ���� �� ������ � id="go"
		                  //event.preventDefault(); // ��������� ����������� ���� ��������
 
	 $('#overlay').fadeIn(400, // ������� ������ ���������� ������ ��������
		 	             function()
						           { // ����� ���������� ����������� ��������
				                   $('#modal_form') 
					               .css('display', 'block') // ������� � ���������� ���� display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // ������ ���������� ������������ ������������ �� ���������� ����
		//});
	                               });
							if(m==2)
   {
     $("#kod").val("2");
     $("#full_screen_zagol").html('����� ���������� ��������� �����������');
	 //$("#io").html('���������� � �����������:');
	 $("#n0").css("display", "inline"); 
	 $("#n1").css("display", "none");
	}  
 if(m==1)
   {
     $("#kod").val("1");
     $("#full_screen_zagol").html('����� ���������� ���');
	 //$("#io").html('���������� � �����������:');
	 $("#n0").css("display", "inline");
	 $("#n1").css("display", "none"); 
	}
if(m==3)
   {
     $("#kod").val("3");
     $("#full_screen_zagol").html('������ ���������� ������');
	 //$("#io").html('����� ����������');
	 $("#n0").css("display", "none"); 
	 $("#n1").css("display", "inline");
	}		
							}

function close_full_screen()
        {
		  $('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // ������ ������ ������������ �� 0 � ������������ ������� ���� �����
				function(){ // ����� ��������
					$(this).css('display', 'none'); // ������ ��� display: none;
					$('#overlay').fadeOut(400); // �������� ��������
				});
	
	      
		 }
function full_screen_vk() { // ��� ����� ����� �������� ��������
	                            //$('a#go').click( function(event){ // ����� ���� �� ������ � id="go"
		                  //event.preventDefault(); // ��������� ����������� ���� ��������
     
	 $('#overlay').fadeIn(400, // ������� ������ ���������� ������ ��������
		 	             function()
						           { // ����� ���������� ����������� ��������
				                   $('#modal_form_vk') 
					               .css('display', 'block') // ������� � ���������� ���� display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // ������ ���������� ������������ ������������ �� ���������� ����
		//});
	                               });
                            VK.Widgets.Group("vk", {mode: 0, width: "220", height: "400", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 73054351);
							}
function close_full_screen_vk()
        {
		  $('#modal_form_vk')
			.animate({opacity: 0, top: '45%'}, 200,  // ������ ������ ������������ �� 0 � ������������ ������� ���� �����
				function(){ // ����� ��������
					$(this).css('display', 'none'); // ������ ��� display: none;
					$('#overlay').fadeOut(400); // �������� ��������
				});
			
	      
		 }
function full_screen_robokassa() { // ��� ����� ����� �������� ��������
	                            //$('a#go').click( function(event){ // ����� ���� �� ������ � id="go"
		                  //event.preventDefault(); // ��������� ����������� ���� ��������
                          
	 $('#overlay_robokassa').fadeIn(400, // ������� ������ ���������� ������ ��������
		 	             function()
						           { // ����� ���������� ����������� ��������
				                   $('#modal_form_robokassa') 
					               .css('display', 'block') // ������� � ���������� ���� display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // ������ ���������� ������������ ������������ �� ���������� ����
		                           $( '#email' ).focus();
		//});
	                               });
                              //$( '#email' ).focus();
							  //alert('dd');
							}
function close_full_screen_robokassa()
        {
		  $('#modal_form_robokassa')
			.animate({opacity: 0, top: '45%'}, 200,  // ������ ������ ������������ �� 0 � ������������ ������� ���� �����
				function(){ // ����� ��������
					$(this).css('display', 'none'); // ������ ��� display: none;
					$('#overlay_robokassa').fadeOut(400); // �������� ��������
				});
			
	      
		 }
		 
function robokassa_xeh(x,y,z,v,c)
       {
         var r = /.+@.+\..+/i;        
		 if (!r.test(document.getElementById('email').value))
			 {
	              alert('������� ����� ����������� �����!');
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
	            alert("�� ������� ����������� � ��������:\n" + e.toString());
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



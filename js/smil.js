function divFunction_zagr(u) //id_id,id_v,da,net,neznay
   {
	var str;
	for(i=1;i<=566;i++)
	{ 
			
			id_id=i;
			//alert(u[1]);
			str=u[i];
			//alert(str);
			//alert(str[0]);
			if(str.length==1) continue;
			
			if(str[0]==2)
			   {
			     id_v=i+'_da';
                 da=1;
                 net=0;
                 neznay=0;	
            	 if(str[1]==1)
				     {
					  document.getElementById('net_'+id_id).innerHTML="<img src='/3.gif'>";
					 }
				}			
			
			//alert(str);
			if(str[1]==2)
			   {
			     id_v=i+'_net';
                 net=1;
                 neznay=0;
                 da=0;	
            	//alert(id_v);
				 if(str[0]==1)
				     {
					  document.getElementById('da_'+id_id).innerHTML="<img src='/3.gif'>";
					 }
				}
             if(str[2]==2)
			   {
			     id_v=i+'_neznay';
                 neznay=1;
                 net=0;
                 da=0;	
            	 if(str[0]==1)
				     {
					  document.getElementById('da_'+id_id).innerHTML="<img src='/3.gif'>";
					 }
				 if(str[1]==1)
				     {
					  document.getElementById('net_'+id_id).innerHTML="<img src='/3.gif'>";
					 }
				 }
								
		    
			     //alert(id_v);
			     document.getElementById(id_v).style.background="#B6F6EE";
				
			
			if(da==1)
			  {
			    //alert(id_id);
				document.getElementById('nez_'+id_id).style.backgroundColor="white";
				document.getElementById('da_'+id_id).innerHTML="<img src='/2.gif'>";
				//l_log_skala
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==15)||(id_id==30)||(id_id==45)||(id_id==75)||(id_id==105)||(id_id==135)||(id_id==195)||(id_id==225)||(id_id==255)||(id_id==285)||(id_id==60)||(id_id==90)||(id_id==120)||(id_id==150)||(id_id==165))) 
                    {
				     l_log_skala--; 
					 
					}
			   //l_log_skala
			   
			   //f_dost_skala
			   //����� ������
			   if(((id_id==14)||(id_id==23)||(id_id==27)||(id_id==31)||(id_id==33)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==53)||(id_id==56)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==139)||(id_id==146)||(id_id==151)||(id_id==156)||(id_id==168)||(id_id==184)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==206)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==215)||(id_id==218)||(id_id==227)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==291)||(id_id==293))&&(document.getElementById('vopros_'+id_id).value!=1))//f_dost_skala
			      {
				    f_dost_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==17)||(id_id==20)||(id_id==54)||(id_id==65)||(id_id==75)||(id_id==83)||(id_id==112)||(id_id==113)||(id_id==115)||(id_id==164)||(id_id==169)||(id_id==177)||(id_id==185)||(id_id==196)||(id_id==199)||(id_id==220)||(id_id==257)||(id_id==258)||(id_id==272)||(id_id==276))) 
                   
				   {
				     f_dost_skala--; 
					 
					}
			   //f_dost_skala
			   
			   
			   
			   //e1_sverhkontr_skala
			   //����� ������
			   if(((id_id==23)||(id_id==29)||(id_id==43)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==161)||(id_id==189)||(id_id==273))&&(document.getElementById('vopros_'+id_id).value!=1))//e1_sverhkontr_skala
			       

				  {
				    e1_sverhkontr_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==130)||(id_id==153)||(id_id==155)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274)||(id_id==281))) 
                   
				   {
				     e1_sverhkontr_skala--; 
					 
					}
			   //e1_sverhkontr_skala
			   
			   //e2_pissim_skala=0;
			   //����� ������
			   if(((id_id==5)||(id_id==13)||(id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==130)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==193)||(id_id==236)||(id_id==259))&&(document.getElementById('vopros_'+id_id).value!=1))//e1_sverhkontr_skala
	
				  {
				    e2_pissim_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==30)||(id_id==36)||(id_id==39)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==89)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==145)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==178)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==238)||(id_id==241)||(id_id==242)||(id_id==248)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285)||(id_id==296))) 

				   {
				     e2_pissim_skala--; 
					 
					}
			   //e2_pissim_skala=0;
			   
			   
			   //e3_emoc_lab_skala
			   //����� ������
			   if(((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))&&(document.getElementById('vopros_'+id_id).value!=1))//e3_emoc_lab_skala
	              {
				    e3_emoc_lab_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==3)||(id_id==6)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==51)||(id_id==55)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==103)||(id_id==107)||(id_id==109)||(id_id==124)||(id_id==128)||(id_id==129)||(id_id==136)||(id_id==137)||(id_id==141)||(id_id==147)||(id_id==153)||(id_id==160)||(id_id==162)||(id_id==163)||(id_id==170)||(id_id==172)||(id_id==174)||(id_id==175)||(id_id==180)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==201)||(id_id==213)||(id_id==230)||(id_id==234)||(id_id==243)||(id_id==265)||(id_id==267)||(id_id==274)||(id_id==279)||(id_id==289)||(id_id==292))) 
                   {
				     e3_emoc_lab_skala--; 
					 
					}
			   //e3_emoc_lab_skala
			   
			   
			   //e4_impulsiv_skala
			   //����� ������
			   if(((id_id==16)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==36)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245)||(id_id==284))&&(document.getElementById('vopros_'+id_id).value!=1))//e4_impulsiv_skala
	              {
				    e4_impulsiv_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==8)||(id_id==20)||(id_id==37)||(id_id==82)||(id_id==91)||(id_id==96)||(id_id==107)||(id_id==134)||(id_id==137)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==287)||(id_id==289)||(id_id==294)||(id_id==296))) 
                   {
				     e4_impulsiv_skala--; 
					 
					}
			   //e4_impulsiv_skala
			   
			   //e5_genst_skala
			   //����� ������
			   if(((id_id==4)||(id_id==25)||(id_id==69)||(id_id==70)||(id_id==74)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==134)||(id_id==140)||(id_id==149)||(id_id==179)||(id_id==187)||(id_id==203)||(id_id==204)||(id_id==217)||(id_id==226)||(id_id==231)||(id_id==239)||(id_id==261)||(id_id==278)||(id_id==282)||(id_id==295)||(id_id==297)||(id_id==299))&&(document.getElementById('vopros_'+id_id).value!=1))//e4_impulsiv_skala
	               {
				    e5_genst_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==1)||(id_id==19)||(id_id==26)||(id_id==28)||(id_id==79)||(id_id==80)||(id_id==81)||(id_id==89)||(id_id==99)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==117)||(id_id==120)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==213)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==260)||(id_id==262)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))) 
                   {
				     e5_genst_skala--; 
					 
					}
			   //e5_genst_skala
			   
			   //e6_rigidnost_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==338)||(id_id==341)||(id_id==364)||(id_id==365))&&(document.getElementById('vopros_'+id_id).value!=1))//e4_impulsiv_skala
	              {
				    e6_rigidnost_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==281)||(id_id==294)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))) 
                   {
				     e6_rigidnost_skala--; 
					 
					}
			   //e6_rigidnost_skala
			   
			   //e7_trevoga_skala
			   //����� ������
			   if(((id_id==10)||(id_id==15)||(id_id==22)||(id_id==32)||(id_id==41)||(id_id==67)||(id_id==76)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==142)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==217)||(id_id==238)||(id_id==266)||(id_id==301)||(id_id==304)||(id_id==305)||(id_id==317)||(id_id==321)||(id_id==336)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==346)||(id_id==349)||(id_id==351)||(id_id==352)||(id_id==356)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==361))&&(document.getElementById('vopros_'+id_id).value!=1))//e4_impulsiv_skala
	               {
				    e7_trevoga_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==3)||(id_id==8)||(id_id==36)||(id_id==122)||(id_id==152)||(id_id==164)||(id_id==178)||(id_id==329)||(id_id==353))) 
                   {
				     e7_trevoga_skala--; 
					 
					}
			   //e7_trevoga_skala
			   
			   //e8_individ_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==21)||(id_id==22)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==40)||(id_id==41)||(id_id==47)||(id_id==52)||(id_id==76)||(id_id==97)||(id_id==104)||(id_id==121)||(id_id==156)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==202)||(id_id==210)||(id_id==212)||(id_id==238)||(id_id==241)||(id_id==251)||(id_id==259)||(id_id==266)||(id_id==273)||(id_id==282)||(id_id==291)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==305)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==332)||(id_id==334)||(id_id==335)||(id_id==339)||(id_id==341)||(id_id==345)||(id_id==349)||(id_id==350)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==360)||(id_id==363)||(id_id==364))&&(document.getElementById('vopros_'+id_id).value!=1))//e4_impulsiv_skala
	               {
				    e8_individ_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==8)||(id_id==17)||(id_id==20)||(id_id==37)||(id_id==65)||(id_id==103)||(id_id==119)||(id_id==177)||(id_id==178)||(id_id==187)||(id_id==192)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==281)||(id_id==306)||(id_id==309)||(id_id==322)||(id_id==330))) 
                   {
				     e8_individ_skala--; 
					 
					}
			   //e8_individ_skala
			   
			   //e9_optimist_skala
			   //����� ������
			   if(((id_id==11)||(id_id==13)||(id_id==21)||(id_id==22)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==181)||(id_id==194)||(id_id==212)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==238)||(id_id==240)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==268)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))&&(document.getElementById('vopros_'+id_id).value!=1))//e9_optimist_skala
	               {
				    e9_optimist_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==101)||(id_id==105)||(id_id==111)||(id_id==119)||(id_id==120)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))) 
                   {
				     e9_optimist_skala--; 
					 
					}
			   //e9_optimist_skala
			   
			   //e0_introversia_skala
			   //����� ������
			   if(((id_id==32)||(id_id==67)||(id_id==82)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==138)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==236)||(id_id==267)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==332)||(id_id==336)||(id_id==342)||(id_id==357)||(id_id==377)||(id_id==383)||(id_id==398)||(id_id==411)||(id_id==427)||(id_id==436)||(id_id==455)||(id_id==473)||(id_id==487)||(id_id==549)||(id_id==564))&&(document.getElementById('vopros_'+id_id).value!=1))//e9_optimist_skala
	               {
				    e0_introversia_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==25)||(id_id==33)||(id_id==57)||(id_id==91)||(id_id==99)||(id_id==119)||(id_id==126)||(id_id==143)||(id_id==193)||(id_id==208)||(id_id==229)||(id_id==231)||(id_id==254)||(id_id==262)||(id_id==281)||(id_id==296)||(id_id==309)||(id_id==353)||(id_id==359)||(id_id==371)||(id_id==391)||(id_id==400)||(id_id==415)||(id_id==440)||(id_id==446)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==469)||(id_id==479)||(id_id==481)||(id_id==482)||(id_id==501)||(id_id==521)||(id_id==547))) 
                                                               
				   {
				     e0_introversia_skala--; 
					 
					}
			   //e0_introversia_skala
			   
			   //k_korrekc_skala
			   //����� ������
			   if(((id_id==96))&&(document.getElementById('vopros_'+id_id).value!=1))//k_korrekc_skala
			      {
				    k_korrekc_skala++; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==30)||(id_id==39)||(id_id==71)||(id_id==89)||(id_id==124)||(id_id==129)||(id_id==134)||(id_id==138)||(id_id==142)||(id_id==148)||(id_id==160)||(id_id==170)||(id_id==171)||(id_id==180)||(id_id==183)||(id_id==217)||(id_id==234)||(id_id==267)||(id_id==272)||(id_id==316)||(id_id==322)||(id_id==374)||(id_id==383)||(id_id==397)||(id_id==398)||(id_id==406)||(id_id==461)||(id_id==502))) 
                   {
				     k_korrekc_skala--; 
					 
					}
			   //k_korrekc_skala
			   if(document.getElementById('ispr_'+id_id).value=='0')
				            {
					         document.getElementById('ispr_'+id_id).value='200';
					        
							}
			   //? �����
			   if(document.getElementById('vopros_'+id_id).value==3)
			       {
				    enez_skala--; 
				    }
				//? �����
			   document.getElementById('vopros_'+id_id).value=1;
			   document.getElementById(id_id+'_net').style.background="#D7F6B6";
			   document.getElementById(id_id+'_neznay').style.background="#D7F6B6";
			   }
			
			
			if(net==1)
			  {
			   document.getElementById('nez_'+id_id).style.backgroundColor="white";
			   document.getElementById('net_'+id_id).innerHTML="<img src='/2.gif'>";
			   //l_log_skala
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==15)||(id_id==30)||(id_id==45)||(id_id==75)||(id_id==105)||(id_id==135)||(id_id==195)||(id_id==225)||(id_id==255)||(id_id==285)||(id_id==60)||(id_id==90)||(id_id==120)||(id_id==150)||(id_id==165))) 
                    {
				     l_log_skala++; 
					 
					}
			   //l_log_skala
			   
			   //f_dost_skala
			   //����� ������
			   if(((id_id==14)||(id_id==23)||(id_id==27)||(id_id==31)||(id_id==33)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==53)||(id_id==56)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==139)||(id_id==146)||(id_id==151)||(id_id==156)||(id_id==168)||(id_id==184)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==206)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==215)||(id_id==218)||(id_id==227)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==291)||(id_id==293))&&(document.getElementById('vopros_'+id_id).value==1))//f_dost_skala 
			      {
				    f_dost_skala--; 
				    
				   }
                //����� ������			   
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==17)||(id_id==20)||(id_id==54)||(id_id==65)||(id_id==75)||(id_id==83)||(id_id==112)||(id_id==113)||(id_id==115)||(id_id==164)||(id_id==169)||(id_id==177)||(id_id==185)||(id_id==196)||(id_id==199)||(id_id==220)||(id_id==257)||(id_id==258)||(id_id==272)||(id_id==276))) 
                   
				   {
				     f_dost_skala++; 
					 
					}				
				
				//f_dost_skala
				
				
				
				//e1_sverhkontr_skala
			   //����� ������
			   if(((id_id==23)||(id_id==29)||(id_id==43)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==161)||(id_id==189)||(id_id==273))&&(document.getElementById('vopros_'+id_id).value==1))//e1_sverhkontr_skala 
			      {
				    e1_sverhkontr_skala--; 
				    
				   }
                //����� ������			   
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==130)||(id_id==153)||(id_id==155)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274)||(id_id==281))) 
                   
				   {
				     e1_sverhkontr_skala++; 
					 
					}				
				
				//e1_sverhkontr_skala
			   
			   //e2_pissim_skala=0;
			   //����� ������
			   if(((id_id==5)||(id_id==13)||(id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==130)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==193)||(id_id==236)||(id_id==259))&&(document.getElementById('vopros_'+id_id).value==1))//
	
				  {
				    e2_pissim_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==30)||(id_id==36)||(id_id==39)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==89)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==145)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==178)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==238)||(id_id==241)||(id_id==242)||(id_id==248)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285)||(id_id==296))) 

				   {
				     e2_pissim_skala++; 
					 
					}
			   //e2_pissim_skala=0;
			   
			   //e3_emoc_lab_skala
			   //����� ������
			   if(((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))&&(document.getElementById('vopros_'+id_id).value==1))//e3_emoc_lab_skala
	              {
				    e3_emoc_lab_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==2)||(id_id==3)||(id_id==6)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==51)||(id_id==55)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==103)||(id_id==107)||(id_id==109)||(id_id==124)||(id_id==128)||(id_id==129)||(id_id==136)||(id_id==137)||(id_id==141)||(id_id==147)||(id_id==153)||(id_id==160)||(id_id==162)||(id_id==163)||(id_id==170)||(id_id==172)||(id_id==174)||(id_id==175)||(id_id==180)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==201)||(id_id==213)||(id_id==230)||(id_id==234)||(id_id==243)||(id_id==265)||(id_id==267)||(id_id==274)||(id_id==279)||(id_id==289)||(id_id==292))) 
                   {
				     e3_emoc_lab_skala++; 
					 
					}
			   //e3_emoc_lab_skala
			   
			   //e4_impulsiv_skala
			   //����� ������
			   if(((id_id==16)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==36)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245)||(id_id==284))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	              {
				    e4_impulsiv_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==8)||(id_id==20)||(id_id==37)||(id_id==82)||(id_id==91)||(id_id==96)||(id_id==107)||(id_id==134)||(id_id==137)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==287)||(id_id==289)||(id_id==294)||(id_id==296))) 
                   {
				     e4_impulsiv_skala++; 
					 
					}
			   //e4_impulsiv_skala
			   			   			   
			   //e5_genst_skala
			   //����� ������
			   if(((id_id==4)||(id_id==25)||(id_id==69)||(id_id==70)||(id_id==74)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==134)||(id_id==140)||(id_id==149)||(id_id==179)||(id_id==187)||(id_id==203)||(id_id==204)||(id_id==217)||(id_id==226)||(id_id==231)||(id_id==239)||(id_id==261)||(id_id==278)||(id_id==282)||(id_id==295)||(id_id==297)||(id_id==299))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e5_genst_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==1)||(id_id==19)||(id_id==26)||(id_id==28)||(id_id==79)||(id_id==80)||(id_id==81)||(id_id==89)||(id_id==99)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==117)||(id_id==120)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==213)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==260)||(id_id==262)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))) 
                   {
				     e5_genst_skala++; 
					 
					}
			   //e5_genst_skala
			   
			   
			   //e6_rigidnost_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==338)||(id_id==341)||(id_id==364)||(id_id==365))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	              {
				    e6_rigidnost_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==281)||(id_id==294)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))) 
                   {
				     e6_rigidnost_skala++; 
					 
					}
			   //e6_rigidnost_skala
			   
			   //e7_trevoga_skala
			   //����� ������
			   if(((id_id==10)||(id_id==15)||(id_id==22)||(id_id==32)||(id_id==41)||(id_id==67)||(id_id==76)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==142)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==217)||(id_id==238)||(id_id==266)||(id_id==301)||(id_id==304)||(id_id==305)||(id_id==317)||(id_id==321)||(id_id==336)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==346)||(id_id==349)||(id_id==351)||(id_id==352)||(id_id==356)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==361))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e7_trevoga_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==3)||(id_id==8)||(id_id==36)||(id_id==122)||(id_id==152)||(id_id==164)||(id_id==178)||(id_id==329)||(id_id==353))) 
                   {
				     e7_trevoga_skala++; 
					
					}
			   //e7_trevoga_skala
			   
			   //e8_individ_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==21)||(id_id==22)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==40)||(id_id==41)||(id_id==47)||(id_id==52)||(id_id==76)||(id_id==97)||(id_id==104)||(id_id==121)||(id_id==156)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==202)||(id_id==210)||(id_id==212)||(id_id==238)||(id_id==241)||(id_id==251)||(id_id==259)||(id_id==266)||(id_id==273)||(id_id==282)||(id_id==291)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==305)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==332)||(id_id==334)||(id_id==335)||(id_id==339)||(id_id==341)||(id_id==345)||(id_id==349)||(id_id==350)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==360)||(id_id==363)||(id_id==364))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e8_individ_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==8)||(id_id==17)||(id_id==20)||(id_id==37)||(id_id==65)||(id_id==103)||(id_id==119)||(id_id==177)||(id_id==178)||(id_id==187)||(id_id==192)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==281)||(id_id==306)||(id_id==309)||(id_id==322)||(id_id==330))) 
                   {
				     e8_individ_skala++; 
					 
					}
			   //e8_individ_skala
			   
			   //e9_optimist_skala
			   //����� ������
			   if(((id_id==11)||(id_id==13)||(id_id==21)||(id_id==22)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==181)||(id_id==194)||(id_id==212)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==238)||(id_id==240)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==268)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))&&(document.getElementById('vopros_'+id_id).value==1))//e9_optimist_skala
	               {
				    e9_optimist_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==101)||(id_id==105)||(id_id==111)||(id_id==119)||(id_id==120)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))) 
                   {
				     e9_optimist_skala++; 
					 
					}
			   //e9_optimist_skala
			   
			   //e0_introversia_skala
			   //����� ������
			   if(((id_id==32)||(id_id==67)||(id_id==82)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==138)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==236)||(id_id==267)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==332)||(id_id==336)||(id_id==342)||(id_id==357)||(id_id==377)||(id_id==383)||(id_id==398)||(id_id==411)||(id_id==427)||(id_id==436)||(id_id==455)||(id_id==473)||(id_id==487)||(id_id==549)||(id_id==564))&&(document.getElementById('vopros_'+id_id).value==1))//e9_optimist_skala
	               {
				    e0_introversia_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==25)||(id_id==33)||(id_id==57)||(id_id==91)||(id_id==99)||(id_id==119)||(id_id==126)||(id_id==143)||(id_id==193)||(id_id==208)||(id_id==229)||(id_id==231)||(id_id==254)||(id_id==262)||(id_id==281)||(id_id==296)||(id_id==309)||(id_id==353)||(id_id==359)||(id_id==371)||(id_id==391)||(id_id==400)||(id_id==415)||(id_id==440)||(id_id==446)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==469)||(id_id==479)||(id_id==481)||(id_id==482)||(id_id==501)||(id_id==521)||(id_id==547))) 
                                                               
				   {
				     e0_introversia_skala++; 
					 
					}
			   //e0_introversia_skala
			   
			   //k_korrekc_skala
			   //����� ������
			   if(((id_id==96))&&(document.getElementById('vopros_'+id_id).value==1))//k_korrekc_skala
			      {
				    k_korrekc_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value!=2)&&((id_id==30)||(id_id==39)||(id_id==71)||(id_id==89)||(id_id==124)||(id_id==129)||(id_id==134)||(id_id==138)||(id_id==142)||(id_id==148)||(id_id==160)||(id_id==170)||(id_id==171)||(id_id==180)||(id_id==183)||(id_id==217)||(id_id==234)||(id_id==267)||(id_id==272)||(id_id==316)||(id_id==322)||(id_id==374)||(id_id==383)||(id_id==397)||(id_id==398)||(id_id==406)||(id_id==461)||(id_id==502))) 
                   {
				     k_korrekc_skala++; 
					 
					}
			   //k_korrekc_skala
			   if(document.getElementById('ispr_'+id_id).value=='0')
				            {
					         document.getElementById('ispr_'+id_id).value='020';
					        
							}
			   //? �����
			   if(document.getElementById('vopros_'+id_id).value==3)
			       {
				    enez_skala--; 
				    }
				//? �����
			   document.getElementById('vopros_'+id_id).value=2;
			   document.getElementById(id_id+'_da').style.background="#D7F6B6";
			   document.getElementById(id_id+'_neznay').style.background="#D7F6B6";
			   }
             
			 
			 
			 if(neznay==1)
			  {
			   //l_log_skala
			   //����� ������
			    document.getElementById('nez_'+id_id).style.backgroundColor="red";
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==15)||(id_id==30)||(id_id==45)||(id_id==75)||(id_id==105)||(id_id==135)||(id_id==195)||(id_id==225)||(id_id==255)||(id_id==285)||(id_id==60)||(id_id==90)||(id_id==120)||(id_id==150)||(id_id==165))) 
                    {
				     l_log_skala--; 
					 
					}
			   //l_log_skala
			   
			   //f_dost_skala
			   //����� ������
			   if(((id_id==14)||(id_id==23)||(id_id==27)||(id_id==31)||(id_id==33)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==53)||(id_id==56)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==139)||(id_id==146)||(id_id==151)||(id_id==156)||(id_id==168)||(id_id==184)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==206)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==215)||(id_id==218)||(id_id==227)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==291)||(id_id==293))&&(document.getElementById('vopros_'+id_id).value==1))//f_dost_skala
			      {
				    f_dost_skala--; 
				    
				   }
				//����� ������
				if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==17)||(id_id==20)||(id_id==54)||(id_id==65)||(id_id==75)||(id_id==83)||(id_id==112)||(id_id==113)||(id_id==115)||(id_id==164)||(id_id==169)||(id_id==177)||(id_id==185)||(id_id==196)||(id_id==199)||(id_id==220)||(id_id==257)||(id_id==258)||(id_id==272)||(id_id==276))) 
                   
				   {
				     f_dost_skala--; 
					 
					}   
				
				//f_dost_skala
				
				
				
				//e1_sverhkontr_skala
			   //����� ������
			   if(((id_id==23)||(id_id==29)||(id_id==43)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==161)||(id_id==189)||(id_id==273))&&(document.getElementById('vopros_'+id_id).value==1))//e1_sverhkontr_skala
			      {
				    e1_sverhkontr_skala--; 
				    
				   }
				//����� ������
				if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==130)||(id_id==153)||(id_id==155)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274)||(id_id==281))) 
                   
				   {
				     e1_sverhkontr_skala--; 
					 
					}   
				
				//e1_sverhkontr_skala
				
				//e2_pissim_skala=0;
			   //����� ������
			   if(((id_id==5)||(id_id==13)||(id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==130)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==193)||(id_id==236)||(id_id==259))&&(document.getElementById('vopros_'+id_id).value==1))
	
				  {
				    e2_pissim_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==30)||(id_id==36)||(id_id==39)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==89)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==145)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==178)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==238)||(id_id==241)||(id_id==242)||(id_id==248)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285)||(id_id==296))) 

				   {
				     e2_pissim_skala--; 
					 
					}
			   //e2_pissim_skala=0;
				
				//e3_emoc_lab_skala
			   //����� ������
			   if(((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))&&(document.getElementById('vopros_'+id_id).value==1))//e3_emoc_lab_skala
	              {
				    e3_emoc_lab_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==2)||(id_id==3)||(id_id==6)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==51)||(id_id==55)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==103)||(id_id==107)||(id_id==109)||(id_id==124)||(id_id==128)||(id_id==129)||(id_id==136)||(id_id==137)||(id_id==141)||(id_id==147)||(id_id==153)||(id_id==160)||(id_id==162)||(id_id==163)||(id_id==170)||(id_id==172)||(id_id==174)||(id_id==175)||(id_id==180)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==201)||(id_id==213)||(id_id==230)||(id_id==234)||(id_id==243)||(id_id==265)||(id_id==267)||(id_id==274)||(id_id==279)||(id_id==289)||(id_id==292))) 
                   {
				     e3_emoc_lab_skala--; 
					 
					}
			   //e3_emoc_lab_skala
				
				//e4_impulsiv_skala
			   //����� ������
			   if(((id_id==16)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==36)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245)||(id_id==284))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	              {
				    e4_impulsiv_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==8)||(id_id==20)||(id_id==37)||(id_id==82)||(id_id==91)||(id_id==96)||(id_id==107)||(id_id==134)||(id_id==137)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==287)||(id_id==289)||(id_id==294)||(id_id==296))) 
                   {
				     e4_impulsiv_skala--; 
					 
					}
			   //e4_impulsiv_skala
				
				//e5_genst_skala
			   //����� ������
			   if(((id_id==4)||(id_id==25)||(id_id==69)||(id_id==70)||(id_id==74)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==134)||(id_id==140)||(id_id==149)||(id_id==179)||(id_id==187)||(id_id==203)||(id_id==204)||(id_id==217)||(id_id==226)||(id_id==231)||(id_id==239)||(id_id==261)||(id_id==278)||(id_id==282)||(id_id==295)||(id_id==297)||(id_id==299))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e5_genst_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==1)||(id_id==19)||(id_id==26)||(id_id==28)||(id_id==79)||(id_id==80)||(id_id==81)||(id_id==89)||(id_id==99)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==117)||(id_id==120)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==213)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==260)||(id_id==262)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))) 
                   {
				     e5_genst_skala--; 
					 
					}
				//e5_genst_skala
				
				
				//e6_rigidnost_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==338)||(id_id==341)||(id_id==364)||(id_id==365))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	              {
				    e6_rigidnost_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==281)||(id_id==294)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))) 
                   {
				     e6_rigidnost_skala--; 
					 
					}
			   //e6_rigidnost_skala
				
				//e7_trevoga_skala
			   //����� ������
			   if(((id_id==10)||(id_id==15)||(id_id==22)||(id_id==32)||(id_id==41)||(id_id==67)||(id_id==76)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==142)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==217)||(id_id==238)||(id_id==266)||(id_id==301)||(id_id==304)||(id_id==305)||(id_id==317)||(id_id==321)||(id_id==336)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==346)||(id_id==349)||(id_id==351)||(id_id==352)||(id_id==356)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==361))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e7_trevoga_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==3)||(id_id==8)||(id_id==36)||(id_id==122)||(id_id==152)||(id_id==164)||(id_id==178)||(id_id==329)||(id_id==353))) 
                   {
				     e7_trevoga_skala--; 
					 
					}
			   //e7_trevoga_skala
				
				//e8_individ_skala
			   //����� ������
			   if(((id_id==15)||(id_id==16)||(id_id==21)||(id_id==22)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==40)||(id_id==41)||(id_id==47)||(id_id==52)||(id_id==76)||(id_id==97)||(id_id==104)||(id_id==121)||(id_id==156)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==202)||(id_id==210)||(id_id==212)||(id_id==238)||(id_id==241)||(id_id==251)||(id_id==259)||(id_id==266)||(id_id==273)||(id_id==282)||(id_id==291)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==305)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==332)||(id_id==334)||(id_id==335)||(id_id==339)||(id_id==341)||(id_id==345)||(id_id==349)||(id_id==350)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==360)||(id_id==363)||(id_id==364))&&(document.getElementById('vopros_'+id_id).value==1))//e4_impulsiv_skala
	               {
				    e8_individ_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==8)||(id_id==17)||(id_id==20)||(id_id==37)||(id_id==65)||(id_id==103)||(id_id==119)||(id_id==177)||(id_id==178)||(id_id==187)||(id_id==192)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==281)||(id_id==306)||(id_id==309)||(id_id==322)||(id_id==330))) 
                   {
				     e8_individ_skala--; 
					 
					}
			   //e8_individ_skala
				
				//e9_optimist_skala
			   //����� ������
			   if(((id_id==11)||(id_id==13)||(id_id==21)||(id_id==22)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==181)||(id_id==194)||(id_id==212)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==238)||(id_id==240)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==268)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))&&(document.getElementById('vopros_'+id_id).value==1))//e9_optimist_skala
	               {
				    e9_optimist_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==101)||(id_id==105)||(id_id==111)||(id_id==119)||(id_id==120)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))) 
                   {
				     e9_optimist_skala--; 
					 
					}
			   //e9_optimist_skala
				
				//e0_introversia_skala
			   //����� ������
			   if(((id_id==32)||(id_id==67)||(id_id==82)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==138)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==236)||(id_id==267)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==332)||(id_id==336)||(id_id==342)||(id_id==357)||(id_id==377)||(id_id==383)||(id_id==398)||(id_id==411)||(id_id==427)||(id_id==436)||(id_id==455)||(id_id==473)||(id_id==487)||(id_id==549)||(id_id==564))&&(document.getElementById('vopros_'+id_id).value==1))//e9_optimist_skala
	               {
				    e0_introversia_skala--; 
				    
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==25)||(id_id==33)||(id_id==57)||(id_id==91)||(id_id==99)||(id_id==119)||(id_id==126)||(id_id==143)||(id_id==193)||(id_id==208)||(id_id==229)||(id_id==231)||(id_id==254)||(id_id==262)||(id_id==281)||(id_id==296)||(id_id==309)||(id_id==353)||(id_id==359)||(id_id==371)||(id_id==391)||(id_id==400)||(id_id==415)||(id_id==440)||(id_id==446)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==469)||(id_id==479)||(id_id==481)||(id_id==482)||(id_id==501)||(id_id==521)||(id_id==547))) 
                                                               
				   {
				     e0_introversia_skala--; 
					 
					}
			   //e0_introversia_skala
				
				//k_korrekc_skala
			   //����� ������
			   if(((id_id==96))&&(document.getElementById('vopros_'+id_id).value==1))//k_korrekc_skala
			      {
				    k_korrekc_skala--; 
				   }
			   //����� ������
			   if((document.getElementById('vopros_'+id_id).value==2)&&((id_id==30)||(id_id==39)||(id_id==71)||(id_id==89)||(id_id==124)||(id_id==129)||(id_id==134)||(id_id==138)||(id_id==142)||(id_id==148)||(id_id==160)||(id_id==170)||(id_id==171)||(id_id==180)||(id_id==183)||(id_id==217)||(id_id==234)||(id_id==267)||(id_id==272)||(id_id==316)||(id_id==322)||(id_id==374)||(id_id==383)||(id_id==397)||(id_id==398)||(id_id==406)||(id_id==461)||(id_id==502))) 
                   {
				     k_korrekc_skala--; 
					}
			   //k_korrekc_skala
				if(document.getElementById('ispr_'+id_id).value=='0')
				            {
					         document.getElementById('ispr_'+id_id).value='002';
					        
							}
			   //? �����
			   enez_skala++; 
			   //? �����
			   document.getElementById('vopros_'+id_id).value=3;
			   document.getElementById(id_id+'_net').style.background="#D7F6B6";
			   document.getElementById(id_id+'_da').style.background="#D7F6B6";
			   }			
    }
}

function dopshkali()
           {
		    //alert(document.getElementById("vopr_sk").style.display); 
			 if(document.getElementById("vopr_sk").style.display=='inline')
			     {
			      sb_skala = new Array();
				  t_ball_skala=new Array();
				  koefic_m=new Array();
				  koefic_lymda=new Array();
				  koefic_m[1]=11;
				  koefic_lymda[1]=6.2;
				  koefic_m[2]=13.1;
				  koefic_lymda[2]=2.91;
				  koefic_m[3]=72.8;
				  koefic_lymda[3]=7.5;
				  koefic_m[4]=35.5;
				  koefic_lymda[4]=4.87;
				  koefic_m[5]=33.58;
				  koefic_lymda[5]=4.87;  
				  koefic_m[6]=11;
				  koefic_lymda[6]=4.56;
				  koefic_m[7]=33.4;
				  koefic_lymda[7]=4.28;
				  koefic_m[8]=24.95;
				  koefic_lymda[8]=3.89;
				  koefic_m[9]=13.52;
				  koefic_lymda[9]=1.91;
				  koefic_m[10]=54.75;
				  koefic_lymda[10]=7.74;
				  koefic_m[11]=30.6;
				  koefic_lymda[11]=6.27;
				  koefic_m[12]=3.3;
				  koefic_lymda[12]=2.5;
				  koefic_m[13]=11.45;
				  koefic_lymda[13]=2.49;
				  koefic_m[14]=9.57;
				  koefic_lymda[14]=3.15;
				  koefic_m[15]=5.7;
				  koefic_lymda[15]=1.84;
				  koefic_m[16]=2.65;
				  koefic_lymda[16]=1.63;
				  koefic_m[17]=3.66;
				  koefic_lymda[17]=1.77;
				  koefic_m[18]=12.52;
				  koefic_lymda[18]=4.18;
				  koefic_m[19]=16.25;
				  koefic_lymda[19]=2.94;
				  koefic_m[20]=9.85;
				  koefic_lymda[20]=3.66;
				  koefic_m[21]=26.22;
				  koefic_lymda[21]=3.44;
				  koefic_m[22]=18.13;
				  koefic_lymda[22]=4.18;
				  koefic_m[23]=11.97;
				  koefic_lymda[23]=2.69;
				  koefic_m[24]=21.25;
				  koefic_lymda[24]=7.9;
				  koefic_m[25]=12.82;
				  koefic_lymda[25]=4.11;
				  koefic_m[26]=12;
				  koefic_lymda[26]=4.88;
				  koefic_m[27]=12.02;
				  koefic_lymda[27]=3.02;
				  koefic_m[28]=19.9;
				  koefic_lymda[28]=3.84;
				  koefic_m[29]=47.7;
				  koefic_lymda[29]=5.6;
				  koefic_m[30]=16.6;
				  koefic_lymda[30]=8.06;
				  koefic_m[31]=6.03;
				  koefic_lymda[31]=1.97;
				  koefic_m[32]=7.29;
				  koefic_lymda[32]=4.06;
				  koefic_m[33]=7.95;
				  koefic_lymda[33]=2.86;
				  koefic_m[34]=9.02;
				  koefic_lymda[34]=1.08;
				  koefic_m[35]=7.95;
				  koefic_lymda[35]=2.86;
				  koefic_m[36]=2.14;
				  koefic_lymda[36]=2.32;
				  koefic_m[37]=20.53;
				  koefic_lymda[37]=7.43;
				  koefic_m[38]=0.89;
				  koefic_lymda[38]=1.1;
				  koefic_m[39]=4.32;
				  koefic_lymda[39]=1.68;
				  koefic_m[40]=8.34;
				  koefic_lymda[40]=2.6;
				  koefic_m[41]=3.09;
				  koefic_lymda[41]=1.62;
				  koefic_m[42]=5.42;
				  koefic_lymda[42]=2.48;
				  koefic_m[43]=2.37;
				  koefic_lymda[43]=2;
				  koefic_m[44]=1.78;
				  koefic_lymda[44]=1.11;
				  koefic_m[45]=4.85;
				  koefic_lymda[45]=3.54;
				  koefic_m[46]=13.35;
				  koefic_lymda[46]=4.27;
				  koefic_m[47]=28.67;
				  koefic_lymda[47]=3.75;
				  koefic_m[48]=7.12;
				  koefic_lymda[48]=3.45;
				  koefic_m[49]=37.8;
				  koefic_lymda[49]=18.32;
				  koefic_m[50]=42.25;
				  koefic_lymda[50]=5.48;
				  koefic_m[51]=6;
				  koefic_lymda[51]=3.98;
				  koefic_m[52]=27;
				  koefic_lymda[52]=3.42;
				  koefic_m[53]=16.4;
				  koefic_lymda[53]=6.12;
				  koefic_m[54]=32.1;
				  koefic_lymda[54]=6.9;
				  koefic_m[55]=12.12;
				  koefic_lymda[55]=2.97;
				  koefic_m[56]=2.54;
				  koefic_lymda[56]=1.39;
				  koefic_m[57]=3.69;
				  koefic_lymda[57]=1.49;
				  koefic_m[58]=5.7;
				  koefic_lymda[58]=3.02;
				  koefic_m[59]=11.48;
				  koefic_lymda[59]=2.47;
				  koefic_m[60]=5.3;
				  koefic_lymda[60]=2.44;
				  koefic_m[61]=4.16;
				  koefic_lymda[61]=1.88;
				  koefic_m[62]=6.54;
				  koefic_lymda[62]=2.8;
				  koefic_m[63]=4.79;
				  koefic_lymda[63]=3.14;
				  koefic_m[64]=5;
				  koefic_lymda[64]=2.39;
				  koefic_m[65]=14.1;
				  koefic_lymda[65]=4.93;
				  koefic_m[66]=12;
				  koefic_lymda[66]=2.67;
				  koefic_m[67]=4.61;
				  koefic_lymda[67]=1.64;
				  koefic_m[68]=2.74;
				  koefic_lymda[68]=2.25;
				  koefic_m[69]=1.96;
				  koefic_lymda[69]=1.46;
				  koefic_m[70]=5.02;
				  koefic_lymda[70]=2.33;
				  koefic_m[71]=3.5;
				  koefic_lymda[71]=2.7;
				  koefic_m[72]=7.36;
				  koefic_lymda[72]=2.24;
				  koefic_m[73]=4.4;
				  koefic_lymda[73]=2.57;
				  koefic_m[74]=6.19;
				  koefic_lymda[74]=1.98;
				  koefic_m[75]=2.25;
				  koefic_lymda[75]=1.84;
				  koefic_m[76]=3.12;
				  koefic_lymda[76]=1.52;
				  koefic_m[77]=7.02;
				  koefic_lymda[77]=3.6;
				  koefic_m[78]=9.48;
				  koefic_lymda[78]=2.36;
				  koefic_m[79]=32.35;
				  koefic_lymda[79]=3.7;
				  koefic_m[80]=2.14;
				  koefic_lymda[80]=1.89;
				  koefic_m[81]=11.22;
				  koefic_lymda[81]=4.56;
				  koefic_m[82]=10.46;
				  koefic_lymda[82]=4.39;
				  koefic_m[83]=19.2;
				  koefic_lymda[83]=6.32;
				  koefic_m[84]=4.26;
				  koefic_lymda[84]=1.22;
				  koefic_m[85]=14.87;
				  koefic_lymda[85]=5.82;
				  koefic_m[86]=16.8;
				  koefic_lymda[86]=4.04;
				  koefic_m[87]=9.22;
				  koefic_lymda[87]=2.7;
				  koefic_m[88]=13.92;
				  koefic_lymda[88]=2.76;
				  koefic_m[89]=5.32;
				  koefic_lymda[89]=1.33;
				  koefic_m[90]=18.97;
				  koefic_lymda[90]=3.2;
				  koefic_m[91]=18.14;
				  koefic_lymda[91]=4.18;
				  koefic_m[92]=5.17;
				  koefic_lymda[92]=2.95;
				  koefic_m[93]=4.03;
				  koefic_lymda[93]=2.53;
				  koefic_m[94]=2.36;
				  koefic_lymda[94]=1.09;
				  koefic_m[95]=2.26;
				  koefic_lymda[95]=2.23;
				  koefic_m[96]=21.3;
				  koefic_lymda[96]=5.05;
				  koefic_m[97]=22.48;
				  koefic_lymda[97]=3.59;
				  koefic_m[98]=66.87;
				  koefic_lymda[98]=6.74;
				  koefic_m[99]=16.6;
				  koefic_lymda[99]=3.3;
				  koefic_m[100]=11.12;
				  koefic_lymda[100]=2.54;
				  koefic_m[101]=2.02;
				  koefic_lymda[101]=1.58;
				  koefic_m[102]=19.92;
				  koefic_lymda[102]=4.48;
				  koefic_m[103]=70.7;
				  koefic_lymda[103]=12.12;
				  koefic_m[104]=12.35;
				  koefic_lymda[104]=3.06;
				  koefic_m[105]=49.6;
				  koefic_lymda[105]=5.47;
				  koefic_m[106]=11.38;
				  koefic_lymda[106]=2;
				  koefic_m[107]=11.67;
				  koefic_lymda[107]=3.92;
				  koefic_m[108]=20.12;
				  koefic_lymda[108]=6.92;
				  
				  
				  for(i=1;i<=108;i++)
			     	  {
					    sb_skala[i]=0;
				      }
				  
				  			  
				  for(i=1;i<=566;i++)
	               {
						  
						  id_id=i;
						  //alert(document.getElementById('ispr_'+id_id).value);
                          str=document.getElementById('ispr_'+i).value;
			              //alert(str);
			              //alert(str[0]);
			              if(str.length==1) continue;
			
			              if(str[0]==2)
			                {
			                  
                              da=1;
                              net=0;
                              
            	 
				              }			
			
			              //alert(str);
			              if(str[1]==2)
			                 {
			                  
                              net=1;
                              
                              da=0;	
            	             //alert(id_v);
				 
				             }
                         if(str[2]==2)
			                {
			                 
                             net=0;
                             da=0;	
            	 
				             }
								
		          // alert(da);
				  //alert(net);
				  if(da==1)
			             {
			    
			   
			               //sb_1_skala ����� ������������� ������;
			              //����� ������
			              if((id_id==32)||(id_id==41)||(id_id==76)||(id_id==67)||(id_id==94)||(id_id==138)||(id_id==147)||(id_id==236)||(id_id==259)||(id_id==267)||(id_id==278)||(id_id==301)||(id_id==305)||(id_id==321)||(id_id==337)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==356)||(id_id==359)||(id_id==374)||(id_id==382)||(id_id==383)||(id_id==384)||(id_id==389)||(id_id==396)||(id_id==397)||(id_id==411)||(id_id==414)||(id_id==418)||(id_id==431)||(id_id==443)||(id_id==465)||(id_id==499)||(id_id==511)||(id_id==518)||(id_id==544)||(id_id==555))
			                  {
				               sb_skala[1]++; 
				    
				                }
			   
			               //sb_1_skala
						 
						 //sb_2_skala ����������� � ��������;
			              //����� ������
			              if((id_id==32)||(id_id==95)||(id_id==415)||(id_id==546))
			                  {
				               sb_skala[2]++; 
				    
				                }
			   
			               //sb_2_skala
						
						 //sb_3_skala ����� �������� ;
			              //����� ������
			              if((id_id==5)||(id_id==13)||(id_id==26)||(id_id==29)||(id_id==59)||(id_id==77)||(id_id==118)||(id_id==131)||(id_id==132)||(id_id==138)||(id_id==155)||(id_id==158)||(id_id==166)||(id_id==232)||(id_id==233)||(id_id==235)||(id_id==237)||(id_id==240)||(id_id==255)||(id_id==261)||(id_id==262)||(id_id==307)||(id_id==369)||(id_id==387)||(id_id==392)||(id_id==402)||(id_id==406)||(id_id==417)||(id_id==427)||(id_id==428)||(id_id==435)||(id_id==439)||(id_id==442)||(id_id==444)||(id_id==458)||(id_id==470)||(id_id==472)||(id_id==473)||(id_id==491)||(id_id==492)||(id_id==495)||(id_id==506)||(id_id==510)||(id_id==521)||(id_id==541)||(id_id==546)||(id_id==548)||(id_id==554)||(id_id==565))
			                  {
				               sb_skala[3]++; 
				    
				                }
			   
			               //sb_3_skala
						   
						   //sb_4_skala ����������� �������������� ;
			              //����� ������
			              if((id_id==61)||(id_id==94)||(id_id==100)||(id_id==102)||(id_id==127)||(id_id==131)||(id_id==140)||(id_id==215)||(id_id==219)||(id_id==222)||(id_id==239)||(id_id==427)||(id_id==437)||(id_id==446)||(id_id==465)||(id_id==477)||(id_id==503)||(id_id==524)||(id_id==533)||(id_id==554))
			                  {
				               sb_skala[4]++; 
				    
				                }
			   
			               //sb_4_skala
                           
						   //sb_5_skala ����� ���������������
			              //����� ������
			              if((id_id==6)||(id_id==12)||(id_id==69)||(id_id==77)||(id_id==79)||(id_id==91)||(id_id==93)||(id_id==95)||(id_id==99)||(id_id==100)||(id_id==102)||(id_id==109)||(id_id==111)||(id_id==136)||(id_id==141)||(id_id==162)||(id_id==165)||(id_id==166)||(id_id==181)||(id_id==232)||(id_id==240)||(id_id==244)||(id_id==248)||(id_id==254)||(id_id==255)||(id_id==264)||(id_id==270)||(id_id==280)||(id_id==292)||(id_id==298)||(id_id==304)||(id_id==319)||(id_id==321)||(id_id==329)||(id_id==340)||(id_id==361)||(id_id==367)||(id_id==373)||(id_id==391)||(id_id==400)||(id_id==410)||(id_id==415)||(id_id==416)||(id_id==421)||(id_id==425)||(id_id==427)||(id_id==429)||(id_id==439)||(id_id==444)||(id_id==447)||(id_id==455)||(id_id==465)||(id_id==475)||(id_id==477)||(id_id==489)||(id_id==491)||(id_id==492)||(id_id==499)||(id_id==500)||(id_id==503)||(id_id==510)||(id_id==523)||(id_id==564))
			                  {
				               sb_skala[5]++; 
				    
				                }
			   
			               //sb_5_skala

						   //������������ ��������� ���������� ����
			              //����� ������
			              if((id_id==28)||(id_id==39)||(id_id==76)||(id_id==94)||(id_id==142)||(id_id==147)||(id_id==159)||(id_id==180)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==239)||(id_id==273)||(id_id==313)||(id_id==338)||(id_id==343)||(id_id==361)||(id_id==389)||(id_id==499)||(id_id==512)||(id_id==544)||(id_id==549)||(id_id==551)||(id_id==560))
			                  {
				               sb_skala[6]++; 
				    
				                }
								
						  //������������ ��������
			              //����� ������
			              if((id_id==15)||(id_id==26)||(id_id==77)||(id_id==91)||(id_id==95)||(id_id==98)||(id_id==111)||(id_id==115)||(id_id==135)||(id_id==170)||(id_id==198)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==264)||(id_id==287)||(id_id==314)||(id_id==348)||(id_id==387)||(id_id==393)||(id_id==406)||(id_id==425)||(id_id==442)||(id_id==444)||(id_id==461)||(id_id==468)||(id_id==483)||(id_id==488)||(id_id==491)||(id_id==498)||(id_id==548)||(id_id==558))
			                  {
				               sb_skala[7]++; 
				    
				                }
								
						  //����� ������ ��������
			              if((id_id==6)||(id_id==20)||(id_id==30)||(id_id==56)||(id_id==67)||(id_id==105)||(id_id==116)||(id_id==134)||(id_id==145)||(id_id==162)||(id_id==169)||(id_id==181)||(id_id==225)||(id_id==236)||(id_id==238)||(id_id==285)||(id_id==296)||(id_id==319)||(id_id==337)||(id_id==382)||(id_id==411)||(id_id==418)||(id_id==436)||(id_id==446)||(id_id==447)||(id_id==460)||(id_id==529)||(id_id==555))
			                  {
				               sb_skala[8]++; 
				    
				                }
								
						  //����� ������ �������������
			              if((id_id==3)||(id_id==18)||(id_id==129)||(id_id==163)||(id_id==198)||(id_id==261)||(id_id==302)||(id_id==348)||(id_id==376)||(id_id==399)||(id_id==484)||(id_id==508))
			                  {
				               sb_skala[9]++; 
				    
				                }
								
						   //����� ������ ������������� �������
			              if((id_id==8)||(id_id==20)||(id_id==37)||(id_id==58)||(id_id==70)||(id_id==79)||(id_id==95)||(id_id==96)||(id_id==112)||(id_id==131)||(id_id==133)||(id_id==137)||(id_id==152)||(id_id==170)||(id_id==223)||(id_id==249)||(id_id==262)||(id_id==264)||(id_id==329)||(id_id==369)||(id_id==399)||(id_id==403)||(id_id==407)||(id_id==440)||(id_id==445)||(id_id==490))
			                  {
				               sb_skala[10]++; 
				    
				                }
								
						  //����� ������ ����������� ��� ��������
			              if((id_id==45)||(id_id==105)||(id_id==160)||(id_id==195)||(id_id==198)||(id_id==237)||(id_id==255)||(id_id==442))
			                  {
				               sb_skala[11]++; 
				    
				                }
								
						  //����� ������ ������
			              if((id_id==89)||(id_id==93)||(id_id==117)||(id_id==124)||(id_id==265)||(id_id==316)||(id_id==319))
			                  {
				               sb_skala[12]++; 
				    
				                }
							
						  //����� ������ ������ ���������
			              if((id_id==5)||(id_id==130)||(id_id==193))
			                  {
				               sb_skala[13]++; 
				    
				                }	
								
						 //����� ������ ������������ ���������
			              if((id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==259))
			                  {
				               sb_skala[14]++; 
				    
				                }
								
						  //����� ������ ����������� ���������������
			              if((id_id==32)||(id_id==41)||(id_id==86)||(id_id==104)||(id_id==159)||(id_id==182)||(id_id==259)||(id_id==290))
			                  {
				               sb_skala[15]++; 
				    
				                }
						 
						 //����� ������ ���������
			              if((id_id==41)||(id_id==67)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==182)||(id_id==236))
			                  {
				               sb_skala[16]++; 
				               }
						   
						 //����� ������ ������������
			              if((id_id==94)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==224)||(id_id==240)||(id_id==338)||(id_id==419))
			                  {
				               sb_skala[17]++; 
				               }
							   
					     //����� ������ ��������� ���������
			              if(id_id==253)
			                  {
				               sb_skala[18]++; 
				               }
							   
						 //����� ������ �������������
			              if((id_id==64)||(id_id==229)||(id_id==255)||(id_id==270)||(id_id==368)||(id_id==432)||(id_id==523))
			                  {
				               sb_skala[19]++; 
				               }
							   
						 //����� ������ ����� ���������
			              if((id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==259)||(id_id==290))
			                  {
				               sb_skala[20]++; 
				               }
							   
						 //����� ������ ������������ �������
			              if((id_id==51)||(id_id==55)||(id_id==95)||(id_id==128)||(id_id==130)||(id_id==162)||(id_id==232)||(id_id==236)||(id_id==255)||(id_id==294)||(id_id==376)||(id_id==380)||(id_id==399)||(id_id==414)||(id_id==509)||(id_id==519)||(id_id==521)||(id_id==563)||(id_id==565))
			                  {
				               sb_skala[21]++; 
				               }
							   
						//����� ������ ������������
			              if((id_id==10)||(id_id==23)||(id_id==24)||(id_id==29)||(id_id==31)||(id_id==32)||(id_id==44)||(id_id==47)||(id_id==93)||(id_id==97)||(id_id==104)||(id_id==125)||(id_id==210)||(id_id==212)||(id_id==226)||(id_id==241)||(id_id==247)||(id_id==303)||(id_id==325)||(id_id==352)||(id_id==360)||(id_id==375)||(id_id==388)||(id_id==422)||(id_id==438)||(id_id==453)||(id_id==459)||(id_id==475)||(id_id==481)||(id_id==518)||(id_id==525)||(id_id==535)||(id_id==541)||(id_id==543))
			                  {
				               sb_skala[22]++; 
				               }
							   
						//����� ������ ������ ���������
			              if((id_id==5)||(id_id==130)||(id_id==193))
			                  {
				               sb_skala[23]++; 
				               }
							   
						//����� ������ ����������� 
			              if((id_id==19)||(id_id==21)||(id_id==24)||(id_id==41)||(id_id==63)||(id_id==67)||(id_id==70)||(id_id==82)||(id_id==86)||(id_id==98)||(id_id==100)||(id_id==138)||(id_id==141)||(id_id==158)||(id_id==165)||(id_id==180)||(id_id==189)||(id_id==201)||(id_id==212)||(id_id==236)||(id_id==239)||(id_id==259)||(id_id==267)||(id_id==304)||(id_id==305)||(id_id==321)||(id_id==337)||(id_id==338)||(id_id==343)||(id_id==357)||(id_id==361)||(id_id==362)||(id_id==375)||(id_id==382)||(id_id==383)||(id_id==390)||(id_id==394)||(id_id==397)||(id_id==398)||(id_id==408)||(id_id==443)||(id_id==487)||(id_id==488)||(id_id==489)||(id_id==509)||(id_id==531)||(id_id==549)||(id_id==554)||(id_id==564))
			                  {
				               sb_skala[24]++; 
				               }
							   
						//����� ������ �������� 
			              if((id_id==38)||(id_id==42)||(id_id==45)||(id_id==47)||(id_id==76)||(id_id==125)||(id_id==135)||(id_id==150)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==195)||(id_id==208)||(id_id==224)||(id_id==225)||(id_id==235)||(id_id==236)||(id_id==239)||(id_id==246)||(id_id==247)||(id_id==250)||(id_id==252)||(id_id==277)||(id_id==282)||(id_id==300)||(id_id==398)||(id_id==529)||(id_id==532))
			                  {
				               sb_skala[25]++; 
				               }
							   
						//����� ������ ������������� ���������� 
			              if((id_id==13)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==43)||(id_id==52)||(id_id==76)||(id_id==94)||(id_id==97)||(id_id==106)||(id_id==109)||(id_id==118)||(id_id==182)||(id_id==189)||(id_id==222)||(id_id==238)||(id_id==247)||(id_id==248)||(id_id==266)||(id_id==301)||(id_id==305)||(id_id==322)||(id_id==335)||(id_id==345)||(id_id==526))
			                  {
				               sb_skala[26]++; 
				               }
							   
						//����� ������ ������������� �߻ 
			              if((id_id==115)||(id_id==239)||(id_id==503))
			                  {
				               sb_skala[27]++; 
				               }
							   
						//����� ������ ��������� 
			              if((id_id==22)||(id_id==31)||(id_id==32)||(id_id==44)||(id_id==47)||(id_id==59)||(id_id==62)||(id_id==76)||(id_id==83)||(id_id==114)||(id_id==146)||(id_id==150)||(id_id==156)||(id_id==186)||(id_id==189)||(id_id==238)||(id_id==266)||(id_id==312)||(id_id==335)||(id_id==340)||(id_id==342))
			                  {
				               sb_skala[28]++; 
				               }
							   
						//����� ������ ���� ��� 
			              if((id_id==2)||(id_id==36)||(id_id==51)||(id_id==95)||(id_id==109)||(id_id==153)||(id_id==174)||(id_id==181)||(id_id==187)||(id_id==192)||(id_id==208)||(id_id==221)||(id_id==231)||(id_id==234)||(id_id==253)||(id_id==270)||(id_id==355)||(id_id==367)||(id_id==380)||(id_id==410)||(id_id==421)||(id_id==430)||(id_id==458)||(id_id==513)||(id_id==515))
			                  {
				               sb_skala[29]++; 
				               }
							   
						//����� ������ ������ ��������� 
			              if((id_id==13)||(id_id==32)||(id_id==43)||(id_id==48)||(id_id==61)||(id_id==62)||(id_id==67)||(id_id==76)||(id_id==84)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==104)||(id_id==106)||(id_id==114)||(id_id==142)||(id_id==180)||(id_id==189)||(id_id==217)||(id_id==236)||(id_id==244)||(id_id==267)||(id_id==301)||(id_id==305)||(id_id==317)||(id_id==335)||(id_id==337)||(id_id==338)||(id_id==343)||(id_id==345)||(id_id==349)||(id_id==356)||(id_id==361)||(id_id==374)||(id_id==377)||(id_id==384)||(id_id==395)||(id_id==397)||(id_id==414)||(id_id==431)||(id_id==448)||(id_id==487)||(id_id==526)||(id_id==543)||(id_id==544)||(id_id==555)||(id_id==559))
			                  {
				               sb_skala[30]++; 
				               }
							   
						//����� ������ ������������� 
			              if((id_id==4)||(id_id==92)||(id_id==203)||(id_id==361)||(id_id==392)||(id_id==545)||(id_id==555))
			                  {
				               sb_skala[31]++; 
				               }
							   
						//����� ������ ����� ������ ����������������� 
			              if((id_id==16)||(id_id==21)||(id_id==22)||(id_id==23)||(id_id==24)||(id_id==32)||(id_id==35)||(id_id==41)||(id_id==43)||(id_id==67)||(id_id==76)||(id_id==127)||(id_id==157)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==238)||(id_id==266)||(id_id==305))
			                  {
				               sb_skala[32]++; 
				               }
							   
						//����� ������ ������������������ ���������
			              if((id_id==10)||(id_id==23)||(id_id==24)||(id_id==29)||(id_id==41)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==142)||(id_id==159)||(id_id==161)||(id_id==186)||(id_id==189)||(id_id==238)||(id_id==263)||(id_id==273)||(id_id==335)||(id_id==439)||(id_id==517))
			                  {
				               sb_skala[33]++; 
				               }
							   
						//����� ������ ������������������� � �������� ����� 
			              if((id_id==5)||(id_id==26)||(id_id==44)||(id_id==52)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==129)||(id_id==136)||(id_id==144)||(id_id==161)||(id_id==244)||(id_id==265)||(id_id==266)||(id_id==286)||(id_id==348)||(id_id==453)||(id_id==468)||(id_id==513))
			                  {
				               sb_skala[34]++; 
				               }
							   
						//����� ������ �������� ��� ������������� 
			              if((id_id==24)||(id_id==35)||(id_id==43)||(id_id==49)||(id_id==106)||(id_id==145)||(id_id==149)||(id_id==209)||(id_id==250)||(id_id==292)||(id_id==293)||(id_id==301)||(id_id==304)||(id_id==315)||(id_id==338)||(id_id==348)||(id_id==354)||(id_id==366)||(id_id==378)||(id_id==457)||(id_id==494)||(id_id==511)||(id_id==543)||(id_id==561))
			                  {
				               sb_skala[35]++; 
				               }
							   
						//����� ������ ����������������� �� �������� 
			              if((id_id==62)||(id_id==189))
			                  {
				               sb_skala[36]++; 
				               }
							   
						//����� ������ ������������  
			              if((id_id==19)||(id_id==28)||(id_id==52)||(id_id==59)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==110)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==148)||(id_id==157)||(id_id==183)||(id_id==226)||(id_id==244)||(id_id==250)||(id_id==252)||(id_id==265)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==284)||(id_id==292)||(id_id==319)||(id_id==348)||(id_id==368)||(id_id==383)||(id_id==386)||(id_id==394)||(id_id==406)||(id_id==410)||(id_id==411)||(id_id==426)||(id_id==436)||(id_id==438)||(id_id==447)||(id_id==455)||(id_id==458)||(id_id==469)||(id_id==485)||(id_id==504)||(id_id==507)||(id_id==520)||(id_id==531)||(id_id==551)||(id_id==558))
			                  {
				               sb_skala[37]++; 
				               }
							   
						//����� ������ ������ ����������  
			              if((id_id==29)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==125)||(id_id==161))
			                  {
				               sb_skala[38]++; 
				               }
							   
						//����� ������ ���������� ������������ 
			              if((id_id==27)||(id_id==43)||(id_id==59)||(id_id==89)||(id_id==108)||(id_id==167)||(id_id==189)||(id_id==208)||(id_id==350)||(id_id==507)||(id_id==520))
			                  {
				               sb_skala[39]++; 
				               }
							   
						//����� ������ ������ ������� 
			              if((id_id==44)||(id_id==246)||(id_id==253))
			                  {
				               sb_skala[40]++; 
				               }
							   
						//����� ������ ����������� � ������������� ������������ 
			              if(id_id==253)
			                  {
				               sb_skala[42]++; 
				               }
							   
						//����� ������ ������������ ������ 
			              if((id_id==10)||(id_id==23)||(id_id==44)||(id_id==47)||(id_id==114)||(id_id==186))
			                  {
				               sb_skala[43]++; 
				               }
							   
						//����� ������ ����� �������  
			              if((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))
			                  {
				               sb_skala[45]++; 
				               }
							   
						//����� ������ ������� �������  
			              if(id_id==253)
			                  {
				               sb_skala[46]++; 
				               }
							   
						//����� ������ ���������������� �������������  
			              if((id_id==36)||(id_id==37)||(id_id==60)||(id_id==63)||(id_id==78)||(id_id==122)||(id_id==221)||(id_id==225)||(id_id==277)||(id_id==462)||(id_id==464)||(id_id==521)||(id_id==524)||(id_id==546)||(id_id==552))
			                  {
				               sb_skala[47]++; 
				               }
							   
						//����� ������ ��������������
			              if((id_id==15)||(id_id==30)||(id_id==32)||(id_id==33)||(id_id==39)||(id_id==45)||(id_id==62)||(id_id==97)||(id_id==99)||(id_id==139)||(id_id==145)||(id_id==157)||(id_id==244)||(id_id==349)||(id_id==368)||(id_id==381)||(id_id==481)||(id_id==529)||(id_id==545))
			                  {
				               sb_skala[48]++; 
				               }
							   
						//����� ������ ���������� ������������������
			              if((id_id==10)||(id_id==13)||(id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==26)||(id_id==27)||(id_id==28)||(id_id==31)||(id_id==32)||(id_id==33)||(id_id==40)||(id_id==41)||(id_id==43)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==52)||(id_id==53)||(id_id==61)||(id_id==66)||(id_id==67)||(id_id==69)||(id_id==72)||(id_id==74)||(id_id==76)||(id_id==84)||(id_id==86)||(id_id==94)||(id_id==97)||(id_id==102)||(id_id==104)||(id_id==106)||(id_id==121)||(id_id==123)||(id_id==129)||(id_id==138)||(id_id==139)||(id_id==142)||(id_id==145)||(id_id==146)||(id_id==147)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==168)||(id_id==171)||(id_id==182)||(id_id==184)||(id_id==189)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==209)||(id_id==213)||(id_id==236)||(id_id==238)||(id_id==241)||(id_id==244)||(id_id==245)||(id_id==248)||(id_id==252)||(id_id==265)||(id_id==275)||(id_id==278)||(id_id==284)||(id_id==286)||(id_id==291)||(id_id==293)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==304)||(id_id==305)||(id_id==306)||(id_id==312)||(id_id==314)||(id_id==315)||(id_id==317)||(id_id==320)||(id_id==321)||(id_id==324)||(id_id==326)||(id_id==328)||(id_id==331)||(id_id==332)||(id_id==333)||(id_id==334)||(id_id==335)||(id_id==336)||(id_id==337)||(id_id==338)||(id_id==339)||(id_id==340)||(id_id==341)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==346)||(id_id==349)||(id_id==350)||(id_id==351)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==357)||(id_id==358)||(id_id==359)||(id_id==360)||(id_id==361)||(id_id==362)||(id_id==363)||(id_id==364)||(id_id==365)||(id_id==366)||(id_id==368)||(id_id==375)||(id_id==381)||(id_id==384)||(id_id==388)||(id_id==389)||(id_id==390)||(id_id==393)||(id_id==396)||(id_id==397)||(id_id==398)||(id_id==400)||(id_id==408)||(id_id==409)||(id_id==413)||(id_id==414)||(id_id==418)||(id_id==420)||(id_id==431)||(id_id==442)||(id_id==443)||(id_id==448)||(id_id==454)||(id_id==467)||(id_id==469)||(id_id==470)||(id_id==476)||(id_id==494)||(id_id==499)||(id_id==506)||(id_id==517)||(id_id==526)||(id_id==530)||(id_id==543)||(id_id==544))
			                  {
				               sb_skala[49]++; 
				               }
							   
						//����� ������ ���������������� ����������� 
			              if((id_id==36)||(id_id==37)||(id_id==60)||(id_id==63)||(id_id==78)||(id_id==122)||(id_id==173)||(id_id==221)||(id_id==225)||(id_id==277)||(id_id==281)||(id_id==289)||(id_id==430)||(id_id==460)||(id_id==462)||(id_id==464)||(id_id==496)||(id_id==521)||(id_id==524)||(id_id==546)||(id_id==552))
			                  {
				               sb_skala[50]++; 
				               }
							   
						//����� ������ ���������� ������� 
			              if((id_id==5)||(id_id==10)||(id_id==13)||(id_id==14)||(id_id==23)||(id_id==31)||(id_id==32)||(id_id==43)||(id_id==72)||(id_id==179)||(id_id==186)||(id_id==191)||(id_id==217)||(id_id==238)||(id_id==301)||(id_id==321)||(id_id==335)||(id_id==337)||(id_id==351)||(id_id==360)||(id_id==365)||(id_id==395)||(id_id==431)||(id_id==439)||(id_id==480)||(id_id==494)||(id_id==499)||(id_id==506)||(id_id==543)||(id_id==555)||(id_id==559))
			                  {
				               sb_skala[51]++; 
				               }
							   
						//����� ������ �������� ��������� 
			              if((id_id==4)||(id_id==18)||(id_id==77)||(id_id==78)||(id_id==91)||(id_id==97)||(id_id==126)||(id_id==132)||(id_id==148)||(id_id==149)||(id_id==176)||(id_id==180)||(id_id==203)||(id_id==204)||(id_id==237)||(id_id==239)||(id_id==277)||(id_id==295)||(id_id==299)||(id_id==306))
			                  {
				               sb_skala[52]++; 
				               }
							   
						//����� ������ ���������� ���������� ������������ 
			              if((id_id==16)||(id_id==28)||(id_id==35)||(id_id==39)||(id_id==75)||(id_id==80)||(id_id==93)||(id_id==97)||(id_id==109)||(id_id==110)||(id_id==117)||(id_id==118)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==136)||(id_id==139)||(id_id==145)||(id_id==197)||(id_id==226)||(id_id==233)||(id_id==234)||(id_id==235)||(id_id==265)||(id_id==269)||(id_id==271)||(id_id==280)||(id_id==316)||(id_id==336)||(id_id==355)||(id_id==381)||(id_id==393)||(id_id==417)||(id_id==426)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==452)||(id_id==469)||(id_id==471)||(id_id==504)||(id_id==507))
			                  {
				               sb_skala[53]++; 
				               }
							   
						//����� ������ ���������
			              if((id_id==57)||(id_id==95)||(id_id==204)||(id_id==230)||(id_id==272)||(id_id==318)||(id_id==371)||(id_id==415)||(id_id==479)||(id_id==482)||(id_id==495)||(id_id==520)||(id_id==521)||(id_id==523))
			                  {
				               sb_skala[54]++; 
				               }
							   
						//����� ������ ������ ���������
			              if((id_id==11)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==100)||(id_id==109)||(id_id==134)||(id_id==143)||(id_id==167)||(id_id==181)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==240)||(id_id==250)||(id_id==263)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))
			                  {
				               sb_skala[55]++; 
				               }
							   
						//����� ������ ������������
			              if((id_id==143)||(id_id==250)||(id_id==271)||(id_id==277)||(id_id==398))
			                  {
				               sb_skala[56]++; 
				               }
							   
						//����� ������ ������������� �����������
			              if((id_id==13)||(id_id==97)||(id_id==100)||(id_id==111)||(id_id==181)||(id_id==238)||(id_id==266))
			                  {
				               sb_skala[57]++; 
				               }
							   
						//����� ������ ����� ���������
			              if((id_id==13)||(id_id==22)||(id_id==59)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==194)||(id_id==212)||(id_id==226)||(id_id==238)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==277)||(id_id==279)||(id_id==298))
			                  {
				               sb_skala[58]++; 
				               }
							   
						//����� ������ ������� ���������
			              if((id_id==11)||(id_id==21)||(id_id==64)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==181)||(id_id==222)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==240)||(id_id==268)||(id_id==271))
			                  {
				               sb_skala[59]++; 
				               }
							   
						//����� ������ ������������� ������������� 
			              if((id_id==134)||(id_id==217)||(id_id==226)||(id_id==239)||(id_id==278)||(id_id==282)||(id_id==299))
			                  {
				               sb_skala[60]++; 
				               }
							   
						//����� ������ ������������� ��������� 
			              if((id_id==4)||(id_id==25)||(id_id==70)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==140)||(id_id==149)||(id_id==203)||(id_id==204)||(id_id==261)||(id_id==295)||(id_id==69)||(id_id==74)||(id_id==187))
			                  {
				               sb_skala[62]++; 
				               }
							   
						//����� ������ ��������� 
			              if((id_id==5)||(id_id==29)||(id_id==41)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==72)||(id_id==76)||(id_id==108)||(id_id==114)||(id_id==159)||(id_id==186)||(id_id==189)||(id_id==191)||(id_id==236)||(id_id==238)||(id_id==263))
			                  {
				               sb_skala[63]++; 
				               }
							   
						//����� ������ ������������� �������������  
			              if((id_id==267)||(id_id==292)||(id_id==361))
			                  {
				               sb_skala[64]++; 
				               }
							   
						//����� ������ ������������� �������� ��������   
			              if((id_id==39)||(id_id==41)||(id_id==45)||(id_id==71)||(id_id==80)||(id_id==93)||(id_id==109)||(id_id==127)||(id_id==145)||(id_id==162)||(id_id==238)||(id_id==298)||(id_id==316)||(id_id==319)||(id_id==336)||(id_id==381)||(id_id==383)||(id_id==386)||(id_id==397)||(id_id==433)||(id_id==439)||(id_id==505)||(id_id==525)||(id_id==551)||(id_id==566))
			                  {
				               sb_skala[65]++; 
				               }
							   
						//����� ������ ��������������  
			              if((id_id==148)||(id_id==364)||(id_id==408)||(id_id==432))
			                  {
				               sb_skala[66]++; 
				               }
							   
						//����� ������ ������ ��������  
			              if((id_id==27)||(id_id==123)||(id_id==151)||(id_id==275)||(id_id==293)||(id_id==338)||(id_id==365))
			                  {
				               sb_skala[67]++; 
				               }
							   
						//����� ������ ���� �������������  
			              if((id_id==16)||(id_id==24)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==338)||(id_id==364))
			                  {
				               sb_skala[68]++; 
				               }
							   
						//����� ������ ���� ����������  
			              if((id_id==24)||(id_id==111)||(id_id==158)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==341)||(id_id==365))
			                  {
				               sb_skala[69]++; 
				               }
							   
						//����� ������ ����� ��������  
			              if((id_id==16)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==151)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==305)||(id_id==317)||(id_id==326)||(id_id==338)||(id_id==341)||(id_id==364))
			                  {
				               sb_skala[71]++; 
				               }
							   
						//����� ������ ������� ��������  
			              if((id_id==15)||(id_id==127)||(id_id==157)||(id_id==299)||(id_id==365))
			                  {
				               sb_skala[72]++; 
				               }
							   
						//����� ������ ������������ ���������  
				        if((id_id==10)||(id_id==32)||(id_id==43)||(id_id==47)||(id_id==72)||(id_id==76)||(id_id==108)||(id_id==125)||(id_id==238)||(id_id==266)||(id_id==273)||(id_id==303)||(id_id==337)||(id_id==388)||(id_id==526))
			                  {
				               sb_skala[73]++; 
				               }
							   
						//����� ������ ������ ����������  
				        if((id_id==42)||(id_id==61)||(id_id==84)||(id_id==118)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245))
			                  {
				               sb_skala[74]++; 
				               }
							   
						//����� ������ �������� �����������  
				        if((id_id==21)||(id_id==42)||(id_id==212)||(id_id==216)||(id_id==224)||(id_id==245))
			                  {
				               sb_skala[75]++; 
				               }
							   
						//����� ������ ������������ ��������   
				        if((id_id==38)||(id_id==59)||(id_id==118))
			                  {
				               sb_skala[76]++; 
				               }
							   
						//����� ������ ����� ��������������� ����������    
				        if((id_id==16)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==244)||(id_id==245)||(id_id==284))
			                  {
				               sb_skala[77]++; 
				               }
							   
						//����� ������ ������� ��������������� ����������     
				        if((id_id==21)||(id_id==102)||(id_id==127)||(id_id==239))
			                  {
				               sb_skala[78]++; 
				               }
							   
						//����� ������ ������� ����������     
				        if((id_id==18)||(id_id==32)||(id_id==86)||(id_id==90)||(id_id==142)||(id_id==150)||(id_id==155)||(id_id==158)||(id_id==168)||(id_id==174)||(id_id==176)||(id_id==182)||(id_id==200)||(id_id==236)||(id_id==260)||(id_id==285)||(id_id==294)||(id_id==306)||(id_id==308)||(id_id==335)||(id_id==339)||(id_id==342)||(id_id==396)||(id_id==422)||(id_id==429)||(id_id==464)||(id_id==491))
			                  {
				               sb_skala[79]++; 
				               }
							   
						//����� ������ ������ ��������      
				        if((id_id==16)||(id_id==24)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==157)||(id_id==202)||(id_id==245)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==364))
			                  {
				               sb_skala[80]++; 
				               }
							   
						//����� ������ �����������      
				        if((id_id==102)||(id_id==105)||(id_id==120)||(id_id==129)||(id_id==133)||(id_id==147)||(id_id==148)||(id_id==161)||(id_id==172)||(id_id==296)||(id_id==344)||(id_id==348)||(id_id==359)||(id_id==374)||(id_id==382)||(id_id==389)||(id_id==390)||(id_id==396)||(id_id==398)||(id_id==408)||(id_id==416)||(id_id==468)||(id_id==499))
			                  {
				               sb_skala[81]++; 
				               }
							   
						//����� ������ ����������������      
				        if((id_id==47)||(id_id==84)||(id_id==93)||(id_id==106)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==139)||(id_id==157)||(id_id==171)||(id_id==186)||(id_id==250)||(id_id==280)||(id_id==304)||(id_id==307)||(id_id==313)||(id_id==319)||(id_id==323)||(id_id==338)||(id_id==349)||(id_id==373)||(id_id==395)||(id_id==406)||(id_id==411)||(id_id==435)||(id_id==437)||(id_id==469)||(id_id==485)||(id_id==543))
			                  {
				               sb_skala[82]++; 
				               }
							   
						//����� ������ �����������      
				        if((id_id==13)||(id_id==26)||(id_id==58)||(id_id==94)||(id_id==111)||(id_id==112)||(id_id==119)||(id_id==129)||(id_id==147)||(id_id==158)||(id_id==206)||(id_id==232)||(id_id==289)||(id_id==317)||(id_id==336)||(id_id==337)||(id_id==338)||(id_id==356)||(id_id==357)||(id_id==361)||(id_id==375)||(id_id==378)||(id_id==380)||(id_id==390)||(id_id==392)||(id_id==395)||(id_id==397)||(id_id==402)||(id_id==404)||(id_id==413)||(id_id==416)||(id_id==439)||(id_id==443)||(id_id==457)||(id_id==461)||(id_id==468)||(id_id==470)||(id_id==492)||(id_id==499)||(id_id==502)||(id_id==506)||(id_id==509)||(id_id==510)||(id_id==548)||(id_id==564))
			                  {
				               sb_skala[83]++; 
				               }
							   
						//����� ������ ��������������� ��������      
				        if((id_id==176)||(id_id==225))
			                  {
				               sb_skala[84]++; 
				               }
							   
						//����� ������ ������������� ����������       
				        if((id_id==24)||(id_id==11)||(id_id==27)||(id_id==35)||(id_id==48)||(id_id==49)||(id_id==51)||(id_id==66)||(id_id==108)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==134)||(id_id==139)||(id_id==157)||(id_id==161)||(id_id==172)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==212)||(id_id==252)||(id_id==260)||(id_id==274)||(id_id==275)||(id_id==284)||(id_id==286)||(id_id==291)||(id_id==293)||(id_id==334)||(id_id==349)||(id_id==350)||(id_id==360)||(id_id==364)||(id_id==377)||(id_id==386)||(id_id==435)||(id_id==448)||(id_id==453)||(id_id==454)||(id_id==469)||(id_id==509)||(id_id==519)||(id_id==525)||(id_id==551)||(id_id==553))
			                  {
				               sb_skala[85]++; 
				               }
							   
						//����� ������ ����������       
				        if((id_id==41)||(id_id==64)||(id_id==80)||(id_id==81)||(id_id==102)||(id_id==109)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==219)||(id_id==233)||(id_id==240)||(id_id==437)||(id_id==459))
			                  {
				               sb_skala[87]++; 
				               }
							   
						//����� ������ ���������� ���������������       
				        if((id_id==58)||(id_id==111)||(id_id==173)||(id_id==221)||(id_id==294)||(id_id==412)||(id_id==501)||(id_id==552)||(id_id==215)||(id_id==219)||(id_id==233)||(id_id==240)||(id_id==437)||(id_id==459))
			                  {
				               sb_skala[88]++; 
				               }
							   
						//����� ������ ���������� (�������)       
				        if((id_id==37)||(id_id==86)||(id_id==111)||(id_id==141)||(id_id==304)||(id_id==342)||(id_id==357))
			                  {
				               sb_skala[89]++; 
				               }
							   
						//����� ������ ������� ����       
				        if((id_id==54)||(id_id==81)||(id_id==91)||(id_id==96)||(id_id==122)||(id_id==137)||(id_id==207)||(id_id==215)||(id_id==229)||(id_id==282)||(id_id==372)||(id_id==376)||(id_id==477))
			                  {
				               sb_skala[90]++; 
				               }
							   
						//����� ������ ������������ ������� (�������)      
				        if((id_id==99)||(id_id==170)||(id_id==428))
			                  {
				               sb_skala[91]++; 
				               }
							   
						//����� ������ ������ ����������      
				        if((id_id==40)||(id_id==168)||(id_id==210)||(id_id==241)||(id_id==282)||(id_id==297)||(id_id==303)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==334)||(id_id==339)||(id_id==345)||(id_id==350)||(id_id==354)||(id_id==355)||(id_id==363)||(id_id==365))
			                  {
				               sb_skala[92]++; 
				               }
							   
						//����� ������ ���������� ����������      
				        if((id_id==16)||(id_id==21)||(id_id==24)||(id_id==35)||(id_id==52)||(id_id==121)||(id_id==157)||(id_id==212)||(id_id==241)||(id_id==282)||(id_id==305)||(id_id==323)||(id_id==324)||(id_id==352)||(id_id==364))
			                  {
				               sb_skala[93]++; 
				               }
							   
						//����� ������ ������������� ����������       
				        if((id_id==76)||(id_id==104)||(id_id==202)||(id_id==301)||(id_id==339)||(id_id==360)||(id_id==363))
			                  {
				               sb_skala[94]++; 
				               }
							   
						//����� ������ ������������� ���������� ����������       
				        if((id_id==22)||(id_id==33)||(id_id==47)||(id_id==156)||(id_id==194)||(id_id==210)||(id_id==251)||(id_id==273)||(id_id==291)||(id_id==332)||(id_id==334)||(id_id==341)||(id_id==345)||(id_id==350))
			                  {
				               sb_skala[95]++; 
				               }
							   
						//����� ������ ���������������������      
				        if((id_id==46)||(id_id==54)||(id_id==79)||(id_id==107)||(id_id==170)||(id_id==242)||(id_id==262)||(id_id==353)||(id_id==501)||(id_id==521))
			                  {
				               sb_skala[96]++; 
				               }
							   
						//����� ������ ������� �����������     
				        if((id_id==49)||(id_id==53)||(id_id==54)||(id_id==57)||(id_id==73)||(id_id==95)||(id_id==96)||(id_id==125)||(id_id==170)||(id_id==272)||(id_id==329)||(id_id==407)||(id_id==476)||(id_id==488)||(id_id==554))
			                  {
				               sb_skala[97]++; 
				               }
							   
						//����� ������ ���������� �������������    
				        if((id_id==7)||(id_id==17)||(id_id==18)||(id_id==54)||(id_id==65)||(id_id==83)||(id_id==107)||(id_id==113)||(id_id==163)||(id_id==164)||(id_id==169)||(id_id==185)||(id_id==190)||(id_id==196)||(id_id==220)||(id_id==242)||(id_id==257)||(id_id==272)||(id_id==371)||(id_id==528))
			                  {
				               sb_skala[98]++; 
				               }
							   
						//����� ������ ���������� �������     
				        if((id_id==122)||(id_id==173)||(id_id==221)||(id_id==229)||(id_id==253)||(id_id==285)||(id_id==353)||(id_id==391)||(id_id==401)||(id_id==409)||(id_id==412)||(id_id==415)||(id_id==449)||(id_id==529)||(id_id==546)||(id_id==547)||(id_id==552))
			                  {
				               sb_skala[99]++; 
				               }
							   
						//����� ������ ���������� ������    
				        if((id_id==149)||(id_id==204)||(id_id==229)||(id_id==441)||(id_id==491)||(id_id==513)||(id_id==521)||(id_id==552))
			                  {
				               sb_skala[100]++; 
				               }
							   
						//����� ������ �������������    
				        if((id_id==172)||(id_id==180)||(id_id==201)||(id_id==267)||(id_id==292))
			                  {
				               sb_skala[101]++; 
				               }
							   
						//����� ������ ������������� � �������    
				        if((id_id==78)||(id_id==176)||(id_id==221))
			                  {
				               sb_skala[102]++; 
				               }
							   
						//����� ������ ����������� � ������������    
				        if((id_id==57)||(id_id==65)||(id_id==107)||(id_id==119)||(id_id==137)||(id_id==152)||(id_id==163)||(id_id==188)||(id_id==230)||(id_id==257)||(id_id==274)||(id_id==309)||(id_id==310)||(id_id==371)||(id_id==407)||(id_id==412)||(id_id==487)||(id_id==527))
			                  {
				               sb_skala[103]++; 
				               }
							   
						//����� ������ �������� ������� �� ����    
				        if((id_id==79)||(id_id==111)||(id_id==160)||(id_id==228)||(id_id==248)||(id_id==264)||(id_id==296)||(id_id==461)||(id_id==468))
			                  {
				               sb_skala[104]++; 
				               }
							   
						//����� ������ �������� ��� ��������    
				        if((id_id==28)||(id_id==37)||(id_id==58)||(id_id==79)||(id_id==98)||(id_id==137)||(id_id==133)||(id_id==152)||(id_id==207)||(id_id==223)||(id_id==235)||(id_id==240)||(id_id==253)||(id_id==258)||(id_id==262)||(id_id==264)||(id_id==283)||(id_id==310)||(id_id==378)||(id_id==380)||(id_id==423)||(id_id==426)||(id_id==460)||(id_id==493)||(id_id==521)||(id_id==563))
			                  {
				               sb_skala[105]++; 
				               }
							   
						//����� ������ ������ ����������� � ���������� ����    
				        if((id_id==97)||(id_id==129)||(id_id==168)||(id_id==225)||(id_id==249)||(id_id==266)||(id_id==294)||(id_id==303)||(id_id==369)||(id_id==371)||(id_id==390)||(id_id==463)||(id_id==515)||(id_id==528))
			                  {
				               sb_skala[106]++; 
				               }
							   
						//����� ������ ��������� � ������   
				        if((id_id==13)||(id_id==16)||(id_id==32)||(id_id==35)||(id_id==40)||(id_id==41)||(id_id==59)||(id_id==84)||(id_id==109)||(id_id==112)||(id_id==170)||(id_id==244)||(id_id==250)||(id_id==259)||(id_id==272)||(id_id==301)||(id_id==312)||(id_id==331)||(id_id==335)||(id_id==343)||(id_id==389)||(id_id==395)||(id_id==404)||(id_id==406)||(id_id==435)||(id_id==487)||(id_id==507)||(id_id==526)||(id_id==549))
			                  {
				               sb_skala[107]++; 
				               }
							   
						//����� ������ ���������� ���������� �� ����   
				        if((id_id==28)||(id_id==39)||(id_id==40)||(id_id==45)||(id_id==80)||(id_id==86)||(id_id==93)||(id_id==101)||(id_id==110)||(id_id==120)||(id_id==141)||(id_id==142)||(id_id==172)||(id_id==186)||(id_id==191)||(id_id==238)||(id_id==252)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==336)||(id_id==345)||(id_id==351)||(id_id==352)||(id_id==355)||(id_id==357)||(id_id==359)||(id_id==361)||(id_id==374)||(id_id==382)||(id_id==416)||(id_id==418)||(id_id==442)||(id_id==458)||(id_id==487)||(id_id==493)||(id_id==499)||(id_id==500)||(id_id==506)||(id_id==531))
			                  {
				               sb_skala[108]++; 
				               }
							   
							   
							   
							   
						
						}
						 
						 
						 
				  
				  
				  if(net==1)
			            {
			              //sb_1_skala ����� ������������� ������
			              if(id_id==379)
                            {
				            sb_skala[1]++; 
					 
					        }
			              //sb_1_skala
						
						
						//sb_2_skala ����������� � ��������;
			              //����� ������
			              if((id_id==28)||(id_id==33)||(id_id==104)||(id_id==118)||(id_id==142)||(id_id==146)||(id_id==224)||(id_id==244)||(id_id==251)||(id_id==260)||(id_id==303)||(id_id==381)||(id_id==386)||(id_id==419))
			                  {
				               sb_skala[2]++; 
				    
				                }
			   
			               //sb_2_skala
						   
						   //sb_3_skala ����� �������� ;
			              //����� ������
			              if((id_id==1)||(id_id==6)||(id_id==9)||(id_id==18)||(id_id==19)||(id_id==21)||(id_id==28)||(id_id==52)||(id_id==58)||(id_id==62)||(id_id==63)||(id_id==68)||(id_id==70)||(id_id==80)||(id_id==81)||(id_id==86)||(id_id==89)||(id_id==90)||(id_id==95)||(id_id==97)||(id_id==99)||(id_id==100)||(id_id==109)||(id_id==117)||(id_id==120)||(id_id==128)||(id_id==133)||(id_id==135)||(id_id==136)||(id_id==141)||(id_id==142)||(id_id==144)||(id_id==146)||(id_id==148)||(id_id==157)||(id_id==160)||(id_id==181)||(id_id==186)||(id_id==223)||(id_id==231)||(id_id==238)||(id_id==244)||(id_id==248)||(id_id==249)||(id_id==250)||(id_id==259)||(id_id==266)||(id_id==268)||(id_id==270)||(id_id==271)||(id_id==274)||(id_id==277)||(id_id==278)||(id_id==281)||(id_id==283)||(id_id==298)||(id_id==319)||(id_id==334)||(id_id==343)||(id_id==345)||(id_id==356)||(id_id==358)||(id_id==367)||(id_id==373)||(id_id==378)||(id_id==386)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==401)||(id_id==410)||(id_id==416)||(id_id==424)||(id_id==425)||(id_id==430)||(id_id==434)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==454)||(id_id==465)||(id_id==467)||(id_id==475)||(id_id==481)||(id_id==505)||(id_id==533)||(id_id==542)||(id_id==552)||(id_id==558)||(id_id==560)||(id_id==561))
			                  {
				               sb_skala[3]++; 
				    
				                }
			   
			               //sb_3_skala
						   
						   //sb_4_skala ����������� ��������������
			              //����� ������
			              if((id_id==26)||(id_id==39)||(id_id==46)||(id_id==95)||(id_id==144)||(id_id==145)||(id_id==155)||(id_id==237)||(id_id==264)||(id_id==287)||(id_id==289)||(id_id==292)||(id_id==294)||(id_id==300)||(id_id==322)||(id_id==327)||(id_id==337)||(id_id==343)||(id_id==345)||(id_id==356)||(id_id==358)||(id_id==367)||(id_id==373)||(id_id==378)||(id_id==386)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==401)||(id_id==410)||(id_id==416)||(id_id==424)||(id_id==425)||(id_id==430)||(id_id==434)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==454)||(id_id==465)||(id_id==467)||(id_id==475)||(id_id==481)||(id_id==505)||(id_id==533)||(id_id==542)||(id_id==552)||(id_id==558)||(id_id==560)||(id_id==561))
			                  {
				               sb_skala[4]++; 
				    
				                }
			   
			               //sb_4_skala
						  
						  //����� ������ ������������ ��������� ���������� ����
			              if((id_id==8)||(id_id==46)||(id_id==57)||(id_id==69)||(id_id==163)||(id_id==188)||(id_id==242)||(id_id==407)||(id_id==412)||(id_id==450)||(id_id==513)||(id_id==523))
			                  {
				               sb_skala[6]++; 
				    
				                }
								
						  //����� ������ ������������ ��������
			              if((id_id==6)||(id_id==21)||(id_id==78)||(id_id==81)||(id_id==100)||(id_id==102)||(id_id==124)||(id_id==126)||(id_id==140)||(id_id==160)||(id_id==181)||(id_id==208)||(id_id==217)||(id_id==231)||(id_id==295)||(id_id==308)||(id_id==374)||(id_id==400)||(id_id==441)||(id_id==446)||(id_id==463)||(id_id==465)||(id_id==475)||(id_id==477)||(id_id==499)||(id_id==503)||(id_id==556))
			                  {
				               sb_skala[7]++; 
				    
				                }
								
						  //����� ������ ��������
			              if((id_id==58)||(id_id==80)||(id_id==92)||(id_id==96)||(id_id==111)||(id_id==167)||(id_id==174)||(id_id==220)||(id_id==242)||(id_id==249)||(id_id==250)||(id_id==291)||(id_id==313)||(id_id==360)||(id_id==378)||(id_id==439)||(id_id==444)||(id_id==483)||(id_id==488)||(id_id==489)||(id_id==527)||(id_id==548))
			                  {
				               sb_skala[8]++; 
				    
				                }
								
						  //����� ������ �������������
			              if((id_id==8)||(id_id==127)||(id_id==199)||(id_id==328)||(id_id==346)||(id_id==470)||(id_id==480)||(id_id==531)||(id_id==533)||(id_id==556))
			                  {
				               sb_skala[9]++; 
				    
				                }
								
						  //����� ������ ������������� �������
			              if((id_id==4)||(id_id==5)||(id_id==13)||(id_id==21)||(id_id==24)||(id_id==34)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==76)||(id_id==106)||(id_id==139)||(id_id==146)||(id_id==179)||(id_id==180)||(id_id==189)||(id_id==204)||(id_id==234)||(id_id==236)||(id_id==243)||(id_id==247)||(id_id==266)||(id_id==282)||(id_id==284)||(id_id==299)||(id_id==301)||(id_id==305)||(id_id==337)||(id_id==344)||(id_id==349)||(id_id==352)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==382)||(id_id==388)||(id_id==397)||(id_id==411)||(id_id==425)||(id_id==431)||(id_id==454)||(id_id==455)||(id_id==487)||(id_id==489)||(id_id==494)||(id_id==499)||(id_id==503)||(id_id==510)||(id_id==517)||(id_id==531)||(id_id==543))
			                  {
				               sb_skala[10]++; 
				    
				                }
								
						  //����� ������ ����������� ��� ��������
			              if((id_id==32)||(id_id==33)||(id_id==71)||(id_id==81)||(id_id==94)||(id_id==112)||(id_id==128)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==142)||(id_id==217)||(id_id==223)||(id_id==238)||(id_id==241)||(id_id==244)||(id_id==248)||(id_id==250)||(id_id==258)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==292)||(id_id==319)||(id_id==324)||(id_id==348)||(id_id==359)||(id_id==378)||(id_id==383)||(id_id==386)||(id_id==390)||(id_id==395)||(id_id==396)||(id_id==404)||(id_id==408)||(id_id==409)||(id_id==416)||(id_id==418)||(id_id==447)||(id_id==461)||(id_id==468)||(id_id==504)||(id_id==537))
			                  {
				               sb_skala[11]++; 
				    
				                }
								
						  //����� ������ ������ ���������
			              if((id_id==39)||(id_id==46)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==95)||(id_id==98)||(id_id==131)||(id_id==145)||(id_id==154)||(id_id==191)||(id_id==207)||(id_id==233)||(id_id==241)||(id_id==242)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285))
			                  {
				               sb_skala[13]++; 
				    
				                }
								
						  //����� ������ ������������ ���������
			              if((id_id==2)||(id_id==8)||(id_id==46)||(id_id==56)||(id_id==88)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==152)||(id_id==160)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==242)||(id_id==272)||(id_id==285)||(id_id==296))
			                  {
				               sb_skala[14]++; 
				    
				                }
								
						  //����� ������ ����������� ���������������
			              if((id_id==8)||(id_id==9)||(id_id==46)||(id_id==88)||(id_id==122)||(id_id==178)||(id_id==207))
			                  {
				               sb_skala[15]++; 
				    
				                }
								
						//����� ������ ���������
			              if((id_id==88)||(id_id==107))
			                  {
				               sb_skala[16]++; 
				    
				                }
							
						//����� ������ ������������
			              if((id_id==107)||(id_id==120)||(id_id==294)||(id_id==513))
			                  {
				               sb_skala[17]++; 
				    
				                }
                        //����� ������ ��������� ���������
			              if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==141)||(id_id==147)||(id_id==162)||(id_id==170)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==267)||(id_id==279)||(id_id==289)||(id_id==292))
			                  {
				               sb_skala[18]++; 
				               }
							   
						//����� ������ �������������
			              if((id_id==32)||(id_id==61)||(id_id==82)||(id_id==86)||(id_id==94)||(id_id==186)||(id_id==223)||(id_id==224)||(id_id==240)||(id_id==249)||(id_id==250)||(id_id==267)||(id_id==268)||(id_id==304)||(id_id==343)||(id_id==356)||(id_id==395)||(id_id==419)||(id_id==486)||(id_id==558)||(id_id==562))
			                  {
				               sb_skala[19]++; 
				               }
							   
						//����� ������ ����� ���������
			              if((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==36)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==88)||(id_id==95)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==178)||(id_id==207)||(id_id==242)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285))
			                  {
				               sb_skala[20]++; 
				               }
							   
						//����� ������ ������������ �������
			              if((id_id==6)||(id_id==52)||(id_id==56)||(id_id==58)||(id_id==62)||(id_id==156)||(id_id==224)||(id_id==226)||(id_id==251)||(id_id==264)||(id_id==277)||(id_id==296)||(id_id==359)||(id_id==364)||(id_id==379)||(id_id==383)||(id_id==396)||(id_id==419)||(id_id==445)||(id_id==458)||(id_id==472)||(id_id==492)||(id_id==498))
			                  {
				               sb_skala[21]++; 
				               }
							   
						//����� ������ ������������
			              if((id_id==68)||(id_id==83)||(id_id==88)||(id_id==96)||(id_id==257)||(id_id==306))
			                  {
				               sb_skala[22]++; 
				               }
							   
						//����� ������ ������ ���������
			              if((id_id==30)||(id_id==39)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==89)||(id_id==98)||(id_id==145)||(id_id==155)||(id_id==160)||(id_id==191)||(id_id==208)||(id_id==233)||(id_id==241)||(id_id==248)||(id_id==263)||(id_id==296))
			                  {
				               sb_skala[23]++; 
				               }
							   
						//����� ������ �����������
			              if((id_id==9)||(id_id==79)||(id_id==107)||(id_id==163)||(id_id==170)||(id_id==193)||(id_id==264)||(id_id==369))
			                  {
				               sb_skala[24]++; 
				               }
							   
						//����� ������ ��������
			              if((id_id==2)||(id_id==3)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==115)||(id_id==178)||(id_id==268)||(id_id==294)||(id_id==379)||(id_id==380)||(id_id==395))
			                  {
				               sb_skala[25]++; 
				               }
							   
						//����� ������ ������������� ����������
			              if((id_id==2)||(id_id==3)||(id_id==8)||(id_id==9)||(id_id==26)||(id_id==36)||(id_id==79)||(id_id==103)||(id_id==107)||(id_id==112)||(id_id==137)||(id_id==153)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==178)||(id_id==190)||(id_id==242)||(id_id==378)||(id_id==387)||(id_id==402)||(id_id==407)||(id_id==449))
			                  {
				               sb_skala[26]++; 
				               }
							   
						//����� ������ ������������� �߻
			              if((id_id==59)||(id_id==99)||(id_id==118)||(id_id==126)||(id_id==149)||(id_id==165)||(id_id==181)||(id_id==204)||(id_id==208)||(id_id==231)||(id_id==254)||(id_id==383)||(id_id==400)||(id_id==406)||(id_id==441)||(id_id==450)||(id_id==451)||(id_id==481)||(id_id==491)||(id_id==529))
			                  {
				               sb_skala[27]++; 
				               }
							   
						//����� ������ ���������
			              if((id_id==4)||(id_id==8)||(id_id==9)||(id_id==36)||(id_id==46)||(id_id==58)||(id_id==68)||(id_id==69)||(id_id==70)||(id_id==101)||(id_id==103)||(id_id==122)||(id_id==125)||(id_id==144)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==174)||(id_id==175)||(id_id==183)||(id_id==187)||(id_id==188)||(id_id==190)||(id_id==196)||(id_id==198)||(id_id==213)||(id_id==242)||(id_id==254)||(id_id==279)||(id_id==281)||(id_id==289)||(id_id==295)||(id_id==322)||(id_id==329))
			                  {
				               sb_skala[28]++; 
				               }
							   
						//����� ������ ���� ���
			              if((id_id==14)||(id_id==22)||(id_id==32)||(id_id==33)||(id_id==34)||(id_id==43)||(id_id==48)||(id_id==58)||(id_id==62)||(id_id==82)||(id_id==94)||(id_id==100)||(id_id==132)||(id_id==140)||(id_id==189)||(id_id==209)||(id_id==217)||(id_id==236)||(id_id==241)||(id_id==244)||(id_id==251)||(id_id==261)||(id_id==341)||(id_id==344)||(id_id==349)||(id_id==359)||(id_id==378)||(id_id==384)||(id_id==389)||(id_id==420)||(id_id==483)||(id_id==488)||(id_id==489)||(id_id==494)||(id_id==510)||(id_id==525)||(id_id==541)||(id_id==544)||(id_id==548)||(id_id==554)||(id_id==559)||(id_id==561)||(id_id==555))
			                  {
				               sb_skala[29]++; 
				               }
							   
						//����� ������ ������ ���������
			              if((id_id==3)||(id_id==8)||(id_id==9)||(id_id==57)||(id_id==107)||(id_id==152)||(id_id==198)||(id_id==242)||(id_id==287)||(id_id==371)||(id_id==379)||(id_id==407)||(id_id==449)||(id_id==520)||(id_id==547))
			                  {
				               sb_skala[30]++; 
				               }
							   
						//����� ������ �������������
			              if((id_id==1)||(id_id==99)||(id_id==118)||(id_id==144)||(id_id==145)||(id_id==219)||(id_id==223)||(id_id==254)||(id_id==563))
			                  {
				               sb_skala[31]++; 
				               }
							   
						//����� ������ ����� ������ �����������������
			              if((id_id==2)||(id_id==3)||(id_id==8)||(id_id==9)||(id_id==51)||(id_id==103)||(id_id==107)||(id_id==119)||(id_id==153)||(id_id==178)||(id_id==185)||(id_id==192)||(id_id==281)||(id_id==289)||(id_id==296))
			                  {
				               sb_skala[32]++; 
				               }
							   
						//����� ������ ������������������ ���������
			              if((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==46)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==128)||(id_id==136)||(id_id==152)||(id_id==153)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==242)||(id_id==243)||(id_id==248)||(id_id==274)||(id_id==281)||(id_id==330)||(id_id==407)||(id_id==436)||(id_id==449)||(id_id==462))
			                  {
				               sb_skala[33]++; 
				               }
							   
						//����� ������ ������������������� � �������� ����� 
			              if((id_id==99)||(id_id==103)||(id_id==175)||(id_id==421)||(id_id==428)||(id_id==457)||(id_id==467)||(id_id==479)||(id_id==547))
			                  {
				               sb_skala[34]++; 
				               }
							   
						//����� ������ �������� ��� �������������  
			              if((id_id==8)||(id_id==57)||(id_id==164)||(id_id==175)||(id_id==251)||(id_id==283)||(id_id==353)||(id_id==403)||(id_id==460)||(id_id==496))
			                  {
				               sb_skala[35]++; 
				               }
							   
						//����� ������ ����������������� �� ��������  
			              if((id_id==2)||(id_id==39)||(id_id==51)||(id_id==55)||(id_id==68)||(id_id==103)||(id_id==153)||(id_id==163)||(id_id==175)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==330))
			                  {
				               sb_skala[36]++; 
				               }
							   
						//����� ������ ������������   
			              if((id_id==237)||(id_id==253)||(id_id==399))
			                  {
				               sb_skala[37]++; 
				               }
							   
						//����� ������ ������ ����������   
			              if((id_id==63)||(id_id==68)||(id_id==130))
			                  {
				               sb_skala[38]++; 
				               }
							   
						//����� ������ ���������� ������������   
			              if((id_id==48)||(id_id==180)||(id_id==515))
			                  {
				               sb_skala[39]++; 
				               }
							   
						//����� ������ ������ �������  
			              if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==71)||(id_id==123)||(id_id==129)||(id_id==136)||(id_id==147)||(id_id==162)||(id_id==172)||(id_id==174)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==279)||(id_id==292))
			                  {
				               sb_skala[40]++; 
				               }
							   
						//����� ������ ���������� �������  
			              if((id_id==141)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==267)||(id_id==292))
			                  {
				               sb_skala[41]++; 
				               }
							   
						//����� ������ ����������� � ������������� ������������  
			              if((id_id==26)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==136)||(id_id==162)||(id_id==234)||(id_id==265)||(id_id==289))
			                  {
				               sb_skala[42]++; 
				               }
							   
						//����� ������ ������������ ������ 
			              if((id_id==7)||(id_id==55)||(id_id==103)||(id_id==174)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274))
			                  {
				               sb_skala[43]++; 
				               }
							   
						//����� ������ ����������� �������� 
			              if((id_id==6)||(id_id==12)||(id_id==30)||(id_id==128)||(id_id==129)||(id_id==147)||(id_id==170))
			                  {
				               sb_skala[44]++; 
				               }
							   
						//����� ������ ����� �������  
			              if((id_id==2)||(id_id==3)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==51)||(id_id==55)||(id_id==103)||(id_id==107)||(id_id==128)||(id_id==137)||(id_id==153)||(id_id==163)||(id_id==174)||(id_id==175)||(id_id==188)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274))
			                  {
				               sb_skala[45]++; 
				               }
							   
						//����� ������ ������� �������  
			              if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==141)||(id_id==147)||(id_id==160)||(id_id==162)||(id_id==170)||(id_id==172)||(id_id==180)||(id_id==190)||(id_id==201)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==267)||(id_id==279)||(id_id==289)||(id_id==292))
			                  {
				               sb_skala[46]++; 
				               }
							   
						//����� ������ ���������������� �������������  
			              if((id_id==13)||(id_id==28)||(id_id==33)||(id_id==35)||(id_id==62)||(id_id==116)||(id_id==146)||(id_id==194)||(id_id==198)||(id_id==224)||(id_id==256)||(id_id==260)||(id_id==267)||(id_id==280)||(id_id==304)||(id_id==338)||(id_id==392)||(id_id==448)||(id_id==455)||(id_id==487)||(id_id==492)||(id_id==526)||(id_id==541)||(id_id==559))
			                  {
				               sb_skala[47]++; 
				               }
							   
						//����� ������ ��������������
			              if((id_id==96)||(id_id==111))
			                  {
				               sb_skala[48]++; 
				               }
							   
						//����� ������ ���������� ������������������
						if((id_id==9)||(id_id==20)||(id_id==36)||(id_id==37)||(id_id==57)||(id_id==107)||(id_id==122)||(id_id==133)||(id_id==152)||(id_id==257)||(id_id==310)||(id_id==353)||(id_id==371))
			                  {
				               sb_skala[49]++; 
				               }
							   
						//����� ������ ���������� ������������������
						if((id_id==13)||(id_id==28)||(id_id==33)||(id_id==35)||(id_id==62)||(id_id==111)||(id_id==116)||(id_id==117)||(id_id==146)||(id_id==194)||(id_id==198)||(id_id==224)||(id_id==250)||(id_id==256)||(id_id==260)||(id_id==265)||(id_id==267)||(id_id==280)||(id_id==304)||(id_id==313)||(id_id==338)||(id_id==343)||(id_id==348)||(id_id==392)||(id_id==442)||(id_id==448)||(id_id==455)||(id_id==480)||(id_id==485)||(id_id==487)||(id_id==492)||(id_id==504)||(id_id==511)||(id_id==526)||(id_id==541)||(id_id==553)||(id_id==555)||(id_id==559))
			                  {
				               sb_skala[50]++; 
				               }
							   
						//����� ������ �������� ���������
						if((id_id==19)||(id_id==20)||(id_id==26)||(id_id==28)||(id_id==41)||(id_id==79)||(id_id==84)||(id_id==94)||(id_id==99)||(id_id==118)||(id_id==133)||(id_id==144)||(id_id==157)||(id_id==216)||(id_id==224)||(id_id==227)||(id_id==232)||(id_id==260)||(id_id==264)||(id_id==279)||(id_id==283)||(id_id==297)||(id_id==300)||(id_id==303)||(id_id==310)||(id_id==316)||(id_id==338)||(id_id==343)||(id_id==356)||(id_id==358))
			                  {
				               sb_skala[52]++; 
				               }
							   
						//����� ������ �������� ���������
						if((id_id==82)||(id_id==96)||(id_id==347)||(id_id==399)||(id_id==468))
			                  {
				               sb_skala[53]++; 
				               }
							   
						//����� ������ ���������
						if((id_id==24)||(id_id==33)||(id_id==67)||(id_id==100)||(id_id==111)||(id_id==147)||(id_id==160)||(id_id==171)||(id_id==172)||(id_id==201)||(id_id==212)||(id_id==216)||(id_id==267)||(id_id==292)||(id_id==294)||(id_id==296)||(id_id==304)||(id_id==320)||(id_id==321)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==344)||(id_id==352)||(id_id==377)||(id_id==387)||(id_id==408)||(id_id==411)||(id_id==41)||(id_id==418)||(id_id==425)||(id_id==440)||(id_id==448)||(id_id==509)||(id_id==530)||(id_id==544))
			                  {
				               sb_skala[54]++; 
				               }
							   
						//����� ������ ������ ���������
						if((id_id==101)||(id_id==105)||(id_id==148)||(id_id==166))
			                  {
				               sb_skala[55]++; 
				               }
							   
						//����� ������ ������������
						if(id_id==289)
			                  {
				               sb_skala[56]++; 
				               }
							   
						//����� ������ ������������� �����������
						if((id_id==119)||(id_id==134)||(id_id==228)||(id_id==268))
			                  {
				               sb_skala[57]++; 
				               }
							   
						//����� ������ ����� ���������
						if((id_id==111)||(id_id==119)||(id_id==120))
			                  {
				               sb_skala[58]++; 
				               }
							   
						//����� ������ ������� ���������
						if((id_id==101)||(id_id==105)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))
			                  {
				               sb_skala[59]++; 
				               }
							   
						//����� ������ ������������� ������������� 
						if((id_id==79)||(id_id==99)||(id_id==176)||(id_id==198)||(id_id==214)||(id_id==254)||(id_id==262)||(id_id==264))
			                  {
				               sb_skala[60]++; 
				               }
							   
						//����� ������ ��������� 
						if((id_id==19)||(id_id==26)||(id_id==28)||(id_id==80)||(id_id==89)||(id_id==112)||(id_id==117)||(id_id==120)||(id_id==280))
			                  {
				               sb_skala[61]++; 
				               }
							   
						//����� ������ ������������� ��������� 
						if((id_id==1)||(id_id==19)||(id_id==28)||(id_id==79)||(id_id==81)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==249)||(id_id==260)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))
			                  {
				               sb_skala[62]++; 
				               }
							   
						//����� ������ ��������� 
						if((id_id==2)||(id_id==3)||(id_id==9)||(id_id==46)||(id_id==51)||(id_id==68)||(id_id==103)||(id_id==107)||(id_id==175)||(id_id==178)||(id_id==190)||(id_id==208)||(id_id==242))
			                  {
				               sb_skala[63]++; 
				               }
							   
						//����� ������ ������������� ������������� 
						if((id_id==12)||(id_id==187)||(id_id==192)||(id_id==228)||(id_id==229)||(id_id==242)||(id_id==287)||(id_id==353)||(id_id==371)||(id_id==401)||(id_id==440)||(id_id==482)||(id_id==520)||(id_id==528)||(id_id==533))
			                  {
				               sb_skala[64]++; 
				               }
							   
						//����� ������ ������������� �������� ��������  
						if((id_id==8)||(id_id==101)||(id_id==167)||(id_id==173)||(id_id==369)||(id_id==399)||(id_id==478)||(id_id==527))
			                  {
				               sb_skala[65]++; 
				               }
							   
						//����� ������ ��������������
						if((id_id==67)||(id_id==82)||(id_id==112)||(id_id==115)||(id_id==129)||(id_id==136)||(id_id==138)||(id_id==206)||(id_id==219)||(id_id==223)||(id_id==258)||(id_id==268)||(id_id==322)||(id_id==394)||(id_id==406)||(id_id==411)||(id_id==498)||(id_id==523)||(id_id==561)||(id_id==563)||(id_id==564))
			                  {
				               sb_skala[66]++; 
				               }
							   
						//����� ������ ������ ��������
						if((id_id==117)||(id_id==268)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))
			                  {
				               sb_skala[67]++; 
				               }
							   
						//����� ������ ���� �������������
						if(id_id==347)
			                  {
				               sb_skala[68]++; 
				               }
							   
						//����� ������ ���� �������������
						if(id_id==268)
			                  {
				               sb_skala[69]++; 
				               }
							   
						//����� ������ ���������
						if((id_id==15)||(id_id==93)||(id_id==109)||(id_id==117)||(id_id==124)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==348))
			                  {
				               sb_skala[70]++; 
				               }
							   
						//����� ������ ����� ��������
						if((id_id==281)||(id_id==294)||(id_id==347))
			                  {
				               sb_skala[71]++; 
				               }
							   
						//����� ������ ������� ��������
						if((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==348))
			                  {
				               sb_skala[72]++; 
				               }
							   
						//����� ������ ������������ ���������
						if((id_id==2)||(id_id==12)||(id_id==51)||(id_id==55)||(id_id==155)||(id_id==175)||(id_id==243)||(id_id==521)||(id_id==533))
			                  {
				               sb_skala[73]++; 
				               }
							   
						//����� ������ ������ ����������
						if((id_id==82)||(id_id==96)||(id_id==134)||(id_id==173)||(id_id==183)||(id_id==235)||(id_id==237)||(id_id==287))
			                  {
				               sb_skala[74]++; 
				               }
							   
						//����� ������ �������� �����������
						if((id_id==96)||(id_id==137)||(id_id==235)||(id_id==237)||(id_id==527))
			                  {
				               sb_skala[75]++; 
				               }
							   
						//����� ������ ������������ ��������
						if((id_id==37)||(id_id==82)||(id_id==141)||(id_id==175)||(id_id==289)||(id_id==294)||(id_id==429)||(id_id==520))
			                  {
				               sb_skala[76]++; 
				               }
							   
						//����� ������ ����� ��������������� ���������� 
						if((id_id==8)||(id_id==20)||(id_id==37)||(id_id==91)||(id_id==107)||(id_id==137)||(id_id==287)||(id_id==294))
			                  {
				               sb_skala[77]++; 
				               }
							   
						//����� ������ ������� ��������������� ���������� 
						if((id_id==82)||(id_id==96)||(id_id==134)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==289)||(id_id==296))
			                  {
				               sb_skala[78]++; 
				               }
							   
						//����� ������ ������� ���������� 
						if((id_id==4)||(id_id==8)||(id_id==11)||(id_id==53)||(id_id==109)||(id_id==132)||(id_id==147)||(id_id==178)||(id_id==180)||(id_id==224)||(id_id==233)||(id_id==234)||(id_id==268)||(id_id==270)||(id_id==283)||(id_id==327)||(id_id==343)||(id_id==346)||(id_id==360)||(id_id==364)||(id_id==367)||(id_id==370)||(id_id==373)||(id_id==375)||(id_id==400)||(id_id==404)||(id_id==419)||(id_id==426)||(id_id==440)||(id_id==484)||(id_id==485)||(id_id==488)||(id_id==490)||(id_id==492)||(id_id==522)||(id_id==525)||(id_id==541)||(id_id==551))
			                  {
				               sb_skala[79]++; 
				               }
							   
						//����� ������ ������� ����������� 
						if((id_id==63)||(id_id==68)||(id_id==119)||(id_id==130)||(id_id==160)||(id_id==163)||(id_id==214)||(id_id==264)||(id_id==274)||(id_id==367))
			                  {
				               sb_skala[81]++; 
				               }
							   
						//����� ������ ������� ���������������� 
						if((id_id==78)||(id_id==176)||(id_id==221))
			                  {
				               sb_skala[82]++; 
				               }
							   
						//����� ������ ������� ����������� 
						if((id_id==30)||(id_id==45)||(id_id==176)||(id_id==401))
			                  {
				               sb_skala[83]++; 
				               }
							   
						//����� ������ ��������������� �������� 
						if((id_id==32)||(id_id==335)||(id_id==531)||(id_id==558))
			                  {
				               sb_skala[84]++; 
				               }
							   
						//����� ������ ������������� ���������� 
						if((id_id==20)||(id_id==133)||(id_id==177)||(id_id==198)||(id_id==220)||(id_id==254)||(id_id==309)||(id_id==347)||(id_id==369)||(id_id==446)||(id_id==462)||(id_id==464)||(id_id==496))
			                  {
				               sb_skala[85]++; 
				               }
							   
						//����� ������ R � ������ ������ 
						if((id_id==1)||(id_id==6)||(id_id==9)||(id_id==12)||(id_id==39)||(id_id==51)||(id_id==81)||(id_id==112)||(id_id==126)||(id_id==131)||(id_id==140)||(id_id==145)||(id_id==154)||(id_id==156)||(id_id==191)||(id_id==208)||(id_id==219)||(id_id==221)||(id_id==271)||(id_id==272)||(id_id==281)||(id_id==282)||(id_id==327)||(id_id==406)||(id_id==415)||(id_id==429)||(id_id==440)||(id_id==445)||(id_id==447)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==468)||(id_id==472)||(id_id==502)||(id_id==516)||(id_id==529)||(id_id==550)||(id_id==556))
			                  {
				               sb_skala[86]++; 
				               }
							   
						//����� ������ ���������� 
						if((id_id==62)||(id_id==111)||(id_id==120)||(id_id==249)||(id_id==278)||(id_id==294)||(id_id==370)||(id_id==440)||(id_id==460)||(id_id==513))
			                  {
				               sb_skala[87]++; 
				               }
							   
						//����� ������ ���������� ���������������
						if((id_id==6)||(id_id==28)||(id_id==30)||(id_id==33)||(id_id==56)||(id_id==116)||(id_id==118)||(id_id==157)||(id_id==175)||(id_id==181)||(id_id==223)||(id_id==224)||(id_id==260)||(id_id==304)||(id_id==419)||(id_id==434)||(id_id==437)||(id_id==468)||(id_id==469)||(id_id==471)||(id_id==472)||(id_id==529)||(id_id==553)||(id_id==558))
			                  {
				               sb_skala[88]++; 
				               }
							   
						//����� ������ ���������� (�������)
						if((id_id==215)||(id_id==216)||(id_id==298))
			                  {
				               sb_skala[89]++; 
				               }
							   
						//����� ������ ������� ����
						if((id_id==148)||(id_id==183)||(id_id==201)||(id_id==222)||(id_id==244)||(id_id==250)||(id_id==292)||(id_id==307)||(id_id==317)||(id_id==348)||(id_id==377)||(id_id==382)||(id_id==386)||(id_id==447)||(id_id==491)||(id_id==495)||(id_id==531)||(id_id==564))
			                  {
				               sb_skala[90]++; 
				               }
							   
						//����� ������ ������������ ������� (�������)
						if((id_id==40)||(id_id==86)||(id_id==97)||(id_id==100)||(id_id==102)||(id_id==119)||(id_id==138)||(id_id==143)||(id_id==149)||(id_id==232)||(id_id==238)||(id_id==263)||(id_id==268)||(id_id==278)||(id_id==282)||(id_id==298)||(id_id==299)||(id_id==307)||(id_id==317)||(id_id==348)||(id_id==358)||(id_id==359)||(id_id==361)||(id_id==426)||(id_id==472)||(id_id==475)||(id_id==490)||(id_id==558))
			                  {
				               sb_skala[91]++; 
				               }
							   
						//����� ������ ������ ����������
						if((id_id==17)||(id_id==65)||(id_id==177)||(id_id==187)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==306)||(id_id==323)||(id_id==330))
			                  {
				               sb_skala[92]++; 
				               }
							   
						//����� ������ ���������� ����������
						if((id_id==65)||(id_id==220)||(id_id==276)||(id_id==306)||(id_id==309)||(id_id==312))
			                  {
				               sb_skala[93]++; 
				               }
							   
						//����� ������ ������������� ���������� 
						if((id_id==8)||(id_id==196)||(id_id==322)||(id_id==355))
			                  {
				               sb_skala[94]++; 
				               }
							   
						//����� ������ ������������� ���������� ���������� 
						if((id_id==103)||(id_id==119)||(id_id==187)||(id_id==192)||(id_id==281)||(id_id==330))
			                  {
				               sb_skala[95]++; 
				               }
							   
						//����� ������ ��������������������� 
						if((id_id==32)||(id_id==94)||(id_id==100)||(id_id==138)||(id_id==141)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==201)||(id_id==236)||(id_id==259)||(id_id==317)||(id_id==321)||(id_id==335)||(id_id==343)||(id_id==389)||(id_id==394)||(id_id==416)||(id_id==439)||(id_id==443)||(id_id==499)||(id_id==500)||(id_id==531)||(id_id==564))
			                  {
				               sb_skala[96]++; 
				               }
							   
						//����� ������ ������� ����������� 
						if((id_id==24)||(id_id==30)||(id_id==36)||(id_id==51)||(id_id==61)||(id_id==75)||(id_id==76)||(id_id==106)||(id_id==146)||(id_id==150)||(id_id==153)||(id_id==163)||(id_id==168)||(id_id==171)||(id_id==224)||(id_id==225)||(id_id==236)||(id_id==241)||(id_id==285)||(id_id==299)||(id_id==303)||(id_id==352)||(id_id==361)||(id_id==397)||(id_id==425)||(id_id==441)||(id_id==442)||(id_id==443)||(id_id==448)||(id_id==508)||(id_id==524)||(id_id==533))
			                  {
				               sb_skala[97]++; 
				               }
							   
						//����� ������ ���������� ������������� 
						if((id_id==14)||(id_id==27)||(id_id==32)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==43)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==125)||(id_id==138)||(id_id==139)||(id_id==148)||(id_id==151)||(id_id==156)||(id_id==158)||(id_id==168)||(id_id==171)||(id_id==184)||(id_id==186)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==218)||(id_id==241)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==263)||(id_id==267)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==288)||(id_id==291)||(id_id==293)||(id_id==301)||(id_id==321)||(id_id==335)||(id_id==337)||(id_id==352)||(id_id==383)||(id_id==424)||(id_id==431)||(id_id==439)||(id_id==549)||(id_id==555))
			                  {
				               sb_skala[98]++; 
				               }
							   
						//����� ������ ���������� �������  
						if((id_id==171)||(id_id==260)||(id_id==267)||(id_id==292)||(id_id==304)||(id_id==392)||(id_id==448)||(id_id==455))
			                  {
				               sb_skala[99]++; 
				               }
							   
						//����� ������ ���������� ������  
						if((id_id==28)||(id_id==89)||(id_id==180)||(id_id==297)||(id_id==304)||(id_id==348)||(id_id==365)||(id_id==395)||(id_id==427)||(id_id==448)||(id_id==516))
			                  {
				               sb_skala[100]++; 
				               }
							   
						//����� ������ ������������� � �������  
						if((id_id==33)||(id_id==47)||(id_id==93)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==139)||(id_id==157)||(id_id==171)||(id_id==186)||(id_id==250)||(id_id==280)||(id_id==304)||(id_id==307)||(id_id==313)||(id_id==319)||(id_id==338)||(id_id==349)||(id_id==373)||(id_id==395)||(id_id==406)||(id_id==411)||(id_id==435)||(id_id==437)||(id_id==469)||(id_id==485)||(id_id==543))
			                  {
				               sb_skala[102]++; 
				               }
							   
						//����� ������ ����������� � ������������   
						if((id_id==11)||(id_id==26)||(id_id==32)||(id_id==40)||(id_id==52)||(id_id==67)||(id_id==82)||(id_id==86)||(id_id==136)||(id_id==142)||(id_id==147)||(id_id==157)||(id_id==186)||(id_id==212)||(id_id==216)||(id_id==224)||(id_id==236)||(id_id==238)||(id_id==244)||(id_id==250)||(id_id==252)||(id_id==259)||(id_id==260)||(id_id==267)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==282)||(id_id==284)||(id_id==290)||(id_id==297)||(id_id==298)||(id_id==301)||(id_id==305)||(id_id==314)||(id_id==317)||(id_id==319)||(id_id==320)||(id_id==327)||(id_id==328)||(id_id==332)||(id_id==335)||(id_id==338)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==348)||(id_id==352)||(id_id==356)||(id_id==366)||(id_id==368)||(id_id==374)||(id_id==377)||(id_id==381)||(id_id==382)||(id_id==385)||(id_id==389)||(id_id==395)||(id_id==396)||(id_id==397)||(id_id==402)||(id_id==404)||(id_id==411)||(id_id==418)||(id_id==448)||(id_id==456)||(id_id==465)||(id_id==484)||(id_id==485)||(id_id==505)||(id_id==506)||(id_id==509)||(id_id==511)||(id_id==516)||(id_id==531)||(id_id==541)||(id_id==544)||(id_id==558)||(id_id==560))
			                  {
				               sb_skala[103]++; 
				               }
							   
						//����� ������ �������� ������� �� ����   
						if((id_id==15)||(id_id==30)||(id_id==71)||(id_id==109)||(id_id==124)||(id_id==135)||(id_id==142)||(id_id==148)||(id_id==170)||(id_id==324)||(id_id==383)||(id_id==406)||(id_id==408)||(id_id==409)||(id_id==416)||(id_id==439)||(id_id==444))
			                  {
				               sb_skala[104]++; 
				               }
							   
						//����� ������ �������� ��� ��������  
						if((id_id==11)||(id_id==49)||(id_id==59)||(id_id==74)||(id_id==84)||(id_id==93)||(id_id==99)||(id_id==100)||(id_id==132)||(id_id==157)||(id_id==165)||(id_id==171)||(id_id==172)||(id_id==203)||(id_id==212)||(id_id==215)||(id_id==224)||(id_id==236)||(id_id==239)||(id_id==245)||(id_id==277)||(id_id==292)||(id_id==295)||(id_id==297)||(id_id==299)||(id_id==301)||(id_id==328)||(id_id==338)||(id_id==366)||(id_id==383)||(id_id==384)||(id_id==389)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==410)||(id_id==415)||(id_id==416)||(id_id==435)||(id_id==437)||(id_id==438)||(id_id==441)||(id_id==452)||(id_id==459)||(id_id==469)||(id_id==485)||(id_id==487)||(id_id==513))
			                  {
				               sb_skala[105]++; 
				               }
							   
						//����� ������ �������� ��� ��������  
						if((id_id==17)||(id_id==41)||(id_id==199)||(id_id==232)||(id_id==247)||(id_id==344)||(id_id==512))
			                  {
				               sb_skala[106]++; 
				               }
							   
						//����� ������ ��������� � ������  
						if((id_id==3)||(id_id==9)||(id_id==88)||(id_id==164)||(id_id==207)||(id_id==257)||(id_id==318)||(id_id==407))
			                  {
				               sb_skala[107]++; 
				               }
							   
						//����� ������ ��������� � ������  
						if((id_id==7)||(id_id==41)||(id_id==79)||(id_id==131)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==231)||(id_id==243)||(id_id==270)||(id_id==353)||(id_id==407)||(id_id==548))
			                  {
				               sb_skala[108]++; 
				               }
								
						} 
						
						
			     		
                        						
		          }
				  
				  
				  for(i=1;i<=108;i++)
			     	  {
					    t_ball_skala[i]=50+((10*(sb_skala[i]-koefic_m[i]))/koefic_lymda[i]);
						t_ball_skala[i]=Math.round(parseFloat(t_ball_skala[i]) * 100) / 100;
						document.getElementById(i+"_dop_sk").style.color='black';
						document.getElementById(i+"_dop_sk_sb").style.color='black';
						
						document.getElementById(i+"_dop_sk").innerHTML=t_ball_skala[i];
			            document.getElementById(i+"_dop_sk_sb").innerHTML='<span style="cursor:pointer;color:blue" onclick="full_screen_smil_dop('+i+')">'+sb_skala[i]+'</span>';
				      if((t_ball_skala[i]<30)||(t_ball_skala[i]>70))
				            {
					         document.getElementById(i+"_dop_sk").style.color='red';
                             document.getElementById(i+"_dop_sk_sb").style.color='red';
					         }
					  }
					  
				  //t_ball_1_skala=50+((10*(sb_1_skala-11))/6.2);//����������� T-���� ����� ������������� ������ 
			      //t_ball_2_skala=50+((10*(sb_2_skala-3.1))/2.91);//����������� T-���� ����������� � �������� 
				  //t_ball_3_skala=50+((10*(sb_3_skala-72.8))/7.5);//����������� T-���� ����� ��������
				 // t_ball_4_skala=50+((10*(sb_4_skala-35.5))/4.87);//����������� T-���� ����������� ��������������
				 // t_ball_5_skala=50+((10*(sb_5_skala-33.58))/4.87);//����������� T-���� ����� ���������������
				 // t_ball_1_skala=Math.round(parseFloat(t_ball_1_skala) * 100) / 100;
				 // t_ball_2_skala=Math.round(parseFloat(t_ball_2_skala) * 100) / 100;
				 // t_ball_3_skala=Math.round(parseFloat(t_ball_3_skala) * 100) / 100;
				//  t_ball_4_skala=Math.round(parseFloat(t_ball_4_skala) * 100) / 100;
				 // t_ball_5_skala=Math.round(parseFloat(t_ball_5_skala) * 100) / 100;
				 //if((t_ball_1_skala<30)||(t_ball_1_skala>70))
				 //   {
				//	 document.getElementById("1_dop_sk").style.color='red';
                //     document.getElementById("1_dop_sk_sb").style.color='red';
				//	}
				
				  //document.getElementById("1_dop_sk").innerHTML=t_ball_1_skala;
			      //document.getElementById("1_dop_sk_sb").innerHTML=sb_1_skala;
				  
				  
				  document.getElementById("vopr_sk").style.display='none';
		          document.getElementById("dop_sk").innerHTML='�������';
				  document.getElementById("d_sk").style.display='inline';
				  }
				   else
				       {
					     
						 
						 document.getElementById("vopr_sk").style.display='inline';
		                 document.getElementById("dop_sk").innerHTML='���.�����';
					     document.getElementById("d_sk").style.display='none';
						}
			}
			
function full_screen_smil_dop(k) { // ��� ����� ����� �������� ��������
	                            //$('a#go').click( function(event){ // ����� ���� �� ������ � id="go"
		                  //event.preventDefault(); // ��������� ����������� ���� ��������
     //alert(k);
	 yt_polog='<table cellspacing="0" class="table_smil"><tr><td class="table_smil">�</td><td align="center" style="font-weight:bold;font-size:16px" class="table_smil">����� "��"</td></tr>';
	 yt_otric='<table cellspacing="0" class="table_smil"><tr><td class="table_smil">�</td><td align="center" style="font-weight:bold;font-size:16px" class="table_smil">����� "���"</td></tr>';
	kak=0;
	kak_p=0;
	kak_o=0;
	kak_vs=0;
	for(i=1;i<=566;i++)
	   { 
	    
		 id_id=i;
		 str=document.getElementById('ispr_'+i).value;
		 //if(str.length==1) continue;
		da=0;	
        net=0;		
		if(str[0]==2)
			                {
			                  
                              da=1;
                              net=0;
                              
            	 
				              }			
			
			              //alert(str);
			              if(str[1]==2)
			                 {
			                  
                              net=1;
                              
                              da=0;	
            	             //alert(id_v);
				 
				             }
                         if(str[2]==2)
			                {
			                 
                             net=0;
                             da=0;	
            	 
				             }
								
		          // alert(da);
				  //alert(k);
				  
		                  if(k==1)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ������������� ������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[1];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[1];
								if((id_id==32)||(id_id==41)||(id_id==76)||(id_id==67)||(id_id==94)||(id_id==138)||(id_id==147)||(id_id==236)||(id_id==259)||(id_id==267)||(id_id==278)||(id_id==301)||(id_id==305)||(id_id==321)||(id_id==337)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==356)||(id_id==359)||(id_id==374)||(id_id==382)||(id_id==383)||(id_id==384)||(id_id==389)||(id_id==396)||(id_id==397)||(id_id==411)||(id_id==414)||(id_id==418)||(id_id==431)||(id_id==443)||(id_id==465)||(id_id==499)||(id_id==511)||(id_id==518)||(id_id==544)||(id_id==555))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if(id_id==379)
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									kak_vs++;
									}
						        
							   }
							   
							if(k==2)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� � �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[2];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[2];
								if((id_id==32)||(id_id==95)||(id_id==415)||(id_id==546))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==28)||(id_id==33)||(id_id==104)||(id_id==118)||(id_id==142)||(id_id==146)||(id_id==224)||(id_id==244)||(id_id==251)||(id_id==260)||(id_id==303)||(id_id==381)||(id_id==386)||(id_id==419))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
						if(k==3)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[3];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[3];
								if((id_id==5)||(id_id==13)||(id_id==26)||(id_id==29)||(id_id==59)||(id_id==77)||(id_id==118)||(id_id==131)||(id_id==132)||(id_id==138)||(id_id==155)||(id_id==158)||(id_id==166)||(id_id==232)||(id_id==233)||(id_id==235)||(id_id==237)||(id_id==240)||(id_id==255)||(id_id==261)||(id_id==262)||(id_id==307)||(id_id==369)||(id_id==387)||(id_id==392)||(id_id==402)||(id_id==406)||(id_id==417)||(id_id==427)||(id_id==428)||(id_id==435)||(id_id==439)||(id_id==442)||(id_id==444)||(id_id==458)||(id_id==470)||(id_id==472)||(id_id==473)||(id_id==491)||(id_id==492)||(id_id==495)||(id_id==506)||(id_id==510)||(id_id==521)||(id_id==541)||(id_id==546)||(id_id==548)||(id_id==554)||(id_id==565))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==1)||(id_id==6)||(id_id==9)||(id_id==18)||(id_id==19)||(id_id==21)||(id_id==28)||(id_id==52)||(id_id==58)||(id_id==62)||(id_id==63)||(id_id==68)||(id_id==70)||(id_id==80)||(id_id==81)||(id_id==86)||(id_id==89)||(id_id==90)||(id_id==95)||(id_id==97)||(id_id==99)||(id_id==100)||(id_id==109)||(id_id==117)||(id_id==120)||(id_id==128)||(id_id==133)||(id_id==135)||(id_id==136)||(id_id==141)||(id_id==142)||(id_id==144)||(id_id==146)||(id_id==148)||(id_id==157)||(id_id==160)||(id_id==181)||(id_id==186)||(id_id==223)||(id_id==231)||(id_id==238)||(id_id==244)||(id_id==248)||(id_id==249)||(id_id==250)||(id_id==259)||(id_id==266)||(id_id==268)||(id_id==270)||(id_id==271)||(id_id==274)||(id_id==277)||(id_id==278)||(id_id==281)||(id_id==283)||(id_id==298)||(id_id==319)||(id_id==334)||(id_id==343)||(id_id==345)||(id_id==356)||(id_id==358)||(id_id==367)||(id_id==373)||(id_id==378)||(id_id==386)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==401)||(id_id==410)||(id_id==416)||(id_id==424)||(id_id==425)||(id_id==430)||(id_id==434)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==454)||(id_id==465)||(id_id==467)||(id_id==475)||(id_id==481)||(id_id==505)||(id_id==533)||(id_id==542)||(id_id==552)||(id_id==558)||(id_id==560)||(id_id==561))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					  if(k==4)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� �������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[4];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[4];
								if((id_id==61)||(id_id==94)||(id_id==100)||(id_id==102)||(id_id==127)||(id_id==131)||(id_id==140)||(id_id==215)||(id_id==219)||(id_id==222)||(id_id==239)||(id_id==427)||(id_id==437)||(id_id==446)||(id_id==465)||(id_id==477)||(id_id==503)||(id_id==524)||(id_id==533)||(id_id==554))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==26)||(id_id==39)||(id_id==46)||(id_id==95)||(id_id==144)||(id_id==145)||(id_id==155)||(id_id==237)||(id_id==264)||(id_id==287)||(id_id==289)||(id_id==292)||(id_id==294)||(id_id==300)||(id_id==322)||(id_id==327)||(id_id==337)||(id_id==343)||(id_id==345)||(id_id==356)||(id_id==358)||(id_id==367)||(id_id==373)||(id_id==378)||(id_id==386)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==401)||(id_id==410)||(id_id==416)||(id_id==424)||(id_id==425)||(id_id==430)||(id_id==434)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==454)||(id_id==465)||(id_id==467)||(id_id==475)||(id_id==481)||(id_id==505)||(id_id==533)||(id_id==542)||(id_id==552)||(id_id==558)||(id_id==560)||(id_id==561))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==5)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ��������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[5];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[5];
								if((id_id==6)||(id_id==12)||(id_id==69)||(id_id==77)||(id_id==79)||(id_id==91)||(id_id==93)||(id_id==95)||(id_id==99)||(id_id==100)||(id_id==102)||(id_id==109)||(id_id==111)||(id_id==136)||(id_id==141)||(id_id==162)||(id_id==165)||(id_id==166)||(id_id==181)||(id_id==232)||(id_id==240)||(id_id==244)||(id_id==248)||(id_id==254)||(id_id==255)||(id_id==264)||(id_id==270)||(id_id==280)||(id_id==292)||(id_id==298)||(id_id==304)||(id_id==319)||(id_id==321)||(id_id==329)||(id_id==340)||(id_id==361)||(id_id==367)||(id_id==373)||(id_id==391)||(id_id==400)||(id_id==410)||(id_id==415)||(id_id==416)||(id_id==421)||(id_id==425)||(id_id==427)||(id_id==429)||(id_id==439)||(id_id==444)||(id_id==447)||(id_id==455)||(id_id==465)||(id_id==475)||(id_id==477)||(id_id==489)||(id_id==491)||(id_id==492)||(id_id==499)||(id_id==500)||(id_id==503)||(id_id==510)||(id_id==523)||(id_id==564))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								
						       }
							   
						if(k==6)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ ��������� ���������� ���� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[6];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[6];
								if((id_id==28)||(id_id==39)||(id_id==76)||(id_id==94)||(id_id==142)||(id_id==147)||(id_id==159)||(id_id==180)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==239)||(id_id==273)||(id_id==313)||(id_id==338)||(id_id==343)||(id_id==361)||(id_id==389)||(id_id==499)||(id_id==512)||(id_id==544)||(id_id==549)||(id_id==551)||(id_id==560))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==46)||(id_id==57)||(id_id==69)||(id_id==163)||(id_id==188)||(id_id==242)||(id_id==407)||(id_id==412)||(id_id==450)||(id_id==513)||(id_id==523))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==7)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[7];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[7];
								if((id_id==15)||(id_id==26)||(id_id==77)||(id_id==91)||(id_id==95)||(id_id==98)||(id_id==111)||(id_id==115)||(id_id==135)||(id_id==170)||(id_id==198)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==264)||(id_id==287)||(id_id==314)||(id_id==348)||(id_id==387)||(id_id==393)||(id_id==406)||(id_id==425)||(id_id==442)||(id_id==444)||(id_id==461)||(id_id==468)||(id_id==483)||(id_id==488)||(id_id==491)||(id_id==498)||(id_id==548)||(id_id==558))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==6)||(id_id==21)||(id_id==78)||(id_id==81)||(id_id==100)||(id_id==102)||(id_id==124)||(id_id==126)||(id_id==140)||(id_id==160)||(id_id==181)||(id_id==208)||(id_id==217)||(id_id==231)||(id_id==295)||(id_id==308)||(id_id==374)||(id_id==400)||(id_id==441)||(id_id==446)||(id_id==463)||(id_id==465)||(id_id==475)||(id_id==477)||(id_id==499)||(id_id==503)||(id_id==556))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==8)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[8];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[8];
								if((id_id==6)||(id_id==20)||(id_id==30)||(id_id==56)||(id_id==67)||(id_id==105)||(id_id==116)||(id_id==134)||(id_id==145)||(id_id==162)||(id_id==169)||(id_id==181)||(id_id==225)||(id_id==236)||(id_id==238)||(id_id==285)||(id_id==296)||(id_id==319)||(id_id==337)||(id_id==382)||(id_id==411)||(id_id==418)||(id_id==436)||(id_id==446)||(id_id==447)||(id_id==460)||(id_id==529)||(id_id==555))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==58)||(id_id==80)||(id_id==92)||(id_id==96)||(id_id==111)||(id_id==167)||(id_id==174)||(id_id==220)||(id_id==242)||(id_id==249)||(id_id==250)||(id_id==291)||(id_id==313)||(id_id==360)||(id_id==378)||(id_id==439)||(id_id==444)||(id_id==483)||(id_id==488)||(id_id==489)||(id_id==527)||(id_id==548))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==9)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[9];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[9];
								if((id_id==3)||(id_id==18)||(id_id==129)||(id_id==163)||(id_id==198)||(id_id==261)||(id_id==302)||(id_id==348)||(id_id==376)||(id_id==399)||(id_id==484)||(id_id==508))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==127)||(id_id==199)||(id_id==328)||(id_id==346)||(id_id==470)||(id_id==480)||(id_id==531)||(id_id==533)||(id_id==556))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==10)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[10];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[10];
								if((id_id==8)||(id_id==20)||(id_id==37)||(id_id==58)||(id_id==70)||(id_id==79)||(id_id==95)||(id_id==96)||(id_id==112)||(id_id==131)||(id_id==133)||(id_id==137)||(id_id==152)||(id_id==170)||(id_id==223)||(id_id==249)||(id_id==262)||(id_id==264)||(id_id==329)||(id_id==369)||(id_id==399)||(id_id==403)||(id_id==407)||(id_id==440)||(id_id==445)||(id_id==490))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==4)||(id_id==5)||(id_id==13)||(id_id==21)||(id_id==24)||(id_id==34)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==76)||(id_id==106)||(id_id==139)||(id_id==146)||(id_id==179)||(id_id==180)||(id_id==189)||(id_id==204)||(id_id==234)||(id_id==236)||(id_id==243)||(id_id==247)||(id_id==266)||(id_id==282)||(id_id==284)||(id_id==299)||(id_id==301)||(id_id==305)||(id_id==337)||(id_id==344)||(id_id==349)||(id_id==352)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==382)||(id_id==388)||(id_id==397)||(id_id==411)||(id_id==425)||(id_id==431)||(id_id==454)||(id_id==455)||(id_id==487)||(id_id==489)||(id_id==494)||(id_id==499)||(id_id==503)||(id_id==510)||(id_id==517)||(id_id==531)||(id_id==543))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==11)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� ��� �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[11];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[11];
								if((id_id==45)||(id_id==105)||(id_id==160)||(id_id==195)||(id_id==198)||(id_id==237)||(id_id==255)||(id_id==442))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==32)||(id_id==33)||(id_id==71)||(id_id==81)||(id_id==94)||(id_id==112)||(id_id==128)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==142)||(id_id==217)||(id_id==223)||(id_id==238)||(id_id==241)||(id_id==244)||(id_id==248)||(id_id==250)||(id_id==258)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==292)||(id_id==319)||(id_id==324)||(id_id==348)||(id_id==359)||(id_id==378)||(id_id==383)||(id_id==386)||(id_id==390)||(id_id==395)||(id_id==396)||(id_id==404)||(id_id==408)||(id_id==409)||(id_id==416)||(id_id==418)||(id_id==447)||(id_id==461)||(id_id==468)||(id_id==504)||(id_id==537))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==12)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[12];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[12];
								if((id_id==89)||(id_id==93)||(id_id==117)||(id_id==124)||(id_id==265)||(id_id==316)||(id_id==319))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								
						       }
							   
						if(k==13)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ��������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[13];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[13];
								if((id_id==5)||(id_id==130)||(id_id==193))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==39)||(id_id==46)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==95)||(id_id==98)||(id_id==131)||(id_id==145)||(id_id==154)||(id_id==191)||(id_id==207)||(id_id==233)||(id_id==241)||(id_id==242)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==14)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ ��������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[14];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[14];
								if((id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==259))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==8)||(id_id==46)||(id_id==56)||(id_id==88)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==152)||(id_id==160)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==242)||(id_id==272)||(id_id==285)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==15)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� ��������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[15];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[15];
								if((id_id==32)||(id_id==41)||(id_id==86)||(id_id==104)||(id_id==159)||(id_id==182)||(id_id==259)||(id_id==290))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==9)||(id_id==46)||(id_id==88)||(id_id==122)||(id_id==178)||(id_id==207))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==16)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[16];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[16];
								if((id_id==41)||(id_id==67)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==182)||(id_id==236))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==88)||(id_id==107))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==17)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[17];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[17];
								if((id_id==94)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==224)||(id_id==240)||(id_id==338)||(id_id==419))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==107)||(id_id==120)||(id_id==294)||(id_id==513))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==18)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������� ��������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[18];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[18];
								if(id_id==253)
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==141)||(id_id==147)||(id_id==162)||(id_id==170)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==267)||(id_id==279)||(id_id==289)||(id_id==292))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==19)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[19];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[19];
								if((id_id==64)||(id_id==229)||(id_id==255)||(id_id==270)||(id_id==368)||(id_id==432)||(id_id==523))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==32)||(id_id==61)||(id_id==82)||(id_id==86)||(id_id==94)||(id_id==186)||(id_id==223)||(id_id==224)||(id_id==240)||(id_id==249)||(id_id==250)||(id_id==267)||(id_id==268)||(id_id==304)||(id_id==343)||(id_id==356)||(id_id==395)||(id_id==419)||(id_id==486)||(id_id==558)||(id_id==562))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==20)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[20];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[20];
								if((id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==236)||(id_id==259)||(id_id==290))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==36)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==88)||(id_id==95)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==178)||(id_id==207)||(id_id==242)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==21)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ �������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[21];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[21];
								if((id_id==51)||(id_id==55)||(id_id==95)||(id_id==128)||(id_id==130)||(id_id==162)||(id_id==232)||(id_id==236)||(id_id==255)||(id_id==294)||(id_id==376)||(id_id==380)||(id_id==399)||(id_id==414)||(id_id==509)||(id_id==519)||(id_id==521)||(id_id==563)||(id_id==565))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==6)||(id_id==52)||(id_id==56)||(id_id==58)||(id_id==62)||(id_id==156)||(id_id==224)||(id_id==226)||(id_id==251)||(id_id==264)||(id_id==277)||(id_id==296)||(id_id==359)||(id_id==364)||(id_id==379)||(id_id==383)||(id_id==396)||(id_id==419)||(id_id==445)||(id_id==458)||(id_id==472)||(id_id==492)||(id_id==498))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==22)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[22];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[22];
								if((id_id==10)||(id_id==23)||(id_id==24)||(id_id==29)||(id_id==31)||(id_id==32)||(id_id==44)||(id_id==47)||(id_id==93)||(id_id==97)||(id_id==104)||(id_id==125)||(id_id==210)||(id_id==212)||(id_id==226)||(id_id==241)||(id_id==247)||(id_id==303)||(id_id==325)||(id_id==352)||(id_id==360)||(id_id==375)||(id_id==388)||(id_id==422)||(id_id==438)||(id_id==453)||(id_id==459)||(id_id==475)||(id_id==481)||(id_id==518)||(id_id==525)||(id_id==535)||(id_id==541)||(id_id==543))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==68)||(id_id==83)||(id_id==88)||(id_id==96)||(id_id==257)||(id_id==306))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==23)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[23];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[23];
								if((id_id==5)||(id_id==130)||(id_id==193))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==30)||(id_id==39)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==89)||(id_id==98)||(id_id==145)||(id_id==155)||(id_id==160)||(id_id==191)||(id_id==208)||(id_id==233)||(id_id==241)||(id_id==248)||(id_id==263)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==24)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�����������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[24];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[24];
								if((id_id==19)||(id_id==21)||(id_id==24)||(id_id==41)||(id_id==63)||(id_id==67)||(id_id==70)||(id_id==82)||(id_id==86)||(id_id==98)||(id_id==100)||(id_id==138)||(id_id==141)||(id_id==158)||(id_id==165)||(id_id==180)||(id_id==189)||(id_id==201)||(id_id==212)||(id_id==236)||(id_id==239)||(id_id==259)||(id_id==267)||(id_id==304)||(id_id==305)||(id_id==321)||(id_id==337)||(id_id==338)||(id_id==343)||(id_id==357)||(id_id==361)||(id_id==362)||(id_id==375)||(id_id==382)||(id_id==383)||(id_id==390)||(id_id==394)||(id_id==397)||(id_id==398)||(id_id==408)||(id_id==443)||(id_id==487)||(id_id==488)||(id_id==489)||(id_id==509)||(id_id==531)||(id_id==549)||(id_id==554)||(id_id==564))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==9)||(id_id==79)||(id_id==107)||(id_id==163)||(id_id==170)||(id_id==193)||(id_id==264)||(id_id==369))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==25)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[25];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[25];
								if((id_id==38)||(id_id==42)||(id_id==45)||(id_id==47)||(id_id==76)||(id_id==125)||(id_id==135)||(id_id==150)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==195)||(id_id==208)||(id_id==224)||(id_id==225)||(id_id==235)||(id_id==236)||(id_id==239)||(id_id==246)||(id_id==247)||(id_id==250)||(id_id==252)||(id_id==277)||(id_id==282)||(id_id==300)||(id_id==398)||(id_id==529)||(id_id==532))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==115)||(id_id==178)||(id_id==268)||(id_id==294)||(id_id==379)||(id_id==380)||(id_id==395))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==26)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ����������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[26];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[26];
								if((id_id==13)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==43)||(id_id==52)||(id_id==76)||(id_id==94)||(id_id==97)||(id_id==106)||(id_id==109)||(id_id==118)||(id_id==182)||(id_id==189)||(id_id==222)||(id_id==238)||(id_id==247)||(id_id==248)||(id_id==266)||(id_id==301)||(id_id==305)||(id_id==322)||(id_id==335)||(id_id==345)||(id_id==526))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==8)||(id_id==9)||(id_id==26)||(id_id==36)||(id_id==79)||(id_id==103)||(id_id==107)||(id_id==112)||(id_id==137)||(id_id==153)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==178)||(id_id==190)||(id_id==242)||(id_id==378)||(id_id==387)||(id_id==402)||(id_id==407)||(id_id==449))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==27)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� �  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[27];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[27];
								if((id_id==115)||(id_id==239)||(id_id==503))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==59)||(id_id==99)||(id_id==118)||(id_id==126)||(id_id==149)||(id_id==165)||(id_id==181)||(id_id==204)||(id_id==208)||(id_id==231)||(id_id==254)||(id_id==383)||(id_id==400)||(id_id==406)||(id_id==441)||(id_id==450)||(id_id==451)||(id_id==481)||(id_id==491)||(id_id==529))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==28)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[28];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[28];
								if((id_id==22)||(id_id==31)||(id_id==32)||(id_id==44)||(id_id==47)||(id_id==59)||(id_id==62)||(id_id==76)||(id_id==83)||(id_id==114)||(id_id==146)||(id_id==150)||(id_id==156)||(id_id==186)||(id_id==189)||(id_id==238)||(id_id==266)||(id_id==312)||(id_id==335)||(id_id==340)||(id_id==342))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==4)||(id_id==8)||(id_id==9)||(id_id==36)||(id_id==46)||(id_id==58)||(id_id==68)||(id_id==69)||(id_id==70)||(id_id==101)||(id_id==103)||(id_id==122)||(id_id==125)||(id_id==144)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==174)||(id_id==175)||(id_id==183)||(id_id==187)||(id_id==188)||(id_id==190)||(id_id==196)||(id_id==198)||(id_id==213)||(id_id==242)||(id_id==254)||(id_id==279)||(id_id==281)||(id_id==289)||(id_id==295)||(id_id==322)||(id_id==329))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==29)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���� ���  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[29];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[29];
								if((id_id==2)||(id_id==36)||(id_id==51)||(id_id==95)||(id_id==109)||(id_id==153)||(id_id==174)||(id_id==181)||(id_id==187)||(id_id==192)||(id_id==208)||(id_id==221)||(id_id==231)||(id_id==234)||(id_id==253)||(id_id==270)||(id_id==355)||(id_id==367)||(id_id==380)||(id_id==410)||(id_id==421)||(id_id==430)||(id_id==458)||(id_id==513)||(id_id==515))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==14)||(id_id==22)||(id_id==32)||(id_id==33)||(id_id==34)||(id_id==43)||(id_id==48)||(id_id==58)||(id_id==62)||(id_id==82)||(id_id==94)||(id_id==100)||(id_id==132)||(id_id==140)||(id_id==189)||(id_id==209)||(id_id==217)||(id_id==236)||(id_id==241)||(id_id==244)||(id_id==251)||(id_id==261)||(id_id==341)||(id_id==344)||(id_id==349)||(id_id==359)||(id_id==378)||(id_id==384)||(id_id==389)||(id_id==420)||(id_id==483)||(id_id==488)||(id_id==489)||(id_id==494)||(id_id==510)||(id_id==525)||(id_id==541)||(id_id==544)||(id_id==548)||(id_id==554)||(id_id==559)||(id_id==561)||(id_id==555))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==30)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[30];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[30];
								if((id_id==13)||(id_id==32)||(id_id==43)||(id_id==48)||(id_id==61)||(id_id==62)||(id_id==67)||(id_id==76)||(id_id==84)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==104)||(id_id==106)||(id_id==114)||(id_id==142)||(id_id==180)||(id_id==189)||(id_id==217)||(id_id==236)||(id_id==244)||(id_id==267)||(id_id==301)||(id_id==305)||(id_id==317)||(id_id==335)||(id_id==337)||(id_id==338)||(id_id==343)||(id_id==345)||(id_id==349)||(id_id==356)||(id_id==361)||(id_id==374)||(id_id==377)||(id_id==384)||(id_id==395)||(id_id==397)||(id_id==414)||(id_id==431)||(id_id==448)||(id_id==487)||(id_id==526)||(id_id==543)||(id_id==544)||(id_id==555)||(id_id==559))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==3)||(id_id==8)||(id_id==9)||(id_id==57)||(id_id==107)||(id_id==152)||(id_id==198)||(id_id==242)||(id_id==287)||(id_id==371)||(id_id==379)||(id_id==407)||(id_id==449)||(id_id==520)||(id_id==547))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==31)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[31];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[31];
								if((id_id==4)||(id_id==92)||(id_id==203)||(id_id==361)||(id_id==392)||(id_id==545)||(id_id==555))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==1)||(id_id==99)||(id_id==118)||(id_id==144)||(id_id==145)||(id_id==219)||(id_id==223)||(id_id==254)||(id_id==563))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==32)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ������ �����������������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[32];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[32];
								if((id_id==16)||(id_id==21)||(id_id==22)||(id_id==23)||(id_id==24)||(id_id==32)||(id_id==35)||(id_id==41)||(id_id==43)||(id_id==67)||(id_id==76)||(id_id==127)||(id_id==157)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==238)||(id_id==266)||(id_id==305))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==8)||(id_id==9)||(id_id==51)||(id_id==103)||(id_id==107)||(id_id==119)||(id_id==153)||(id_id==178)||(id_id==185)||(id_id==192)||(id_id==281)||(id_id==289)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==33)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������������ ���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[33];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[33];
								if((id_id==10)||(id_id==23)||(id_id==24)||(id_id==29)||(id_id==41)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==142)||(id_id==159)||(id_id==161)||(id_id==186)||(id_id==189)||(id_id==238)||(id_id==263)||(id_id==273)||(id_id==335)||(id_id==439)||(id_id==517))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==46)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==128)||(id_id==136)||(id_id==152)||(id_id==153)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==242)||(id_id==243)||(id_id==248)||(id_id==274)||(id_id==281)||(id_id==330)||(id_id==407)||(id_id==436)||(id_id==449)||(id_id==462))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==34)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������������� � �������� �����  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[34];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[34];
								if((id_id==5)||(id_id==26)||(id_id==44)||(id_id==52)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==129)||(id_id==136)||(id_id==144)||(id_id==161)||(id_id==244)||(id_id==265)||(id_id==266)||(id_id==286)||(id_id==348)||(id_id==453)||(id_id==468)||(id_id==513))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==99)||(id_id==103)||(id_id==175)||(id_id==421)||(id_id==428)||(id_id==457)||(id_id==467)||(id_id==479)||(id_id==547))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==35)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� ��� �������������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[35];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[35];
								if((id_id==24)||(id_id==35)||(id_id==43)||(id_id==49)||(id_id==106)||(id_id==145)||(id_id==149)||(id_id==209)||(id_id==250)||(id_id==292)||(id_id==293)||(id_id==301)||(id_id==304)||(id_id==315)||(id_id==338)||(id_id==348)||(id_id==354)||(id_id==366)||(id_id==378)||(id_id==457)||(id_id==494)||(id_id==511)||(id_id==543)||(id_id==561))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==57)||(id_id==164)||(id_id==175)||(id_id==251)||(id_id==283)||(id_id==353)||(id_id==403)||(id_id==460)||(id_id==496))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==36)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������������� �� ��������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[36];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[36];
								if((id_id==62)||(id_id==189))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==39)||(id_id==51)||(id_id==55)||(id_id==68)||(id_id==103)||(id_id==153)||(id_id==163)||(id_id==175)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==330))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==37)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[37];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[37];
								if((id_id==19)||(id_id==28)||(id_id==52)||(id_id==59)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==110)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==148)||(id_id==157)||(id_id==183)||(id_id==226)||(id_id==244)||(id_id==250)||(id_id==252)||(id_id==265)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==284)||(id_id==292)||(id_id==319)||(id_id==348)||(id_id==368)||(id_id==383)||(id_id==386)||(id_id==394)||(id_id==406)||(id_id==410)||(id_id==411)||(id_id==426)||(id_id==436)||(id_id==438)||(id_id==447)||(id_id==455)||(id_id==458)||(id_id==469)||(id_id==485)||(id_id==504)||(id_id==507)||(id_id==520)||(id_id==531)||(id_id==551)||(id_id==558))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==237)||(id_id==253)||(id_id==399))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==38)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ����������   - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[38];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[38];
								if((id_id==29)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==125)||(id_id==161))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==63)||(id_id==68)||(id_id==130))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==39)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ������������   - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[39];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[39];
								if((id_id==27)||(id_id==43)||(id_id==59)||(id_id==89)||(id_id==108)||(id_id==167)||(id_id==189)||(id_id==208)||(id_id==350)||(id_id==507)||(id_id==520))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==48)||(id_id==180)||(id_id==515))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==40)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ �������   - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[40];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[40];
								if((id_id==44)||(id_id==246)||(id_id==253))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==71)||(id_id==123)||(id_id==129)||(id_id==136)||(id_id==147)||(id_id==162)||(id_id==172)||(id_id==174)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==279)||(id_id==292))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==41)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� �������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[41];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[41];
								
									
								if((id_id==141)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==267)||(id_id==292))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==42)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� � ������������� ������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[42];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[42];
								if(id_id==253)
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==26)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==136)||(id_id==162)||(id_id==234)||(id_id==265)||(id_id==289))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==43)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ ������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[43];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[43];
								if((id_id==10)||(id_id==23)||(id_id==44)||(id_id==47)||(id_id==114)||(id_id==186))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==7)||(id_id==55)||(id_id==103)||(id_id==174)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==44)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� ��������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[44];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[44];
								
								if((id_id==6)||(id_id==12)||(id_id==30)||(id_id==128)||(id_id==129)||(id_id==147)||(id_id==170))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==45)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[45];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[45];
								if((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==2)||(id_id==3)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==51)||(id_id==55)||(id_id==103)||(id_id==107)||(id_id==128)||(id_id==137)||(id_id==153)||(id_id==163)||(id_id==174)||(id_id==175)||(id_id==188)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==46)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� �������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[46];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[46];
								if(id_id==253)
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==6)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==109)||(id_id==124)||(id_id==129)||(id_id==136)||(id_id==141)||(id_id==147)||(id_id==160)||(id_id==162)||(id_id==170)||(id_id==172)||(id_id==180)||(id_id==190)||(id_id==201)||(id_id==213)||(id_id==234)||(id_id==265)||(id_id==267)||(id_id==279)||(id_id==289)||(id_id==292))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==47)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������������� �������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[47];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[47];
								if((id_id==36)||(id_id==37)||(id_id==60)||(id_id==63)||(id_id==78)||(id_id==122)||(id_id==221)||(id_id==225)||(id_id==277)||(id_id==462)||(id_id==464)||(id_id==521)||(id_id==524)||(id_id==546)||(id_id==552))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==13)||(id_id==28)||(id_id==33)||(id_id==35)||(id_id==62)||(id_id==116)||(id_id==146)||(id_id==194)||(id_id==198)||(id_id==224)||(id_id==256)||(id_id==260)||(id_id==267)||(id_id==280)||(id_id==304)||(id_id==338)||(id_id==392)||(id_id==448)||(id_id==455)||(id_id==487)||(id_id==492)||(id_id==526)||(id_id==541)||(id_id==559))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==48)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[48];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[48];
								if((id_id==15)||(id_id==30)||(id_id==32)||(id_id==33)||(id_id==39)||(id_id==45)||(id_id==62)||(id_id==97)||(id_id==99)||(id_id==139)||(id_id==145)||(id_id==157)||(id_id==244)||(id_id==349)||(id_id==368)||(id_id==381)||(id_id==481)||(id_id==529)||(id_id==545))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==96)||(id_id==111))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==49)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ������������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[49];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[49];
								if((id_id==10)||(id_id==13)||(id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==26)||(id_id==27)||(id_id==28)||(id_id==31)||(id_id==32)||(id_id==33)||(id_id==40)||(id_id==41)||(id_id==43)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==52)||(id_id==53)||(id_id==61)||(id_id==66)||(id_id==67)||(id_id==69)||(id_id==72)||(id_id==74)||(id_id==76)||(id_id==84)||(id_id==86)||(id_id==94)||(id_id==97)||(id_id==102)||(id_id==104)||(id_id==106)||(id_id==121)||(id_id==123)||(id_id==129)||(id_id==138)||(id_id==139)||(id_id==142)||(id_id==145)||(id_id==146)||(id_id==147)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==168)||(id_id==171)||(id_id==182)||(id_id==184)||(id_id==189)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==209)||(id_id==213)||(id_id==236)||(id_id==238)||(id_id==241)||(id_id==244)||(id_id==245)||(id_id==248)||(id_id==252)||(id_id==265)||(id_id==275)||(id_id==278)||(id_id==284)||(id_id==286)||(id_id==291)||(id_id==293)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==304)||(id_id==305)||(id_id==306)||(id_id==312)||(id_id==314)||(id_id==315)||(id_id==317)||(id_id==320)||(id_id==321)||(id_id==324)||(id_id==326)||(id_id==328)||(id_id==331)||(id_id==332)||(id_id==333)||(id_id==334)||(id_id==335)||(id_id==336)||(id_id==337)||(id_id==338)||(id_id==339)||(id_id==340)||(id_id==341)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==346)||(id_id==349)||(id_id==350)||(id_id==351)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==357)||(id_id==358)||(id_id==359)||(id_id==360)||(id_id==361)||(id_id==362)||(id_id==363)||(id_id==364)||(id_id==365)||(id_id==366)||(id_id==368)||(id_id==375)||(id_id==381)||(id_id==384)||(id_id==388)||(id_id==389)||(id_id==390)||(id_id==393)||(id_id==396)||(id_id==397)||(id_id==398)||(id_id==400)||(id_id==408)||(id_id==409)||(id_id==413)||(id_id==414)||(id_id==418)||(id_id==420)||(id_id==431)||(id_id==442)||(id_id==443)||(id_id==448)||(id_id==454)||(id_id==467)||(id_id==469)||(id_id==470)||(id_id==476)||(id_id==494)||(id_id==499)||(id_id==506)||(id_id==517)||(id_id==526)||(id_id==530)||(id_id==543)||(id_id==544))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==9)||(id_id==20)||(id_id==36)||(id_id==37)||(id_id==57)||(id_id==107)||(id_id==122)||(id_id==133)||(id_id==152)||(id_id==257)||(id_id==310)||(id_id==353)||(id_id==371))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==50)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������������� �����������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[50];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[50];
								if((id_id==36)||(id_id==37)||(id_id==60)||(id_id==63)||(id_id==78)||(id_id==122)||(id_id==173)||(id_id==221)||(id_id==225)||(id_id==277)||(id_id==281)||(id_id==289)||(id_id==430)||(id_id==460)||(id_id==462)||(id_id==464)||(id_id==496)||(id_id==521)||(id_id==524)||(id_id==546)||(id_id==552))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==13)||(id_id==28)||(id_id==33)||(id_id==35)||(id_id==62)||(id_id==111)||(id_id==116)||(id_id==117)||(id_id==146)||(id_id==194)||(id_id==198)||(id_id==224)||(id_id==250)||(id_id==256)||(id_id==260)||(id_id==265)||(id_id==267)||(id_id==280)||(id_id==304)||(id_id==313)||(id_id==338)||(id_id==343)||(id_id==348)||(id_id==392)||(id_id==442)||(id_id==448)||(id_id==455)||(id_id==480)||(id_id==485)||(id_id==487)||(id_id==492)||(id_id==504)||(id_id==511)||(id_id==526)||(id_id==541)||(id_id==553)||(id_id==555)||(id_id==559))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
					if(k==51)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� �������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[51];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[51];
								if((id_id==5)||(id_id==10)||(id_id==13)||(id_id==14)||(id_id==23)||(id_id==31)||(id_id==32)||(id_id==43)||(id_id==72)||(id_id==179)||(id_id==186)||(id_id==191)||(id_id==217)||(id_id==238)||(id_id==301)||(id_id==321)||(id_id==335)||(id_id==337)||(id_id==351)||(id_id==360)||(id_id==365)||(id_id==395)||(id_id==431)||(id_id==439)||(id_id==480)||(id_id==494)||(id_id==499)||(id_id==506)||(id_id==543)||(id_id==555)||(id_id==559))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								
						       }
							   
							if(k==52)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� ���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[52];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[52];
								if((id_id==4)||(id_id==18)||(id_id==77)||(id_id==78)||(id_id==91)||(id_id==97)||(id_id==126)||(id_id==132)||(id_id==148)||(id_id==149)||(id_id==176)||(id_id==180)||(id_id==203)||(id_id==204)||(id_id==237)||(id_id==239)||(id_id==277)||(id_id==295)||(id_id==299)||(id_id==306))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==19)||(id_id==20)||(id_id==26)||(id_id==28)||(id_id==41)||(id_id==79)||(id_id==84)||(id_id==94)||(id_id==99)||(id_id==118)||(id_id==133)||(id_id==144)||(id_id==157)||(id_id==216)||(id_id==224)||(id_id==227)||(id_id==232)||(id_id==260)||(id_id==264)||(id_id==279)||(id_id==283)||(id_id==297)||(id_id==300)||(id_id==303)||(id_id==310)||(id_id==316)||(id_id==338)||(id_id==343)||(id_id==356)||(id_id==358))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==53)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ���������� ������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[53];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[53];
								if((id_id==16)||(id_id==28)||(id_id==35)||(id_id==39)||(id_id==75)||(id_id==80)||(id_id==93)||(id_id==97)||(id_id==109)||(id_id==110)||(id_id==117)||(id_id==118)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==136)||(id_id==139)||(id_id==145)||(id_id==197)||(id_id==226)||(id_id==233)||(id_id==234)||(id_id==235)||(id_id==265)||(id_id==269)||(id_id==271)||(id_id==280)||(id_id==316)||(id_id==336)||(id_id==355)||(id_id==381)||(id_id==393)||(id_id==417)||(id_id==426)||(id_id==437)||(id_id==438)||(id_id==447)||(id_id==452)||(id_id==469)||(id_id==471)||(id_id==504)||(id_id==507))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==82)||(id_id==96)||(id_id==347)||(id_id==399)||(id_id==468))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==54)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[54];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[54];
								if((id_id==57)||(id_id==95)||(id_id==204)||(id_id==230)||(id_id==272)||(id_id==318)||(id_id==371)||(id_id==415)||(id_id==479)||(id_id==482)||(id_id==495)||(id_id==520)||(id_id==521)||(id_id==523))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==24)||(id_id==33)||(id_id==67)||(id_id==100)||(id_id==111)||(id_id==147)||(id_id==160)||(id_id==171)||(id_id==172)||(id_id==201)||(id_id==212)||(id_id==216)||(id_id==267)||(id_id==292)||(id_id==294)||(id_id==296)||(id_id==304)||(id_id==320)||(id_id==321)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==344)||(id_id==352)||(id_id==377)||(id_id==387)||(id_id==408)||(id_id==411)||(id_id==41)||(id_id==418)||(id_id==425)||(id_id==440)||(id_id==448)||(id_id==509)||(id_id==530)||(id_id==544))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==55)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[55];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[54];
								if((id_id==11)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==100)||(id_id==109)||(id_id==134)||(id_id==143)||(id_id==167)||(id_id==181)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==240)||(id_id==250)||(id_id==263)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==101)||(id_id==105)||(id_id==148)||(id_id==166))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==56)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[56];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[56];
								if((id_id==143)||(id_id==250)||(id_id==271)||(id_id==277)||(id_id==398))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if(id_id==289)
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==57)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� �����������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[57];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[57];
								if((id_id==13)||(id_id==97)||(id_id==100)||(id_id==111)||(id_id==181)||(id_id==238)||(id_id==266))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==119)||(id_id==134)||(id_id==228)||(id_id==268))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						
						if(k==58)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[58];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[58];
								if((id_id==13)||(id_id==22)||(id_id==59)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==194)||(id_id==212)||(id_id==226)||(id_id==238)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==277)||(id_id==279)||(id_id==298))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==111)||(id_id==119)||(id_id==120))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==59)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� ���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[59];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[59];
								if((id_id==11)||(id_id==21)||(id_id==64)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==181)||(id_id==222)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==240)||(id_id==268)||(id_id==271))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==101)||(id_id==105)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==60)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� �������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[60];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[60];
								if((id_id==134)||(id_id==217)||(id_id==226)||(id_id==239)||(id_id==278)||(id_id==282)||(id_id==299))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==79)||(id_id==99)||(id_id==176)||(id_id==198)||(id_id==214)||(id_id==254)||(id_id==262)||(id_id==264))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==61)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[61];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[61];
								
								if((id_id==19)||(id_id==26)||(id_id==28)||(id_id==80)||(id_id==89)||(id_id==112)||(id_id==117)||(id_id==120)||(id_id==280))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==62)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[62];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[62];
								if((id_id==4)||(id_id==25)||(id_id==70)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==140)||(id_id==149)||(id_id==203)||(id_id==204)||(id_id==261)||(id_id==295)||(id_id==69)||(id_id==74)||(id_id==187))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==1)||(id_id==19)||(id_id==28)||(id_id==79)||(id_id==81)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==249)||(id_id==260)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==63)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[63];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[63];
								if((id_id==5)||(id_id==29)||(id_id==41)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==72)||(id_id==76)||(id_id==108)||(id_id==114)||(id_id==159)||(id_id==186)||(id_id==189)||(id_id==191)||(id_id==236)||(id_id==238)||(id_id==263))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==2)||(id_id==3)||(id_id==9)||(id_id==46)||(id_id==51)||(id_id==68)||(id_id==103)||(id_id==107)||(id_id==175)||(id_id==178)||(id_id==190)||(id_id==208)||(id_id==242))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==64)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� �������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[64];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[64];
								if((id_id==267)||(id_id==292)||(id_id==361))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==12)||(id_id==187)||(id_id==192)||(id_id==228)||(id_id==229)||(id_id==242)||(id_id==287)||(id_id==353)||(id_id==371)||(id_id==401)||(id_id==440)||(id_id==482)||(id_id==520)||(id_id==528)||(id_id==533))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==65)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� �������� ��������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[65];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[65];
								if((id_id==39)||(id_id==41)||(id_id==45)||(id_id==71)||(id_id==80)||(id_id==93)||(id_id==109)||(id_id==127)||(id_id==145)||(id_id==162)||(id_id==238)||(id_id==298)||(id_id==316)||(id_id==319)||(id_id==336)||(id_id==381)||(id_id==383)||(id_id==386)||(id_id==397)||(id_id==433)||(id_id==439)||(id_id==505)||(id_id==525)||(id_id==551)||(id_id==566))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==8)||(id_id==101)||(id_id==167)||(id_id==173)||(id_id==369)||(id_id==399)||(id_id==478)||(id_id==527))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==66)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[66];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[66];
								if((id_id==148)||(id_id==364)||(id_id==408)||(id_id==432))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==67)||(id_id==82)||(id_id==112)||(id_id==115)||(id_id==129)||(id_id==136)||(id_id==138)||(id_id==206)||(id_id==219)||(id_id==223)||(id_id==258)||(id_id==268)||(id_id==322)||(id_id==394)||(id_id==406)||(id_id==411)||(id_id==498)||(id_id==523)||(id_id==561)||(id_id==563)||(id_id==564))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==67)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ��������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[67];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[67];
								if((id_id==27)||(id_id==123)||(id_id==151)||(id_id==275)||(id_id==293)||(id_id==338)||(id_id==365))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==117)||(id_id==268)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==68)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���� �������������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[68];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[68];
								if((id_id==16)||(id_id==24)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==338)||(id_id==364))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if(id_id==347)
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==69)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���� ����������    - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[69];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[69];
								if((id_id==24)||(id_id==111)||(id_id==158)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==341)||(id_id==365))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if(id_id==268)
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==70)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[70];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[70];
								
								if((id_id==15)||(id_id==93)||(id_id==109)||(id_id==117)||(id_id==124)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==348))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==71)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[71];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[71];
								if((id_id==16)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==151)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==305)||(id_id==317)||(id_id==326)||(id_id==338)||(id_id==341)||(id_id==364))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==281)||(id_id==294)||(id_id==347))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==72)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[72];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[72];
								if((id_id==15)||(id_id==127)||(id_id==157)||(id_id==299)||(id_id==365))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==348))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==73)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ ���������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[73];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[73];
								if((id_id==10)||(id_id==32)||(id_id==43)||(id_id==47)||(id_id==72)||(id_id==76)||(id_id==108)||(id_id==125)||(id_id==238)||(id_id==266)||(id_id==273)||(id_id==303)||(id_id==337)||(id_id==388)||(id_id==526))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==2)||(id_id==12)||(id_id==51)||(id_id==55)||(id_id==155)||(id_id==175)||(id_id==243)||(id_id==521)||(id_id==533))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==74)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[74];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[74];
								if((id_id==42)||(id_id==61)||(id_id==84)||(id_id==118)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==82)||(id_id==96)||(id_id==134)||(id_id==173)||(id_id==183)||(id_id==235)||(id_id==237)||(id_id==287))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==75)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� ����������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[75];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[75];
								if((id_id==21)||(id_id==42)||(id_id==212)||(id_id==216)||(id_id==224)||(id_id==245))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==96)||(id_id==137)||(id_id==235)||(id_id==237)||(id_id==527))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==76)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[76];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[76];
								if((id_id==38)||(id_id==59)||(id_id==118))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==37)||(id_id==82)||(id_id==141)||(id_id==175)||(id_id==289)||(id_id==294)||(id_id==429)||(id_id==520))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==77)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ��������������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[77];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[77];
								if((id_id==16)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==244)||(id_id==245)||(id_id==284))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==8)||(id_id==20)||(id_id==37)||(id_id==91)||(id_id==107)||(id_id==137)||(id_id==287)||(id_id==294))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==78)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� ��������������� ����������  - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[78];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[78];
								if((id_id==21)||(id_id==102)||(id_id==127)||(id_id==239))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==82)||(id_id==96)||(id_id==134)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==289)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==79)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[79];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[79];
								if((id_id==18)||(id_id==32)||(id_id==86)||(id_id==90)||(id_id==142)||(id_id==150)||(id_id==155)||(id_id==158)||(id_id==168)||(id_id==174)||(id_id==176)||(id_id==182)||(id_id==200)||(id_id==236)||(id_id==260)||(id_id==285)||(id_id==294)||(id_id==306)||(id_id==308)||(id_id==335)||(id_id==339)||(id_id==342)||(id_id==396)||(id_id==422)||(id_id==429)||(id_id==464)||(id_id==491))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==4)||(id_id==8)||(id_id==11)||(id_id==53)||(id_id==109)||(id_id==132)||(id_id==147)||(id_id==178)||(id_id==180)||(id_id==224)||(id_id==233)||(id_id==234)||(id_id==268)||(id_id==270)||(id_id==283)||(id_id==327)||(id_id==343)||(id_id==346)||(id_id==360)||(id_id==364)||(id_id==367)||(id_id==370)||(id_id==373)||(id_id==375)||(id_id==400)||(id_id==404)||(id_id==419)||(id_id==426)||(id_id==440)||(id_id==484)||(id_id==485)||(id_id==488)||(id_id==490)||(id_id==492)||(id_id==522)||(id_id==525)||(id_id==541)||(id_id==551))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==80)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[80];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[80];
								if((id_id==16)||(id_id==24)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==157)||(id_id==202)||(id_id==245)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==364))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								
						       }
							   
						if(k==81)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[81];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[81];
								if((id_id==102)||(id_id==105)||(id_id==120)||(id_id==129)||(id_id==133)||(id_id==147)||(id_id==148)||(id_id==161)||(id_id==172)||(id_id==296)||(id_id==344)||(id_id==348)||(id_id==359)||(id_id==374)||(id_id==382)||(id_id==389)||(id_id==390)||(id_id==396)||(id_id==398)||(id_id==408)||(id_id==416)||(id_id==468)||(id_id==499))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==63)||(id_id==68)||(id_id==119)||(id_id==130)||(id_id==160)||(id_id==163)||(id_id==214)||(id_id==264)||(id_id==274)||(id_id==367))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==82)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[82];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[82];
								if((id_id==47)||(id_id==84)||(id_id==93)||(id_id==106)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==139)||(id_id==157)||(id_id==171)||(id_id==186)||(id_id==250)||(id_id==280)||(id_id==304)||(id_id==307)||(id_id==313)||(id_id==319)||(id_id==323)||(id_id==338)||(id_id==349)||(id_id==373)||(id_id==395)||(id_id==406)||(id_id==411)||(id_id==435)||(id_id==437)||(id_id==469)||(id_id==485)||(id_id==543))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==78)||(id_id==176)||(id_id==221))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==83)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[83];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[83];
								if((id_id==13)||(id_id==26)||(id_id==58)||(id_id==94)||(id_id==111)||(id_id==112)||(id_id==119)||(id_id==129)||(id_id==147)||(id_id==158)||(id_id==206)||(id_id==232)||(id_id==289)||(id_id==317)||(id_id==336)||(id_id==337)||(id_id==338)||(id_id==356)||(id_id==357)||(id_id==361)||(id_id==375)||(id_id==378)||(id_id==380)||(id_id==390)||(id_id==392)||(id_id==395)||(id_id==397)||(id_id==402)||(id_id==404)||(id_id==413)||(id_id==416)||(id_id==439)||(id_id==443)||(id_id==457)||(id_id==461)||(id_id==468)||(id_id==470)||(id_id==492)||(id_id==499)||(id_id==502)||(id_id==506)||(id_id==509)||(id_id==510)||(id_id==548)||(id_id==564))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==30)||(id_id==45)||(id_id==176)||(id_id==401))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==84)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������������� �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[84];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[84];
								if((id_id==176)||(id_id==225))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==32)||(id_id==335)||(id_id==531)||(id_id==558))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==85)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[85];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[85];
								if((id_id==24)||(id_id==11)||(id_id==27)||(id_id==35)||(id_id==48)||(id_id==49)||(id_id==51)||(id_id==66)||(id_id==108)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==134)||(id_id==139)||(id_id==157)||(id_id==161)||(id_id==172)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==212)||(id_id==252)||(id_id==260)||(id_id==274)||(id_id==275)||(id_id==284)||(id_id==286)||(id_id==291)||(id_id==293)||(id_id==334)||(id_id==349)||(id_id==350)||(id_id==360)||(id_id==364)||(id_id==377)||(id_id==386)||(id_id==435)||(id_id==448)||(id_id==453)||(id_id==454)||(id_id==469)||(id_id==509)||(id_id==519)||(id_id==525)||(id_id==551)||(id_id==553))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==20)||(id_id==133)||(id_id==177)||(id_id==198)||(id_id==220)||(id_id==254)||(id_id==309)||(id_id==347)||(id_id==369)||(id_id==446)||(id_id==462)||(id_id==464)||(id_id==496))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==86)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='R � ������ ������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[86];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[86];
								
								if((id_id==1)||(id_id==6)||(id_id==9)||(id_id==12)||(id_id==39)||(id_id==51)||(id_id==81)||(id_id==112)||(id_id==126)||(id_id==131)||(id_id==140)||(id_id==145)||(id_id==154)||(id_id==156)||(id_id==191)||(id_id==208)||(id_id==219)||(id_id==221)||(id_id==271)||(id_id==272)||(id_id==281)||(id_id==282)||(id_id==327)||(id_id==406)||(id_id==415)||(id_id==429)||(id_id==440)||(id_id==445)||(id_id==447)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==468)||(id_id==472)||(id_id==502)||(id_id==516)||(id_id==529)||(id_id==550)||(id_id==556))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==87)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[87];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[87];
								if((id_id==41)||(id_id==64)||(id_id==80)||(id_id==81)||(id_id==102)||(id_id==109)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==219)||(id_id==233)||(id_id==240)||(id_id==437)||(id_id==459))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==62)||(id_id==111)||(id_id==120)||(id_id==249)||(id_id==278)||(id_id==294)||(id_id==370)||(id_id==440)||(id_id==460)||(id_id==513))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==88)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ��������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[88];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[88];
								if((id_id==58)||(id_id==111)||(id_id==173)||(id_id==221)||(id_id==294)||(id_id==412)||(id_id==501)||(id_id==552)||(id_id==215)||(id_id==219)||(id_id==233)||(id_id==240)||(id_id==437)||(id_id==459))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==6)||(id_id==28)||(id_id==30)||(id_id==33)||(id_id==56)||(id_id==116)||(id_id==118)||(id_id==157)||(id_id==175)||(id_id==181)||(id_id==223)||(id_id==224)||(id_id==260)||(id_id==304)||(id_id==419)||(id_id==434)||(id_id==437)||(id_id==468)||(id_id==469)||(id_id==471)||(id_id==472)||(id_id==529)||(id_id==553)||(id_id==558))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==89)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[89];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[89];
								if((id_id==37)||(id_id==86)||(id_id==111)||(id_id==141)||(id_id==304)||(id_id==342)||(id_id==357))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==215)||(id_id==216)||(id_id==298))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==90)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� ���� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[90];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[90];
								if((id_id==54)||(id_id==81)||(id_id==91)||(id_id==96)||(id_id==122)||(id_id==137)||(id_id==207)||(id_id==215)||(id_id==229)||(id_id==282)||(id_id==372)||(id_id==376)||(id_id==477))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==148)||(id_id==183)||(id_id==201)||(id_id==222)||(id_id==244)||(id_id==250)||(id_id==292)||(id_id==307)||(id_id==317)||(id_id==348)||(id_id==377)||(id_id==382)||(id_id==386)||(id_id==447)||(id_id==491)||(id_id==495)||(id_id==531)||(id_id==564))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==91)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������ ������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[91];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[91];
								if((id_id==99)||(id_id==170)||(id_id==428))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==40)||(id_id==86)||(id_id==97)||(id_id==100)||(id_id==102)||(id_id==119)||(id_id==138)||(id_id==143)||(id_id==149)||(id_id==232)||(id_id==238)||(id_id==263)||(id_id==268)||(id_id==278)||(id_id==282)||(id_id==298)||(id_id==299)||(id_id==307)||(id_id==317)||(id_id==348)||(id_id==358)||(id_id==359)||(id_id==361)||(id_id==426)||(id_id==472)||(id_id==475)||(id_id==490)||(id_id==558))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==92)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[92];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[92];
								if((id_id==40)||(id_id==168)||(id_id==210)||(id_id==241)||(id_id==282)||(id_id==297)||(id_id==303)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==334)||(id_id==339)||(id_id==345)||(id_id==350)||(id_id==354)||(id_id==355)||(id_id==363)||(id_id==365))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==17)||(id_id==65)||(id_id==177)||(id_id==187)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==306)||(id_id==323)||(id_id==330))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==93)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[93];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[93];
								if((id_id==16)||(id_id==21)||(id_id==24)||(id_id==35)||(id_id==52)||(id_id==121)||(id_id==157)||(id_id==212)||(id_id==241)||(id_id==282)||(id_id==305)||(id_id==323)||(id_id==324)||(id_id==352)||(id_id==364))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==65)||(id_id==220)||(id_id==276)||(id_id==306)||(id_id==309)||(id_id==312))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==94)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[94];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[94];
								if((id_id==76)||(id_id==104)||(id_id==202)||(id_id==301)||(id_id==339)||(id_id==360)||(id_id==363))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==8)||(id_id==196)||(id_id==322)||(id_id==355))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==95)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� ���������� ���������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[95];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[95];
								if((id_id==22)||(id_id==33)||(id_id==47)||(id_id==156)||(id_id==194)||(id_id==210)||(id_id==251)||(id_id==273)||(id_id==291)||(id_id==332)||(id_id==334)||(id_id==341)||(id_id==345)||(id_id==350))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==103)||(id_id==119)||(id_id==187)||(id_id==192)||(id_id==281)||(id_id==330))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==96)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[96];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[96];
								if((id_id==46)||(id_id==54)||(id_id==79)||(id_id==107)||(id_id==170)||(id_id==242)||(id_id==262)||(id_id==353)||(id_id==501)||(id_id==521))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==32)||(id_id==94)||(id_id==100)||(id_id==138)||(id_id==141)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==201)||(id_id==236)||(id_id==259)||(id_id==317)||(id_id==321)||(id_id==335)||(id_id==343)||(id_id==389)||(id_id==394)||(id_id==416)||(id_id==439)||(id_id==443)||(id_id==499)||(id_id==500)||(id_id==531)||(id_id==564))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==97)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������� ����������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[97];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[97];
								if((id_id==49)||(id_id==53)||(id_id==54)||(id_id==57)||(id_id==73)||(id_id==95)||(id_id==96)||(id_id==125)||(id_id==170)||(id_id==272)||(id_id==329)||(id_id==407)||(id_id==476)||(id_id==488)||(id_id==554))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==24)||(id_id==30)||(id_id==36)||(id_id==51)||(id_id==61)||(id_id==75)||(id_id==76)||(id_id==106)||(id_id==146)||(id_id==150)||(id_id==153)||(id_id==163)||(id_id==168)||(id_id==171)||(id_id==224)||(id_id==225)||(id_id==236)||(id_id==241)||(id_id==285)||(id_id==299)||(id_id==303)||(id_id==352)||(id_id==361)||(id_id==397)||(id_id==425)||(id_id==441)||(id_id==442)||(id_id==443)||(id_id==448)||(id_id==508)||(id_id==524)||(id_id==533))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==98)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[98];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[98];
								if((id_id==7)||(id_id==17)||(id_id==18)||(id_id==54)||(id_id==65)||(id_id==83)||(id_id==107)||(id_id==113)||(id_id==163)||(id_id==164)||(id_id==169)||(id_id==185)||(id_id==190)||(id_id==196)||(id_id==220)||(id_id==242)||(id_id==257)||(id_id==272)||(id_id==371)||(id_id==528))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==14)||(id_id==27)||(id_id==32)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==43)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==125)||(id_id==138)||(id_id==139)||(id_id==148)||(id_id==151)||(id_id==156)||(id_id==158)||(id_id==168)||(id_id==171)||(id_id==184)||(id_id==186)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==218)||(id_id==241)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==263)||(id_id==267)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==288)||(id_id==291)||(id_id==293)||(id_id==301)||(id_id==321)||(id_id==335)||(id_id==337)||(id_id==352)||(id_id==383)||(id_id==424)||(id_id==431)||(id_id==439)||(id_id==549)||(id_id==555))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==99)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[99];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[99];
								if((id_id==122)||(id_id==173)||(id_id==221)||(id_id==229)||(id_id==253)||(id_id==285)||(id_id==353)||(id_id==391)||(id_id==401)||(id_id==409)||(id_id==412)||(id_id==415)||(id_id==449)||(id_id==529)||(id_id==546)||(id_id==547)||(id_id==552))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==171)||(id_id==260)||(id_id==267)||(id_id==292)||(id_id==304)||(id_id==392)||(id_id==448)||(id_id==455))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==100)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[100];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[100];
								if((id_id==149)||(id_id==204)||(id_id==229)||(id_id==441)||(id_id==491)||(id_id==513)||(id_id==521)||(id_id==552))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==28)||(id_id==89)||(id_id==180)||(id_id==297)||(id_id==304)||(id_id==348)||(id_id==365)||(id_id==395)||(id_id==427)||(id_id==448)||(id_id==516))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==101)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[101];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[101];
								if((id_id==172)||(id_id==180)||(id_id==201)||(id_id==267)||(id_id==292))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								
						       }
							   
						if(k==102)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������������� � ������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[102];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[102];
								if((id_id==78)||(id_id==176)||(id_id==221))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==33)||(id_id==47)||(id_id==93)||(id_id==117)||(id_id==124)||(id_id==136)||(id_id==139)||(id_id==157)||(id_id==171)||(id_id==186)||(id_id==250)||(id_id==280)||(id_id==304)||(id_id==307)||(id_id==313)||(id_id==319)||(id_id==338)||(id_id==349)||(id_id==373)||(id_id==395)||(id_id==406)||(id_id==411)||(id_id==435)||(id_id==437)||(id_id==469)||(id_id==485)||(id_id==543))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==103)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����������� � ������������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[103];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[103];
								if((id_id==57)||(id_id==65)||(id_id==107)||(id_id==119)||(id_id==137)||(id_id==152)||(id_id==163)||(id_id==188)||(id_id==230)||(id_id==257)||(id_id==274)||(id_id==309)||(id_id==310)||(id_id==371)||(id_id==407)||(id_id==412)||(id_id==487)||(id_id==527))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==11)||(id_id==26)||(id_id==32)||(id_id==40)||(id_id==52)||(id_id==67)||(id_id==82)||(id_id==86)||(id_id==136)||(id_id==142)||(id_id==147)||(id_id==157)||(id_id==186)||(id_id==212)||(id_id==216)||(id_id==224)||(id_id==236)||(id_id==238)||(id_id==244)||(id_id==250)||(id_id==252)||(id_id==259)||(id_id==260)||(id_id==267)||(id_id==271)||(id_id==278)||(id_id==280)||(id_id==282)||(id_id==284)||(id_id==290)||(id_id==297)||(id_id==298)||(id_id==301)||(id_id==305)||(id_id==314)||(id_id==317)||(id_id==319)||(id_id==320)||(id_id==327)||(id_id==328)||(id_id==332)||(id_id==335)||(id_id==338)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==345)||(id_id==348)||(id_id==352)||(id_id==356)||(id_id==366)||(id_id==368)||(id_id==374)||(id_id==377)||(id_id==381)||(id_id==382)||(id_id==385)||(id_id==389)||(id_id==395)||(id_id==396)||(id_id==397)||(id_id==402)||(id_id==404)||(id_id==411)||(id_id==418)||(id_id==448)||(id_id==456)||(id_id==465)||(id_id==484)||(id_id==485)||(id_id==505)||(id_id==506)||(id_id==509)||(id_id==511)||(id_id==516)||(id_id==531)||(id_id==541)||(id_id==544)||(id_id==558)||(id_id==560))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==104)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� ������� �� ���� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[104];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[104];
								if((id_id==79)||(id_id==111)||(id_id==160)||(id_id==228)||(id_id==248)||(id_id==264)||(id_id==296)||(id_id==461)||(id_id==468))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==15)||(id_id==30)||(id_id==71)||(id_id==109)||(id_id==124)||(id_id==135)||(id_id==142)||(id_id==148)||(id_id==170)||(id_id==324)||(id_id==383)||(id_id==406)||(id_id==408)||(id_id==409)||(id_id==416)||(id_id==439)||(id_id==444))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==105)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='�������� ��� �������� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[105];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[105];
								if((id_id==28)||(id_id==37)||(id_id==58)||(id_id==79)||(id_id==98)||(id_id==137)||(id_id==133)||(id_id==152)||(id_id==207)||(id_id==223)||(id_id==235)||(id_id==240)||(id_id==253)||(id_id==258)||(id_id==262)||(id_id==264)||(id_id==283)||(id_id==310)||(id_id==378)||(id_id==380)||(id_id==423)||(id_id==426)||(id_id==460)||(id_id==493)||(id_id==521)||(id_id==563))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==11)||(id_id==49)||(id_id==59)||(id_id==74)||(id_id==84)||(id_id==93)||(id_id==99)||(id_id==100)||(id_id==132)||(id_id==157)||(id_id==165)||(id_id==171)||(id_id==172)||(id_id==203)||(id_id==212)||(id_id==215)||(id_id==224)||(id_id==236)||(id_id==239)||(id_id==245)||(id_id==277)||(id_id==292)||(id_id==295)||(id_id==297)||(id_id==299)||(id_id==301)||(id_id==328)||(id_id==338)||(id_id==366)||(id_id==383)||(id_id==384)||(id_id==389)||(id_id==396)||(id_id==397)||(id_id==400)||(id_id==410)||(id_id==415)||(id_id==416)||(id_id==435)||(id_id==437)||(id_id==438)||(id_id==441)||(id_id==452)||(id_id==459)||(id_id==469)||(id_id==485)||(id_id==487)||(id_id==513))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==106)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='������ ����������� � ���������� ���� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[106];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[106];
								if((id_id==97)||(id_id==129)||(id_id==168)||(id_id==225)||(id_id==249)||(id_id==266)||(id_id==294)||(id_id==303)||(id_id==369)||(id_id==371)||(id_id==390)||(id_id==463)||(id_id==515)||(id_id==528))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==17)||(id_id==41)||(id_id==199)||(id_id==232)||(id_id==247)||(id_id==344)||(id_id==512))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==107)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='��������� � ������ - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[107];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[107];
								if((id_id==13)||(id_id==16)||(id_id==32)||(id_id==35)||(id_id==40)||(id_id==41)||(id_id==59)||(id_id==84)||(id_id==109)||(id_id==112)||(id_id==170)||(id_id==244)||(id_id==250)||(id_id==259)||(id_id==272)||(id_id==301)||(id_id==312)||(id_id==331)||(id_id==335)||(id_id==343)||(id_id==389)||(id_id==395)||(id_id==404)||(id_id==406)||(id_id==435)||(id_id==487)||(id_id==507)||(id_id==526)||(id_id==549))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==3)||(id_id==9)||(id_id==88)||(id_id==164)||(id_id==207)||(id_id==257)||(id_id==318)||(id_id==407))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
						if(k==108)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='���������� ���������� �� ���� - �������������� �����';
								document.getElementById("M_kof").innerHTML='M='+koefic_m[108];
								document.getElementById("lamda_kof").innerHTML='  &sigma;='+koefic_lymda[108];
								if((id_id==28)||(id_id==39)||(id_id==40)||(id_id==45)||(id_id==80)||(id_id==86)||(id_id==93)||(id_id==101)||(id_id==110)||(id_id==120)||(id_id==141)||(id_id==142)||(id_id==172)||(id_id==186)||(id_id==191)||(id_id==238)||(id_id==252)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==336)||(id_id==345)||(id_id==351)||(id_id==352)||(id_id==355)||(id_id==357)||(id_id==359)||(id_id==361)||(id_id==374)||(id_id==382)||(id_id==416)||(id_id==418)||(id_id==442)||(id_id==458)||(id_id==487)||(id_id==493)||(id_id==499)||(id_id==500)||(id_id==506)||(id_id==531))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
								if((id_id==7)||(id_id==41)||(id_id==79)||(id_id==131)||(id_id==155)||(id_id==160)||(id_id==163)||(id_id==231)||(id_id==243)||(id_id==270)||(id_id==353)||(id_id==407)||(id_id==548))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							   
							   
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 if(k==997)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ���';
								document.getElementById("M_kof").innerHTML='M=4,2';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=2,9';
																	
								if((id_id==15)||(id_id==30)||(id_id==45)||(id_id==75)||(id_id==105)||(id_id==135)||(id_id==195)||(id_id==225)||(id_id==255)||(id_id==285)||(id_id==60)||(id_id==90)||(id_id==120)||(id_id==150)||(id_id==165))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							 
							 if(k==998)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������������';
								document.getElementById("M_kof").innerHTML='M=2,76';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=4,67';
								if((id_id==14)||(id_id==23)||(id_id==27)||(id_id==31)||(id_id==33)||(id_id==34)||(id_id==35)||(id_id==40)||(id_id==42)||(id_id==48)||(id_id==49)||(id_id==50)||(id_id==53)||(id_id==56)||(id_id==66)||(id_id==85)||(id_id==121)||(id_id==123)||(id_id==139)||(id_id==146)||(id_id==151)||(id_id==156)||(id_id==168)||(id_id==184)||(id_id==197)||(id_id==200)||(id_id==202)||(id_id==205)||(id_id==206)||(id_id==209)||(id_id==210)||(id_id==211)||(id_id==215)||(id_id==218)||(id_id==227)||(id_id==245)||(id_id==246)||(id_id==247)||(id_id==252)||(id_id==256)||(id_id==269)||(id_id==275)||(id_id==286)||(id_id==291)||(id_id==293))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==17)||(id_id==20)||(id_id==54)||(id_id==65)||(id_id==75)||(id_id==83)||(id_id==112)||(id_id==113)||(id_id==115)||(id_id==164)||(id_id==169)||(id_id==177)||(id_id==185)||(id_id==196)||(id_id==199)||(id_id==220)||(id_id==257)||(id_id==258)||(id_id==272)||(id_id==276))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==999)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ���������';
								document.getElementById("M_kof").innerHTML='M=12,1';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=5,4';
								if(id_id==96)
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==30)||(id_id==39)||(id_id==71)||(id_id==89)||(id_id==124)||(id_id==129)||(id_id==134)||(id_id==138)||(id_id==142)||(id_id==148)||(id_id==160)||(id_id==170)||(id_id==171)||(id_id==180)||(id_id==183)||(id_id==217)||(id_id==234)||(id_id==267)||(id_id==272)||(id_id==316)||(id_id==322)||(id_id==374)||(id_id==383)||(id_id==397)||(id_id==398)||(id_id==406)||(id_id==461)||(id_id==502))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							 
							 if(k==1000)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������������� ������������� ';
								document.getElementById("M_kof").innerHTML='M=11,1';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=3,9';
								if((id_id==23)||(id_id==29)||(id_id==43)||(id_id==62)||(id_id==72)||(id_id==108)||(id_id==114)||(id_id==125)||(id_id==161)||(id_id==189)||(id_id==273))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==7)||(id_id==9)||(id_id==18)||(id_id==51)||(id_id==55)||(id_id==63)||(id_id==68)||(id_id==103)||(id_id==130)||(id_id==153)||(id_id==155)||(id_id==163)||(id_id==175)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==230)||(id_id==243)||(id_id==274)||(id_id==281))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1001)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ����������� (���������) ';
								document.getElementById("M_kof").innerHTML='M=16,6';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=4,11';
								if((id_id==5)||(id_id==13)||(id_id==23)||(id_id==32)||(id_id==41)||(id_id==43)||(id_id==52)||(id_id==67)||(id_id==86)||(id_id==104)||(id_id==130)||(id_id==138)||(id_id==142)||(id_id==158)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==193)||(id_id==236)||(id_id==259))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==8)||(id_id==9)||(id_id==18)||(id_id==30)||(id_id==36)||(id_id==39)||(id_id==46)||(id_id==51)||(id_id==57)||(id_id==58)||(id_id==64)||(id_id==80)||(id_id==88)||(id_id==89)||(id_id==95)||(id_id==98)||(id_id==107)||(id_id==122)||(id_id==131)||(id_id==145)||(id_id==152)||(id_id==153)||(id_id==154)||(id_id==155)||(id_id==160)||(id_id==178)||(id_id==191)||(id_id==207)||(id_id==208)||(id_id==238)||(id_id==241)||(id_id==242)||(id_id==248)||(id_id==263)||(id_id==270)||(id_id==271)||(id_id==272)||(id_id==285)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1002)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ����������������� �������  ';
								document.getElementById("M_kof").innerHTML='M=16,46';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=5,4';
								if((id_id==10)||(id_id==23)||(id_id==32)||(id_id==43)||(id_id==44)||(id_id==47)||(id_id==76)||(id_id==114)||(id_id==179)||(id_id==186)||(id_id==189)||(id_id==238))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==2)||(id_id==3)||(id_id==6)||(id_id==7)||(id_id==8)||(id_id==9)||(id_id==12)||(id_id==26)||(id_id==30)||(id_id==51)||(id_id==55)||(id_id==71)||(id_id==89)||(id_id==93)||(id_id==103)||(id_id==107)||(id_id==109)||(id_id==124)||(id_id==128)||(id_id==129)||(id_id==136)||(id_id==137)||(id_id==141)||(id_id==147)||(id_id==153)||(id_id==160)||(id_id==162)||(id_id==163)||(id_id==170)||(id_id==172)||(id_id==174)||(id_id==175)||(id_id==180)||(id_id==188)||(id_id==190)||(id_id==192)||(id_id==201)||(id_id==213)||(id_id==230)||(id_id==234)||(id_id==243)||(id_id==265)||(id_id==267)||(id_id==274)||(id_id==279)||(id_id==289)||(id_id==292))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1003)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������������� (����������)   ';
								document.getElementById("M_kof").innerHTML='M=18,68';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=4,11';
								if((id_id==16)||(id_id==21)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==36)||(id_id==42)||(id_id==61)||(id_id==67)||(id_id==84)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==110)||(id_id==118)||(id_id==127)||(id_id==215)||(id_id==216)||(id_id==224)||(id_id==239)||(id_id==244)||(id_id==245)||(id_id==284))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==20)||(id_id==37)||(id_id==82)||(id_id==91)||(id_id==96)||(id_id==107)||(id_id==134)||(id_id==137)||(id_id==141)||(id_id==155)||(id_id==170)||(id_id==171)||(id_id==173)||(id_id==180)||(id_id==183)||(id_id==201)||(id_id==231)||(id_id==235)||(id_id==237)||(id_id==248)||(id_id==267)||(id_id==287)||(id_id==289)||(id_id==294)||(id_id==296))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1004)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������������� � �������������';
								document.getElementById("M_kof").innerHTML='M=20,46';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=5,0';
								if((id_id==4)||(id_id==25)||(id_id==69)||(id_id==70)||(id_id==74)||(id_id==77)||(id_id==78)||(id_id==87)||(id_id==92)||(id_id==126)||(id_id==132)||(id_id==134)||(id_id==140)||(id_id==149)||(id_id==179)||(id_id==187)||(id_id==203)||(id_id==204)||(id_id==217)||(id_id==226)||(id_id==231)||(id_id==239)||(id_id==261)||(id_id==278)||(id_id==282)||(id_id==295)||(id_id==297)||(id_id==299))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==1)||(id_id==19)||(id_id==26)||(id_id==28)||(id_id==79)||(id_id==80)||(id_id==81)||(id_id==89)||(id_id==99)||(id_id==112)||(id_id==115)||(id_id==116)||(id_id==117)||(id_id==120)||(id_id==133)||(id_id==144)||(id_id==176)||(id_id==198)||(id_id==213)||(id_id==214)||(id_id==219)||(id_id==221)||(id_id==223)||(id_id==229)||(id_id==249)||(id_id==254)||(id_id==260)||(id_id==262)||(id_id==264)||(id_id==280)||(id_id==283)||(id_id==300))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==1005)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ���������� (�������)';
								document.getElementById("M_kof").innerHTML='M=7,9';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=3,4';
								if((id_id==15)||(id_id==16)||(id_id==22)||(id_id==24)||(id_id==27)||(id_id==35)||(id_id==110)||(id_id==121)||(id_id==123)||(id_id==127)||(id_id==151)||(id_id==157)||(id_id==158)||(id_id==202)||(id_id==275)||(id_id==284)||(id_id==291)||(id_id==293)||(id_id==299)||(id_id==305)||(id_id==317)||(id_id==338)||(id_id==341)||(id_id==364)||(id_id==365))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==93)||(id_id==107)||(id_id==109)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==268)||(id_id==281)||(id_id==294)||(id_id==313)||(id_id==316)||(id_id==319)||(id_id==327)||(id_id==347)||(id_id==348))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1006)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ����������� (�����������)';
								document.getElementById("M_kof").innerHTML='M=23,06';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=5,0';
								if((id_id==10)||(id_id==15)||(id_id==22)||(id_id==32)||(id_id==41)||(id_id==67)||(id_id==76)||(id_id==86)||(id_id==94)||(id_id==102)||(id_id==106)||(id_id==142)||(id_id==159)||(id_id==182)||(id_id==189)||(id_id==217)||(id_id==238)||(id_id==266)||(id_id==301)||(id_id==304)||(id_id==305)||(id_id==317)||(id_id==321)||(id_id==336)||(id_id==337)||(id_id==340)||(id_id==342)||(id_id==343)||(id_id==344)||(id_id==346)||(id_id==349)||(id_id==351)||(id_id==352)||(id_id==356)||(id_id==357)||(id_id==359)||(id_id==360)||(id_id==361))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==3)||(id_id==8)||(id_id==36)||(id_id==122)||(id_id==152)||(id_id==164)||(id_id==178)||(id_id==329)||(id_id==353))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							 if(k==1007)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� �������������������� (����������) ';
								document.getElementById("M_kof").innerHTML='M=21,96';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=5,0';
								if((id_id==15)||(id_id==16)||(id_id==21)||(id_id==22)||(id_id==24)||(id_id==32)||(id_id==33)||(id_id==35)||(id_id==38)||(id_id==40)||(id_id==41)||(id_id==47)||(id_id==52)||(id_id==76)||(id_id==97)||(id_id==104)||(id_id==121)||(id_id==156)||(id_id==157)||(id_id==159)||(id_id==168)||(id_id==179)||(id_id==182)||(id_id==194)||(id_id==202)||(id_id==210)||(id_id==212)||(id_id==238)||(id_id==241)||(id_id==251)||(id_id==259)||(id_id==266)||(id_id==273)||(id_id==282)||(id_id==291)||(id_id==297)||(id_id==301)||(id_id==303)||(id_id==305)||(id_id==307)||(id_id==312)||(id_id==320)||(id_id==324)||(id_id==325)||(id_id==332)||(id_id==334)||(id_id==335)||(id_id==339)||(id_id==341)||(id_id==345)||(id_id==349)||(id_id==350)||(id_id==352)||(id_id==354)||(id_id==355)||(id_id==356)||(id_id==360)||(id_id==363)||(id_id==364))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==8)||(id_id==17)||(id_id==20)||(id_id==37)||(id_id==65)||(id_id==103)||(id_id==119)||(id_id==177)||(id_id==178)||(id_id==187)||(id_id==192)||(id_id==196)||(id_id==220)||(id_id==276)||(id_id==281)||(id_id==306)||(id_id==309)||(id_id==322)||(id_id==330))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==1008)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ��������� (����������)';
								document.getElementById("M_kof").innerHTML='M=17,0';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=4,06';
								if((id_id==11)||(id_id==13)||(id_id==21)||(id_id==22)||(id_id==59)||(id_id==64)||(id_id==73)||(id_id==97)||(id_id==100)||(id_id==109)||(id_id==127)||(id_id==134)||(id_id==143)||(id_id==156)||(id_id==157)||(id_id==167)||(id_id==181)||(id_id==194)||(id_id==212)||(id_id==222)||(id_id==226)||(id_id==228)||(id_id==232)||(id_id==233)||(id_id==238)||(id_id==240)||(id_id==250)||(id_id==251)||(id_id==263)||(id_id==266)||(id_id==268)||(id_id==271)||(id_id==277)||(id_id==279)||(id_id==298))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==101)||(id_id==105)||(id_id==111)||(id_id==119)||(id_id==120)||(id_id==148)||(id_id==166)||(id_id==171)||(id_id==180)||(id_id==267)||(id_id==289))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
							   
							if(k==1009)
	                          {
		                        document.getElementById("full_screen_zagol_smil").innerHTML='����� ����������� � ������������';
								document.getElementById("M_kof").innerHTML='M=17,0';
								document.getElementById("lamda_kof").innerHTML='  &sigma;=4,06';
								if((id_id==32)||(id_id==67)||(id_id==82)||(id_id==111)||(id_id==117)||(id_id==124)||(id_id==138)||(id_id==147)||(id_id==171)||(id_id==172)||(id_id==180)||(id_id==201)||(id_id==236)||(id_id==267)||(id_id==278)||(id_id==292)||(id_id==304)||(id_id==316)||(id_id==321)||(id_id==332)||(id_id==336)||(id_id==342)||(id_id==357)||(id_id==377)||(id_id==383)||(id_id==398)||(id_id==411)||(id_id==427)||(id_id==436)||(id_id==455)||(id_id==473)||(id_id==487)||(id_id==549)||(id_id==564))
			                       {
								    if(da==1)
			                               {
	                                         yt_polog=yt_polog+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_p++;
											}
											 else
											    {
												  yt_polog=yt_polog+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
												 
                                     kak_vs++;
								    }
									
								if((id_id==25)||(id_id==33)||(id_id==57)||(id_id==91)||(id_id==99)||(id_id==119)||(id_id==126)||(id_id==143)||(id_id==193)||(id_id==208)||(id_id==229)||(id_id==231)||(id_id==254)||(id_id==262)||(id_id==281)||(id_id==296)||(id_id==309)||(id_id==353)||(id_id==359)||(id_id==371)||(id_id==391)||(id_id==400)||(id_id==415)||(id_id==440)||(id_id==446)||(id_id==449)||(id_id==450)||(id_id==451)||(id_id==462)||(id_id==469)||(id_id==479)||(id_id==481)||(id_id==482)||(id_id==501)||(id_id==521)||(id_id==547))
			                       {
								    if(net==1)
			                               {
	                                         yt_otric=yt_otric+'<tr><td style="color:red" class="table_smil">'+id_id+'</td><td style="color:red" class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
											 kak++;
											 kak_o++;
											}
											 else
											    {
												  yt_otric=yt_otric+'<tr><td class="table_smil">'+id_id+'</td><td class="table_smil">'+document.getElementById("vopros_"+i).innerHTML+'</td></tr>';
												 }
									 kak_vs++;
									}
						       }
	   }
	 yt_polog=yt_polog+'</table>';
	 yt_otric=yt_otric+'</table>';
	 document.getElementById("dp_vopr_polog").innerHTML=yt_polog;
	 document.getElementById("dp_vopr_otric").innerHTML=yt_otric;
	 document.getElementById("vs_voprov_sm").innerHTML=kak;
	 document.getElementById("vs_voprov_sm_p").innerHTML=kak_p;
	 document.getElementById("vs_voprov_sm_o").innerHTML=kak_o;
	 document.getElementById("vs_voprov_sm_vsego").innerHTML=kak_vs+'.';
	 //alert(yt);
	 $('#overlay').fadeIn(400, // ������� ������ ���������� ������ ��������
		 	             function()
						           { // ����� ���������� ����������� ��������
				                   $('#modal_form_smil_dop') 
					               .css('display', 'block') // ������� � ���������� ���� display: none;
					               .animate({opacity: 1, top: '50%'}, 200); // ������ ���������� ������������ ������������ �� ���������� ����
		//});
	                               });
                            }
function close_full_screen_smil_dop()
        {
		  $('#modal_form_smil_dop')
			.animate({opacity: 0, top: '45%'}, 200,  // ������ ������ ������������ �� 0 � ������������ ������� ���� �����
				function(){ // ����� ��������
					$(this).css('display', 'none'); // ������ ��� display: none;
					$('#overlay').fadeOut(400); // �������� ��������
				});
			
	      
		 }

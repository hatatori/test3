window.onload=function(){

	t = document.querySelectorAll("textarea")

	cdireito = document.getElementById("codigo-direito");
	cesquerdo = document.getElementById("codigo-esquerdo");
	cdbaixo = document.getElementById("codigo-direito-baixo");


	t[1].onkeyup=function(){
		st.innerHTML = this.value
		this.scrollTop=0
		format(this)
		this.style.width = cdireito.querySelector(".language-css").children[0].offsetWidth+50
		gravar()		
	}



	t[0].onkeyup=function(){
		resultado.innerHTML = this.value
		.replace(/&lt;/g,"<")
		.replace(/&gt;/g,">")
		format(this)
		this.scrollTop=0
		gravar()

	}

	t[2].onkeyup=function(){
		format(this)
		document.head.removeChild(edit)
		sc = document.createElement("script")
		sc.id="edit"
		document.head.appendChild(sc)
		edit.innerHTML=this.value
		this.style.width = cdbaixo.querySelector(".language-js").children[0].offsetWidth+50
		this.scrollTop=0
		gravar()
	}

	function format(ele){
		ele.setAttribute("spellcheck","false");	
		val = ele.value
		val = val.replace(/</g,"&lt;").replace(/>/g,"&gt;");
		cod = ele.parentElement.querySelector("code");
		ele.parentElement.querySelector("code").innerHTML = val
		Prism.highlightElement(cod);
	}

	e = new KeyboardEvent('keyup',{key:"Enter"})
	t[1].dispatchEvent(e)


	link()

	cesquerdo.onclick= () => t[0].focus()
	cdireito.onclick= () => t[1].focus()
	cdbaixo.onclick= () => t[2].focus()

	e = new KeyboardEvent('keyup',{key:"Enter"})
	t[0].dispatchEvent(e)
	t[1].dispatchEvent(e)
	t[2].dispatchEvent(e)
}

function link(){

	m = document.getElementById("menu-esquerdo").querySelectorAll("a")
	m.forEach(function(e){
		e.onclick=function(g){

			window.location = this.getAttribute("val")
			muda()

		}
	})
}link()

function gravar(){

	u = window.location.href

	if(u.match("/adm")){
		_t0 = t[0].value
		_t1 = t[1].value
		_t2 = t[2].value

		conteudo = _t0+"@@@"+_t1+"@@@"+_t2;

		conteudo = encodeURIComponent(conteudo)

		ur = "txt/"+window.location.href.split("#")[1]+".txt"


		xhttp = new XMLHttpRequest();
		xhttp.open("POST","adm.php/",true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("tx="+ur+"&conteudo="+conteudo);
	}

}


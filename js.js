t = document.getElementsByTagName('textarea')
st = document.createElement("style")


st.id="st"

document.body.appendChild(st)


function muda(){
	x = new XMLHttpRequest()

	//url = document.URL.replace(/#/g,"").split("/")
	//url = url[url.length-1]+".txt"

	url = document.URL
	url = url.split("/")
	final = url[url.length-1].split("#")[1]+".txt"
	url[url.length-1] = "txt/"+final
	url = url.join("/")

	// window.open(url)


	x.open("GET",url,true)

	x.onload = function(e){

		ee = e.target.response.split("@@@")

		s = {
			html:ee[0],
			css:ee[1],
			js:ee[2]
		}


		t[0].value = s.html
		t[1].value = s.css
		t[2].value = s.js

		e = new KeyboardEvent('keyup',{key:"Enter"})
		t[0].dispatchEvent(e)
		t[1].dispatchEvent(e)
		t[2].dispatchEvent(e)

	}

	x.send()

}muda()





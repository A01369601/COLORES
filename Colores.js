function ejecutar(Fondo){
    Fondo=document.colores.Fondo.value;
    Texto=document.colores.Texto.value;
    document.colores.res.style.background=Fondo;
    document.colores.res.style.color=Texto;
    if (Fondo==1) {
	r=document.colores.res.style.background="oranje"
    }
    if (Fondo==2) {
	r=document.colores.res.style.background="black"
    }
    if (Fondo==3) {
	r=document.colores.res.style.background="green"
	}
	if (Fondo==4) {
	r=document.colores.res.style.background="blue"
	}
	if (Fondo==5) {
	r=document.colores.res.style.background="white"
	}
	if (Texto==1) {
	r=document.colores.res.style.color="black"
	}
	if (Texto==2) {
	r=document.colores.res.style.color="white"
	}
	if (Texto==3) {
	r=document.colores.res.style.color="green"
	}
	if (Texto==4) {
	r=document.colores.res.style.color="red"
	}
	if (Texto==5) {
	r=document.colores.res.style.color="oranje"
	}
}
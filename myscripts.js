<script type="text/javascript">
var i=0; 
	function read(){
		if(!i){
document.getElementByID("more").style.
		display = "inline";
document.getElementByID("dots").style.
		display = "none";
document.getElementByID("read more").innerHTML="Read Less";
		i=1;
	}
	else {
	document.getElementByID("more").style.
		display = "none";
document.getElementByID("dots").style.
		display = "inline";
document.getElementByID("read more").innerHTML="Read more";
		i=0;
	
	
	}
	}
</script>
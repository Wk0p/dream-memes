<script>
function sendMail(str) {
    var link = "mailto:slim.hmidi1@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
    title.href = link;
}
function submit_comment() {
var name = document.forms["contact_form"]["Name"].value;
var Email = document.forms["contact_form"]["Email"].value;
var Phone = document.forms["contact_form"]["Phone"].value;
var title = document.forms["contact_form"]["title"].value;
var Comment = document.forms["contact_form"]["title"].value;
if((name !="") && (Email !="") && (Phone !="") && (title !="") && (Comment !="")) {
   sendMail("HELLO");
}
}

var today = new Date ();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementByID("Date"),innerHTML = date;
</script>
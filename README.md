plowed by Rashid khan....

function toggleLight() {
var body = document.getElementById("body");
var currentClass = body.className;
body.className = currentClass == "dark-mode" ? "light-mode" : "light-mode";
}

function toggleDark() {
var body = document.getElementById("body");
var currentClass = body.className;
body.className = currentClass == "light-mode" ? "dark-mode" : "dark-mode";
}

$(".btn-group > .btn").click(function(){
$(".btn-group > .btn").removeClass("active");
$(this).addClass("active");
});

<body id="body" class="light-mode">
  <h1>Dark &amp; Light Mode Switcher</h1>
   
  <div class="btn-group btn-group-toggle mb-3">
	  <button id="light" type="button" class="active btn pr-4 pl-4 border-0" onclick="toggleLight()">Light</button>
	  <button id="dark" type="button" class="btn pr-4 pl-4 border-0" onclick="toggleDark()">Dark</button>   
  </div>
  
  <p>Press the button above to toggle.</p>
</body>

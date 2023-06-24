// Obtén el botón y el body del documento
var themeSwitcher = document.getElementById('theme-switcher');
var body = document.body;

// Agrega un evento de clic al botón
themeSwitcher.addEventListener('click', function() {
  // Cambia el tema del body
  body.classList.toggle('dark-theme');
});

function updateClock() {
  var clock = document.querySelector('.clock');
  var buenosAiresDate = document.getElementById('buenos-aires-date');
  var buenosAiresTime = document.getElementById('buenos-aires-time');

  var date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  buenosAiresDate.textContent = date.toLocaleDateString('es-AR', options);

  var buenosAiresTimezoneOffset = 0; // Offset de Buenos Aires en relación a la hora UTC
  var buenosAiresTimezoneOffsetMillis = buenosAiresTimezoneOffset * 60 * 60 * 1000;
  var buenosAiresTimeMillis = date.getTime() + buenosAiresTimezoneOffsetMillis;
  var buenosAiresDate = new Date(buenosAiresTimeMillis);
  buenosAiresTime.textContent = buenosAiresDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

setInterval(updateClock, 1000);

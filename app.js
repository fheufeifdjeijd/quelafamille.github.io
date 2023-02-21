// Configurer les informations d'authentification SIP
var config = {
	username: '326263',
	password: 'reyF2Ju31t',
	domain: 'sip.zadarma.com',
	displayName: 'Ak3'
};

// Initialiser Zoiper5 avec les informations d'authentification SIP
zoiper5.init(config);

// Écouter les événements d'appel entrants
zoiper5.on('call_incoming', function(call) {
	// Répondre automatiquement à l'appel
	call.answer();
});

// Fonction pour passer un appel
function makeCall() {
	// Récupérer le numéro de téléphone à appeler
	var phoneNumber = document.getElementById('number').value;
	
	// Créer un nouvel appel
	var call = zoiper5.create_call();
	
	// Composer le numéro de téléphone
	call.dial(phoneNumber);
}

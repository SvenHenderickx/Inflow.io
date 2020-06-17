<!DOCTYPE html>
<html>

<head>
	<title></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="./js/vue.js"></script>
	<link rel="stylesheet" type="text/css" href="Modals/data_request_styling.css" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<!-- <link rel="stylesheet" type="text/css" href="data_request_styling.css" /> -->
	<script src="./js/vue.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" type="text/css" href="data_request_styling.css" />
	<script src="app.js"></script>
	<script src="components/request_detail.js"></script>
	<script src="components/contract.js"></script>
	<script src="components/request_tile.js"></script>
	<script src="components/next_step.js"></script>
	<script src="components/quick_reply.js"></script>
	<script src="components/modal_dataontvangen.js"></script>
	<script src="components/modal_contract.js"></script>

	<script src="https://kit.fontawesome.com/2e10d94825.js" crossorigin="anonymous"></script>

</head>

<body>

	<div id="app">

		<div id="fases">
			<div v-for="fase in fases">
				<p>{{ fase.name }}</p>
				<div
				v-for="request in fase.requests"
				v-bind:key="request.id"
				v-bind:request="request"
				is="request_tile">

				</div>

				<template v-if="fase.name === 'definitiefase'">

					<!-- 	Actie bij mij kaarten -->
					<div id="card">
						<div id="nameholder">
							<div id="circleID">NB</div>
							<div id="information">
								<h3>Noor Broens</h3>
								<h5>Datastreams</h5>
							</div>
						</div>
						<h2>Back-end landingspage</h2>
						<p>De code van de landingspage zal worden gebruikt voor de testen uit te voeren voor de snelheid en veiligheid.</p>
						<div id="stap3">Huidige stap</div>
						<div id="afwachting3">Wachten op antwoord
							<div id="actieVan3">Actie bij jou</div>
						</div>
						<div id="quickreminder">Data aanleveren</div>
						<div id="quickcancel">Contract wijzigen</div>
					</div>
					<!-- actie compleet bestand downloaden kaart -->
					<div id="completedTransfer">
						<h2 style="color: #4E4E4E">Dummy Data</h2>
						<div id="stap" style="color: #B8E2C4">16-06-2020</div>
						<div id="afwachting2"><a href="https://www.datastreams.io/wp-content/uploads/2019/03/Datastreams_logo_standard.png">afbeelding.jpg</a>
							<div id="actieVan2">Download bestand</div>
						</div>
					</div>
				</template>
				<div id="stap2">Nieuw stap</div>
				<button id="aanvraagbtn" v-on:click="openPopup(fase.name)"> <span style="border-style: solid; padding:15px; border-radius: 10px;">DATA AANVRAAG TOEVOEGEN</span></button>
			</div>
		</div>

		<div v-if="openRequestDetail == true" class="requestdetail_container">
			<div class="popupbox requestdetail" v-bind:request="getCurrentRequest()" is="request_detail"></div>
			<div
		    v-if="showContract"
			v-bind:contract="getCurrentContract()"
		    is="contract"
			class="popupbox">
		    </div>
		</div>

		<!-- MODALS -->

		 <!-- Data aanvraag -->

		<div id="popup" v-if="showPopupForFase">
			<div class="modal" id="modalRequest">
				<button class="close-button" id="close-button"><i class="far fa-times-circle"></i></button>

				<div class="modalHeader">
					<div class="userTag">GC</div>
					<div class="modalTitling">
						<h2 style="margin-top:5px;">Data aanvraag</h2>
						<p style="margin-top:5px;">Datastreams project</p>
					</div>
				</div>

				<div class="modal-guts">
					<label for="data_request_naam">Titel van aanvraag</label>
					<textarea id="data_request_naam" name="data_request_naam" rows="1" placeholder="Welke data vraag je aan?" class="modalTextarea" v-model="popupData.title"></textarea>

					<label for="data_request_reden">Reden van aanvraag</label>
      				<textarea id="data_request_reden" name="data_request_naam" rows="3" placeholder="Waarvoor wordt de data gebruikt?" class="modalTextarea" v-model="popupData.reason"></textarea>

      				<label for="data_request_reden">Waar wordt de data voor gebruikt</label>
					<textarea id="data_request_reden" name="data_request_naam" rows="3" placeholder="Waarvoor wordt de data gebruikt?" class="modalTextarea" v-model="popupData.forWhat"></textarea>

					<label for="filetypes" style="display: block;">Gewenste bestandstypes <span style="color:#989898"> optioneel</span></label>

					<button v-for="filetype in filetypes" id="filetypes" class="filetypeInput" v-bind:class="{ selected: filetype === popupData.selectedFiletype }" v-on:click="popupData.selectedFiletype = filetype">{{filetype}}</button>

					<label for="date" style="display: block;">Deadline voor levering <span style="color:#989898"> </span></label>
					<input style="width:160px;" class="modalTextarea" name="date" placeholder="DD/MM/YYYY" type="date" autocomplete="off" v-model="popupData.date" />

					<button class="programmer-blue-btn" style="margin:24px auto 8px auto;" v-on:click="addRequest">Verstuur aanvraag</button>
				</div>
			</div>
	</div>

	<!-- data ontvangen -->

	<div v-if="openDataOntvangen" class="popupcontainer" >
		<div
		v-bind:request="getRequest(openDataOntvangenRequestId)"
		is="modal_dataontvangen">
		</div>
		<div v-if="openDataOntvangenContract"
		v-bind:request="getRequest(openDataOntvangenContractRequestId)"
		is="modal_contract">
		</div>

	</div>


</div>

</body>

</html>

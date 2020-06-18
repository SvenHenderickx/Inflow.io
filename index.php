<!DOCTYPE html>
<html>

<head>
	<title></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="./js/vue.js"></script>
	<link rel="stylesheet" type="text/css" href="Modals/data_request_styling.css" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<!-- <link rel="stylesheet" type="text/css" href="data_request_styling.css" /> -->
	<!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"> -->
	<script src="./js/vue.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<!-- <link rel="stylesheet" type="text/css" href="data_request_styling.css" /> -->
	<script src="app.js"></script>
	<script src="components/request_detail.js"></script>
	<script src="components/contract.js"></script>
	<script src="components/request_tile.js"></script>
	<script src="components/next_step.js"></script>
	<script src="components/quick_reply.js"></script>
	<script src="components/modal_dataontvangen.js"></script>
	<script src="components/modal_contract.js"></script>
	<script src="components/modal_dataversturen.js"></script>

	<script src="https://kit.fontawesome.com/2e10d94825.js" crossorigin="anonymous"></script>

</head>

<body>
	<!-- <div id="tijdlijnholder">
			<div id = "tijdlijn"><div id= "tijdlijnbol"></div><span class="material-icons">check</span></div>
			<div id = "tijdlijnlocked"><div id= "tijdlijnbol" style = "color:#3BB3E5; background-color: #3BB3E5"> </div>
			<span class="material-icons" style = "color:black; border-color:black;	transform: translate(55px, -20px);">lock</span>	
			<div id= "tijdlijnbol" style = "margin-left:574px; 	border-color: #FF2F55; background-color:#FF2F55;"></div>
	</div> -->


	<div id="app">
	<div class="header">
		<div class="headerlogo">
			<!-- <img src="style/css/images/logo.jpg"> -->
			<i onclick="javascript:location.href='projects.php'" class="fas fa-chevron-circle-left"></i>
			<b>Nieuw Dataproject</b>
		</div>
		<div class="headerpersonal">
		<div id="nameholder">
            <div id="circleID">{{ getUserInitials(currentUser) }}</div>
            <div id="information">
                <h3> {{ getUserName(currentUser) }}</h3>
                <h5>{{ getUsersTeam(currentUser) }}</h5>
            </div>
        </div>
		</div>
	</div>
		<div class="fases">
			<!-- <div class="timeline_container">
				<div class="timeline_part done">
				</div>
				<div class="timeline_part done">
				</div>
			</div> -->
			<div v-for="fase in fases">
				<h2 class="faseName">{{ fase.name }}</h2>

				<div class="timeline_container">
					<div v-if="checkHasFaseBefore(fase.id)" v-bind:class="returnFaseClasses(fase.id, 'left')" class="left">
					</div>
					<div v-if="checkHasFaseNext(fase.id)" v-bind:class="returnFaseClasses(fase.id, 'right')" class="right">
					</div>
				</div>
				<div
				v-for="request in fase.requests"
				v-bind:key="request.id"
				v-bind:request="request"
				is="request_tile">

				</div>

				<template v-if="fase.name === 'definitiefase'">

					<!-- 	Actie bij mij kaarten -->

				</template>
				<!-- <div id="stap2">Nieuw stap</div>
				<button id="aanvraagbtn" v-on:click="openPopup(fase.name)"> <span style="border-style: solid; padding:15px; border-radius: 10px;">DATA AANVRAAG TOEVOEGEN</span></button> -->

				<div v-on:click="openPopup(fase.name)" class="request_tile stepAdd">
					<div class="next_step_container">
						<div class="toptext_container">
							<p>Nieuwe stap</p>
						</div>
						<h1>Data aanvraag toevoegen</h1>
						<!-- <div class="bottomtext_container">
							<p v-if="origin_you && request.status < 4" class="">Actie bij jou</p>
							<p v-if="!origin_you && request.status < 4" class="">Actie bij ander</p>
							<p v-if="request.status == 4" class="">download bestand</p>
						</div> -->
					</div>
				</div>
			</div>
		</div>

		<div v-if="openRequestDetail == true" class="requestdetail_container">
			<div class="popupbox requestdetail" v-bind:request="getCurrentRequest()" is="request_detail"></div>
			<div
		    v-if="showContract"
			v-bind:request="getRequest(showContractId)"
		    is="contract"
			class="popupbox">
		    </div>
		</div>

		<!-- MODALS -->

		 <!-- Data aanvraag -->

		<div v-if="showPopupForFase" class="popupcontainer">
			<div class="modal" id="modalRequest">
				<!-- <button class="close-button" id="close-button"><i class="far fa-times-circle"></i></button> -->

				<div class="modalHeader">
					<div class="userTag">GC</div>
					<div class="modalTitling">
						<h2 style="margin-top:5px;">Data aanvraag</h2>
						<p style="margin-top:5px;">Datastreams project</p>
					</div>
				</div>
		<div class = "closereq" v-on:click="closePopup">x</div>
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

	<div v-if="openDataVersturen" class="popupcontainer" >
	<div
		v-bind:request="getRequest(openDataVersturenId)"
		is="modal_dataversturen">
		</div>
		<div
		v-if="showContract"
		v-bind:request="getRequest(showContractId)"
		is="contract"
		class="popupbox">
		</div>
		</div>
	</div>
</div>

</body>

</html>

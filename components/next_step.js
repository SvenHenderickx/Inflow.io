const next_step = Vue.component('next_step', {
    props: ['currentStatus', 'origin_you', 'request'],
    template: `
    <div class="next_step">
            <div id="afwachting3"> {{ getCurrentText() }}
            <p v-if="origin_you && request.status < 4" id="actieVan3">Actie bij jou</p>
            <p v-if="!origin_you && request.status < 4" id="actieVan3">Actie bij ander</p>
            <p v-if="request.status == 4" id="actieVan3">download bestand</p>

        </div>
    </div>
    `,
    computed: {

    },
    watch: {

    },
    data(){
        return {
            status: [
                {
                    id: 1,
                    desc: 'reageren op aanvraag',
                    in: 'Antwoorden op aanvraag',
                    out: 'Wachten op antwoord'
                },
                {
                    id: 2,
                    desc: 'Sturen van data',
                    in: 'Data aanleveren',
                    out: 'Wachten op data'
                },
                {
                    id: 3,
                    desc: 'ALles klaar alleen nog accepteren',
                    in: 'Data accepteren',
                    out: 'Data gestuurd'
                },
                {
                    id: 4,
                    desc: 'data is klaar voor gebruik',
                }
            ]
        }
    },
    methods:{
        getCurrentText:
        function(){
            if(this.request.status == 4){
                return this.request.file.url;
            }

            let statusArr = this.status;
            let statusOut;
            let curStatus = this.currentStatus
            $.each(statusArr, function(i,v){
                if(v.id == curStatus){
                    statusOut = v;
                }
            })



            if(this.origin_you == true){
                return statusOut.in;
            }
            else{
                return statusOut.out;
            }
        }
    }
});

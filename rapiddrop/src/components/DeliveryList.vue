<template>
    <v-app class="app-view">
        <div v-for="(data,index) in listData" :key="index">
            <v-card class="listDiv">
                <h4>Customer Name : {{ data.customerName }}</h4>
                <h4>WhatsApp : {{ data.whatsAppNumber }}</h4>
                <h5><i>{{ data.product }} - {{ data.product }}</i></h5>
            </v-card>
        </div>
        <v-btn>ADD</v-btn>
    </v-app>
</template>
<script>
import api from '@/services/api';
export default{
    data() {
        return{
            listData : ''
        }
    },
    mounted(){
        this.deliveryData()
    },
    methods: {
        deliveryData() {
            api.get('api/delivery')
            .then((response)=> {
                console.log('List',response)
                this.listData = response.data
            })
        }
    }
}
</script>
<style>
.listDiv{
    background: linear-gradient(60deg, #B2EBF2,#B3E5FC);
    margin: 4px;
    padding:15px;
}
.pdSpan{
    background: grey;
    padding: 5px;
    margin: 3px;
    border-radius: 14%;
    font-size: 15px;
}
</style>
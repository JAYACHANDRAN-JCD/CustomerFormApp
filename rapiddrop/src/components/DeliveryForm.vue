<template>
    <v-app class="delivery-form">
        <v-form class="mt-4">
            <v-text-field label="Customer name" v-model="payload.CustomerName" append-icon="mdi-account" outlined></v-text-field>
            <v-text-field label="WhatsApp number" v-model="payload.WhatsAppNumber" type="number" outlined append-icon="mdi-whatsapp"></v-text-field>
            <v-select outlined label="Brand" v-model="payload.Brand" :items="selectBrand" append-icon="mdi-dropbox" :menu-props="{ 'offset-y': true }"></v-select>
            <v-select outlined label="Product" v-model="payload.Product" :items="selectProduct" append-icon="mdi-cards"  :menu-props="{ 'offset-y': true }"></v-select>
            <v-text-field label="Price" v-model="payload.Price" type="number" outlined append-icon="mdi-cash"></v-text-field>
            <v-text-field type="date" v-model="payload.DeliveryDate" outlined></v-text-field>
            <v-row>
                <v-col cols="6">
                    <v-btn style="background: linear-gradient(40deg, #CCFF90,#C6FF00,#B2FF59) !important;"
                     class="ml-6"
                     @click="saveDeliveryDetails()">Save delivery</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn style="background: linear-gradient(40deg, #D84315,#FF3D00,#EF6C00) !important;">Cancal</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-app>
</template>
<script>
import api from '@/services/api';

export default{
    data() {
        return {
            selectBrand: ['LG','Sony','Panasonic'],
            selectProduct: ['LED TV','Air Conditioner','Heater'],
            payload: {
                id:''
            }
        }
    },
    methods : {
        saveDeliveryDetails() {
            console.log('Payload',this.payload)
            api.post('api/delivery',this.payload)
            .then((response) => {
                console.log('Response', response.data)
            })
            .catch((error)=>{
                console.log('Error',error)
            })
        }
    }
}
</script>
<style>
.delivery-form{
    background: linear-gradient(40deg,#E0F7FA,#E0F2F1) !important;
}
.custom-select .v-menu__content {
  margin-top: 8px !important; /* Adjust spacing below the field */
}
</style>

<template>
    <div>
       <v-container>
            <v-row justify-sm="center">
                <v-col cols="12" sm="8">
                    <v-card color="#00E676">
                        <p style="letter-spacing: 3px; text-align: center; padding:5px; color:black; font-weight: bold;font-size:15px;">LICENCE NUMBER : ABCD1234XYZ</p>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify-sm="center">
                <v-col cols="12" sm="6">
                    <v-card color="#adf7b6">
                        <v-card-subtitle class="mb-5 black--text">Hello,  Abubakah Emeka Bola </v-card-subtitle>
                        <v-card-subtitle class="black--text">ENTER DELIVERY ADDRESS HERE</v-card-subtitle>
                        <v-text-field class="ma-5" outlined value="101, Ikoyi Street" label=" Address" readonly="" append-icon="far fa-check-circle" ></v-text-field>
                        <v-text-field outlined  class="ma-5" value="Ikoyi Post office" label="Nearest Bus/Stop" readonly="" append-icon="far fa-check-circle"></v-text-field>
                        
                        <v-card-title class="black--text">BILLING :</v-card-title>
                        <v-card-title class="black--text">Licence Fee : <span>10,500 NGN</span>Delivery Fee : <span> 1,000 NGN</span></v-card-title>
                        <v-card-title class="black--text"> TOTAL : <span style="font-size: 40px; font-weight:bold; letter-spacing: 2px;">11,500 NGN</span> </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="450">
                    <template v-slot:activator="{ on, attrs }">    
                        <v-col cols="10" sm="6" style="margin-top: 50px;">
                            <v-btn block x-large="" v-bind="attrs" v-on="on" color="#00E676" class="black--text">Make Payment</v-btn>
                        </v-col>
                    </template>
                    <v-card>
                        <v-card-title >Choose Payment Method</v-card-title>
                        <v-col class="d-flex" cols="12" sm="6"> <v-select :items="items" label="click to choose" dense outlined ></v-select></v-col>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#00E676" @click="dialog  = false"  class="text-capitalize white--text " router to="/Tracker" >Check</v-btn>
                        </v-card-actions>
                        <v-card-subtitle> Delivery info : </v-card-subtitle>
                        <v-card-subtitle> Name : Abubakah Emeka Bola | Address 101, Ikoyi Street  Ikoyi. Post Office Bus Stop. </v-card-subtitle>
                    </v-card>
                </v-dialog>
            </v-row>
       </v-container>
    </div>
</template>


<script>
export default {
    data : () => ({
        items: ['USSD', ' MOBILE TRANSFER', 'CARD PAYMENT']
    })
}
</script>
<template>
    <div>
       <v-container>
            <v-row justify-sm="center">
                <v-col cols="12" sm="8">
                    <v-card color="#6A1B9A">
                        <p style="letter-spacing: 3px; text-align: center; padding:5px; color: white; font-weight: bold;font-size:15px;">VEHICLE REG NUMBER : ABC1234DE</p>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify-sm="center">
                <v-col cols="12" sm="6">
                    <v-card  color="#D1C4E9">
                        <v-card-subtitle class="mb-5 white--text">Hello,  Abubakah Emeka Bola </v-card-subtitle>
                        <v-card-subtitle class="white--text">ENTER DELIVERY ADDRESS HERE</v-card-subtitle>
                        <v-text-field class="ma-5" outlined value="101, Ikoyi Street" label=" Address" readonly="" append-icon="far fa-check-circle" ></v-text-field>
                        <v-text-field outlined  class="ma-5" value="Ikoyi Post office" label="Nearest Bus/Stop" readonly="" append-icon="far fa-check-circle"></v-text-field>
                        
                        <v-card-title class="white--text">BILLING :</v-card-title>
                        <v-card-subtitle class="white--text">AUTO-REG : <span style="color: white; font-size: 25px;">3,500 NGN</span>  <p >ROAD WORTHINESS : <span style="color: white; font-size: 25px;">3,000 NGN</span></p>  
                        <p style="color: white">INSURANCE: <span style="color: white; font-size: 25px;">5,500 NGN</span></p>
                         <p style="color: white">Delivery Fee : <span style="color: white; font-size: 25px;"> 1,000 NGN</span></p>
                         </v-card-subtitle>
                        <v-card-title class="white--text"> TOTAL : <span style="font-size: 30px; color: white;">13,000 NGN</span> </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="450">
                    <template v-slot:activator="{ on, attrs }">    
                        <v-col cols="10" sm="6" style="margin-top: 50px;">
                            <v-btn block x-large="" v-bind="attrs" v-on="on" color="#6A1B9A" class="white--text justify-center">Make Payment</v-btn>
                        </v-col>
                    </template>
                    <v-card>
                        <v-card-title>Choose Payment Method</v-card-title>
                        <v-col class="d-flex" cols="12" sm="6"> <v-select :items="items" label="click to choose" dense outlined ></v-select></v-col>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#00E676" @click="dialog  = false"  class="text-capitalize white--text " router to="/Tracker" >Check</v-btn>
                        </v-card-actions>
                        <v-card-subtitle> Delivery info : </v-card-subtitle>
                        <v-card-subtitle> Name : Lasisi John Hollywood | Address 101, Ikoyi Street  Ikoyi. Post Office Bus Stop. </v-card-subtitle>
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
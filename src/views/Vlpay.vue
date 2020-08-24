<template>
    <div>
       <v-container>
            <v-row justify-sm="center">
                <v-col cols="12" sm="8">
                    <v-card color="#00c853">
                        <p style="letter-spacing: 3px; text-align: center; padding:5px; color:white; font-weight: bold;font-size:15px;">LICENCE NUMBER : ABCD1234XYZ</p>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify-sm="center">
                <v-col cols="12" sm="6">
                    <!-- <v-card  color="#ffff"> -->
                        
                        <v-list>
                            <v-card-subtitle  style="font-weight: bold; color:#00c853">Hello, Abubakah Emeka Bola  </v-card-subtitle>
                        <!-- <v-card-subtitle class="black--text">ENTER DELIVERY ADDRESS HERE</v-card-subtitle> -->
                        <v-text-field class="ma-1" outlined value="101, Ikoyi Street" label=" Enter Delivery Address Here" readonly="" append-icon="far fa-check-circle" ></v-text-field>
                            <v-card-subtitle class="" style="color:#00c853; font-weight: bold; letter-spacing: 2px">BILLING</v-card-subtitle>
                            <v-list-item-group v-model="price" color="#00c853">
                                <v-list-item v-for="(price, i) in prices" :key="i" >  
                                    <v-list-item-content>
                                    <v-list-item-subtitle v-text="price.text" ></v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-content>
                                    <v-list-item-subtitle v-text="price.cost"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="450">
                    <template v-slot:activator="{ on, attrs }">    
                        <v-col cols="10" sm="6" style="margin-top: 50px;">
                            <v-btn block x-large="" v-bind="attrs" v-on="on" class="ubtn white--text text-capitalize">Make Payment</v-btn>
                        </v-col>
                    </template>
                    <v-card>
                        <v-card-title  style="color:#00c853;">Choose Payment Method</v-card-title>
                        <v-col class="d-flex" cols="12" sm="6"> <v-select :items="items" label="click to choose" dense outlined ></v-select></v-col>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialog  = false"  class=" ubtn text-capitalize white--text " router to="/Tracker" >Done</v-btn>
                        </v-card-actions>
                        <v-card-subtitle style="color:#00c853;"> Delivery info : </v-card-subtitle>
                        <v-card-subtitle  style="color:#00c853;"> Name : Abubakah Emeka Bola | Address 101, Ikoyi Street  Ikoyi. Post Office Bus Stop. </v-card-subtitle>
                    </v-card>
                </v-dialog>
            </v-row>
       </v-container>
    </div>
</template>


<script>
export default {
    data : () => ({
        items: ['USSD', ' MOBILE TRANSFER', 'CARD PAYMENT'],
        price: 1,
        prices: [
            { text: 'Renewal Fee : ', cost: '0.00 NGN' },
            { text: 'Process Fee : ', cost: '0.00 NGN' },
            { text: 'Delivery : ', cost: '0.00 NGN' },
            { text: 'Total : ', cost: '0.00 NGN' },
        ]
    })
}
</script>
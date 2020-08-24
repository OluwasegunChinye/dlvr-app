<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="8">
                    <v-card style="margin-top:40px; background:#00c853;" >
                        <v-card-subtitle class="white--text">Hello,  Your Transaction was successfull <i class="far fa-thumbs-up"></i></v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row> 
            <v-row justify="center">
                <v-col cols="12" sm="6">
                    <!-- <v-card color="#4FC3F7">  -->
                        <v-card-title class="justify-center primary--text "> TRACK YOUR LICENCE </v-card-title>
                        <v-timeline>
                            <v-timeline-item  color="white" large icon="fas fa-cog" icon-color="#01579B" style="color:#0575e6;">Processing</v-timeline-item> 
                            <v-timeline-item class="text-right white--text" color="white"  large icon="far fa-address-card" icon-color="#757575" ></v-timeline-item>
                            <v-timeline-item large color="white" icon="fas fa-shipping-fast" icon-color="#757575" class="#757575--text"></v-timeline-item>
                            <v-timeline-item large color="white" icon="fas fa-check" icon-color="#757575" ></v-timeline-item>
                        </v-timeline>
                    <!-- </v-card> -->
                    <v-btn block style="margin-top: 25px;" route to="/"  class=" ubtn white--text text-capitalize">Go to Home page</v-btn>
                </v-col>
            </v-row>
            
        </v-container>
    </div>
</template>
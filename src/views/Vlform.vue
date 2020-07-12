<template>
    <div>
        <v-form>
            <v-container>
                <v-row wrap justify="center" class="" style="margin-top: 50px">
                    <v-col cols="12" sm="6"> 
                        <v-text-field filled value="Abubakah" label="First Name" readonly=""></v-text-field>
                        <v-text-field filled value="Emeka" label="Middle Name" readonly=""></v-text-field>
                        <v-text-field filled value="Bola" label="Last Name" readonly=""></v-text-field>
                        <v-text-field outlined value="101 jalingo street" label="Address" append-icon="far fa-edit" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify-sm="center">
                    <v-col cols="6" sm="3" >
                        <v-text-field filled value="01/10/1960" label="Date of Birth" readonly=""></v-text-field>
                        <v-text-field filled value="Male" label="sex" readonly=""></v-text-field>
                       
                    </v-col>
                    <v-col cols="6" sm="3">
                        <v-text-field outlined value="" label="BG" hint="blood group" required append-icon="far fa-edit"></v-text-field>
                        <v-text-field filled value="CLASS E" label="" readonly=""></v-text-field>
                        <v-btn class="text-capitalize pa-5 white--text mb-5 " style="margin-top: 30px" block color="#03A9F4" large router to="/payment">click to renew</v-btn>
                    </v-col>
                    
                </v-row>
                
            </v-container>
            
        </v-form>
    </div>
</template>
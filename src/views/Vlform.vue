<template>
    <div>
        <v-card class="ma-5 pa-1" color="#E1BEE7">
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-card color="#6A1B9A">
                                <p style="letter-spacing: 3px; text-align: center; padding:5px; color: white; font-weight: bold;font-size:15px;">LICENCE NUMBER : ABCD1234XYZ</p>
                            </v-card>

                        </v-col>
                    </v-row>
                    <v-row wrap justify="center" class="" style="margin-top: 50px">
                        <v-col cols="12" sm="6"> 
                            <v-text-field filled value="Abubakah" label="First Name" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="Emeka" label="Middle Name" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="Bola" label="Last Name" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field outlined value="101, ikoyi street" label="Address" append-icon="far fa-edit" ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify-sm="center">
                        <v-col cols="6" sm="3" >
                            <v-text-field filled value="01/10/1960" label="Date of Birth" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="Male" label="sex" readonly="" append-icon="fas fa-lock"></v-text-field>
                        
                        </v-col>
                        <v-col cols="6" sm="3">
                            <v-text-field outlined value="" label="BG" hint="blood group" required append-icon="far fa-edit"></v-text-field>
                            <v-text-field filled value="Class E" label="class of licence" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-btn class="text-capitalize pa-5 white--text mb-5 " style="margin-top: 30px" block color="#6A1B9A" large router to="/payment">save</v-btn>
                        </v-col>
                        
                    </v-row>
                    
                </v-container> 
            </v-form>
        </v-card>
       
    </div>
</template>
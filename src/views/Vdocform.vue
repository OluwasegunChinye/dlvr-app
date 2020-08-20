<template>
    <div>
        <v-card>
            <v-form>
                <v-container>
                    <v-row wrap justify="center" class="" style="margin-top: 20px">
                        <v-col cols="12" sm="8">
                            <v-card-title class="justify-center" style="color:#0575e6">VEHICLE DATA</v-card-title>
                            <v-text-field filled value="Lasisi John Hollywood" label="Name of Owner" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="Mercedes Benz" label="Make of Vehicle" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="ABC-1234-DE" label="Vehicle Registration Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="123456789" label="Engine Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="WXYZABCD12349876" label="Chasis Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                             <v-btn class=" ubtn text-capitalize pa-5 white--text mb-5 " style="margin-top: 30px" block large router to="/process-payment">click to Renew</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        
      }
    },
  }
</script>
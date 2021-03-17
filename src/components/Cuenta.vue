<template>
<div>
    <h2>Tipo de cuenta: {{cuenta}}</h2>
    <h2>Saldo:{{saldo}}</h2>
    <h2>Cuenta {{estado ? 'Activa':'Inactiva'}}</h2>
    <div v-for="(servicio, index) in servicios" :key="index">
        {{index + 1}} - {{ servicio }}
    </div>
    <div>
        <AccionSaldo 
        texto="Agregar Saldo" 
        @accion="aumentarSaldo"/>

        <AccionSaldo 
        texto="Disminuir Saldo" 
        @accion="disminuirSaldo" 
        :desactivar="desactivar"/>
    </div>
    
</div>  
</template>

<script>
import AccionSaldo from './AccionSaldo.vue';

export default {
  components: { AccionSaldo },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: false,
            servicios: ['giro', 'abono', 'transferencia'],
            desactivar: false
        }
    },
    methods: {
        aumentarSaldo(){
            this.saldo += 100
            this.desactivar = false
        },
        disminuirSaldo(){
            if(this.saldo === 0){
                this.desactivar = true
                alert('Saldo Agotado')
            }else{
                this.saldo -= 100

            }
        }
    }

}
</script>

<style>

</style>
<script setup>
import usersData from '../data/dataUsers.json'

const tourTeamProps = {
  teamLeader: {
    fullName: 'Dmakwndna',
    email: 'example@test.com',
  },
  teamBuddy: {
    fullName: 'dawdkajw',
    email: 'example@test.com',
  },
}
</script>

<template>
  <div class="h-full space-y-6">
    <div>
      <h3 class="font-bold">Benvenuto in Retex, Pino!</h3>
      <p>
        Cerchiamo di offrirti la migliore esperienza di onboarding possibile tramite questa applicazione, qui puoi trovare le risposte a tutti i tuoi dubbi riguardo alla nostra azienda!
      </p>
    </div>
    <OrganismsUserData v-bind="usersData[0]" />
    <hr class="w-4/5 m-auto" />
    <OrganismsOrganismYourTeam v-bind="tourTeamProps" />
  </div>
</template>

<template>
    <div class="result">
      <h1>Here's the results!</h1>
      <md-tabs :md-active-tab="tabState">
        <md-tab id="0" md-label="Themes" >ASDASDf
           <bar-chart :chart-data="chartData"></bar-chart>
             <div class="result-overlay">
              <div v-for="(bar, index) in bars"  @click="onSelectSkill(bar, index)" class="result-overlay-bar"></div>
            </div>
        </md-tab>
        <md-tab id="1" md-label="Occupations" >

        </md-tab>
        <md-tab id="2" md-label="Posts" >
          <result-item :results="listMock"></result-item>
        </md-tab>
        <md-tab id="3" md-label="Settings" >

        </md-tab>
        <md-tab id="4" md-label="Disabled" md-disabled>
          
        </md-tab>
      </md-tabs>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    import ResultItem from '@/components/ResultItem';
    import {getOccupationByCompetence} from '../../data_api'
    const fieldsOfInterest = [
        'Agriculture/Food',
        'Animals/Wildlife',
        'Arts/Humanities',
        'Civil Rights',
       'Community development',
        'Crime/Law enforcement',
        'Education',
        'Employment',
        'Environment',
        'Health care',
        'Health organizations',
        'Housing/Shelter',
        'Human services',
        'International affairs',
        'International giving',
        'Medical research',
        'Mental health/Crisis',
        'Services',
        'Mutual aid societies',
        'Philanthropy/Voluntarism',
        'Population groups',
        'Public affairs',
        'Recreation',
        'Religion',
        'Safety/disasters',
        'Science',
        'Social sciences',
        'Unknown/not classified',
        'Youth development'
    ];

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const chart = {
          labels: shuffle(fieldsOfInterest).slice(0,4),
          datasets: [
              {
                  label: '',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10]
              }
        ]
    };

    const listMock = [
        {
            title: 'res1',
            children: [
                {
                    title: 'subres1',
                },
                {
                    title: 'subres2',
                },
                {
                    title: 'subres3',
                },
            ]
        },
        {
            title: 'res2',
            children: [
                {
                    title: 'subres1',
                },
                {
                    title: 'subres2',
                },
                {
                    title: 'subres3',
                },
            ]
        },
        {
            title: 'res3',
            children: [
                {
                    title: 'subres1',
                },
                {
                    title: 'subres2',
                },
                {
                    title: 'subres3',
                },
            ]
        },
    ];

    export default {
        name: 'Result',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                chartData: chart,
                listMock,
                bars:[40, 20, 12, 39, 10],
                isDetails: false,
                occupation: {
                  name: 'foobar'
                },
                occupations: [],
                tabState: 0
            };
        },
        methods: {
          onSelectSkill(amount, index){
           const skill = this.chartData.labels[index];
            getOccupationByCompetence(skill)
              .then(occupations => {
                  this.tabState = '1'
                  this.occupations = occupations;
              })
          
          },
          closeDetails(){

          }
        },
        components: {
          ResultItem
        },
        mount(){
          store.listen('occupations', occupations => this.occupations = occupations)
        }
    }
</script>

<style scoped lang="scss">
 .result{
   &-overlay{
         position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
     &-bar{
       height: 100%;
        width: 100%;
        &:hover {
          background: rgba(0,0,0,0.7)
        }
     }
   }
 }
</style>


<!--


       
        <div class="result-overlay">
          <div v-for="(bar, index) in bars"  @click="onClick(index)" class="result-overlay-bar"></div>
        </div>
      <ResultModal v-bind:is-visible="isDetails" :onClose="closeDetails">
        <h1>{{occupation.name}}</h1>
        <h3 class="occupation-skills">Skills</h3>
        <md-list>
          <md-list-item v-for="skill in skills" slot="md-expand">
            <span class="md-list-item-text">{{skill}}</span>
          </md-list-item>
        </md-list>
      </ResultModal>

-->
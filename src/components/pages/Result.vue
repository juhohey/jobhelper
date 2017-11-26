<template>
    <div class="result">
      <h1>Here's the results!</h1>
      <md-tabs :md-active-tab="tabState">
        <md-tab id="0" md-label="Themes" >
           <bar-chart :chart-data="chartData"></bar-chart>
             <div class="result-overlay">
              <div v-for="(bar, index) in bars"  @click="onSelectSkill(bar, index)" class="result-overlay-bar"></div>
            </div>
        </md-tab>
        <md-tab id="1" md-label="Occupations" >
           <bar-chart :chart-data="occuData" ></bar-chart>
            <div class="result-overlay">
              <div v-for="(bar, index) in occuData"  @click="onSelectOccupation(bar, index)" class="result-overlay-bar"></div>
            </div>
        </md-tab>
        <md-tab id="2" md-label="Posts" >
          <result-item :results="occupations"></result-item>
        </md-tab>
      </md-tabs>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    import ResultItem from '@/components/ResultItem';
    import {getOccupationByCompetence, getSkillsByOccupation} from '../../data_api'
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

    export default {
        name: 'Result',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                chartData: chart,
                bars:[40, 20, 12, 39],
                isDetails: false,
                occupation: {
                  name: 'foobar'
                },
                occupations: [],
                tabState: 0,
                occuData: {},
            };
        },
        methods: {
          onSelectSkill(amount, index){
           const skill = this.chartData.labels[index];
            getOccupationByCompetence(skill)
              .then(occupationsList => {
                   const occupations =  occupationsList.slice(0,4);
                   this.tabState = '1'
                   this.occupations = occupations.slice(0,4);
                    const occuData = occupations.map( () => Math.floor(Math.random() * 20) );
                    const occuChart = {
                        labels: occupations,
                        datasets: [
                            {
                                label: '',
                                backgroundColor: '#f87979',
                                data: occuData,
                            }
                        ]
                    };
                    this.occuData = occuChart;
                   // console.log(occuData)

              })
          
          },
           onSelectOccupation(amount, index){
           const occupation = this.occuData[index];
            getSkillsByOccupation(occupation)
              .then(skills => {
                  ///setTimeout( ()=>{
                    this.tabState = '2'
                    //console.log('goddamit vue', this.tabState)
                   // this.forceUpdate()
                  //}, 1000)
                  //this.$set(this, 'tabState', '2')
                  //window.setTabState('2')
                  //console.log(skills)
              })

          },
        },
        components: {
          ResultItem
        },
        mounted(){
//          store.listen('occupations', occupations => this.occupations = occupations)

          window.setTabState = n => this.tabState = n
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
   // padding: 4rem 0 2rem;
     &-bar{
       height: 100%;

    margin: 1rem 0;
        width: 100%;
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

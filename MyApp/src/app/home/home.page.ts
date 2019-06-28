import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tmm = false;
  tmr = false;
  tma = false;
  tmb = false;
  tmc = false;
  tmd = false;
  tme = false;
  tmf = false;
  tmg = false;
  change() {
    this.tmr=!this.tmr
  }
  change1(){
    this.tmm=!this.tmm
  }
  change2(){
    this.tma=!this.tma
  }
  change3(){
    this.tmb=!this.tmb
  }
  change4(){
    this.tmc=!this.tmc
  }
  change5(){
    this.tmd=!this.tmd
  }
  change6(){
    this.tme=!this.tme
  }
  change7(){
    this.tmf=!this.tmf
  }
  change8(){
    this.tmg=!this.tmg
  }
  ngOnInit(){
  setInterval(() => {
    var synth = new Tone.Synth().toMaster()
    if(this.tmr)synth.triggerAttackRelease('C4', '8n');
  }, 500);

  setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmm)synth.triggerAttackRelease('B4', '8n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tma)synth.triggerAttackRelease('A1', '3n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmb)synth.triggerAttackRelease('E2', '2n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmc)synth.triggerAttackRelease('A2', '4n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmd)synth.triggerAttackRelease('C4', '8n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tme)synth.triggerAttackRelease('C1', '5n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmf)synth.triggerAttackRelease('B5', '5n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmg)synth.triggerAttackRelease('B5', '5n');
}, 500);
}

}






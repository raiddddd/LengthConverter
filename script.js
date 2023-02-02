const form = document.querySelector('.form');
const textbox = document.querySelector('#quantity');
const lista = document.querySelector('#units');
const divAddValori = document.querySelector('#to-compute');
let nrOfUnits = 0;
let typeOfUnits = '';
let metric=false;

form.addEventListener('submit', e => {
  e.preventDefault();
  nrOfUnits = textbox.value;
  typeOfUnits = lista.value;
  let a=0;
  if(!nrOfUnits||!typeOfUnits) {
    form.reset();
    return (alert('Add everything we need for conversion'));
  }
  if(form.classList.contains('imperial')) {
    switch(typeOfUnits) {
        case 'twip':
          a = imperialUnitsToFeet.twip.twipToFeets(nrOfUnits);
          break;
        case 'thou':
          a = imperialUnitsToFeet.thou.thouToFeets(nrOfUnits);
          break;
        case 'barleycorn':
          a = imperialUnitsToFeet.barleycorn.barleycornToFeets(nrOfUnits);
          break;
        case 'inch':
          a = imperialUnitsToFeet.inch.inchToFeets(nrOfUnits);
          break;
        case 'foot':
          a = imperialUnitsToFeet.foot.footToFeets(nrOfUnits);
          break;
        case 'yard':
          a = imperialUnitsToFeet.yard.yardToFeets(nrOfUnits);
          break;
        case 'chain':
          a = imperialUnitsToFeet.chain.chainToFeets(nrOfUnits);
          break;
        case 'furlong':
          a = imperialUnitsToFeet.furlong.furlongToFeets(nrOfUnits);
          break;
        case 'mile':
          a = imperialUnitsToFeet.mile.mileToFeets(nrOfUnits);
          break;
        case 'league':
          a = imperialUnitsToFeet.league.leagueToFeets(nrOfUnits);
          break;
        default:
          console.log("Nu asta cauti frate");
          break;
    };
    a = feetsToMeter(a);
    let metrics = calculateAllMetrics(a);

    divAddValori.innerHTML=`<p>In ${nrOfUnits} of ${typeOfUnits} you have:</p><ul class="elements"></ul>`;
    let listWithVal = document.querySelector('.elements');
    for(key in metrics) {
      listWithVal.innerHTML+=`<li><b>${metrics[key]}</b> of ${key}</li>`;
    }
    divAddValori.style.border = '1px solid black';

  } else {
    switch(typeOfUnits) {
      case 'milimeter':
        a = metricUnitsToMeter.milimeter.milimeterToMeter(nrOfUnits);
        break;
      case 'centimeter':
        a = metricUnitsToMeter.centimeter.centimeterToMeter(nrOfUnits);
        break;
      case 'decimeter':
        a = metricUnitsToMeter.decimeter.decimeterToMeter(nrOfUnits);
        break;
      case 'meter':
        a = metricUnitsToMeter.meter.meterToMeter(nrOfUnits);
        break;
      case 'decameter':
        a = metricUnitsToMeter.decameter.decameterToMeter(nrOfUnits);
        break;
      case 'hectometer':
        a = metricUnitsToMeter.hectometer.hectometerToMeter(nrOfUnits);
        break;
      case 'kilometer':
        a = metricUnitsToMeter.kilometer.kilometerToMeter(nrOfUnits);
        break;
      default :
        console.log("No bueno amigo");
        break;
    };
    a = meterToFeets(a);
    let imperials = calculateAllImperial(a);
    divAddValori.innerHTML=`<p>In ${nrOfUnits} of ${typeOfUnits} you have:</p><ul class="elements"></ul>`;
    let listWithVal = document.querySelector('.elements');
    for(key in imperials) {
      listWithVal.innerHTML+=`<li><b>${imperials[key]}</b> of ${key}</li>`;
    }
    divAddValori.style.border = '1px solid black';
  }
  form.reset();

  
})

const imperialUnitsToFeet = {
  twip: {twipToFeets: function(value) {
    return value/17280;
  },
  feetsToTwip: function(value) {
    return value*17280;
  }  
},
  thou: {thouToFeets: function(value) {
    return value/12000;
  },
  feetsToThou: function(value) {
    return value*12000;
  } 
},
  barleycorn: {barleycornToFeets: function(value) {
    return value/36;
  },
  feetsToBarleycorn: function(value) {
    return value*36;
  } 
},
  inch: {inchToFeets: function(value) {
    return value/12;
  },
  feetsToInch: function(value) {
    return value*12;
  } 
},
  foot: {footToFeets: function(value) {
    return value;
  },
  feetsToFeets: function(value) {
    return value;
  } 
},
  yard: {yardToFeets: function(value) {
    return value*3;
  },
  feetsToYard: function(value) {
    return value/3;
  } 
},
  chain: {chainToFeets: function(value) {
    return value*66;
  },
  feetsToChain: function(value) {
    return value/66;
  } 
},
  furlong: {furlongToFeets: function(value) {
    return value*660;
  },
  feetsToFurlong: function(value) {
    return value/660;
  } 
},
  mile: {mileToFeets: function(value) {
    return value*5280;
  },
  feetsToMile: function(value) {
    return value/5280;
  } 
},
  league: {leagueToFeets: function(value){
    return value*15840;
  },
  feetsToLeague: function(value) {
    return value/15840;
  } 
}
};

const metricUnitsToMeter = {
  milimeter: {milimeterToMeter: function(value) {
    return value/1000;
  },
  meterToMilimeter: function(value) {
    return value*1000;
  }
},
  centimeter: {centimeterToMeter: function(value)  {
    return value/100;
  },
  meterToCentimeter: function(value) {
    return value*100;
  }
},
  decimeter: {decimeterToMeter: function(value) {
    return value/10;
  },
  meterToDecimeter: function(value) {
    return value*10;
  }
},
  meter: {meterToMeter: function(value) {
    return value;
  },
  meterToMeter: function(value) {
    return value*1;
  }
},
  decameter: {decameterToMeter: function(value) {
    return value*10;
  },
  meterToDecameter: function(value) {
    return value/10;
  }
},
  hectometer: {hectometerToMeter: function(value) {
    return value*100;
  },
  meterToHectometer: function(value) {
    return value/100;
  }
},
  kilometer: {kilometerToMeter: function(value) {
    return value*1000;
  },
  meterToKilometer: function(value) {
    return value/1000;
  }
}
};

//Calculate the value of feets to meters || value of meters to feets
function feetsToMeter(value) {return value*0.304;}
function meterToFeets(value) {return value*3.04;}

//Function that calculates all the metric units based on the val of feets
function calculateAllMetrics(value) {
  return {
    milimeter: metricUnitsToMeter.milimeter.meterToMilimeter(value).toFixed(4),
    centimeter: metricUnitsToMeter.centimeter.meterToCentimeter(value).toFixed(4),
    decimeter: metricUnitsToMeter.decimeter.meterToDecimeter(value).toFixed(4),
    meter: metricUnitsToMeter.meter.meterToMeter(value).toFixed(4),
    decameter: metricUnitsToMeter.decameter.meterToDecameter(value).toFixed(4),
    hectometer: metricUnitsToMeter.hectometer.meterToHectometer(value).toFixed(4),
    kilometer: metricUnitsToMeter.kilometer.meterToKilometer(value).toFixed(4)
  };
};

//Function that calculates all the imperial units based on the val of meters
function calculateAllImperial(value) {
  return {
    twip: imperialUnitsToFeet.twip.feetsToTwip(value).toFixed(4),
    thou: imperialUnitsToFeet.thou.feetsToThou(value).toFixed(4),
    barleycorn: imperialUnitsToFeet.barleycorn.feetsToBarleycorn(value).toFixed(4),
    inch: imperialUnitsToFeet.inch.feetsToInch(value).toFixed(4),
    foot: imperialUnitsToFeet.foot.feetsToFeets(value).toFixed(4),
    yard: imperialUnitsToFeet.yard.feetsToYard(value).toFixed(4),
    chain: imperialUnitsToFeet.chain.feetsToChain(value).toFixed(4),
    furlong: imperialUnitsToFeet.furlong.feetsToFurlong(value).toFixed(4),
    mile: imperialUnitsToFeet.mile.feetsToMile(value).toFixed(4),
    league: imperialUnitsToFeet.league.feetsToLeague(value).toFixed(4)
  };
};

//Adding values in the list(for switch between metric and Imperal)

const dataBase = document.querySelector('#units-list');
const headerElement = document.querySelector('.header-transform-text');

function changeToMetrics() {
  dataBase.innerHTML='';
  form.classList.remove('imperial');
  form.classList.add('metric');
  metric=true;
  for(key in metricUnitsToMeter) {
    dataBase.innerHTML+=`<option value=${key}></option>`;
  }
  headerElement.textContent='Transform any metric in imperial';
}

function changeToImperial() {
  dataBase.innerHTML='';
  form.classList.remove('metric');
  form.classList.add('imperial');
  metric=false;
  for(key in imperialUnitsToFeet) {
    dataBase.innerHTML+=`<option value=${key}></option>`;
  }
  headerElement.textContent='Transform any imperial in metric';
}

const sageataReverse = document.querySelector('.reverse');
sageataReverse.addEventListener('click', () => {
  if(!metric) {
    changeToMetrics();
  } else {
    changeToImperial();
  }

})
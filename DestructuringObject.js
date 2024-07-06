const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;

            
        });
        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {

    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
    }
    showProgrammingLangs(personalPlanPeter);

    

    personalPlanPeter.showAgeAndLangs(personalPlanPeter);

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  // Menu
  console.log(width);//100
  console.log(height);

  let ooptionsss = {
    title1: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title1} = ooptionsss;
  
  // width -> w
  // height -> h
  // title -> title
  
  console.log(title);  // Menu
  console.log(w);
  console.log(h);

  let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user
let {name, years:age, isAdmin= false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin );

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)){
        if(max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
  }
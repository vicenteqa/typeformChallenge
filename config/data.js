const moment = require('moment');


exports.test = ()=>{
    const now = moment().format('DD_MM_YY_HmmssSSS');
    
    return {
        typeformLogin: 'https://admin.typeform.com/login/es',
        typeformSignup:'https://admin.typeform.com/signup/es',
        emails:{
            randomEmail: `typeformTest+${now}@challenge.com`,
        },
        passwords:{
            shortPassword: 'abcd',
            validPassword: '8Abcdefd',
        }
    }
}
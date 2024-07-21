const ValidateController = require('../../controllers/common/validate-controller');
const moduleName = 'ValidateMiddleware';

async function ValidateMiddleware(req, res, next) {
  const method = 'ValidateMiddleware';
  console.log(`module:[${moduleName}] | method:[${method}] | description: [Init in process]`);
  
  try {
    console.log(`module:[${moduleName}] | method:[${method}] | description: [Calling to validate controller]`);
    const controller = new ValidateController();

    const mockConsultation = [
      {
        id: "1",
        firstName: "Isabel bff",
        lastName: "Peñaranda",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/04/25 02:07:59",
        status: "Confirmada"
      },
      {
        id: "2",
        firstName: "Mauricio bff",
        lastName: "Castro",
        consultationType: "Presencial",
        state: "Sin confirmar",
        date: "2015/04/25 02:07:59",
        status: "Sin Confirmar"
      },
      {
        id: "3",
        firstName: "Cristina",
        lastName: "Ireza",
        consultationType: "Presencial",
        state: "Confirmada",
        date: "2015/11/26 16:04:40",
        status: "Confirmada"
      },
      {
        id: "4",
        firstName: "Maria",
        lastName: "Sierra",
        consultationType: "Presencial",
        state: "Confirmada",
        date: "2015/11/26 16:04:40",
        status: "Confirmada"
      },
      {
        id: "5",
        firstName: "Cate",
        lastName: "Juvinao",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/11/23 05:35:18",
        status: "Confirmada"
      },
      {
        id: "6",
        firstName: "Manuel",
        lastName: "Acevedo",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/01/13 06:21:21",
        status: "Confirmada"
      },
      {
        id: "7",
        firstName: "Juan",
        lastName: "Morales",
        consultationType: "Presencial",
        state: "On pre-order (not paid)",
        date: "2015/01/17 04:21:08",
        status: "Confirmada"
      },
      {
        id: "8",
        firstName: "Angie",
        lastName: "Jiménez",
        consultationType: "Presencial",
        state: "On pre-order (not paid)",
        reference: "7683b54d",
        subtotal: "14.08",
        tax: "74.96",
        discount: "-16.60",
        total: "63.36",
        date: "2015/06/14 14:49:47",    
        status: "Sin Confirmar"
      },
      {
        id: "9",
        firstName: "Karla",
        lastName: "Giraldo",
        consultationType: "Presencial",
        state: "On pre-order (not paid)",
        date: "2015/01/18 01:31:47",
        status: "Confirmada"
      },
      {
        id: "10",
        firstName: "Aracelli",
        lastName: "Sierra",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2016/02/14 14:22:58",
        status: "Confirmada"
      },
      {
        id: "11",
        firstName: "Matias",
        lastName: "Jofre",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/10/23 03:02:55",
        status: "Confirmada"
      },
      {
        id: "12",
        firstName: "Monica",
        lastName: "Espinoza",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/07/28 13:22:49",
        status: "Confirmada"
      },
      {
        id: "13",
        firstName: "Patricio",
        lastName: "Muñoz",
        consultationType: "Virtual",
        state: "On pre-order (not paid)",
        date: "2015/06/07 17:54:36",
        status: "Confirmada"
      },
    ]

    return res.json(mockConsultation);;
    /*
    const response = await controller.validate(req);

    console.log(`module:[${moduleName}] | method:[${method}] | description: [validate controller was called successfully]`);
    console.log(`module:[${moduleName}] | method:[${method}] | description: [response] | response:[${response}]`);

    res.locals.response = response.data;

    const customResponse = {
        status: response.data.status,
        data: response.data.data,
        description: response.data.statusDescription,
    };

    //next();
    return res.json(customResponse);
    */
  } catch (error) {
    console.log(`module:[${moduleName}] | method:[${method}] | description:[error was found] | error:[${error.message}]`);
    //sendSecureResponseWithError(res);
    
    const customResponse = {
      status: 500,
      data: {},
      description: `Error in module:[${moduleName}] | method:[${method}]`,
      error: error.message
    };
    return res.json(customResponse);
  }
}

module.exports.ValidateMiddleware = ValidateMiddleware;

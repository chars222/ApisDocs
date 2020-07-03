const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./services/swagger.json');
 
var options = {
    swaggerOptions: {
      validatorUrl: null
    }
  };
   
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

  app.set('port', (process.env.PORT || 5000));
  app.listen(app.get('port'),function(){
    console.log('running on port',app.get('port'));
  })
curl --location --request POST 'localhost:3000/api/bff/ingress/users' \
--header 'country: CL' \
--header 'commerce: MEDICAL' \
--header 'channel: WEB' \
--header 'sucursal: coquimbo' \
--header 'usuario: 14515778' \
--header 'traceid: 123456789' \
--header 'Content-Type: application/json' \
--data-raw '{
  "userId": "14515778",
  "rut": "145157781",
  "userName": "david",
  "password": "123456",
  "email": "spro80@gmail.com",
  "firstName": "david",
  "lastName": "diaz",
  "valid": true,
  "profile": {
      "profileId": 1,
      "profileStatus": true,
      "profileDateInit": "2024",
      "profileDateEnd": "2024",
      "profileAllTime": true
  }
}'
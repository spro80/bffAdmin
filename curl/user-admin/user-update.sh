curl --location --request PUT 'localhost:3000/api/bff/ingress/users' \
--header 'country: CL' \
--header 'commerce: MEDICAL' \
--header 'channel: WEB' \
--header 'sucursal: coquimbo' \
--header 'usuario: 14515778' \
--header 'traceid: 123456789' \
--header 'Content-Type: application/json' \
--data-raw '{
  "userId": "64844693333",    
  "rut": "64844695",
  "userName": "maria",
  "password": "Maria666*",
  "email": "maria@gmail.com",
  "firstName": "mariaXYZ",
  "lastName": "sierraZZZ",
  "valid": true,
  "profile": {
      "profileId": 2,
      "profileStatus": true,
      "profileDateInit": "2024",
      "profileDateEnd": "2024",
      "profileAllTime": true
  }
}'
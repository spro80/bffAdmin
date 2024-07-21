curl --location --request GET 'localhost:3000/api/bff/ingress/health' \
--header 'country: CL' \
--header 'commerce: MEDICAL' \
--header 'channel: WEB' \
--header 'sucursal: coquimbo' \
--header 'usuario: 14515778' \
--header 'traceId: 123456789' \
--data-raw ''
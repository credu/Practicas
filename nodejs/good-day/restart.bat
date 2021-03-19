@echo off
title Restart data
echo Usted esta seguro que desea resetear todos los datos incluida la sesion de whatsapp?
pause
del ./src/data/date.json
del ./src/data/num.json
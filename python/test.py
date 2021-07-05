# Entrada : Input
print('\n---------------ENTRADA--------------------\n')
peso = float(input('Determine su peso  : '))
alt  = float(input('Determine su altura: '))

# Proceso : Process (Lo que vas a programar)
imc = (peso/alt) ** 2
if peso < 20:
    imc 
    msg = 'Delgado'
elif peso >= 20 and peso < 25:
    imc
    msg = 'Normal'
elif peso >= 25 and peso < 27:
    imc
    msg = 'Sobrepeso'
else:
    msg = 'Obesidad'
# Salida : Output
print('\n---------------SALIDA---------------------\n')
print('El peso de la persona es  : ')
print('La altura de la persona es: ')
print('Su Indice de masa corporal: ')
print('Su conodicion es          : ')
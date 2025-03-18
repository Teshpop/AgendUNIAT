from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Calendar(models.Model):
    GREEN = 'GREEN'
    AUDIO = 'AUDIO'
    ROOM_CHOICES = {
        GREEN: 'Green Room',
        AUDIO: 'Audio Room',
    }

    # Validación de número de teléfono
    phoneRegex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', 
        message="El número de teléfono debe estar en el formato: '+999999999'. Hasta 15 dígitos permitidos."
    )

    name = models.CharField(max_length=50, verbose_name="Nombre Alumno")
    career = models.CharField(max_length=50, verbose_name='Carrera')
    dayAppointment = models.DateTimeField(verbose_name='Dia/Hora Apartado')
    phoneNumber = models.CharField(validators=[phoneRegex], max_length=17, blank=True, verbose_name='Numero de Telefono')
    email = models.EmailField(verbose_name='Correo Electronico')
    roomType = models.CharField(
        max_length=5,
        choices=ROOM_CHOICES,
        default=GREEN,
        verbose_name='Tipo de Sala'
    )

    def __str__(self):
        return f'{self.name} - {self.get_roomType_display()}'

    class Meta:
        verbose_name = 'Calendario'
        verbose_name_plural = 'Apartados'
        ordering = ['dayAppointment']

        indexes = [
            models.Index(fields=['roomType', 'dayAppointment'])
        ]

        # Evitar reservas duplicadas
        constraints = [
            models.UniqueConstraint(
                fields=['roomType', 'dayAppointment'],
                name='unique_room_day'
            )
        ]
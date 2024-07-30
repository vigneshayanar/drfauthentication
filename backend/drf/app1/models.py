from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

class User(AbstractUser):
    username=models.CharField(max_length=100)
    email=models.EmailField(unique=True)

    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self):
        return self.username
    
class profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    Full_name=models.CharField(max_length=300)
    bio=models.CharField(max_length=300)
    imgae=models.ImageField(default="defalut.jpg",upload_to="user_image")
    verified=models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.Full_name
    
def create_user_profile(sender,instance,created,**kwargs):
    if created:
        profile.objects.create(user=instance)

def save_user_profile(sender,instance,**kwargs):
    instance.profile.save()


post_save.connect(create_user_profile,sender=User)
post_save.connect(save_user_profile,sender=User)
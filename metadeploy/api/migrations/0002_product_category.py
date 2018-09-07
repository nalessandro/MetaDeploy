# Generated by Django 2.1 on 2018-08-27 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(
                choices=[
                    ('salesforce', 'Salesforce'),
                    ('community', 'Community'),
                ],
                default='salesforce',
                max_length=256,
            ),
        ),
    ]
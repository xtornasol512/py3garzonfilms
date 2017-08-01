# -*- encoding: utf-8 -*-
# Define custom processors to all templates
# This actions add custom var to templating use
import os
from django.conf import settings
from django.utils import timezone


def add_production_var(request):
    # add production var to templates
    return {"PRODUCTION": settings.PRODUCTION}
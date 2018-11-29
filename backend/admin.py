from django.contrib import admin
from django.contrib.admin import AdminSite
from django.utils.translation import ugettext_lazy
from .models import Topics

def manageRoom1(modeladmin, request, queryset):
    for topic in queryset:
        topic.room = 1
        topic.save()
manageRoom1.short_description = 'room1'

def manageRoom2(modeladmin, request, queryset):
    for topic in queryset:
        topic.room = 2
        topic.save()
manageRoom2.short_description = 'room2'

def manageRoom3(modeladmin, request, queryset):
    for topic in queryset:
        topic.room = 3
        topic.save()
manageRoom3.short_description = 'room3'

def manageRoom4(modeladmin, request, queryset):
    for topic in queryset:
        topic.room = 4
        topic.save()
manageRoom4.short_description = 'room4'

class TopicAdmin(admin.ModelAdmin):
    list_display = ['topic_name', 'description', 'start_time', 'end_time', 'speaker', 'vote', 'room']
    actions = [manageRoom1, manageRoom2, manageRoom3, manageRoom4]  # <-- Add the list action function here

    def get_queryset(self, request):
        queryset = super(TopicAdmin, self).get_queryset(request)
        queryset = queryset.order_by('room')
        return queryset


admin.site.register(Topics,TopicAdmin)

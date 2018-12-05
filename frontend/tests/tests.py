from django.test import TestCase
from django.db import IntegrityError
from django.db import transaction
from django.db.transaction import TransactionManagementError
from backend.models import Topics, User

class TopicModelTests(TestCase):

    def setUp(self):
        Topics.objects.create(topic_name='BNK', speaker='Jobsan')

    def test_string_representation(self):
        topic = Topics.objects.get(id=1)
        self.assertEqual(str(topic), 'BNK by Jobsan')

    def test_add_same_topic(self):
        try:
            with transaction.atomic():
                Topics.objects.create(topic_name='BNK', speaker='Job')
            self.fail('Duplicate question allowed.')
        except IntegrityError:
            pass
        self.assertEqual(1, Topics.objects.count())

    def test_ManyToMany_of_category_representation(self):
        topic = "BNK"
        topic2 = "BNK2"
        Topics.objects.create(topic_name='BNK2', speaker='Job2')
        # print([topic,topic2])
        topicA = Topics.objects.get(id=1).topic_name
        topicB = Topics.objects.get(id=2).topic_name
        self.assertEqual(topicA,topic)
        self.assertEqual(topicB,topic2)

class UserModelTests(TestCase):

    def setUp(self):
        User.objects.create(name="Job")

    def test_string_representation(self):
        u = User.objects.get(id=1)
        self.assertEqual(str(u), 'Job')

    def test_add_same_User(self):
        try:
            with transaction.atomic():
                User.objects.create(name="Job")
            self.fail('Duplicate question allowed.')
        except IntegrityError:
            pass
        self.assertEqual(1, User.objects.count())
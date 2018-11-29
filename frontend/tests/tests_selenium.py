import re
import time
import unittest
# from unittest import TestCase
from selenium import webdriver
from selenium.common.exceptions import (NoAlertPresentException,
                                        NoSuchElementException)
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

topic = "pppp"
speaker = "llll"

class UntitledTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome('chromedriver')
        self.driver.implicitly_wait(30)

    def test_add_new_topic(self):
        driver = self.driver
        # driver.get("localhost:3000/speaker")
        driver.get("https://barcamp-management.herokuapp.com/speaker")
        driver.find_element_by_id("Popover1").click()
        driver.find_element_by_id("itopic").click()
        driver.find_element_by_id("itopic").clear()
        driver.find_element_by_id("itopic").send_keys(topic)
        driver.find_element_by_id("ispeaker").clear()
        driver.find_element_by_id("ispeaker").send_keys(speaker)
        driver.find_element_by_id("exampleText").clear()
        driver.find_element_by_id("exampleText").send_keys("dweds")
        driver.find_element_by_id("add").click()
        driver.find_element_by_id(topic).click()
        text=driver.find_element_by_id(topic).text
        self.assertEquals(topic,text)
        driver.close()

    def test_change_to_attendee_page(self):
        driver = self.driver
        # driver.get("localhost:3000/speaker")
        driver.get("https://barcamp-management.herokuapp.com/speaker")
        driver.find_element_by_id("username").click()
        driver.find_element_by_id("attendee").click()
        text=driver.find_element_by_id("header").text
        self.assertEquals("ATTENDEE",text)
        driver.close()

    def test_vote_topic(self):
        driver = self.driver
        # driver.get("localhost:3000/attendee")
        driver.get("https://barcamp-management.herokuapp.com/attendee")
        driver.find_element_by_id(topic).click()
        driver.find_element_by_id(speaker).click()
        alert = driver.switch_to.alert
        text = alert.text  
        alert.accept()
        self.assertEquals("You are vote success.",text)

        script = "document.getElementById('" + topic + "').click();"
        self.driver.execute_script(script)
        driver.find_element_by_id(speaker).click()
        alert = driver.switch_to.alert
        text = alert.text  
        alert.accept()
        self.assertEquals("You voted this topic.",text)
        driver.close()

    def test_change_to_speaker_page(self):
        driver = self.driver
        # self.driver.get("localhost:3000/attendee")
        driver.get("https://barcamp-management.herokuapp.com/attendee")
        driver.find_element_by_id("username").click()
        driver.find_element_by_id("speaker").click()
        text=driver.find_element_by_id("header").text
        self.assertEquals("SPEAKER",text)
        driver.close()

    def test_logout(self):
        driver = self.driver
        # self.driver.get("localhost:3000/attendee")
        driver.get("https://barcamp-management.herokuapp.com/attendee")
        driver.find_element_by_id("username").click()
        driver.find_element_by_id("out").click()
        text = driver.find_element_by_id("bar").text
        self.assertEquals("BARCAMP",text)

        # self.driver.get("localhost:3000/speaker")
        driver.get("https://barcamp-management.herokuapp.com/speaker")
        driver.find_element_by_id("username").click()
        driver.find_element_by_id("out").click()
        text = driver.find_element_by_id("bar").text
        self.assertEquals("BARCAMP",text)
        driver.close()
        
    

if __name__ == "__main__":
    unittest.main()

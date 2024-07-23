from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import pandas as pd

# Replace with the path to your WebDriver executable (e.g., chromedriver.exe)
def filter_message(message_text):
    keywords = ["keyword1", "keyword2", "keyword3"]  # List of keywords to filter
    for keyword in keywords:
        if keyword in message_text.lower():
            return True
    return False

webdriver_path = 'C:\chromedriver.exe'

# Replace with your Discord login credentials
discord_email = 'robersonfairy@hotmail.com'
discord_password = 'Pa)6220721wiseman'
service = Service(executable_path='c:\\chromedriver.exe')
# Initialize WebDriver (Chrome)
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
base_url = "http://discord.com/channels/"
# Open Discord login page
driver.get('https://discord.com/login')

# Wait until login form is loaded
wait = WebDriverWait(driver, 100)
wait.until(EC.presence_of_element_located((By.NAME, 'email')))
# Fill in login credentials
driver.find_element(By.NAME, 'email').send_keys(discord_email)
driver.find_element(By.NAME, 'password').send_keys(discord_password)

# Submit login form
driver.find_element(By.XPATH, '//div[contains(text(), "Log In")]').click()

# get server id list user connected
# try:
#     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@data-list-item-id='guildsnav___home']")))
#     server_elements = driver.find_elements(By.XPATH, "//div[@data-list-item-id][@role='treeitem']")
#     server_ids = [server.get_attribute('data-list-item-id').split('__')[-1] for server in server_elements]
#     print(server_ids)
#     elements_to_remove = ['_home', '_create-join-button', '_guild-discover-button', '_app-download-button']
#     filtered_server_ids = [sid for sid in server_ids if sid not in elements_to_remove]
#     df = pd.DataFrame(filtered_server_ids, columns=['ServerID'])
#     csv_file_path = 'discord_server_ids.csv'
#     df.to_csv(csv_file_path, index=False)

#     # message filter and save for special server id
#     server_url = base_url + filtered_server_ids[0]
#     driver.get(server_url)
#     messages_data = []

#     # Get all message elements
#     message_elements = driver.find_elements(By.XPATH, "//div[@class='markup-2BOw-j messageContent-2qWWxC']")

#     # Iterate through messages and filter
#     for message_element in message_elements:
#         try:
#             message_text = message_element.text
#             author_element = message_element.find_element(By.XPATH, "../preceding-sibling::div[@class='messageUserBlock-2h-07z']")
#             author_name = author_element.text
            
#             if filter_message(message_text):
#                 messages_data.append({'Author': author_name, 'Message': message_text})
#         except Exception as e:
#             print(f"Error processing message: {e}")

#     driver.quit()

#     df = pd.DataFrame(messages_data)

#     csv_filename = 'discord_messages.csv'
#     df.to_csv(csv_filename, index=False, encoding='utf-8')

#     print(f"Filtered messages saved to {csv_filename}")

# except Exception as e:
#     print("Exception:", e)
# finally:
#     driver.quit()







































import json

import discum
# import json
# import pandas as pd
TOKEN = "MzkyNDI4ODE5MDEwODEzOTUy.GHW105.MBFa4s34UehJFI1-cMTzSF_Ghs1EgTbloxz7GQ"

bot = discum.Client(token=TOKEN)

GUILDID = ""
CHANNELID = ""

def on_ready(resp):
    if resp.event.ready_supplemental:
        print("DDDDDD")
        user = bot.gateway.session.user
        print(f"Logged in as {user['username']}#{user['discriminator']}")
        
        # Fetch and print the guilds
        guilds = bot.gateway.session.guilds
        guilds = [guild for guild in guilds]

        for guild in guilds:
            print("***************************************",guild)
        
        GUILDID = "1260395263181455370"
        CHANNELID = "1260395263181455373"
        bot.gateway.command({'function': get_members, 'params': {'guild_id': GUILDID}})
        bot.gateway.removeCommand({'function': on_ready})
        bot.gateway.close()
        # members = get_members(GUILDID, CHANNELID)
        # for memberID in members:
        #     with open('users.csv', 'w') as f:
        #         for token in members:
        #             f.write(token)
        #             f.write("\n")

def close_after_fetching(resp, guild_id):
    if bot.gateway.finishedMemberFetching(guild_id):
        lenmembersfetched = len(bot.gateway.session.guild(guild_id).members)
        print(str(lenmembersfetched) + ' members fetched')
        bot.gateway.removeCommand({'function': close_after_fetching, 'params': {'guild_id': guild_id}})
        bot.gateway.close()


def get_members(guild_id, channel_id):
    if GUILDID and CHANNELID:
        bot.gateway.fetchMembers(guild_id, channel_id, wait=1)
        bot.gateway.command({'function': close_after_fetching, 'params': {'guild_id': guild_id}})
        bot.gateway.run()
        bot.gateway.resetSession()
        return bot.gateway.session.guild(guild_id).members

bot.gateway.run()



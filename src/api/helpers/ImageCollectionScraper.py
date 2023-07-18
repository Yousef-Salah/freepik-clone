import requests
from bs4 import BeautifulSoup

def getData(url):
    r = requests.get(url, headers={"User-Agent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"})
    return r.text

link = "https://www.freepik.com/collection/fantasy-art/4350594"
link = "https://www.freepik.com/collections"

htmldata = getData(link)
soup = BeautifulSoup(htmldata, 'html.parser')

soup.find(class_="swiper-collections")

for item in soup.find_all('article'):
    print(item.find(class_="collection__title").get_text())

# # print(soup.find_all('figure')['src'])

# for item in soup.find_all('figure'):
#     print(item['data-image'])

#print(soup.find_all('figure'))



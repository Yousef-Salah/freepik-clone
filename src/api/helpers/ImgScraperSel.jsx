//! this is a selenium-webdriver script, not a react component.
// import { Builder, By, Key, until } from "selenium-webdriver";
// import chrome from "selenium-webdriver/chrome.js";
// import ImgsData from "./ImgsData.json" assert { type: "json" };

//* driver: chrome version 89.0.4389.23
//* selenium-webdriver: 4.0.0-alpha.7

//? thumbnail & HQ images scraper.
//? scraps images from google images, using object title as search query
//? scraped result saved in: thumbnail (base64) and HQ image (direct src link)

//* notes:
// required array of objects like imageTemplate below
;(async function example() {
  const screen = {
    width: 640,
    height: 480
  }

  let driver = new Builder()
    .forBrowser('chrome')
    //* headless mode -> comment
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build()

  try {
    await driver.manage().setTimeouts({ implicit: 10000 })
    let thumbCounter, tries, imgWidth, timeout
    let imageTemplate = {
      id: 0,
      img_thumb: '',
      img_og: ''
    }
    let imgsArr = []

    for (let count = 0; count < 100; count++) {
      console.log('------------Next Image (' + count + ')--------------')
      imgWidth = [1, 1]
      let imgObj = Object.assign({}, imageTemplate)
      imgObj.id = ImgsData[count].id
      await driver.get('https://images.google.com/')
      await driver.findElement(By.xpath('(//div/input)[1]')).sendKeys(ImgsData[count].title)
      await driver.findElement(By.xpath(`(//button[@type="submit"])`)).click()
      for (
        tries = 1, thumbCounter = 1;
        imgWidth[0] < 1000 && imgWidth[1] < 1000 && tries < 4;
        tries++, thumbCounter += 2
      ) {
        timeout = 0
        console.log('------------try: (' + tries + ')')
        // //? get thumb image (base64)
        let thumbSrc = await driver
          .findElement(By.xpath(`(//div/a/div/img)[${thumbCounter}]`))
          .getAttribute('src')
        imgObj.img_thumb = thumbSrc
        let card = await driver.findElement(By.xpath(`(//div[@data-os="-2"]/a)[${thumbCounter}]`))
        if (await card.getAttribute('href')) {
          break
        } else {
          await card.click()
          // //? wait to load new src
          while (
            (await driver
              .findElement(By.xpath(`(//a[@role="link"]/img)[${tries}]`))
              .getAttribute('src')) == thumbSrc &&
            timeout < 2000
          ) {
            await driver.sleep(50)
            timeout += 50
          }
          // //? get HQ image (https src link)
          let imgSrc = await driver
            .findElement(By.xpath(`(//a[@role="link"]/img)[${tries}]`))
            .getAttribute('src')
          imgObj.img_og = imgSrc
          imgWidth = await driver
            .findElement(By.xpath(`(//a[@role="link"]/span)[${tries}]`))
            .getAttribute('innerHTML')
          // //? get width and height, save into array
          imgWidth = imgWidth.replace(' ', '').replace(',', '').split('×')

          // //* debugging
          console.log('Width:', imgWidth[0], 'Height:', imgWidth[1])
          console.log('thumbnail Img', thumbSrc[0] === 'd' ? 'True' : thumbSrc.slice(0, 50))
          console.log('HQ Img', imgSrc[0] === 'h' ? 'True' : thumbSrc.slice(0, 50))
        }
      }
      imgsArr.push(imgObj)
    }
    console.log('--results--')
    console.log(JSON.stringify(imgsArr))
  } finally {
    await driver.quit()
  }
})()

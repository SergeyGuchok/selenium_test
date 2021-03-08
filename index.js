const { Builder, By, Key, until } = require('selenium-webdriver')
const fs = require('fs')

const firstTest = async () => {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driverwait(until.titleIs('webdriver - Поиск в Google - Google Chrome'), 1000);
        fs.writeFileSync('./first_test.txt', 'Test passes')
    } catch (e) {
        console.log('there was an error')
    } finally {
        await driver.quit();  
    }
}


const firstTest = async () => {
    const driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driverwait(until.titleIs('wrong title'), 1000);
        fs.writeFileSync('./second_test.txt', 'Test fails')
    } catch (e) {
        console.log('there was an error')
    } finally {
        await driver.quit();  
    }
}

const runTests = async () => {
    await firstTest()
    await secondTest()
}

runTests()
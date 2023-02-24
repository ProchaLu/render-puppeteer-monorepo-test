import { join } from 'path';
import { Configuration } from 'puppeteer';

const puppeteerConfig: Configuration = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

export default puppeteerConfig;

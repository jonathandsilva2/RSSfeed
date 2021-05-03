const Parser = require('rss-parser');
const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });
const parser = new Parser();

const getRSSFeed = async () => {
  const url = prompt('Please enter an RSS url: ');

  try {
    const feed = await parser.parseURL(url);

    console.log(chalk.red.bold(feed.title));

    feed.items.map((item) => {
      console.log(`
      ${chalk.blue.bold('Title: ')}: ${item.title ?? 'N/A'}
      ${chalk.blue.bold('Description: ')}: ${item.description ?? 'N/A'}
      ${chalk.blue.bold('Link: ')}: ${item.link ?? 'N/A'}
      `);
    });
  } catch (err) {
    console.log(chalk.red('The RSS feed provided was invalid'));
  }
};

getRSSFeed();

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ftr2'>
        <p className='ftr21'>
        This cryptocurrency dashboard utilizes data provided by the CoinGecko API for real-time market prices, historical data, and other relevant information. While we strive to present accurate and up-to-date information, we are not responsible for any inaccuracies or delays in the data. Cryptocurrency prices are highly volatile and may not reflect the latest market conditions.
        </p>
        <p className='ftr21'>
        Investing in cryptocurrencies involves significant financial risk due to market volatility. Always conduct thorough research and assess your financial situation before making any investment decisions. This platform provides information only and does not offer financial, investment, or trading advice. By using this platform, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
      <p className='ftr3'>
      Powered by <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">CoinGecko</a> and developed by <a href="https://www.linkedin.com/in/nishantkumar27" target="_blank" rel="noopener noreferrer">Noah ©</a>
      </p>
      <p className='ftr1'>Copyright © 2025, CoinCrush - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

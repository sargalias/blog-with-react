import React from 'react';
import moment from 'moment';

const Footer = () => (
  <div>
    <div class="mt-5"></div>
    <footer class="bg-dark">
      <div class="container">
        <div id="copyright">&copy; Spyros Argalias {moment().format('YYYY')}</div>
        <div id="website-link">App by <a href="https://sargalias.com" target="_blank">Spyros Argalias</a></div>
        <div id="code-repository-link"><a href="https://github.com/sargalias/blog-with-react" target="_blank">View code on GitHub</a></div>
      </div>
    </footer>
  </div>
);

export default Footer;
